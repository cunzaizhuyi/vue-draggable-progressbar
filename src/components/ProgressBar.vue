<template>
	<div class="progress-wrapper" :style="wrapStyle">
        <div class="progress" @mousedown="mousedownHandler" @mouseover="mouseoverHandler"
             @mousemove="mousemoveHandler" @mouseup="mouseupHandler" :style="pBarStyle">
            <div class="left" :style="leftStyle">
                <div class="ball" :style="ballStyle"></div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProgressBar',
        props: {
            leftBg: String,
            bgc: String,
            ballBgc: String,
            height: String,
            width: String,
            max: {
                type: Number,
                default: 100,
            },
            min: {
                type: Number,
                default: 0,
            },
            value: {
                type: Number,
                default: 36,
            },
        },
        data: function () {
            return {
                pValue: this.value,
                pMax: this.max,
                pMin: this.min,
                wrapStyle: {
                    'width': this.width,
                },
                pBarStyle: {
                    'backgroundColor': this.bgc,
                    'height': this.height,
                },
                leftStyle: {
                    'width': this.progressPercent + '%',
                    'background': this.leftBg,
                    'height': this.height,
                },
                ballStyle: {
                    'backgroundColor': this.ballBgc,
                    'height': this.height,
                    'width': this.height,
                    'borderRadius': parseInt(this.height) / 2 + 'px',
                    'right': - parseInt(this.height) / 2 + 'px',
                },
                // 标记是否按下鼠标
                isMouseDownOnBall: false,
            }
        },
        computed: {
            progressPercent(){
                return (this.pValue - this.pMin) / (this.pMax - this.pMin) * 100;
            },
            progressElement(){
                return this.$el.getElementsByClassName('progress')[0];
            },
        },
        methods: {
            mousedownHandler(e){
                if(e.which === 1){
                    this.isMouseDownOnBall = true;
                }
            },
            mousemoveHandler(e){
                if(this.isMouseDownOnBall === true){
                    // 修改进度条本身
                    let decimal = (e.clientX - this.$el.offsetLeft) / this.progressElement.clientWidth;
                    let percent = decimal * 100;
                    this.leftStyle.width = percent + '%';
                    // 修改value
                    this.pValue = this.pMin + decimal * (this.pMax - this.pMin);
                    this.$emit('pbar-drag', this.pValue, percent);
                }
            },
            mouseupHandler(e){
                if(this.isMouseDownOnBall){
                    // 修改进度条本身
                    let decimal = (e.clientX - this.$el.offsetLeft) / this.progressElement.clientWidth;
                    let percent = decimal * 100;
                    this.leftStyle.width = percent + '%';
                    // 修改value
                    this.pValue = this.pMin + decimal * (this.pMax - this.pMin);
                    this.$emit('pbar-seek', this.pValue, percent);

                    this.isMouseDownOnBall = false;
                }
            },
            mouseoverHandler(e){
                // 没有按左键进入进度条
                if(e.which === 0){
                    this.isMouseDownOnBall = false;
                }
            }
        },
        watch: {
            max(cur, old){
                this.pMax = cur;
            },
            min(cur, old){
                this.pMin = cur;
            },
            value(cur, old){
                this.pValue = cur;
            },
            progressPercent(cur, old){
                this.leftStyle.width = cur + '%';
            }
        },
        mounted(){
            // 数据验证
            if(this.max < this.min){
                console.error("max can't less than min !");
            }
            // 初始百分比
            this.leftStyle.width = (this.pValue - this.pMin) / (this.pMax - this.pMin) * 100 + '%';
        },
    }
</script>

<style scoped>
    .progress-wrapper{
        /*width:100%;*/
    }
    .progress{
        width:100%;
        height:20px;
        background-color: #ccc;
        overflow: hidden;
        cursor: pointer;
    }
    .left{
        height:100%;
        width: 30%;
        background-color: greenyellow;
        position: relative;
    }
    .ball{
        height:100%;
        width:20px;
        -webkit-border-radius:10px;
        -moz-border-radius:10px;
        border-radius:10px;
        background-color: red;
        position: absolute;
        right: -10px;
    }
</style>

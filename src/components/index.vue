<template>
	<div class="test">
        <!--demo-0-->
        <h3>demo 0  默认效果</h3>
        <progress-bar ref="aa"></progress-bar>

        <!--demo-1-->
        <h3>demo 1 基本效果</h3>
        <progress-bar width="40%" leftBg="greenyellow" bgc="#ccc" ballBgc="red"></progress-bar>

        <!--demo-2-->
        <h3>demo 2 渐变效果</h3>
        <progress-bar width="60%" leftBg="linear-gradient(to right, yellow, pink)" bgc="#ccc" ballBgc="red"></progress-bar>

        <!--demo-3-->
        <h3>demo 3 加高效果</h3>
        <progress-bar width="80%" leftBg="yellow" bgc="#ccc" ballBgc="red" height="30px"></progress-bar>

        <!--demo-4-->
        <h3>demo 4 小球透明效果</h3>
        <progress-bar leftBg="greenyellow" bgc="#ccc" ballBgc="rgba(255,0,0,0.2)" height="40px"></progress-bar>

        <!--demo-5-->
        <h3>demo 5 接收pbar-drag、pbar-seek事件数据</h3>
        <div>min = {{min}}, max = {{max}} </div>
        <progress-bar leftBg="greenyellow" bgc="#ccc" ballBgc="red" :max="max" :value="value" :min="min"
                      @pbar-drag="drag" @pbar-seek="seek"></progress-bar>
        <div>value = {{value}}, 百分比 = {{percent}}</div>

        <button type="button" @click="btnClick">播放</button>
    </div>
</template>

<script>
    import ProgressBar from './ProgressBar.vue';
    export default {
        name: '',
        data: function () {
            return {
                value: 10,
                max: 100,
                min: -100,
            }
        },
        computed: {
            percent: {
                get(){
                    return ((this.value - this.min) / (this.max - this.min) * 100).toFixed(3) + "%";
                },
                set(val){
                    return val;
                }
            }
        },
        methods: {
            drag(value, percent){
                this.value = Number(value.toFixed(3));
                this.percent = percent.toFixed(3) + "%";
                //console.log("value:",value, "; percent:" ,percent, "%");
            },
            seek(value, percent){
                this.value = Number(value.toFixed(3));
                this.percent = percent.toFixed(3) + "%";
            },
            btnClick(){
                window.setInterval( () => {
                    if(this.value < this.max){
                        this.value ++;
                        //console.log(this.value);
                    }
                }, 1000);
            }
        },
        components: {
            'progress-bar': ProgressBar,
        },
        mounted(){

        },
    }
</script>

<style scoped>
    .test > div{
        margin: 20px 0;
    }
</style>

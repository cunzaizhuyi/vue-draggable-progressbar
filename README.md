# install

npm install vue-draggable-progressbar --save


# import

import progressBar from 'vue-draggable-progressbar'

# 用例

```
<progress-bar ref="aa"></progress-bar>

<progress-bar width="40%" leftBg="greenyellow" bgc="#ccc" ballBgc="red"></progress-bar>

<progress-bar width="60%" leftBg="linear-gradient(to right, yellow, pink)" bgc="#ccc" ballBgc="red"></progress-bar>

<progress-bar width="80%" leftBg="yellow" bgc="#ccc" ballBgc="red" height="30px"></progress-bar>

<progress-bar leftBg="greenyellow" bgc="#ccc" ballBgc="rgba(255,0,0,0.2)" height="40px"></progress-bar>

<progress-bar leftBg="greenyellow" bgc="#ccc" ballBgc="red"
              @pbar-drag="drag" @pbar-seek="seek"></progress-bar>

```

# 用git clone方式看效果

(1) git clone https://github.com/cunzaizhuyi/vue-draggable-progressbar.git

(2) npm i

(3) npm run dev

(4) open browser,input url: http://localhost:8080/#/

# props

* leftBg：进度条已划过部分背景色
* bgc：进度条还未划过部分背景色
* ballBgc：滑块背景色
* width：进度条占父组件的宽度百分比，传百分比数值
* height：进度条高度，传像素值


# 事件

* pbar-drag: 拖动进度条时触发，回传value值和百分比值
* pbar-drag: 点击进度条某一位置时触发，回传value值和百分比值


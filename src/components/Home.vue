<template>
<!-- 头部区域 start -->
<MyHeader/>
<!-- 头部区域 end -->
<!-- 主要区域 start -->
<div id="main">
  <!-- 左侧导航区域 start -->
  <LeftSlidebar/>
  <!-- 笔记内容区 start -->
  <NoteContent/>
  <!-- 笔记内容区 end -->
  <!-- 右侧属性区 start -->
  <RightProperties/>
  <!-- 右侧属性区 end -->
</div>
</template>

<script>
import MyHeader from './MyHeader.vue'
import LeftSlidebar from './LeftSlidebar.vue'
import NoteContent from './NoteContent.vue'
import RightProperties from './RightProperties.vue'
import { useStore } from "vuex";
export default {
  name: 'Home',
  components: {
    MyHeader,LeftSlidebar,NoteContent,RightProperties
  },
  setup() {
    const store = useStore();
    function handleUp(event) {
      console.log(event);
      if(event.key === 'ArrowUp')
      for (let i = 1; i < store.state.cells.length; i++) {
        if (store.state.cells[i].iscurrent === true) {
            store.state.cells[i].iscurrent = false;
            store.state.cells[i - 1].iscurrent = true;
            break;
          }
          if (store.state.cells[i].isfocus === true) {
            store.state.cells[i].isfocus = false;
            store.state.cells[i - 1].isfocus = true;
            break;
          }
        }
      else if (event.key === 'ArrowDown')
      for (let i = 0; i < store.state.cells.length - 1; i++) {
        if (store.state.cells[i].iscurrent === true) {
            store.state.cells[i].iscurrent = false;
            store.state.cells[i + 1].iscurrent = true;
            break;
          }
          if (store.state.cells[i].isfocus === true) {
            store.state.cells[i].isfocus = false;
            store.state.cells[i + 1].isfocus = true;
            break;
          }
      }

    }
    return {
      handleUp,
    }
  },
  mounted() {
    document.addEventListener('keyup', this.handleUp)
  },
  beforeDestory() {
    window.removeEventListener('keyup', this.handleUp)
  }
  
}
</script>

<style>
/* 共同css部分 */
/* 把我们所有标签的内外边距清零 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
  border: 0;
  /* 取消图片底侧有空白缝隙的问题 */
  vertical-align: middle
}

button {
  /* 当我们鼠标经过button 按钮的时候，鼠标变成小手 */
  cursor: pointer
}

a {
  color: #666;
  text-decoration: none
}

button,
input {
  /* "\5B8B\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
  font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
  border: 0;
  outline: none;
}

body {
  /* CSS3 抗锯齿形 让文字显示的更加清晰 */
  -webkit-font-smoothing: antialiased;
  background-color: #fff;
  font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
  color: #666
}

.hide,
.none {
  display: none
}
/* 组件css部分 */
.w {
  width: 75%;
  margin: 0 auto;
}

body {
  background-color: #eeeeee;
}
.el-sub-menu__title,
.el-menu-item {
  height: 30px !important;
}
#main {
  position: relative;
  width: 100%;
  height: 1000px;
  background-color: #eeeeee;
  border-top: 1px solid #e7e7e7;
  margin-top: 150px;
}
</style>

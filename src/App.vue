<template>
<!-- 头部区域 start -->
<div class="header">
  <div id="header-container">
    <h1>我的笔记本</h1>
  </div>
  <div id="menubar" class="w">
    <div class="dropdown">
      <a href="#">文件</a>
    </div>
    <div class="dropdown">
      <a href="#">编辑</a>
    </div>
    <div class="dropdown">
      <a href="#">视图</a>
    </div>
    <div class="dropdown">
      <a href="#">插入</a>
    </div>
    <div class="dropdown">
      <a href="#">设置</a>
    </div>
    <div class="dropdown">
      <a href="#">帮助</a>
    </div>
  </div>
  <div id="maintoolbar" class="w">
    <div class="btn-group" id="add">
      <button class="btn iconfont">&#xe890;</button>
    </div>
    <div class="btn-group" id="addBefore">
      <button class="btn iconfont">&#xe613;</button>
    </div>
    <div class="btn-group" id="del">
      <button class="btn iconfont">&#xe60e;</button>
    </div>
    <div class="btn-group" id="up">
      <button class="btn iconfont">&#xeb0b;</button>
    </div>
    <div class="btn-group" id="down">
      <button class="btn iconfont">&#xeb0a;</button>
    </div>
  </div>
</div>
<!-- 头部区域 end -->
<!-- 主要区域 start -->
<div id="main">
  <!-- 左侧导航区域 start -->
  <div id="slidebar">
    <button class="btn iconfont">&#xe64a;</button>
    <div class="menu">
      <div class="menu-title">
        <h1>文件</h1>
      </div>
      <div class="menu-content">
        <p>text.txt</p>
      </div>
    </div>
  </div>
  <!-- 笔记内容区 start -->
  <div id="content" class="w">
    <div class="current">
      <textarea class="textarea"
        placeholder="文本框聚焦时为橙色，单击cell不包括文本区切换为蓝色选中状态。若当前cell处于蓝色选中状态，按键盘上的m键可以切换为预览模式。重新双击cell可以切换回编辑模式。按键盘上下键可以切换cell"></textarea>
    </div>
  </div>
  <!-- 笔记内容区 end -->
  <!-- 右侧属性区 start -->
  <div id="porperties">
    <h1>笔记属性</h1>
    <ul>
      <li>创建日期：</li>
      <li>更新日期：2022/10/5</li>
      <li>tag：</li>
      <li>作者：</li>
    </ul>
    <h1>cell属性</h1>
    <ul>
      <li>cell编号：0</li>
    </ul>
  </div>
  <!-- 右侧属性区 end -->
</div>
</template>

<script>
// import MyHeader from './components/MyHeade.vue'
// import LeftSlidebar from './components/LeftSlidebar.vue'
// import NoteContent from './components/NoteContent.vue'
// import RightProperties from './components/RightProperties.vue'

export default {
  name: 'App',
  // components: {
  //   MyHeader,LeftSlidebar,NoteContent,RightProperties
  // }
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

a:hover {
  color: #c81623
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
  width: 1000px;
  margin: 0 auto;
}

body {
  background-color: #eeeeee;
}

.header {
  width: 100%;
  position: fixed;
  top: 0;
  height: 120px;
  background-color: #ffffff;
  border-bottom: 1px solid #e7e7e7;
  z-index: 100;
}

#header-container {
  height: 45px;
  line-height: 45px;
  background-color: #ffffff;
  border: 1px solid #e7e7e7;
}

#menubar {
  height: 40px;
  background-color: #f8f8f8;
  border: 1px solid #e7e7e7;
}

.dropdown {
  float: left;
}

.dropdown a {
  padding: 10px;
  font-size: 14px;
  color: #565656;
  line-height: 40px;
}

#maintoolbar {
  margin-top: 5px;
  height: 25px;
}

#maintoolbar .btn-group {
  float: left;
  margin-right: 5px;
  height: 25px;
}

#maintoolbar .btn-group .btn {
  padding-left: 10px;
  padding-right: 10px;
  line-height: 25px;
  background-color: #ffffff;
  border: 1px solid #e7e7e7;
}

#add button {
  font-size: 20px;
  font-weight: 400;
}

#main {
  position: relative;
  width: 100%;
  background-color: #eeeeee;
  border-top: 1px solid #e7e7e7;
  margin-top: 150px;
}

#content {
  background-color: #ffffff;
  padding: 10px 0;
}

#content div {
  width: 95%;
  margin: auto;
  padding: 5px 25px;
  font-size: 20px;
  color: black;
  list-style: disc;
  border: 1px solid transparent;
  border-left: 5px solid transparent;
}

#content .textarea {
  width: 100%;
  min-height: 30px;
  margin: 0 auto;
  padding: 0;
  font-size: 20px;
  resize: none;
  outline: none;
  background-color: #f7f7f7;
  border: 1px solid #e7e7e7;
  overflow-y: hidden;
}

#slidebar {
  position: relative;
  float: left;
  width: 150px;
  height: 500px;
  font-size: 16px;
  background-color: #ffffff;
}

#slidebar .btn {
  position: absolute;
  top: 50%;
  right: 0;
  /* 分别向右向上走自身的一半 */
  transform: translate(50%, -50%);
  height: 30px;
  width: 30px;
  line-height: 30px;
  background-color: skyblue;
  border-radius: 50%;
}

#slidebar .menu-title h1 {
  position: absolute;
  top: 0;
  width: 100%;
  height: 20px;
  line-height: 20px;
  font-size: 20px;
  color: #565656;
  background-color: #ffffff;
  text-align: center;
}

#slidebar .menu-content {
  margin-top: 20px;
}

#content .current {
  border: 1px solid skyblue;
  border-left: 5px solid skyblue;
}

#content .focusCell {
  border: 1px solid orange;
  border-left: 5px solid orange;
}

#porperties {
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  font-size: 16px;
  background-color: #ffffff;
}

#porperties h1 {
  font-size: 20px;
}

#porperties li {
  list-style: none;
}
</style>

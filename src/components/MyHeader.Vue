<template>
    <div class="header">
        <h1>hello world</h1>
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
</template>

<script>
export default {
    name:'MyHeader'
}
</script>

<style>
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
</style>
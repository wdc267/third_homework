<template>
    <div id="tabpage">
        <div>
            <button class="tablink" style="background-color: #ccc;">注册</button>
            <button class="tablink">登录</button>
        </div>
        <div id="register" class="tabcontent" style="display:block">
            <li><label for="">用户名：</label><input type="text" placeholder="请输入用户名"></li>
            <li><label for="">id：</label><input type="text" placeholder="请输入id"></li>
            <li><label for="">密码：</label><input type="password" placeholder="请输入密码"></li>
            <li><button class="btn">注册</button></li>
        </div>
        <div id="login" class="tabcontent">
            <li><label for="">id：</label><input type="text" placeholder="请输入id"></li>
            <li><label for="">密码：</label><input type="password" placeholder="请输入密码"></li>
            <li><button class="btn">登录</button></li>
        </div>
    </div>
</template>

<script>
export default {
    name:'Register'
}
</script>

<style scoped>
    body,
    html {
        height: 100%;
        margin: 0;
        font-family: Arial;
    }

    li {
        list-style: none;
    }

    #tabpage {
        width: 400px;
        height: 250px;
        margin: 100px auto;
    }

    .tablink {
        float: left;
        width: 50%;
        font-size: 17px;
        background-color: #555;
        color: white;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
    }

    .tablink:hover {
        background-color: #777;
    }

    .tabcontent {
        display: none;
        height: 180px;
        padding: 6px 12px;
        border: 1px solid black;
        border-top: none;
    }

    #register li {
        margin-bottom: 10px;
    }

    #register li label {
        display: inline-block;
        width: 120px;
        text-align: right;
    }

    #register li .btn {
        margin: 0 0 0 165px;
    }

    #login li {
        margin-bottom: 20px;
    }

    #login li label {
        display: inline-block;
        width: 120px;
        text-align: right;
    }

    #login li .btn {
        margin: 0 0 0 165px;
    }
</style>
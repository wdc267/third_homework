<template>
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
</template>

<script>
export default {
    name:'LeftSlidebar'
}
</script>

<style>
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
</style>
<template>
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
</template>

<script>
export default {
    name:'RightProperties',
}
</script>

<style>
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
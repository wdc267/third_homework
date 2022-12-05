<template>
<div id="content" class="w">
    <div class="current">
        <textarea class="textarea"
            placeholder="文本框聚焦时为橙色，单击cell不包括文本区切换为蓝色选中状态。若当前cell处于蓝色选中状态，按键盘上的m键可以切换为预览模式。重新双击cell可以切换回编辑模式。按键盘上下键可以切换cell"></textarea>
    </div>
</div>
</template>

<script>
export default {
    name:'NoteContent',
}
</script>

<style>
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
    #content .current {
        border: 1px solid skyblue;
        border-left: 5px solid skyblue;
    }

    #content .focusCell {
        border: 1px solid orange;
        border-left: 5px solid orange;
    }
</style>
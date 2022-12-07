<template>
    <div id="current" class="cell">
        <textarea class="textarea" placeholder="hello"></textarea>
    </div>
</template>

<script>
export default {
    name:'MyCell'
}
</script>

<style scoped>
div .cell{
    width: 90%;
    margin: auto;
    padding: 5px 25px;
    font-size: 20px;
    color: black;
    list-style: disc;
    border: 1px solid transparent;
    border-left: 5px solid transparent;
}

div #current {
    border: 1px solid #409eff;
    border-left: 5px solid #409eff;
}
textarea {
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
</style>
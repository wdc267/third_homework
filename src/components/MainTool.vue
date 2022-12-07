<template>
    <div id="maintoolbar" class="w">
        <el-row>
            <el-button icon="Plus" plain />
            <el-button icon="Scissor" plain />
            <el-button icon="Top" plain />
            <el-button icon="Bottom" plain />
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'MainTool',
}
</script>

<style scoped>
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
</style>
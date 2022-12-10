<template>
    <div id="slidebar">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :label="false">expand</el-radio-button>
            <el-radio-button :label="true">collapse</el-radio-button>
        </el-radio-group>
        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <Notebook />
                    </el-icon>
                    <span>Note List</span>
                </template>
                <el-menu-item-group>
                    <template #title><input type="text" style="border: 1px solid black"></template>
                    <el-menu-item index="1-2">note one</el-menu-item>
                    <el-menu-item index="1-3">note two</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>Tag List</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">item one</el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                    <el-menu-item index="2-3">item three</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="2-4">
                    <template #title><span>item four</span></template>
                    <el-menu-item index="2-4-1">item one</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'LeftSlidebar',
    setup() {
        let isCollapse = ref(true)
        function handleOpen(key, keyPath){
            console.log(key, keyPath);
        }
        function handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
        return {
            isCollapse,
            handleOpen,
            handleClose
        }
    }
}
</script>

<style scoped>
    #slidebar {
        position: fixed;
        /* background-color: yellow; */
        left: 0;
        top: 120px;
    }
   .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>
<template>
<div id="proper">
    <el-menu 
    :default-active="activeIndex" 
    class="el-menu-demo" 
    mode="vertical" 
    @select="handleSelect">
        <el-sub-menu index="1">
            <template #title>Properties Panel</template>
            <el-sub-menu index="1-1">
                <template #title>Note Properties</template>
                <el-menu-item index="1-1-1">create time</el-menu-item>
                <el-menu-item index="1-1-2">update time</el-menu-item>
                <el-menu-item index="1-1-3">tag</el-menu-item>
                <el-menu-item index="1-1-4">writer</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="1-2">
                <template #title>Cell Properties</template>
                <el-menu-item index="1-2-1">index：{{ $store.getters.nowIndex }}</el-menu-item>
                <el-menu-item index="1-2-2">font size</el-menu-item>        
            </el-sub-menu>
        </el-sub-menu>
    </el-menu>
</div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'RightProperties',
    setup() {
        let activeIndex = ref('1')
        function handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
        return {
            activeIndex, handleSelect
        }
    }
}
</script>

<style scoped>
#proper {
    position: fixed;
    right: 0;
    top: 120px;
 }
</style>
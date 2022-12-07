<template>
<div id="proper">
    <el-menu 
    :default-active="activeIndex" 
    class="el-menu-demo" 
    mode="vertical" 
    @select="handleSelect">
        <el-sub-menu index="2">
            <template #title>Properties Panel</template>
            <el-sub-menu index="2-1">
                <template #title>Note Properties</template>
                <el-menu-item index="2-1-1">create time</el-menu-item>
                <el-menu-item index="2-1-2">update time</el-menu-item>
                <el-menu-item index="2-1-3">tag</el-menu-item>
                <el-menu-item index="2-1-4">writer</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2-2">
                <template #title>Cell Properties</template>
                <el-menu-item index="2-2-1">index</el-menu-item>
                <el-menu-item index="2-2-2">font size</el-menu-item>        
            </el-sub-menu>
        </el-sub-menu>
    </el-menu>
</div>
</template>

<script>
export default {
    name: 'RightProperties',
    data() {
        return {
            activeIndex: '1',
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style>
#proper {
    position: fixed;
    right: 0;
    top: 120px;
 }
</style>
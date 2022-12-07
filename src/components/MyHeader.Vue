<template>
    <div id="header">
        <userHome/>
        <Menubar/>
        <MainTool/>
    </div>
</template>

<script>

import MainTool from "./MainTool.vue"
import Menubar from "./Menubar.vue"
import userHome from "./userHome.vue"

export default {
    name: 'MyHeader',
    components: {MainTool,Menubar,userHome}
}
</script>

<style scoped>
#header {
        width: 100%;
        position: fixed;
        top: 0;
        height: 120px;
        background-color: #ffffff;
        border-bottom: 1px solid #e7e7e7;
        z-index: 100;
    }
</style>
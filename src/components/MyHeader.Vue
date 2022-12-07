<template>
    <div id="header">
        <div id="user_info" class="w">
            <h1>hello wdc</h1>
            <div id="user_login">
                <div class="demo-type">
                    <div>
                        <el-avatar :size="35"> user </el-avatar>
                    </div>
                </div>
                <a href="#">login in</a>
            </div>
        </div>
        <Menubar/>
        <MainTool/>
    </div>
</template>

<script>

import MainTool from "./MainTool.vue"
import Menubar from "./Menubar.vue"

export default {
    name: 'MyHeader',
    components: {MainTool,Menubar}
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
    #user_register{
        float: right;
    }
    #user_info h1{
        display: inline;
    }
    #user_login {
        float: right;
    }
    #user_login .demo-type{
        float: left;
    }
    
</style>
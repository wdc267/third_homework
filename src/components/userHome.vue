<template>
    <div id="user_info" class="w">
        <h1 v-if="$store.state.user.islogin">hello {{$store.state.user.name}}</h1>
        <h1 v-else>hello user</h1>
        <div id="user_login">
            <div class="demo-type">
                <el-avatar :size="35" v-if="$store.state.user.islogin"> {{$store.state.user.name}} </el-avatar>
                <el-avatar :size="35" v-else> user </el-avatar>
                <router-link to="/Register"><a href="#">log in</a></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'userHome',
}
</script>

<style>
#user_register {
            float: right;
        }
    
        #user_info h1 {
            display: inline;
        }
    
        #user_login {
            float: right;
        }
    
        #user_login .demo-type {
            float: right;
            vertical-align: middle;
        }
    
        #user_login .demo-type a:hover {
            color: #409eff;
        }
    
        #user_login .demo-type a {
            padding-left: 5px;
        }
</style>
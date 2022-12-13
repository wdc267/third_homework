<template>
    <router-link to="/Home"><a href="#" style="color:red">游客身份进入主页</a></router-link>
    <div id="tabpage">
        <div>
            <button class="tablink" :class="{ deepcolor: showRef }" @click="showRef=true">注册</button>
            <button class="tablink" :class="{ deepcolor: !showRef }" @click="showRef=false">登录</button>
        </div>
        <div id="register" class="tabcontent" v-if="showRef">
            <form action="">
                <li>
                    <label for="registrantName">用户名：</label>
                    <input id="registrantName" type="text" placeholder="请输入用户名" v-model="registrant.username">
                </li>
                <li>
                    <label for="registrantId">id：</label>
                    <input id="registrantId" type="text" placeholder="请输入id" v-model="registrant.userId">
                </li>
                <li>
                    <label for="registrantNickname">昵称：</label>
                    <input id="registrantNickname" type="text" placeholder="请输入昵称"  v-model="registrant.nickname">
                </li>
                <li>
                    <label for="registrantPhone">手机号：</label>
                    <input id="registrantPhone" type="text" placeholder="请输入手机号" v-model="registrant.phone">
                </li>
                <li>
                    <label for="registrantEmail">电子邮箱：</label>
                    <input id="registrantEmail" type="text" placeholder="请输入电子邮箱" v-model="registrant.email">
                </li>
                <li>
                    <label for="registrantSex">性别：</label>
                    <input id="registrantSex" type="radio" name="sex" value='male' v-model="registrant.sex" />男
                    <input type="radio" name="sex" value='female' v-model="registrant.sex" />女
                </li>
                <li>
                    <label for="registrantPassword">密码：</label>
                    <input id="registrantPassword" type="password" placeholder="请输入密码" autocomplete="on" v-model="registrant.password">
                </li>
                <li>
                    <label for="registrantConfirmPassword">确认密码：</label>
                    <input id="registrantConfirmPassword" type="password" placeholder="请再次输入密码" autocomplete="on" v-model="registrant.confirmPassword">
                </li>
                <li>
                    <el-button type="primary" @click="register">注册</el-button>
                </li>
            </form>
        </div>
        <div id="login" class="tabcontent" v-else style="height:190px">
            <form action="">
                <li>
                    <label for="loginUserId">id：</label>
                    <input id="loginUserId" type="text" placeholder="请输入id" autocomplete="on" v-model="loginUser.userId">
                </li>
                <li>
                    <label for="loginPassword">密码：</label>
                    <input id="loginPassword" type="password" placeholder="请输入密码" autocomplete="on" v-model="loginUser.password">
                </li>
                <li><el-button type="primary" @click="login">登录</el-button></li>
            </form>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
export default {
    name: 'Register',
    setup() {
        const store = useStore();
        const router = useRouter();
        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        let showRef = ref(true);
        let registrant = reactive({
            username: '',
            userId: '',
            nickname: '',
            phone: '',
            email: '',
            sex: '',
            password: '',
            confirmPassword: '',
        });
        let loginUser = reactive({
            username: '',
            userId: '',
            nickname: '',
            phone: '',
            email: '',
            sex: '',
            password: '',
        })
        function register() {
            // console.log(registrant);
            let name = registrant.username;
            let pwd = registrant.password;
            let id = registrant.userId;
            let sex = registrant.sex;
            let nickname= registrant.nickname;
            let phone = registrant.phone;
            let email = registrant.email;
            if (name == '' || pwd == '' || id == ''||pwd=='') {
                alert('输入信息不完整')
            } else if (pwd != registrant.confirmPassword) {
                alert('输入密码前后不一致')
            } else {
                let host = 'https://db-api.amarea.cn'
                let key = 'users'
                let requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    redirect: "follow",
                }
                requestOptions.body = JSON.stringify({
                    id: id, name: name, password: pwd, sex: sex, nickname: nickname,
                    phone: phone, email: email, // 初始化一个空的待办清单
                });
                fetch(`${host}/${key}`, requestOptions) // 这里的网址没有id
                    .then(response => {
                        if (response.status == 500) {
                            alert('用户id重复，注册失败')
                        }
                        else return response.json()
                    }
                    )
                    .then(data => {
                        console.log(data.id + "注册成功")
                        alert('注册成功')
                    })  //新创建后的数据的id
                    .catch(err => {
                        console.log(err)
                    })

            }
        }
        function login() {
            console.log(loginUser);
            let requestOptions = { // 里面不能有body
                method: "GET",
                headers: myHeaders,
                redirect: "follow",
            }
            let host = 'https://db-api.amarea.cn'
            let key = 'users'
            let id = loginUser.userId;
            let password = loginUser.password;
            fetch(`${host}/${key}/${id}`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.id === id) {
                        if (data.password === password) {
                            console.log(data.name + '登录成功')
                            store.state.user.name = data.name
                            store.state.user.islogin = true
                            router.push('/Home');
                        } else {
                            throw new Error("密码不正确")
                        }
                    } else {
                        throw new Error("id不存在")
                    }
                })
                .catch(err => console.log(err))
        }
        return {
            showRef,
            registrant,
            loginUser,
            register,
            login
        }

    }
}
</script>

<style scoped>
body,
    html {
        height: 100%;
        margin: 0;
        font-family: Arial;
    }

    li {
        list-style: none;
    }

    #tabpage {
        width: 400px;
        height: 250px;
        margin: 100px auto;

    }

    .tablink {
        float: left;
        width: 50%;
        font-size: 17px;
        background-color:#79bbff;
        color: white;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
    }
    .deepcolor {
        background-color: #3d95ed;
    }

    .tablink:hover {
        background-color: #409EFF;
    }

    .tabcontent {
        height: 330px;
        padding: 6px 12px;
        border: 1px solid #a0cfff;
        border-top: none;
    }

    #register li {
        margin-bottom: 10px;
    }
    #register li:first-child {
        margin-top: 53px;
    }

    #register li label {
        display: inline-block;
        width: 120px;
        text-align: right;
    }
    #register .el-button {
        margin: 0 0 0 150px;
    }

    #login li {
        margin-bottom: 20px;
    }

    #login li:first-child {
        margin-top: 60px;
    }

    #login li label {
        display: inline-block;
        width: 120px;
        text-align: right;
    }

    #login li .el-button {
        margin: 0 0 0 150px;
    }
</style>
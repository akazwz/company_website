<template>
    <div>
        <el-form :model="ruleForm1" :rules="rules1" ref="ruleForm1" label-position="left" label-width="0px"
                 class="demo-ruleForm login-container" >
            <h2 class="title">{{$t('login.ice')}}</h2>
            <h3 class="title">{{$t('login.title')}}</h3>
            <el-form-item prop="account">
                <el-input type="text" v-model="ruleForm1.account" auto-complete="off" :placeholder="$t('login.account')"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
                <el-input type="password" v-model="ruleForm1.checkPass" auto-complete="off" :placeholder="$t('login.password')"></el-input>
            </el-form-item>
            <el-form-item prop="captcha">
                <el-input type="text" v-model="ruleForm1.captcha" auto-complete="off" :placeholder="$t('login.captcha')"></el-input>

            </el-form-item>
            <img @click="captCha" :src="imgCode" alt="验证码">
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="loading">{{$t('login.button')}}</el-button>
                <el-button type="info" style="width:50%;" @click.native.prevent="toRegister" >{{$t('login.register')}}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {requestLogin} from "@/api/api";

    export default {
        name: "Login",
        data() {
            return {
                imgCode: '',
                loading: false,
                username:'',
                ruleForm1: {
                    account: sessionStorage.getItem('userRegister'),
                    checkPass: '',
                    captcha:'',
                },

                rules1: {
                    account: [
                        { required: true,message: '请输入账号',trigger: 'blur'}
                    ],
                    checkPass: [
                        { required: true,message: '请输入密码',trigger: 'blur'}
                    ],
                    captcha: [
                        { required: true,message: '请输入验证码',trigger: 'blur'}
                    ],
                },
                checked:true
            }

        },
        methods: {
            handleSubmit() {
                this.$refs.ruleForm1.validate(
                    (valid) => {
                        if (valid) {
                            this.loading = true
                            const loginParams = {username: this.ruleForm1.account, password: this.ruleForm1.checkPass, captcha: this.ruleForm1.captcha,};
                            requestLogin(loginParams).then(
                                res => {
                                    this.loading = false
                                    let {msg,code,user} = res.data
                                    if (code !== 200){
                                        this.$message({message: msg,type:'error',})
                                    }
                                    else {
                                        this.$message({message: '欢迎登陆'+user.username,type: 'success'})
                                        sessionStorage.setItem('user',JSON.stringify(user.username))
                                        this.$router.push({ path: '/customer'})
                                    }
                                }
                            )
                        }
                    }
                )
            },
            toRegister (){
                this.$router.push({ path: '/register'})
            },
            captCha(){
                this.imgCode='http://localhost:8000/api/user/captcha'+'?'+Math.random();
            },

        },
        created() {
            this.captCha();
        }
    }
</script>

<style scoped>
    .login-container {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        /*margin: 200px auto;*/
        width: 30%;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;

        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%, -50%);
    }

    .title {
        margin: 0 auto 40px auto;
        text-align: center;
        color: #505458;
    }
</style>

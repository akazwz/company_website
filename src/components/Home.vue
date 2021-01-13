<template>
    <el-container class="el-container">

                <!--<img class="imgPhone" src="https://icegps.com/image/ice/dianhua.png" alt="phone">-->
            <!--style="background-image: url('https://icegps.com/image/ice/shouye_02.jpg'); max-width: 100%"-->
            <el-menu class="el-dropdown-menu" mode="horizontal"
                     background-color="white"
                     text-color="gray"
                     default-active="#990B2C"
                     active-text-color="#990B2C" >
                <img class="imgLogo" src="technology.png" alt="logo" style="float: left;margin-left: 10%;margin-top: 15px;height: 40px;width: 40px">
                <el-menu-item style="margin-left: 5%" index="9" @click="$router.push('/home')">{{$t('home.home')}}</el-menu-item>
                <el-menu-item index="1" @click="$router.push('/aboutUS')">{{$t('home.menu_one')}}</el-menu-item>
                <el-menu-item index="2" @click="$router.push('/newsCenter')">{{$t('home.menu_two')}}</el-menu-item>
            <el-submenu index="3">
                <template slot="title">{{$t('home.menu_three')}}</template>
                    <el-menu-item index="3-1" @click="$router.push('/automation')">{{$t('home.menu_three1')}}</el-menu-item>
                <el-submenu index="3-2">
                    <template slot="title">{{$t('home.menu_three2')}}</template>
                    <el-menu-item index="3-2-1">{{$t('home.menu_three2_1')}}</el-menu-item>
                    <el-menu-item index="3-2-2">{{$t('home.menu_three2_2')}}</el-menu-item>
                    <el-menu-item index="3-2-3">{{$t('home.menu_three2_3')}}</el-menu-item>
                    <el-menu-item index="3-2-4">{{$t('home.menu_three2_4')}}</el-menu-item>
                </el-submenu>
            </el-submenu>
                <el-menu-item index="4" @click="$router.push('/customer')">{{$t('home.menu_four')}}</el-menu-item>

                <el-menu-item index="5" @click="$router.push('/joinUs')">{{$t('home.menu_five')}}</el-menu-item>

                <el-menu-item index="6" @click="$router.push('/contactUS')">{{$t('products.contactUS.title')}}</el-menu-item>



                <el-menu-item v-if="$show" index="7" class="myLogin" @click="$router.push('/login')"><i class="el-icon-user-solid"></i>{{$t('home.menu_six')}}</el-menu-item>
                <el-submenu v-else index="10" class="myLogin">
                    <template slot="title"><i class="el-icon-user-solid"></i>{{$t('login.welcome')}}{{$username}}</template>
                    <el-menu-item index="10-1" @click="quitLogin">{{$t('login.Logout')}}</el-menu-item>
                </el-submenu>


                <el-submenu index="8" class="myLang">
                    <template slot="title" >
                        <i class="el-icon-s-tools"></i>
                        {{$t('home.language')}}
                    </template>
                    <el-menu-item index="8-1" @click="switchZH">{{$t('home.chinese')}}</el-menu-item>
                    <el-menu-item index="8-2" @click="switchEN">{{$t('home.english')}}</el-menu-item>
                </el-submenu>



        </el-menu>


        <el-main class="el-main">


        <section class="content-container">
            <el-col :span="24" class="content-wrapper">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </el-col>


           <!-- <div style="height: 40%">
                <el-carousel>
                    <el-carousel-item v-for="item in carouselList" :key="item.key">
                        <div>
                            <img :src=item.src :alt=item.desc>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <h4 align="center">{{$t('home.product')}}</h4>
            <div>
                <el-row :gutter="20">
                    <el-col :span="8"><div class="grid-content bg-purple">
                        <img style="width: 100%; height: 100%" src="https://icegps.com/image/ice/s1.jpg" :alt="$t('home.product1')">
                        {{$t('home.product1')}}
                    </div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple">
                        <img style="width: 100%; height: 100%" src="https://icegps.com/image/ice/s2.jpg" :alt="$t('home.product1')">
                        {{$t('home.product2')}}
                    </div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple">
                        <img style="width: 100%; height: 100%" src="https://icegps.com/image/ice/s3.jpg" :alt="$t('home.product1')">
                        {{$t('home.product3')}}
                    </div></el-col>
                </el-row>
            </div>

            <div>
                <h4>{{$t('home.hand_held')}}</h4>
                <el-row :gutter="20">
                    <el-col :span="6"><div class="grid-content bg-purple">
                        <img style="width: 100%; height: 100%" src="https://icegps.com/image/ice/660.png" :alt="$t('home.product4')">
                        {{$t('home.product4')}}
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">
                        <img style="width: 100%; height: 100%" src="https://icegps.com/image/ice/610.png" :alt="$t('home.product5')">
                        {{$t('home.product5')}}
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">
                        <img style="width: 100%; height: 100%" src="https://icegps.com/image/ice/660area.png" :alt="$t('home.product6')">
                        {{$t('home.product6')}}
                    </div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">
                        <img style="width: 100%; height: 100%" src="https://icegps.com/image/ice/across_area.png" :alt="$t('home.product7')">
                        {{$t('home.product7')}}
                    </div></el-col>

                </el-row>
            </div>
-->


        </section>
        </el-main>

        <el-footer class="el-footer" style="background-color: #272727; color: #d9d9d9; max-height: 50px">
            <h3 style="margin-top: 15px; float: left;margin-left: 10%">ZHUOWENTECH</h3>
            <i class="el-icon-apple" style="margin-top: 15px;float: right;margin-right: 10%">akaedison@icloud.com</i>
        </el-footer>
    </el-container>
</template>

<script>
    export default {
        name: "Home",
        prop: {

        },
        data() {
            return {
                carouselList:[
                    {key:'back1',src:'https://icegps.com/image/ice/shouye_02.jpg',desc:'dfg'},
                    {key:'back2',src:'https://icegps.com/image/ice/610.png',desc:'xcvxc'},
                    ],
                $username:'',
                $show: true

            }
        },
        methods: {
            switchZH() {
                    this.$i18n.locale = 'zh'
            },
            switchEN() {
                this.$i18n.locale = 'en'
            },
            getUser() {
                this.$username = sessionStorage.getItem('user');
                if (this.$username == null || this.$username == '') {
                    this.$show = true
                }
                else {
                    this.$show = false
                }
            },
            quitLogin() {
                sessionStorage.removeItem('user')
                this.$show = true
                this.$router.go(0)
            }


        },
        created() {
            this.getUser();
        },
    }
</script>

<style scoped>
    .el-header{
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
    }
    .el-footer{
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    }

    .el-container {
        margin-bottom: 40px;
        height: 100%;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
    }

    .el-container:nth-child(7) .el-aside {
    }

    .imgLogo{
        margin-right: auto;
    }
    .imgPhone{
        margin-left: 50%;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
       /* //min-height: 0px;*/
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

    .content-container {
        flex: 1;
        overflow-y: scroll;
        padding: 20px;
    }

    .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
    }
    .myLogin {
        float: right;
    }
    .myLang {
        float: right;
    }

</style>

<template>
    <section>
        <div style="height: 40%">
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
                    <img style="width: 100%; height: 100%" src="https://icegps.com/image/ice/s1.jpg" :alt="$t('home.product1')" @click="$router.push('/product1')">
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

    </section>
</template>

<script>
    export default {
        name: "ICE",
        data() {
            return {
                carouselList:[
                    {key:'back1',src:'https://t7.baidu.com/it/u=2784641621,1500236023&fm=193&f=GIF',desc:'dfg'},
                    {key:'back2',src:'https://t7.baidu.com/it/u=1732966997,2981886582&fm=193&f=GIF',desc:'xcvxc'},
                ]

            }
        },
    }
</script>

<style scoped>

</style>

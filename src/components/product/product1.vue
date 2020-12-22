<template>
    <section>
        <div>
            <el-carousel arrow="always">
            <el-carousel-item v-for="item in carouselList" :key="item.key">
                <el-row>
                    <el-col span="24">
                        <img  :src=item.src :alt=item.desc style="max-height: 100%;max-width: 100%">
                    </el-col>
                </el-row>

            </el-carousel-item>
            </el-carousel>
            <h4>{{$t('products.product1.introduce')}}</h4>

            <el-row :gutter="20">
                <el-col :span="12"><div class="grid-content bg-purple">
                    <img src="http://localhost:8000/storage/as211.jpg" style="max-height: 100%;max-width: 100%">
                </div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple">
                    <br><br><br>
                    <h6>{{$t('products.product1.introduction_title')}}</h6>
                    <br>
                        {{$t('products.product1.introduction')}}
                </div></el-col>
            </el-row>

            <h4>{{$t('products.product1.feature')}}</h4>

            <el-row :gutter="20" style="max-height: 50%">
                <el-col :span="12"><div class="grid-content bg-purple">
                    <img src="http://localhost:8000/storage/as212.jpg" style="max-height: 100%;max-width: 100%">
                </div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple" style="text-align: left">
                    <br><br><br>
                    {{$t('products.product1.feature_content1')}}<br>
                    {{$t('products.product1.feature_content2')}}<br>
                    {{$t('products.product1.feature_content3')}}<br>
                    {{$t('products.product1.feature_content4')}}<br>
                    {{$t('products.product1.feature_content5')}}<br>
                </div></el-col>
            </el-row>

            <el-row :gutter="20" style="max-height: 50%">
                <br><br><br><br>

                <el-col :span="12"><div class="grid-content bg-purple" style="text-align: left">
                    <br><br><br>
                    {{$t('products.product1.feature_content6')}}<br><br>
                    {{$t('products.product1.feature_content7')}}<br>
                    {{$t('products.product1.feature_content8')}}<br>
                    {{$t('products.product1.feature_content9')}}<br>
                    {{$t('products.product1.feature_content10')}}<br>
                </div></el-col>

                <el-col :span="12"><div class="grid-content bg-purple">
                    <img src="http://localhost:8000/storage/tu.png" style="max-height: 100%;max-width: 100%">
                </div></el-col>
            </el-row>

            <h4>{{$t('products.product1.application')}}</h4>
            <el-row :gutter="20">
                <el-col :span="8"><div class="grid-content bg-purple"></div>
                    <img src="https://icegps.com/image/autosteering/yy1.jpg" alt="" style="max-height: 100%;max-width: 100%">
                    <br>
                    {{$t('products.product1.application1')}}
                </el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                    <img src="https://icegps.com/image/autosteering/yy2.jpg" alt="" style="max-height: 100%;max-width: 100%">
                    <br>
                    {{$t('products.product1.application2')}}
                </div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple">
                    <img src="https://icegps.com/image/autosteering/yy3.jpg" alt="" style="max-height: 100%;max-width: 100%">
                    <br>
                    {{$t('products.product1.application3')}}
                </div></el-col>
            </el-row>

            <div align="center" style="background-color: #272727">
                <el-row :gutter="20">
                    <el-col :span="12"><div class="grid-content bg-purple" style="color: #d9d9d9">
                        <br><br><br>
                        <h4>{{$t('products.contactUS.title')}}</h4><br>
                        <p>{{$t('products.contactUS.tel')}}</p>
                        <p>{{$t('products.contactUS.weChat')}}</p>
                        <p>{{$t('products.contactUS.weibo')}}</p>
                        <p>{{$t('products.contactUS.location')}}</p>

                    </div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple">
                        <img src="https://icegps.com/image/autosteering/lbt.png" alt="" style="max-height: 100%;max-width: 100%">
                    </div></el-col>
                </el-row>
            </div>




        </div>
    </section>


</template>

<script>
    export default {
        name: "product1",
        data() {
            return {
                carouselList:[
                    {key:'back1',src:'http://localhost:8000/storage/as21.jpg',desc:'as21'},
                    {key:'back2',src:'https://icegps.com/image/ice/shouye_02.jpg',desc:'610'},
                ],

            }
        },
        methods: {

        },
        mounted() {

        },

    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }
    .el-col {
        border-radius: 4px;
    }

</style>

<template>
    <!--<div align="center" class="ql-container ql-snow">
        <div><p>{{news.title}}</p></div>
        <img :src="news.pic" alt="">
        <div class="ql-editor" v-html="news.content">
        </div>
        <el-button type="primary" v-on:click="getNews">查询新闻</el-button>
    </div>-->
    <div class="newsContainer">
        <h3>新闻中心</h3>
        <el-table :data="news" class="el-table__append-wrapper" v-loading="loading" element-loading-text="拼命加载中"
                  element-loading-spinner="el-icon-loading"
                  :show-header="false"
                  element-loading-background="rgba(0, 0, 0, 0.8)">
            <div>
                <el-table-column prop="title"></el-table-column>
                <el-table-column prop="pic"  width="120"  sortable>
                    <template slot-scope="scope">
                        <img :src="scope.row.pic" style="width: 100px;height:100px;">
                    </template>
                </el-table-column>
                <el-table-column prop="created_at"  sortable></el-table-column>
                <el-table-column prop="updated_at"  sortable></el-table-column>
                <el-table-column >
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="handleEdit(scope.row)">查看</el-button>
                    </template>
                </el-table-column>
            </div>

        </el-table>
    </div>

</template>

<script>
    import {getAllNews} from "@/api/api";

    export default {
        name: "NewsCenter",
        data() {
            return {
                news: [],
                loading:true,
            }
        },
        mounted: function(){
            this.getNews();
        },
        methods: {
           getNews: function () {
               getAllNews().then((res)=> {
                   this.news = res.data
                   this.loading = false
               })

           },
            handleEdit: function (row) {
                this.$router.push({path:'/showNews',query:{id:row.id}});

            }
        }
    }
</script>

<style scoped>
.newsContainer{
    /*width: 100%;
    height: 100%;
    background-color: #42b983;
    child-align: middle;*/
    max-width: 70%;
    margin:0 auto
}
</style>

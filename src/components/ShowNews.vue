<template>

    <div align="center" class="ql-container ql-snow" >
       <div><p>{{news.title}}</p></div>
       <img :src="news.pic" alt="">
       <div align="center">
          <div class="ql-editor" v-html="news.content">
       </div>

       </div>
   </div>
</template>

<script>
    import {getNewsByID} from "@/api/api";

    export default {
        name: "ShowNews",
        data() {
            return {
               news: [],

            }
        },
        mounted: function() {
            this.showNews()
        },
        methods :{
            showNews: function () {
               console.log("12342342")
               let param = {
                  id: this.$route.query.id,
               }
                getNewsByID(param).then((res)=>{
                   this.news = res.data

                })
            }
        }
    }
</script>

<style scoped>

</style>

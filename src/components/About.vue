<template>
    <el-form :model="ruleForm" style="margin-top: 30px">
        <div>
            标题：<input class="el-input--medium" type="text" v-model="ruleForm.title" placeholder="请输入标题">
            <br>
            封面：<el-upload
                class="avatar-uploader"
                action="http://localhost:8000/api/file/upload"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        </div>
    <div id="quillEditorId">
        <quill-editor
                id="myQuillEditorId"
                ref="myQuillEditor"
                v-model="ruleForm.content"
                @change="handelEditorChange($event)"
        >
        </quill-editor>
    </div>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="loading">发布</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    import {postNews} from "@/api/api";

    export default {
        data() {
            return {
                loading: false,
                imageUrl:'',
                ruleForm: {
                    title: '',
                    content: '',
                    pic: ''
                },
                content: '',
                editorOption: {
                    modules: {
                        clipboard: {
                            // 粘贴版，处理粘贴时候的自带样式
                            matchers: [[Node.ELEMENT_NODE, this.HandleCustomMatcher]],
                        },
                        toolbar: {
                            handlers: {
                            },
                        },
                    },
                    placeholder: '',
                },
            }
        },
        computed: {},
        async mounted() {},
        methods: {
            handleSubmit() {
                            this.loading = true
                            const newsParams = {title: this.ruleForm.title, content: this.ruleForm.content, pic: this.imageUrl};
                            postNews(newsParams).then(
                                res => {
                                    this.loading = false
                                    let {msg,code} = res.data
                                    if (code !== 200){
                                        this.$message({message: msg,type:'error',})
                                    }
                                    else {
                                        this.$message({message: '上传成功',type: 'success'})
                                        this.$router.push({ path: '/home'})
                                    }
                                }
                            )
                        },

            handelEditorChange(el) {
                console.log(el, 'el')
            },
            HandleCustomMatcher(node, Delta) {
                // 文字、图片等，从别处复制而来，清除自带样式，转为纯文本
                let ops = []
                Delta.ops.forEach(op => {
                    if (op.insert && typeof op.insert === 'string') {
                        ops.push({
                            insert: op.insert,
                        })
                    }
                })
                Delta.ops = ops
                return Delta
            },

            handleAvatarSuccess(res) {
                this.imageUrl = res.url

            },
            /*beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }*/
        }
    }
</script>
<style scoped lang="scss">
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>

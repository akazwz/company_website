import Vue from 'vue';
import App from './App.vue';
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueI18n from "vue-i18n";
import router from "@/routes";
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
require('vue-video-player/src/custom-theme.css')


//Vue.config.productionTip = false
Vue.use(ElementUi)

Vue.use(VueQuillEditor)
Vue.use(VueI18n)
Vue.use(VueVideoPlayer)
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('./assets/languages/zh.json'),
    'en': require('../src/assets/languages/en.json'),
  }
});

router.beforeEach(
    ((to, from, next) => {
      if (to.path === '/') {
          next( {path: '/home'})
      }
        let user = JSON.parse(sessionStorage.getItem('user'))
        if (!user && to.path === '/customer') {
            next( {path: '/login'})
            Vue.prototype.$message({message:'请登陆后使用',type:'warning',})

        }
        else {
            next()
        }
    })
)


new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')

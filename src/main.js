import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/plugins/element.js'
import '@/plugins/vue-mavon-editor.js'
import '@/plugins/vue-markdown-show.js'

import 'element-ui/lib/theme-chalk/index.css';
import '@/index.css'
import '@/assets/tailwind.css'
import axios from 'axios'


Vue.config.productionTip = false
axios.defaults.baseURL = 'http://43.139.129.241:3000'

// axios.interceptors.request.use(function (config) {
//   let requestToken = JSON.parse((window.localStorage.getItem('token'))) // 获取我们存储的 token
//   config.headers['Authorization'] =  requestToken; // 将 token 放到 header 里面
  
//   let loginUser = JSON.parse(window.localStorage.getItem('loginUser'))
//   if (loginUser)
//   config.headers['userid'] = loginUser.userid
//   config.headers.post['Content-Type'] = 'application/json';
//   config.timeout = 60000;
//   return config;
// });
Vue.prototype.$http = axios
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

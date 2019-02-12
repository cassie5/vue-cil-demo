import Vue from 'vue'
import App from './App'
import router from './router'

//导入服务器
import vueResource from "vue-resource";
//注册服务器
Vue.use(vueResource)

//导入mintui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//注册mintui
Vue.use(MintUI)

//导入muicss文件
import './libs/mui/css/mui.min.css'
import './libs/mui/css/icons-extra.css'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

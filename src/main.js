import Vue from 'vue'
import App from './App'
import router from './router'

//导入服务器
import vueResource from "vue-resource";
//注册服务器
Vue.use(vueResource)

//设置vue-resource的请求根路径
Vue.http.options.root = "http://www.lovegf.cn:8899/api/";

//导入mintui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//注册mintui
Vue.use(MintUI)

// css reset  css初始化
import './styles/common.css'
//导入muicss文件
import './libs/mui/css/mui.min.css'
import './libs/mui/css/icons-extra.css'



Vue.config.productionTip = false

//定义全局过滤器
import moment from 'moment'
Vue.filter('dateFormat',date => moment(date).format('YYYY-MM-DD HH:mm:ss'))

//全局注册组件
import comment from './components/comment.vue'
Vue.component('comment',comment)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

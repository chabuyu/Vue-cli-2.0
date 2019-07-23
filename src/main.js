// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'mint-ui/lib/style.css'

//引入所有ajax请求
import * as $http from './requests'
Vue.prototype.$http = $http


Vue.use(MintUI)
Vue.config.productionTip = false
import { Swipe, SwipeItem } from 'mint-ui';
//全局导航守卫  用来判断是否登录
router.beforeEach((to,from,next) =>{
  next()
  // console.log(to,from)
  if(to.name === 'mine'){
    //判断是否登录
    // const r = Math.random()
    // console.log(r)
    // if(r > 0.5){
    //   next('/home')
    // }
    }
})
//轮播图
import MintUI from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//路由
  store,//Vuex
  components: { App },
  template: '<App/>'
})

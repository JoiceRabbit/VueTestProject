import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css'
import 'swiper/dist/css/swiper.css'
import './assets/style/iconfont/iconfont.css'
import VueSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
Vue.use(VueSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',   // 在模板中使用组件
  components: { App }     // 要使用组件，先声明
})

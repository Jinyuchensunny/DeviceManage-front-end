import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

Vue.use(ElementUI, { size:'mini'});
import('element-ui/lib/theme-chalk/index.css')
import deviceClass from '@/components/deviceClass';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App ,deviceClass},
  template: '<App/>'
})

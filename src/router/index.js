import Vue from 'vue'
import Router from 'vue-router'

import deviceClass from '@/components/deviceClass';
Vue.use(Router)

export default new Router({ //创建路由对象
  routes: [     // 配置路由规则
    {
      path: '/',
      name: 'deviceClass',
      component: deviceClass
    }
  ]
})

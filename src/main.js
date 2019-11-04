// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import autofocus from 'vue-autofocus-directive'
import infiniteScroll from 'vue-infinite-scroll'
import VueAnalytics from 'vue-analytics'

Vue.directive('autofocus', autofocus)

Vue.use(infiniteScroll)

const isProd = process.env.NODE_ENV === 'production'

Vue.use(VueAnalytics, {
  id: 'UA-26178243-13',
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  },
  autoTracking: {
    pageviewOnLoad: false
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

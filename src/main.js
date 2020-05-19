// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import autofocus from 'vue-autofocus-directive'
import infiniteScroll from 'vue-infinite-scroll'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSimpleMarkdown from 'vue-simple-markdown'

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
// import 'vue-simple-markdown/dist/vue-simple-markdown.css'

Vue.use(VueSimpleMarkdown)

Vue.use(VueAxios, axios)

Vue.directive('autofocus', autofocus)

Vue.use(infiniteScroll)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

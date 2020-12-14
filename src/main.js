// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueGtag from 'vue-gtag';
import autofocus from 'vue-autofocus-directive';
import infiniteScroll from 'vue-infinite-scroll';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSimpleMarkdown from 'vue-simple-markdown';
import vueHeadful from 'vue-headful';
import './registerServiceWorker';
import router from './router';
import App from './App.vue';

Vue.use(VueGtag, {
  config: { id: 'G-40QSF1E9Y' },
}, router);

Vue.component('vue-headful', vueHeadful);

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
// import 'vue-simple-markdown/dist/vue-simple-markdown.css'

Vue.use(VueSimpleMarkdown);
Vue.use(VueAxios, axios);
Vue.directive('autofocus', autofocus);
Vue.use(infiniteScroll);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({ el: '#app', router, render: (h) => h(App) });

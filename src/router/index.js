import Vue from 'vue';
import Router from 'vue-router';
import Intro from '@/components/Intro.vue';
import Foods from '@/components/Foods.vue';
import Snack from '@/components/Snack.vue';
import Tembei from '@/components/Tembei.vue';
import Item from '@/components/Item.vue';
import Tem from '@/components/Tem.vue';
import Thoughts from '@/components/Thoughts.vue';
import Baby from '@/components/Baby.vue';
import Outer from '@/components/Outer.vue';
import Diet from '@/components/Diet.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro,
    },
    {
      path: '/foods',
      name: 'Foods',
      component: Foods,
    },
    {
      path: '/snacks',
      name: 'Snack',
      component: Snack,
    },
    {
      path: '/tembei',
      name: 'Tembei',
      component: Tembei,
    },
    {
      path: '/item/:id',
      name: 'item',
      component: Item,
    },
    {
      path: '/tem/:id',
      name: 'tem',
      component: Tem,
    },
    {
      path: '/thoughts',
      name: 'Thoughts',
      component: Thoughts,
    },
    {
      path: '/baby',
      name: 'Baby',
      component: Baby,
    },
    {
      path: '/outer',
      name: 'Outer',
      component: Outer,
    },
    {
      path: '/diet',
      name: 'Diet',
      component: Diet,
    },
  ],
});

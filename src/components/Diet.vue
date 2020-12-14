<template lang="pug">
.hello
  vue-headful(:title="'飲食習慣-' + title")
  .ui.container
    h1 飲食習慣
    div
      div.diet(v-for = "(o, idx) in diets", :key = "o.n")
        h3 {{ 4 - idx }}：{{ o.n }}
        div.d
          bar(v-for = "d in o.ds", :key = "d.t", :t = "d.t", :p = "d.p", :c = "d.c", :i = "d.i")

</template>

<script>

import Bar from './Bar.vue';

export default {
  name: 'Diet',
  props: ['title'],
  components: { Bar },
  data() {
    return {
      diets: [
        {
          n: '肉食',
          ds: [
            {
              t: '肉', p: 25, c: '#f00', i: '/static/img/meat.jpg',
            },
            {
              t: '海鮮', p: 25, c: '#f33', i: '/static/img/seafood.png',
            },
            {
              t: '菜', p: 25, c: '#3f3', i: '/static/img/veg.png',
            },
            {
              t: '飲料', p: 25, c: '#33f', i: '/static/img/water.svg',
            },
          ],
        },
        {
          n: '半肉食',
          ds: [
            {
              t: '肉', p: 20, c: '#f00', i: '/static/img/meat.jpg',
            },
            {
              t: '根莖', p: 25, c: '#ccc', i: '/static/img/potato.jpg',
            },
            {
              t: '青菜', p: 25, c: '#3f3', i: '/static/img/veg.png',
            },
            {
              t: '水', p: 30, c: '#33f', i: '/static/img/water.svg',
            },
          ],
        },
        {
          n: '海鮮素',
          ds: [
            {
              t: '海鮮', p: 15, c: '#f33', i: '/static/img/seafood.png',
            },
            {
              t: '根莖', p: 25, c: '#ccc', i: '/static/img/potato.jpg',
            },
            {
              t: '青菜', p: 30, c: '#3f3', i: '/static/img/veg.png',
            },
            {
              t: '水', p: 30, c: '#33f', i: '/static/img/water.svg',
            },
          ],
        },
        {
          n: '素食',
          ds: [
            {
              t: '根莖', p: 20, c: '#ccc', i: '/static/img/potato.jpg',
            },
            {
              t: '青菜', p: 25, c: '#0c0', i: '/static/img/veg.png',
            },
            {
              t: '生芽菜', p: 25, c: '#3f3', i: '/static/img/芽.jpg',
            },
            {
              t: '水', p: 30, c: '#33f', i: '/static/img/water.svg',
            },
          ],
        },
        {
          n: '食氣',
          ds: [
            {
              t: '陽光', p: 20, c: '#cc0', i: '/static/img/sun.jpg',
            },
            {
              t: '空氣', p: 50, c: '#ccf', i: '/static/img/air.jpg',
            },
            {
              t: '水', p: 30, c: '#33f', i: '/static/img/water.svg',
            },
          ],
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  font-size: 24px;
}

.diet {
  font-size: 24px;
  line-height: 50px;
  margin: 2em 0;
}

@media screen and (max-width: 600px) {
  .diet {
    font-size: 18px;
    line-height: 36px;
    margin: 2em 0;
  }
}

.d {
  border: 3px ridge gray;
}

</style>

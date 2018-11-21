<template lang="jade">
.hello
  h1 {{ msg }}
  .ui.from.container
    .ui.search
      input.prompt(v-model='mySearch', placeholder='以關鍵字搜詢', autofocus='')
  hr
  .ui.animated.four.doubling.cards.container
    .ui.card(v-for='(f, index) in babyfoods', v-bind:key='index', v-show='has(f, mySearch)')
      .image
        img(:src="'/static/images/' + f.i")
      .ui.header
        | {{f.t}}
      .description(v-if='f.p')
        | 作法：
        ol.ui.ordered.list
          li.item(v-for='(p, idx) in f.p', v-bind:key='idx') {{ p }}
</template>

<script>
export default {
  name: 'Baby',
  props: ['babyfoods'],
  data () {
    return {
      msg: '自然美食DIY',
      mySearch: ''
    }
  },
  methods: {
    has: function (j, k) {
      if (!k) return true
      return JSON.stringify(j).indexOf(k) > -1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.animated .card {
  position: relative;
  top: 0;
}
.animated .card:hover {
  top: -2px;
  transition: all 0.3s ease;
}
</style>

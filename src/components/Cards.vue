<template lang="jade">
.hello
  .ui.from.container
    .ui.search
      input.prompt(v-model='mySearch', placeholder='以關鍵字搜詢', v-autofocus)
  hr
  .ui.animated.four.doubling.cards.container
    a.ui.card(v-for='(f, index) in foods', v-bind:key='index', v-show='has(f, mySearch)',
    @click = 'showPop = !showPop; pop = f')
      .image
        img(:src="'/static/images/' + f.i")
      .filler
      .ui.header
        | {{f.t}}
      .description(v-if='f.p && false')
        | 作法：
        hr
        ol.ui.ordered.list
          li.item(v-for='(p, idx) in f.p', v-bind:key='idx') {{ p }}
  a(@click = "showPop = !showPop")
    transition(name="fade")
      pop(:pop = "pop", v-show="showPop")
</template>

<script>

import Pop from './Pop.vue'

export default {
  name: 'Cards',
  props: ['foods'],
  components: { Pop },
  data () {
    return {
      msg: '自然美食DIY',
      mySearch: '',
      showPop: false,
      pop: ''
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

.filler {
  flex-grow: 10
}

.card .header {
  white-space: pre-line;
  padding: 1em;
}

.animated .card {
  position: relative;
  top: 0;
}
.animated .card:hover {
  top: -2px;
  transition: all 0.3s ease;
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>

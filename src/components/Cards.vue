<template lang="jade">
.hello
  .ui.from.container
    .ui.search
      input.prompt(v-model='mySearch', placeholder='以關鍵字搜詢', v-autofocus, @input = "n += 10")
  hr
  .ui.animated.four.doubling.cards.container(v-infinite-scroll="loadMore", infinite-scroll-distance="10")
    router-link.ui.card(v-for='(f, index) in foods.slice(0, n)', v-bind:key='index', v-show='has(f, mySearch)',
    :to = "'/item/' + index")
      .image
        img(:src="'/static/images/' + f.i")
      .filler
      .ui.header
        | {{f.t}}
      .description(v-if='f.p && false')
        | 說明：
        hr
        ol.ui.ordered.list
          li.item(v-for='(p, idx) in f.p', v-bind:key='idx') {{ p }}
  router-link(to = "/foods")
    transition(name="fade")
      pop(:pop = "pop", :foods = "foods", v-show="showPop")
</template>

<script>

import Pop from './Pop.vue'

export default {
  name: 'Cards',
  props: ['foods', 'showPop'],
  components: { Pop },
  data () {
    return {
      msg: '自然美食DIY',
      mySearch: '',
      pop: '',
      n: 20
    }
  },
  methods: {
    has: function (j, k) {
      if (!k) return true
      return JSON.stringify(j).indexOf(k) > -1
    },
    loadMore: function () {
      this.n += 20
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

<template lang="pug">
.hello
  .ui.from.container
    .ui.search
      input.prompt(v-model='mySearch', placeholder='以關鍵字搜詢', v-autofocus="", @input = "n += 10" list = "data")
      datalist#data
        option(v-for = "f in foods", :value = "f.t")

  hr
  .ui.animated.two.doubling.cards.container(
  v-show = "mode == 'image'", v-infinite-scroll="loadMore", infinite-scroll-distance="10")
    router-link.ui.card(v-for='(f, index) in foods.slice().reverse().slice(0, n)', v-bind:key='index', v-show='has(f, mySearch)',
    :to = "'/item/' + (foods.length - index - 1)")
      .big.image
        .square(:style = "{ 'background-image' : 'url(/static/images/' + f.i + ')' }")
      .ui.header
        | {{index}}. {{f.t}}
      .description(v-if='f.p && f.p[0]')
        hr
        .ui.list
          .item(v-for='(p, idx) in f.p.slice(0,5)', v-bind:key='idx')
            vue-simple-markdown(:source="p")
        br
  .ui.animated.four.doubling.cards.container(
  v-show = "mode == 'avatar'", v-infinite-scroll="loadMore", infinite-scroll-distance="10")
    router-link.ui.card(v-for='(f, index) in foods.slice().reverse().slice(0, n)', v-bind:key='index', v-show='has(f, mySearch)',
    :to = "'/item/' + (foods.length - index - 1)")
      .small.image
        .square(:style = "{ 'background-image' : 'url(/static/images/' + f.i + ')' }")
      .filler
      .ui.header
        | {{index}}. {{f.t}}
      .description(v-if='f.p && f.p[0] && false')
        | 說明：
        hr
        ol.ui.ordered.list
          li.item(v-for='(p, idx) in f.p', v-bind:key='idx') {{ p }}
  .ui.horizontal.grid.container(
  v-show = "mode == 'list'", v-infinite-scroll="loadMore", infinite-scroll-distance="10")
    .ui.eight.column.doubling.row
      router-link.column.text(v-for='(f, index) in foods.slice().reverse().slice(0, n)', v-bind:key='index', v-show='has(f, mySearch)',
        :to = "'/item/' + (foods.length - index - 1)")
        .image.ui.avatar
          img(:src="'/static/images/' + f.i")
        .description
          | {{index}}. {{f.t.substr(0,6)}}{{ f.t.substr(0,6) == f.t ? '' : '...'}}
  transition(name="fade")
    pop(:foods = "foods", v-show="showPop")
</template>

<script>

import Pop from './Pop.vue';

export default {
  name: 'Cards',
  props: ['foods', 'showPop', 'mode'],
  components: { Pop },
  data() {
    return {
      msg: '自然美食DIY',
      mySearch: '',
      n: 20,
    };
  },
  methods: {
    has(j, k) {
      if (!k) return true;
      return JSON.stringify(j).indexOf(k) > -1;
    },
    loadMore() {
      this.n += 20;
    },
  },
};
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

.animated .card{
  position: relative;
  top: 0;
}
.animated .card:hover {
  top: -2px;
  transition: all 0.3s ease;
}

.animated .item{
  position: relative;
  top: 0;
}
.animated .item:hover {
  top: -2px;
  transition: all 0.3s ease;
}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.horizontal.list .item {
  width: 15vw;
  height: 15vh;
}

.description {
  text-align: left;
  padding: 0 1em;
}

.square {
  width: 100%;
  background-size: cover;
  background-position: center;
}

.big.image .square {
  height: 50vmin;
}

.small.image .square {
  height: 33vmin;
}

.floated.left {
  float: left;
}

.ui.eight.column.doubling.row .column {
  margin-top: 1em;
}

a.column.text {
  padding: 5px !important;
}

.ui.card {
  -webkit-box-shadow: 0px 5px 10px 2px #5B5B5B;
  box-shadow: 0px 5px 10px 2px #5B5B5B;
}

</style>

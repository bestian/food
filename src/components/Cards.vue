<template lang="pug">
.hello
  .ui.from.container
    .ui.search
      input.prompt(v-model='mySearch', placeholder='以關鍵字搜詢', v-autofocus="", @input = "n += 10" list = "data")
      datalist#data
        option(v-for = "f in foods", :value = "f.t")

  hr
  .ui.animated.two.doubling.relexed.cards.container(
  v-show = "mode == 'image'", v-infinite-scroll="loadMore", infinite-scroll-distance="10")
    router-link.ui.card(v-for='(f, index) in foods.slice().reverse().slice(0, n)', v-bind:key='index', v-show='has(f, mySearch)',
    :to = "'/' + (f.pop || 'item') + '/' + (foods.length - index - 1)", :class="{ disabled: f.pop == 'no'}")
      .big.image(v-if="f.v")
          video(:src="'/static/videos/' + f.v")
      .big.image(v-if="f.i")
        .square(:style = "{ 'background-image' : 'url(/static/images/' + f.i + ')' }")
      .ui.header
        span(v-if="!f.noIndex") {{(foods.length - index)}}
          i.sign.language.icon(v-if ="index % 2 == 0")
          i.sign.language.icon(v-else)
        br.thin-only
        | {{f.t}}
      .description(v-if='f.p && f.p[0]')
        hr
        .ui.list
          .item(v-for='(p, idx) in f.p.slice(0,5)', v-bind:key='idx')
            span(v-html="p")
        br
  .ui.animated.four.doubling.relexed.cards.container(
  v-show = "mode == 'avatar'", v-infinite-scroll="loadMore", infinite-scroll-distance="10")
    router-link.ui.card(v-for='(f, index) in foods.slice().reverse().slice(0, n)', v-bind:key='index', v-show='has(f, mySearch)',
    :to = "'/' + (f.pop || 'item') + '/' + (foods.length - index - 1)", :class="{ disabled: f.pop == 'no'}")
      .small.image(v-if="f.v")
          video(:src="'/static/videos/' + f.v")
      .small.image(v-if="f.i")
        .square(:style = "{ 'background-image' : 'url(/static/images/' + f.i + ')' }")
      .filler(v-if = "!f.long")
      .ui.header
        span(v-if="!f.noIndex") {{(foods.length - index)}}
          i.sign.language.icon(v-if ="index % 2 == 0")
          i.sign.language.icon(v-else)
        br.thin-only
        | {{f.t}}
      .description(v-if='f.p && f.p[0] && f.long')
        | 說明：
        hr
        ul.ui.bulleted.list
          li.item(v-for='(p, idx) in f.p', v-bind:key='idx', v-show="idx == 0") {{ p }} {{p.length < 20 ? '...' : ''}}
            i.angle.double.right.arrow.icon
  .ui.horizontal.grid.container(
  v-show = "mode == 'list'", v-infinite-scroll="loadMore", infinite-scroll-distance="10")
    .ui.eight.column.doubling.row
      router-link.column.text(v-for='(f, index) in foods.slice().reverse().slice(0, n)', v-bind:key='index', v-show='has(f, mySearch)',
        :to = "'/' + (f.pop || 'item') + '/' + (foods.length - index - 1)", :class="{ disabled: f.pop == 'no'}")
        .image.ui.avatar(v-if="f.v")
          video(:src="'/static/videos/' + f.v")
        .image.ui.avatar(v-if="f.i")
          img(:src="'/static/images/' + f.i")
        .description
          span(v-if="!f.noIndex") {{(foods.length - index)}}
            i.sign.language.icon(v-if ="index % 2 == 0")
            i.sign.language.icon(v-else)
          | {{f.t.substr(0,6)}}{{ f.t.substr(0,6) == f.t ? '' : '...'}}
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
  mounted() {
    if (localStorage.getItem('key')) {
      this.mySearch = localStorage.getItem('key');
    }
  },
  watch: {
    mySearch(val) {
      console.log(val);
      localStorage.setItem('key', val);
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
  font-size: 22px;
  padding: 1em;
}

.animated .card {
  position: relative;
  top: 0;
}
.animated .card:hover {
  top: -2px;
}

.card .square {
  border-radius: 5px 5px 0 0 !important;
}

.card video {
  border-radius: 5px 5px 0 0 !important;
}

.animated .card:hover .ui.header {
  color: blue !important;
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

i.angle.double.right.arrow.icon {
  float: right;
}

li.item {
  padding-bottom: .82em !important;
}

.ui.four.cards>.card {
    width: calc(25% - 3em);
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    margin-left: 1.5em;
    margin-right: 1.5em;
}

@media only screen and (max-width: 767px) {
  .ui.four.doubling.cards>.card {
      width: calc(50% - 4em);
      margin-left: 2em;
      margin-right: 2em;
  }
}

</style>

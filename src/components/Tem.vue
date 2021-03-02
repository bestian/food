<template lang="pug">
.hello
  vue-headful(:title="getTitle() + '@' + title")
  .ui.grid.container
    .ui.doubling.two.column.row
      .column
        .big.image
          a(:href="'/static/images/' + pop.i", target="_blank", rel="noopener noreferrer")
            .square(:style = "{ 'background-image' : 'url(/static/images/' + pop.i + ')' }")
      .column
        h1.ui.header
          | {{ pop.t }}
        .small.image.fat-only(v-if="pop.is")
          a(v-for="i in pop.is", :key="i", :href="'/static/images/' + i", target="_blank", rel="noopener noreferrer")
            .square(:style = "{ 'background-image' : 'url(/static/images/' + i + ')' }")
        .description(v-if='pop.p', :class = "{long: pop.p.length > 2 || (pop.p[0] && pop.p[0].length > 30)}")
          hr
          .ui.list
            .item(v-for='(p, idx) in pop.p', v-bind:key='idx')
              vue-simple-markdown(:source="p")
        br.thin-only
        .small.image.thin-only(v-if="pop.is")
          a(v-for="i in pop.is", :key="i", :href="'/static/images/' + i", target="_blank", rel="noopener noreferrer")
            .square(:style = "{ 'background-image' : 'url(/static/images/' + i + ')' }")
        br
        br
        .ui.vertical.buttons
          ShareNetwork.ui.huge.blue.button(network="facebook", :url="'https://food.bestian.tw/#/tem/' + $route.params.id", title="自然美食DIY", :description="'自然美食DIY - ' + pop.t", :quote="'簡單又美好的食譜 - ' + pop.t", @click="trackButton('share', 5)")
            i.share.icon
            | 分享此頁
          router-link(to="/tembei").ui.huge.green.button
            i.arrow.left.icon
            | 回到天貝
</template>

<script>

import Cards from './Cards.vue';

export default {
  name: 'Foods',
  props: ['tembeis', 'title'],
  components: { Cards },
  data() {
    return {
      msg: '自然美食DIY',
      pop: {},
    };
  },
  methods: {
    has(j, k) {
      if (!k) return true;
      return JSON.stringify(j).indexOf(k) > -1;
    },
    getTitle() {
      if (this.tembeis[this.$route.params.id]) {
        return this.tembeis[this.$route.params.id].t;
      }
      return '讀取中';
    },
    trackButton(t, v) {
      this.$gtag.event('action', {
        event_category: t,
        event_action: t,
        event_label: t,
        value: v,
      });
    },
  },
  mounted() {
    this.pop = this.tembeis[this.$route.params.id] || {};
  },
  watch: {
    foods(val) {
      this.pop = val[this.$route.params.id];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.big.image .square {
  width: 83.4%;
  height: 80vmin;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  border-radius: 15px;
  -webkit-box-shadow: 0px 5px 10px 2px #5B5B5B;
  box-shadow: 0px 5px 10px 2px #5B5B5B;
}

.small.image .square {
  width: 21%;
  height: 25vmin;
  background-size: cover;
  background-position: center;
  margin: 0 1%;
  display: inline-block;
  border-radius: 15px;
  -webkit-box-shadow: 0px 5px 10px 2px #5B5B5B;
  box-shadow: 0px 5px 10px 2px #5B5B5B;
}

.column {
  text-align: center;
}

.item {
  font-size: 18px;
  text-align: left;
}

img {
  border-radius: 15px;
}
</style>

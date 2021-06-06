<template lang="pug">
.hello
  vue-headful(:title="getTitle() + '@' + title")
  // router-link(:to = "'/item/' + ((parseInt($route.params.id) - 1 + foods.length) % foods.length)")#left.fat-only
    i.angle.left.icon
    .small
      i.utensil.spoon.icon
      span {{ foods[(parseInt($route.params.id) - 1 + foods.length) % foods.length].t }}
      img(:src="'/static/images/' + foods[(parseInt($route.params.id) - 1 + foods.length) % foods.length].i", alt="foods[(parseInt($route.params.id) - 1 + foods.length) % foods.length].t")
  // router-link(:to = "'/item/' + ((parseInt($route.params.id) + 1 + foods.length) % foods.length)")#right.fat-only
    i.angle.right.icon
    .small
      i.utensil.spoon.icon
      span {{ foods[(parseInt($route.params.id) + 1 + foods.length) % foods.length ].t }}
      img(:src="'/static/images/' + foods[(parseInt($route.params.id) + 1 + foods.length) % foods.length].i", alt="foods[(parseInt($route.params.id) + 1 + foods.length) % foods.length].t")
  .ui.grid.container
    .ui.doubling.two.column.row
      .column
        .big.image
          a(:href="'/static/images/' + pop.i", target="_blank", rel="noopener noreferrer")
            .square(:style = "{ 'background-image' : 'url(/static/images/' + pop.i + ')' }")
      .column
        h1.ui.header
          i.utensil.spoon.icon
          | {{ pop.t }}
        .small.image.fat-only(v-if="pop.is")
          a(v-for="i in pop.is", :key="i", :href="'/static/images/' + i", target="_blank", rel="noopener noreferrer")
            .square(:style = "{ 'background-image' : 'url(/static/images/' + i + ')' }")
        .description(v-if='pop.p', :class = "{long: pop.p.length > 2 || (pop.p[0] && pop.p[0].length > 30)}")
          hr
          .ui.bulleted.list
            .item(v-for='(p, idx) in pop.p', v-bind:key='idx')
              span.hi(v-html="p")
        br.thin-only
        .small.image.thin-only(v-if="pop.is")
          .ui.bulleted.list
            a.item(v-for="i in pop.is", :key="i", :href="'/static/images/' + i", target="_blank", rel="noopener noreferrer")
              .square(:style = "{ 'background-image' : 'url(/static/images/' + i + ')' }")
        br
        br
        .ui.vertical.buttons
          ShareNetwork.ui.huge.blue.button(network="facebook", :url="'https://food.bestian.tw/#/item/' + $route.params.id", title="自然美食DIY", :description="'自然美食DIY - ' + pop.t", :quote="'簡單又美好的食譜 - ' + pop.t", @click="trackButton('share', 5)")
            i.share.icon
            | 分享此頁&nbsp;
            i.facebook.icon
          router-link(to="/foods").ui.huge.green.button
            i.arrow.left.icon
            | 回上一頁&nbsp;
            i.utensil.spoon.icon
          a(@click="save()").ui.huge.orange.button
            i.copy.icon
            | 複製連結&nbsp;
</template>

<script>

import Cards from './Cards.vue';

export default {
  name: 'Foods',
  props: ['foods', 'title'],
  components: { Cards },
  data() {
    return {
      msg: '自然美食DIY',
      pop: {},
    };
  },
  methods: {
    save() {
      function fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        // Avoid scrolling to bottom
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.position = 'fixed';

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          document.execCommand('copy');
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
      }
      function copyTextToClipboard(text) {
        if (!navigator.clipboard) {
          fallbackCopyTextToClipboard(text);
          return;
        }
        navigator.clipboard.writeText(text).then(() => {
          console.log('Async: Copying to clipboard was successful!');
        }, (err) => {
          console.error('Async: Could not copy text: ', err);
        });
      }
      // eslint-disable-next-line
      copyTextToClipboard('https://food.bestian.tw/#/item/' + this.$route.params.id);
      alert('連結已複製');
    },
    parseInt(n) {
      return parseInt(n, 10);
    },
    has(j, k) {
      if (!k) return true;
      return JSON.stringify(j).indexOf(k) > -1;
    },
    getTitle() {
      if (this.foods[this.$route.params.id]) {
        return this.foods[this.$route.params.id].t;
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
    this.pop = this.foods[this.$route.params.id] || {};
  },
  watch: {
    foods(val) {
      this.pop = val[this.$route.params.id];
    },
    $route() {
      this.pop = this.foods[this.$route.params.id] || {};
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

#left {
  position: fixed;
  z-index: 999;
  top: 40vh;
  left: 1em;
  font-size: 42px;
  text-align: left;
}

#right {
  position: fixed;
  z-index: 999;
  top: 40vh;
  right: 1em;
  font-size: 42px;
  text-align: right;
}

#left i, #right i {
  background-color: white;
  border-radius: 5px;
  padding: .3em;
}

.small {
  position: relative;
  font-size: 16px;
  background-color: white;
  border-radius: 5px;
  padding: .2em;
}

.small span {
  opacity: .81;
  transition: all .3s ease;
}

.small:hover span {
  opacity: 1;
}

.small img {
  height: 3em;
  position: absolute;
  top: 2em;
  left: 1em;
  opacity: 1;
}

.hi {
  line-height: 1.35;
}

</style>

<template lang="jade">
.hello
  .ui.piled.segment.container
    h1 關於平台
    h3 這裡用來存放個人（Hsinyi）的煮食紀錄，
      br
      | 總數上，蔬食比例較多，沒有特別標素不素，
      br
      | 料理靈感來自大地、靈感乍現，以及許多人分享的經驗與智慧。
      br
      | 飲食區打食材關鍵字（如：紅豆）可以找到相關的料理，
      br
      | 祝大家食在喜悅、自然~
    //router-link(to="/item/93")
      transition-group(name="list", tag="p")
        .ui(v-for="(f, idx) in foods", v-bind:key = "f.t", v-if="myIndex % foods.length == idx")
          img(:src = "'/static/images/' + f.i")
          h3 {{f.t}}
    img(class="image", v-for="(image, i) in images", :src="image", :key="i", @click="index = i")
    vue-gallery-slideshow(:images="images", :index="index", @close="index = null")
</template>

<script>

import VueGallerySlideshow from 'vue-gallery-slideshow'

export default {
  name: 'Intro',
  props: ['foods'],
  components: {
    VueGallerySlideshow
  },
  data () {
    return {
      index: undefined,
      myIndex: 93
    }
  },
  computed: {
    images: function () {
      return this.foods.map(function (o) {
        return '/static/images/' + o.i
      })
    }
  },
  methods: {
    next: function () {
      // this.myIndex++
    }
  },
  mounted () {
    setInterval(this.next, 2000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p {
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
}

img {
  width: 50vmin;
  height: 36vmin;
  border-radius: 15px;
}

@media screen and (max-width: 600px) {
  img {
  width: 80vmin;
  height: 50vmin;
  }
}

.list-item {
}

.list-enter-active {
  transition: all 1s cubic-bezier(.4,-0.38,.71,1.61);
}

.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(0.5);
}

.image {
  cursor: pointer;
  width: 10%;
  height: auto;
}

</style>

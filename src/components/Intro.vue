<template lang="jade">
.hello
  vue-headful(:title="'關於本站-' + title")
  .ui.piled.segment.container
    h3.center Ｈi 這裡用來存放Hsinyi的煮食紀錄
      br
      | 點「食譜」可以看到簡記分享
      br
      | FB分享請見粉絲頁-
      a(href="https://www.facebook.com/%E7%9C%9F%E8%94%AC%E6%9C%8D-110229097348056/", target="_blank")
        i.facebook.icon
        | 真蔬服
    p.main
      | 我們家的料理，蔬食比例較多，沒有特別標素不素，
      br
      | 料理靈感來自大地、靈感乍現，以及許多人分享的經驗與智慧。
      br
      | 飲食區打食材關鍵字（如：紅豆）可以找到相關的料理，
      br
      | 祝大家食在喜悅、自然~😀
    .ui.grid(v-if = "foods.length > 0")
      .ui.two.column.stackable.row
        .column
          router-link(:to="'/item/' + (foods.length - 1)")
            h3 最新更新1：{{foods[foods.length - 1].t}}
            .square(:style = "{ 'background-image' : 'url(/static/images/' + foods[foods.length - 1].i + ')' }")
        .column
          router-link(:to="'/item/' + (foods.length - 2)")
            h3 最新更新2：{{foods[foods.length - 2].t}}
            .square(:style = "{ 'background-image' : 'url(/static/images/' + foods[foods.length - 2].i + ')' }")
    br
    img(class="image", v-for="(image, i) in images", :src="image", :key="i", @click="index = i")
    vue-gallery-slideshow(:images="images", :index="index")
</template>

<script>

import VueGallerySlideshow from 'vue-gallery-slideshow'

export default {
  name: 'Intro',
  props: ['foods', 'title'],
  components: {
    VueGallerySlideshow
  },
  data () {
    return {
      interval: undefined,
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
    reset: function () {
      this.index = null
    },
    go: function () {
      this.unbind()
      this.$router.push('/item/' + this.index)
    },
    next: function () {
      this.index++
    },
    prev: function () {
      this.index--
    },
    bind: function () {
      var vm = this
      var elem = document.getElementsByClassName('vgs__container__img')[0]
      if (elem !== undefined) {
        console.log(elem)
        console.log(vm.index)
        elem.removeEventListener('click', vm.go)
        elem.addEventListener('click', vm.go)
      }
      var n = document.getElementsByClassName('vgs__next')[0]
      if (n !== undefined) {
        n.removeEventListener('click', vm.next)
        n.addEventListener('click', vm.next)
      }
      var p = document.getElementsByClassName('vgs__prev')[0]
      if (n !== undefined) {
        p.removeEventListener('click', vm.prev)
        p.addEventListener('click', vm.prev)
      }
    },
    unbind: function () {
      var vm = this
      clearInterval(this.interval)
      var elem = document.getElementsByClassName('vgs__container__img')[0]
      if (elem !== undefined) {
        elem.removeEventListener('click', vm.go)
      }
      var n = document.getElementsByClassName('vgs__next')[0]
      if (n !== undefined) {
        n.removeEventListener('click', vm.next)
      }
      var p = document.getElementsByClassName('vgs__prev')[0]
      if (n !== undefined) {
        p.removeEventListener('click', vm.prev)
      }
    }
  },
  updated () {
    this.unbind()
    this.interval = setInterval(this.bind, 500)
  },
  beforeUpdated () {
    this.unbind()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.markdown-body {
  padding-left: 10vw;
  text-align: left;
}

@media screen and (max-width: 620px) {
  .markdown-body {
    padding-left: 0;
  }
}

img {
  width: 50vmin;
  height: 36vmin;
  transition: all 1s ease;
}

img.rad {
  border-radius: 15px;
}

img:hover {
  transform: translateY(-2px) scale(2);
  border-radius: 50%;
  position: relative;
  z-index: 999;
}

.main {
  text-align: left;
  margin: 2em calc(100px + 10vw);
  font-size: 16px;
}

@media screen and (max-width: 600px) {
  img {
    width: 80vmin;
    height: 50vmin;
  }
  .main {
    text-align: left;
    margin: 2em 0;
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
  height: 5vmin;
  width: auto;
}

.square {
  margin: 1em auto;
  width: 85%;
  height: 35vmin;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
}

</style>

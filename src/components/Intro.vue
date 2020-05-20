<template lang="jade">
.hello
  vue-headful(:title="'關於本站-' + title")
  .ui.piled.segment.container
    h3 這裡用來存放個人（Hsinyi）的煮食紀錄
      br
      | 最新消息，請上
      a(href="https://www.facebook.com/%E7%9C%9F%E8%94%AC%E6%9C%8D-110229097348056/", target="_blank")
        i.facebook.icon
        | 真蔬服
    vue-simple-markdown(:source="md")
    .ui.grid(v-if = "foods.length > 0")
      .ui.two.column.stackable.row
        .column
          router-link(:to="'/item/' + (foods.length - 1)")
            h3 最新更新：{{foods[foods.length - 1].t}}
            img.small(:src = "'/static/images/' + foods[foods.length - 1].i")
        .column
          router-link(:to="'/item/' + (foods.length - 2)")
            h3 最新更新：{{foods[foods.length - 2].t}}
            img.small(:src = "'/static/images/' + foods[foods.length - 2].i")
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
      myIndex: 93,
      md: `
      總數上，蔬食比例較多，沒有特別標素不素，
      料理靈感來自大地、靈感乍現，以及許多人分享的經驗與智慧。
      飲食區打食材關鍵字（如：紅豆）可以找到相關的料理，
      祝大家食在喜悅、自然~:smile:
      `
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
  mounted () {
    this.interval = setInterval(this.bind, 500)
  },
  beforeUpdated () {
    clearInterval(this.interval)
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
  height: 5vmin;
  width: auto;
}

</style>

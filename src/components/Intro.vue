<template lang="pug">
.hello
  vue-headful(:title="'關於本站-' + title")
  .ui.piled.segment.container
    router-link(to="/foods")
      img.float.left(src="/img/elf.png", alt="elf")
    h2.center Ｈi 這裡用來存放Hsinyi的煮食紀錄
    h3.center 點「
      router-link(to="/foods") 食譜
      | 」可以看到簡記分享
      br
      | FB分享請見粉絲頁-
      a(href="https://www.facebook.com/%E7%9C%9F%E8%94%AC%E6%9C%8D-110229097348056/", target="_blank", rel="noopener noreferrer")
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
            div(v-if ="foods[foods.length - 1].v")
              video(controls, :src="'/static/videos/' + foods[foods.length - 1].v")
            .square(v-if ="foods[foods.length - 1].i", :style = "{ 'background-image' : 'url(/static/images/' + foods[foods.length - 1].i + ')' }")
        .column
          router-link(:to="'/item/' + (foods.length - 2)")
            h3 最新更新2：{{foods[foods.length - 2].t}}
            div(v-if ="foods[foods.length - 2].v")
              video(controls, :src="'/static/videos/' + foods[foods.length - 2].v")
            .square(v-if ="foods[foods.length - 2].i", :style = "{ 'background-image' : 'url(/static/images/' + foods[foods.length - 2].i + ')' }")
    // br
    // img.small.image(v-for="(image, i) in images", :src="image", :key="i", @click="index = i", :alt="image")
    // vue-gallery-slideshow(:images="images", :index="index")
</template>

<script>

import VueGallerySlideshow from 'vue-gallery-slideshow';

export default {
  name: 'Intro',
  props: ['foods', 'title'],
  components: {
    VueGallerySlideshow,
  },
  data() {
    return {
      interval: undefined,
      index: undefined,
      myIndex: 93,
    };
  },
  computed: {
    images() {
      return this.foods.map((o) => `/static/images/${o.i}`);
    },
  },
  methods: {
    reset() {
      this.index = null;
    },
    go() {
      this.unbind();
      this.$router.push(`/item/${this.index}`);
    },
    next() {
      this.index += 1;
    },
    prev() {
      this.index -= 1;
    },
    bind() {
      const vm = this;
      const elem = document.getElementsByClassName('vgs__container__img')[0];
      if (elem !== undefined) {
        console.log(elem);
        console.log(vm.index);
        elem.removeEventListener('click', vm.go);
        elem.addEventListener('click', vm.go);
      }
      const n = document.getElementsByClassName('vgs__next')[0];
      if (n !== undefined) {
        n.removeEventListener('click', vm.next);
        n.addEventListener('click', vm.next);
      }
      const p = document.getElementsByClassName('vgs__prev')[0];
      if (n !== undefined) {
        p.removeEventListener('click', vm.prev);
        p.addEventListener('click', vm.prev);
      }
    },
    unbind() {
      const vm = this;
      clearInterval(this.interval);
      const elem = document.getElementsByClassName('vgs__container__img')[0];
      if (elem !== undefined) {
        elem.removeEventListener('click', vm.go);
      }
      const n = document.getElementsByClassName('vgs__next')[0];
      if (n !== undefined) {
        n.removeEventListener('click', vm.next);
      }
      const p = document.getElementsByClassName('vgs__prev')[0];
      if (n !== undefined) {
        p.removeEventListener('click', vm.prev);
      }
    },
  },
  updated() {
    this.unbind();
    this.interval = setInterval(this.bind, 500);
  },
  beforeUpdated() {
    this.unbind();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.markdown-body {
  padding-left: 10vw;
  text-align: left;
}

a {
  color: #00c;
}

@media screen and (max-width: 620px) {
  .markdown-body {
    padding-left: 0;
  }
}

img {
  transition: all .3s ease;
}

img.rad {
  border-radius: 15px;
}

img.small:hover {
  transform: translateY(-2px) scale(2);
  border-radius: 50%;
  position: relative;
  z-index: 999;
}

.main {
  text-align: left;
  margin: 2em calc(50px + 10vw);
  font-size: 16px;
}

@media screen and (max-width: 600px) {
  .main {
    text-align: left;
    margin: 2em 0;
  }
}

.list-item {
}

.list-enter-active {
  transition: all .3s cubic-bezier(.4,-0.38,.71,1.61);
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
  height: 45vmin;
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  -webkit-box-shadow: 0px 5px 10px 2px #5B5B5B;
  box-shadow: 0px 5px 10px 2px #5B5B5B;
}

</style>

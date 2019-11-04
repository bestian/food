<template lang="jade">
.hello
  .ui.piled.segment.container
    h1 這個平台用來存放個人（Hsinyi）的煮食紀錄，
    h3 總數上，蔬食比例較多，沒有特別標素不素，
    h3 料理靈感來自大地、靈感乍現，以及許多人分享的經驗與智慧。
    h3 飲食區打食材關鍵字（如：紅豆）可以找到相關的料理，
    h3 祝大家食在喜悅、自然~
    router-link(to="/foods")
      transition-group(name="list", tag="p")
        .ui(v-for="(f, idx) in foods", v-bind:key = "f.t", v-if="myIndex % foods.length == idx")
          img(:src = "'/static/images/' + f.i")
          h3 {{f.t}}
</template>

<script>
export default {
  name: 'Intro',
  props: ['foods'],
  data () {
    return {
      myIndex: 1
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

</style>

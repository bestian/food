<template lang="jade">
.hello
  .ui.segment.container
    h1 因為愛吃所以自己煮：）
    router-link(to="/foods")
      transition-group(name="list", tag="p")
        .ui(v-for="(f, idx) in foods" v-bind:key="idx", v-show="myIndex % foods.length == idx")
          img(:src = "'/static/images/' + f.i")
          h3 {{f.t}}
</template>

<script>
export default {
  name: 'Intro',
  props: ['foods'],
  data () {
    return {
      myIndex: 0
    }
  },
  methods: {
    next: function () {
      this.myIndex++
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
  width: 50vw;
  height: 50vh;
  border-radius: 15px;
}

@media screen and (max-width: 600px) {
  img {
    width: 85vw;
  }
}

.list-item {
}
.list-enter-active {
  transition: all 1s cubic-bezier(.4,-0.38,.71,1.61);
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0.5;
  transform: scale(0.5);
}

</style>

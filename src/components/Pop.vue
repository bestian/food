<template lang="jade">
.hello
  #pop
    .back
    .ui.container
      .ui.fluid.card
        .image
          img(:src="'/static/images/' + pop.i")
        .ui.header
          | {{pop.t}}
        .description(v-if='pop.p')
          | 作法：
          hr
          ol.ui.ordered.list
            li.item(v-for='(p, idx) in pop.p', v-bind:key='idx') {{ p }}
</template>

<script>
export default {
  name: 'Pop',
  props: ['pop'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#pop {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
}

.back {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: white;
  opacity: 0.6;
}

p {
  font-size: 16px;
  line-height: 1.6;
  text-align: left;
}

.ui.fluid.card {
  background-color: white !important;
}

</style>

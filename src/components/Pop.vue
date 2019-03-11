<template lang="jade">
.hello
  #pop
    .back
    .ui.container
      .ui.centered.card
        .image
          img(:src="'/static/images/' + pop.i")
        .ui.header
          | {{pop.t}}
        .description(v-if='pop.p', v-bind:class = "{ 'long' : pop.p.length > 2 || pop.p[0].length > 30}")
          | 說明：
          hr
          ol.ui.bulleted.list
            li.item(v-for='(p, idx) in pop.p', v-bind:key='idx') {{ p }}
</template>

<script>
export default {
  name: 'Pop',
  props: ['pop', 'foods'],
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    this.pop = this.foods[this.$route.params.id]
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
  opacity: 0.86;
}

p {
  font-size: 16px;
  line-height: 1.6;
  text-align: left;
}

.ui.card {
  background-color: white !important;
  padding: 3em 1em;
  width: 75vmin;
  max-height: 100vh;
  overflow-y: scroll;
}

.ui.header {
  font-size: 2em;
  white-space: pre-line;
}

.description {
  font-size: 1.5em;
}

.long {
 font-size: 1em;
}
</style>

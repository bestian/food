<template lang="jade">
.hello
  #pop
    router-link.back(to="/foods")
    .ui.container
      .ui.centered.card(v-if="pop && pop.t")
        .big.image
          .square(:style = "{ 'background-image' : 'url(/static/images/' + pop.i + ')' }")
        .ui.header
          | {{ pop.t }}
        .description(v-if='pop.p', v-bind:class = "{ 'long' : pop.p.length > 2 || pop.p[0].length > 30}")
          hr
          .ui.list
            .item(v-for='(p, idx) in pop.p', v-bind:key='idx')
              vue-simple-markdown(:source="p")
</template>

<script>
export default {
  name: 'Pop',
  props: ['foods'],
  data () {
    return {
      pop: {}
    }
  },
  methods: {
  },
  mounted () {
    this.pop = this.foods[this.$route.params.id] || {}
  },
  watch: {
    foods (val) {
      this.pop = val[this.$route.params.id]
    }
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
  max-height: calc(100vh - 100px);
  overflow-y: scroll;
}

.ui.header {
  font-size: 2em;
  white-space: pre-line;
}

.description {
  text-align: left;
}

.markdown-body {
  font-size: 1.5em;
}

.long .markdown-body {
 font-size: 1em;
}

.image .square {
  width: 100%;
  height: 33vmin;
  background-size: cover;
  background-position: center;
}

</style>

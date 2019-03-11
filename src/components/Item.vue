<template lang="jade">
.hello
  h1 {{ msg }}
  cards(:foods = "foods", :showPop="true")
</template>

<script>

import Cards from './Cards.vue'

export default {
  name: 'Foods',
  props: ['foods'],
  components: { Cards },
  data () {
    return {
      msg: '自然美食DIY'
    }
  },
  methods: {
    has: function (j, k) {
      if (!k) return true
      return JSON.stringify(j).indexOf(k) > -1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.animated .card {
  position: relative;
  top: 0;
}
.animated .card:hover {
  top: -2px;
  transition: all 0.3s ease;
}
</style>

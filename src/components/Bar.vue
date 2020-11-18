<template lang="jade">
.bar(:style = "{ width: p + '%', 'background-color': c}")
  | {{ t }}
  img(:src = "i")
</template>

<script>
export default {
  name: 'Thoughts',
  props: ['t', 'p', 'c', 'i'],
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

.bar {
  display: inline-block;
  color: black;
}

img {
  height: 1em;
}

</style>

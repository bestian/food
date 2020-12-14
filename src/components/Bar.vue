<template lang="pug">
.bar(:style = "{ width: p + '%', 'background': 'linear-gradient(0deg, rgba(20,20,20,1) 0%, ' + c + ' 100%)'}")
  | {{ t }}
  img(:src = "i")
</template>

<script>
export default {
  name: 'Thoughts',
  props: ['t', 'p', 'c', 'i'],
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bar {
  display: inline-block;
  color: white;
}

img {
  height: 1em;
}

</style>

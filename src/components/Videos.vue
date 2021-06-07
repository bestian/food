<template lang="pug">
.hello
  vue-headful(:title="'食譜-' + title")
  router-link(to="/thoughts")
    img.small(src="/img/elf.png", alt="elf")
  h1 {{ msg }}
  .ui.container(v-for="v in videos", :key="v.t")
    video(controls, :src="'/static/videos/' + v.v")
    h3 {{v.t}}
    hr
</template>

<script>

import Cards from './Cards.vue';

export default {
  name: 'Foods',
  props: ['foods', 'title'],
  components: { Cards },
  data() {
    return {
      mode: 'avatar',
      msg: '影音集',
    };
  },
  computed: {
    videos() {
      return this.foods.filter((o) => o.v);
    },
  },
  methods: {
    has(j, k) {
      if (!k) return true;
      return JSON.stringify(j).indexOf(k) > -1;
    },
  },
};
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

input, label::before, label::after {
  position: relative;
  left: .6em !important;
}
</style>

<template lang="pug">
.hello
  vue-headful(:title="'食譜-' + title")
  h1 {{ msg }}
  .ui.form.container
    .inline.fields
      label 檢視模式:
      .field
        .ui.radio.checkbox
          input(type="radio", name="mode", value="image", v-model="mode")
          label 大圖示
      .field
        .ui.radio.checkbox
          input(type="radio", name="mode", value="avatar", v-model="mode")
          label 小圖示
      .field
        .ui.radio.checkbox
          input(type="radio", name="mode", value="list", v-model="mode")
          label 文字
  cards(:foods = "foods", :showPop = "false", :mode = "mode")
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
      msg: '自然美食DIY',
    };
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

label::before, label::after {
  position: relative;
  left: .6em !important;
}
</style>

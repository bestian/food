<template lang="pug">
.hello
  vue-headful(:title="'點心盤-' + title")
  router-link(to="/thoughts")
    img.small(src="/img/elf.png", alt="elf")
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
  h3.ui.header 孩子們的點心，是每家帶一份共享。
    br
    | 有天開始，戶外的花圃一起加入點心盤。
    br
    | 飲食是整體的，不只是嘴巴吃~我們漸漸懂了：）
  cards(:foods = "snacks", :showPop = "false", :mode = "mode")
</template>

<script>

import Cards from './Cards.vue';

export default {
  name: 'Foods',
  props: ['title'],
  components: { Cards },
  data() {
    return {
      snacks: [],
      mode: 'avatar',
      msg: '點心盤',
    };
  },
  methods: {
    has(j, k) {
      if (!k) return true;
      return JSON.stringify(j).indexOf(k) > -1;
    },
  },
  mounted() {
    const vm = this;
    this.$http.get('/static/snacks.json').then((response) => {
      vm.snacks = response.data;
    });
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

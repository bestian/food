<template lang="pug">
.hello
  h1 {{ msg }}
  h3 家裡孩子從小跟著大人吃
  h3 網站上的食譜
  h3 是家常料理紀錄
  h3 這區簡單列一些2歲前嬰兒沒長牙～長牙的副食品
  h3 幼兒飲食，請直接參考
    router-link.item(to="/foods" exact='') 食譜區
  //cards(:foods = "babyfoods")
</template>

<script>

import Cards from './Cards.vue';

export default {
  name: 'Baby',
  props: ['foods'],
  components: { Cards },
  data() {
    return {
      msg: '嬰幼兒自然美食DIY',
      mySearch: '',
      showPop: false,
      pop: '',
    };
  },
  computed: {
    babyfoods() {
      return this.foods.filter((f) => f.b);
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
</style>

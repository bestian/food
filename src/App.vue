<template lang="pug">
  #app
    .ui.labeled.icon.menu
      router-link.item(to="/" exact='')
        i.fat-only.home.icon
        span 首頁
      router-link.item(to="/foods" exact='')
        i.fat-only.book.icon
        span 食譜
      router-link.fat-only.item(to="/tembei" exact='')
        i.fat-only.bullseye.icon
        span 天貝
      router-link.fat-only.item(to="/snacks" exact='')
        i.fat-only.leaf.icon
        span 點心
      router-link.item(to="/videos" exact='')
        i.fat-only.video.icon
        span 影音
      router-link.item(to="/thoughts" exact='')
        i.fat-only.comments.icon
        span 小記
      router-link.item(to="/outer" exact='')
        i.fat-only.sitemap.icon
        span 資源
      // router-link.item(to="/diet" exact='')
        i.fat-only.user.icon
        span 習慣
      // router-link.item.fat-only(to="/baby" exact='')
        i.user.icon
        span 嬰幼兒
        span 食譜
      .right.menu.fat-only
        // a.item(href="https://www.github.com/bestian/food/", target="_blank", rel="noopener noreferrer")
          i.github.icon
          | 原始碼
        a.item(href = "https://www.facebook.com/sharer/sharer.php?u=https://food.bestian.tw/", target="_blank", rel="noopener noreferrer")
          i.facebook.icon
          | 分享
    #main
      router-view(:foods = "foods", :tembeis = "tembeis", :snacks = "snacks",:title = "title")
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      foods: [],
      tembeis: [],
      snacks: [],
      title: '自然美食DIY',
    };
  },
  // computed: {
  //  foods: function () {
  //    return this.foods_o.slice().reverse()
  //  }
  // }
  mounted() {
    const vm = this;
    this.$http.get('/static/foods.json').then((response) => {
      vm.foods = response.data;
    });
    this.$http.get('/static/tembei.json').then((response) => {
      vm.tembeis = response.data;
    });
    this.$http.get('/static/snacks.json').then((response) => {
      vm.snacks = response.data;
    });
  },
};
</script>

<style>
#app {
  font-family: system-ui,-apple-system,BlinkMacSystemFont,PingFang TC,Microsoft JhengHei,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.print-only {
  visibility: hidden !important;
  display: none !important;
}

@media print {
  .no-print {
    visibility: hidden !important;
    display: none !important;
    height: 0 !important;
  }
  .print-only {
    visibility: visible !important;
    display: block !important;
  }
  img, div, .card, .column {
    page-break-inside: avoid !important;
  }
}

video {
  border-radius: 15px;
  width: 100%;
  -webkit-box-shadow: 0px 5px 10px 2px #5B5B5B;
  box-shadow: 0px 5px 10px 2px #5B5B5B;
}

.ui.card>.image, .ui.cards>.card>.image {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}

a, button, .clickable {
  cursor: pointer !important;
}

.ui.card {
  box-shadow: grey 0px 1px 5px 1px;
}

@media screen and (max-width: 600px) {
  .fat-only {
    display: none !important;
  }
  .button {
    max-width: 100% !important;
  }
  .item {
    min-width: 0 !important;
  }
}

@media screen and (max-width: 991px) {
  .fater-only {
    display: none !important;
  }
}

@media screen and (min-width: 601px) {
  .thin-only {
    display: none !important;
  }
}

.router-link-exact-active {
  background-color: #ccf !important;
}

img.float.left {
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 2em;
  height: 10em;
}

img.small {
  border-radius: 50%;
  height: 6em;
}

@media screen and (max-width:600px) {
  img.float.left {
    left: 0;
    height: 5em;
  }
}

.disabled {
  pointer-events: none;
}

</style>

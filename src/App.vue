<template lang="jade">
  #app
    .ui.labeled.icon.menu
      router-link.item(to="/" exact='')
        i.fat-only.home.icon
        span 首頁
      router-link.item(to="/foods" exact='')
        i.fat-only.book.icon
        span 食譜
      router-link.item(to="/thoughts" exact='')
        i.fat-only.comments.icon
        span 小記
      // router-link.item.fat-only(to="/baby" exact='')
        i.user.icon
        span 嬰幼兒
        span 食譜
      router-link.item(to="/outer" exact='')
        i.fat-only.sign.language.icon
        span 資源
      .right.menu.fat-only
        .item
          iframe(src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Ffood.bestian.tw&layout=button_count&size=small&mobile_iframe=true&appId=485195848253155&width=100&height=20" width="100" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media")
    #main
      router-view(:foods = "foods", :title = "title")
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      foods: [],
      title: '自然美食DIY'
    }
  },
  // computed: {
  //  foods: function () {
  //    return this.foods_o.slice().reverse()
  //  }
  // }
  mounted () {
    var vm = this
    this.$http.get('/static/foods.json').then(response => {
      vm.foods = response.data
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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

.router-link-active {
  background-color: #ccf !important;
}
</style>

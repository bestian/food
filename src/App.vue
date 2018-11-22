<template lang="jade">
  #app
    .ui.menu
      router-link.item(to="/" exact='')
        i.home.icon
        span.fat-only 首頁
      router-link.item(to="/cards" exact='')
        i.book.icon
        span.fat-only 食譜
      router-link.item(to="/thoughts" exact='')
        i.comments.icon
        span.fat-only 想法
      router-link.item(to="/baby" exact='')
        i.user.icon
        span.fat-only 嬰幼兒
        span.fat-only 食譜
      router-link.item(to="/outer" exact='')
        i.sign.language.icon
        span.fat-only 資源
    #main
      router-view(:foods = "foods", :babyfoods = "babyfoods")
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      foods: [
        {t: '絲瓜蛤蠣湯', i: '絲瓜蛤蠣湯.jpg', p: ['絲瓜削皮，半月切', '與蛤蠣一起煮', '加一點鹽']},
        {t: '青木瓜、玉米、蓮藕雜煮', i: '青木瓜、玉米、蓮藕雜煮.jpg', p: ['青木瓜、玉米、蓮藕切丁', '把它們煮在一起']},
        {t: '南瓜湯', i: '南瓜湯.jpg'},
        {t: '餅', i: '餅.jpg'},
        {t: '南瓜義大利麵', i: '南瓜義大利麵.jpg'},
        {t: '紅豆地瓜麻糬', i: '紅豆地瓜麻糬.jpg'},
        {t: '米糕', i: '米糕.jpg'}
      ],
      babyfoods: [
        {t: '南瓜湯', i: '南瓜湯.jpg'},
        {t: '米糕', i: '米糕.jpg'}
      ]
    }
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

<template lang="jade">
  #app
    .ui.menu
      router-link.item(to="/" exact='')
        i.home.icon
        | 首頁
      router-link.item(to="/thoughts" exact='')
        i.comments.icon
        | 想法
    #main
      router-view(:foods = "foods")
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      foods: [
        {t: '絲瓜蛤蠣湯', i: '絲瓜蛤蠣湯.jpg', p: ['絲瓜削皮，半月切', '與蛤蠣一起煮', '加一點鹽']},
        {t: '青木瓜、玉米、蓮藕雜煮', i: '青木瓜、玉米、蓮藕雜煮.jpg'},
        {t: '南瓜湯', i: '南瓜湯.jpg'},
        {t: '餅', i: '餅.jpg'},
        {t: '南瓜義大利麵', '南瓜義大利麵.jpg'}
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

.router-link-active {
  background-color: #ccf !important;
}
</style>

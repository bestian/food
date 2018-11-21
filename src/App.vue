<template>
  <div id="app">
    <router-view :foods = "foods"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      foods: [
        {t: '青木瓜、玉米、蓮藕雜煮', i: '青木瓜、玉米、蓮藕雜煮.jpg'},
        {t: '南瓜湯', i: '南瓜湯.jpg'},
        {t: '餅', i: '餅.jpg'}
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
  margin-top: 60px;
}
</style>

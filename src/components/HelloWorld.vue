<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="ui animated cards">
      <div class="ui card" v-for = "f in foods" v-bind:key="f">
        <div class="image">
          <img :src="'/static/images/' + f.i" />
        </div>
        <div class="ui header">
          {{f.t}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['foods'],
  data () {
    return {
      msg: '自然美食DIY'
    }
  }
}
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

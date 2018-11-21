<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="ui from container">
        <input v-model="mySearch" placeholder="以關鍵字搜詢" autofocus />
    </div>
    <hr/>
    <div class="ui animated four doubling cards container">
      <div class="ui card" v-for = "(f, index) in foods" v-bind:key="index" v-show = "has(f, mySearch)">
        <div class="image">
          <img :src="'/static/images/' + f.i" />
        </div>
        <div class="ui header">
          {{f.t}}
        </div>
        <div class="description" v-if="f.p">
          作法：
          <ol class="ui ordered list">
            <li class="item" v-for = "(p, idx) in f.p" v-bind:key="idx">{{ p }}</li>
          </ol>
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
      msg: '自然美食DIY',
      mySearch: ''
    }
  },
  methods: {
    has: function (j, k) {
      if (!k) return true
      return JSON.stringify(j).indexOf(k) > -1
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

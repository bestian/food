<template lang="jade">
.hello
  h1 推薦
  .ui.grid.container
    .ui.two.column.row
      .column
        .ui.segment
          h2 書籍推薦
          .ui.list
            .item Lorem Ipsem
            .item Lorem Ipsem
            .item Lorem Ipsem
      .column
        .ui.segment
          h2 採買網站
          .ui.list
            .item(v-for = "(s, idx) in sites", v-bind:key="idx")
              a(:href="s.h")
                img(:src="'http://www.google.com/s2/favicons?domain=' + s.h")
                | {{s.t}}
      .column
        .ui.segment
          h2 實體商店
          .ui.list
            .item Lorem Ipsem
            .item Lorem Ipsem
            .item Lorem Ipsem
</template>

<script>
export default {
  name: 'Thoughts',
  data () {
    return {
      sites: [
        {t: '上下游', h: 'https://www.newsmarket.com.tw/'},
        {t: '福和自然田園', h: 'https://www.facebook.com/pages/category/Farm/554033414613311/'},
        {t: '248農學市集', h: 'https://www.248.com.tw/'}
      ]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p {
  font-size: 16px;
  line-height: 1.6;
  text-align: left;
}
</style>

<template lang="jade">
.hello
  h1 推薦
  .ui.grid.container
    .ui.two.column.row
      .column
        .ui.segment
          h2 採買網站
          .ui.list
            .item(v-for = "(s, idx) in sites", v-bind:key="idx")
              a(:href="s.h", target="_blank")
                img(:src="'http://www.google.com/s2/favicons?domain=' + s.h")
                | {{s.t}}
      .column
        .ui.segment
          h2 書籍推薦
          .ui.left.aligned.list
            .item(v-for = "(b, idx) in books", v-bind:key="idx")
              a(:href="b.h", target="_blank")
                img(:src="'http://www.google.com/s2/favicons?domain=' + b.h")
                | {{b.t}}
      .column
        .ui.segment
          h2 實體商店
          .ui.list
            .item(v-for = "(m, idx) in markets", v-bind:key="idx")
              a(:href="m.h", target="_blank")
                img(:src="'http://www.google.com/s2/favicons?domain=' + m.h")
                | {{m.t}}
</template>

<script>
export default {
  name: 'Thoughts',
  data () {
    return {
      books: [
        {t: '幸福市集：種的安心、吃的放心', h: 'https://www.books.com.tw/products/0010577238'},
        {t: '我的幸福農莊', h: 'https://www.books.com.tw/products/0010563577'},
        {t: '這樣吃，就不需要看醫生：醫院不會告訴你的正確飲食方法', h: 'https://www.books.com.tw/products/0010670374'},
        {t: '一菜一湯的健康奇蹟：吃出驚人自癒力！', h: 'https://www.books.com.tw/products/0010656928'},
        {t: '玄米不思議：生機、美味、一身輕', h: 'https://www.books.com.tw/products/0010342906'},
        {t: '新谷醫師的餐桌：不生病的幸福飲食', h: 'https://www.books.com.tw/products/0010383951'},
        {t: '艾拉的奇蹟廚房 ： 告別過敏、慢性病，增強免疫力的無麩質蔬食料理', h: 'https://www.books.com.tw/products/0010695721'},
        {t: '發現粗食好味道', h: 'https://www.books.com.tw/products/0010585698'},
        {t: '發現粗食好味道２：塘塘與早乙女修夫婦傳授108道「穀物蔬食」樂活飲食', h: 'https://www.books.com.tw/products/0010674121'},
        {t: '自然好食小廚房：品嘗全食料理，吃進穀豆菜果籽的陽光活力', h: 'https://www.books.com.tw/products/0010690440'}
      ],
      sites: [
        {t: '上下游', h: 'https://www.newsmarket.com.tw/'},
        {t: '福和自然田園', h: 'https://www.facebook.com/pages/category/Farm/554033414613311/'},
        {t: '248農學市集', h: 'https://www.248.com.tw/'}
      ],
      markets: [
        {t: '農夫市集', h: 'https://blog.xuite.net/im918260/twblog/333145745'},
        {t: '健康廚房', h: 'https://www.newsmarket.com.tw/blog/70729/'}
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

.left.aligned {
  text-align: left;
}
</style>

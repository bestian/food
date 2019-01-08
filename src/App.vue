<template lang="jade">
  #app
    .ui.menu
      router-link.item(to="/" exact='')
        i.home.icon
        span.fat-only 首頁
      router-link.item(to="/foods" exact='')
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
      .right.menu.fat-only
        .item
          iframe(src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Ffood.bestian.tw&layout=button_count&size=small&mobile_iframe=true&appId=485195848253155&width=63&height=20" width="63" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media")
    #main
      router-view(:foods = "foods")
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      foods: [
        {
          t: '絲瓜蛤蠣湯',
          i: '絲瓜蛤蠣湯.jpg',
          p: [
            '絲瓜削皮，半月切',
            '與蛤蠣一起煮',
            '加一點鹽'
          ]},
        {
          t: '青木瓜、玉米、蓮藕雜煮',
          i: '青木瓜、玉米、蓮藕雜煮.jpg',
          p: [
            '青木瓜、玉米、蓮藕切丁',
            '把它們煮在一起']},
        {t: '南瓜湯', b: true, i: '南瓜湯.jpg'},
        {
          t: '米糠茴香煎餅',
          i: '米糠茴香煎餅.jpg',
          p: [
            '米糠粉、麵粉、新鮮茴香',
            '米糠與麵粉大約1:2，似乎再多一點也OK',
            '不用任何調味，細細咀嚼，有微甜，很好吃']},
        {t: '香蕉米煎餅', i: '餅.jpg'},
        {t: '味增蔬菜烏龍麵', i: '味增蔬菜烏龍麵.jpg', p: ['加了台灣藜、少許芋頭、海苔。', '味噌和芋頭很搭配。']},
        {t: '南瓜義大利麵', i: '南瓜義大利麵.jpg'},
        {t: '紅豆地瓜麻糬', i: '紅豆地瓜麻糬.jpg'},
        {t: '米糕', b: true, i: '米糕.jpg'},
        {t: '紅藜薑黃蘿蔔糕',
          i: '紅藜薑黃蘿蔔糕.jpg',
          b: true,
          p: ['蘿蔔糕加了在來米、梗米、地瓜粉',
            '（在來米1.5碗、梗米0.5碗、地瓜粉大約半碗吧，每種都是隨興加的）',
            '口感Q嫩，非常像早餐店那種軟軟的蘿蔔糕，下次要用這個配方做芋頭粿～']},
        {t: '紅豆年糕',
          i: '紅豆年糕.jpg',
          b: true,
          p: ['這次是加糯米、梗米、台灣紅藜、地瓜粉',
            '紅豆有先催芽',
            '順手加入乾燥牛蒡煮的水、黑糖',
            '蒸熟後，融合在一起的味道很棒',
            '外面賣的年糕都太甜了！',
            '自製年糕／麻糬真的又快又好吃喲，經濟實惠^_^']},
        {t: '芭蕉芝麻椰奶米布丁',
          i: '米布丁.jpg',
          p: ['冷水、米粉、冷水煮沸',
            '以上以碗為單位，2:2:2',
            '比例上，水可以再多一點，口感比較嫩，例如水改3碗。',
            'A :冷水拌在來米粉（有其他料等拌勻再放，或料先放B，避免米粉結塊。）可直接試味道，嚐起來不夠甜再加糖。',
            'B :將A倒入煮沸熱水中慢慢攪拌（均勻中小火），有些稠度後，放入容器，電鍋蒸熟。',
            '剛蒸熟太軟，放涼口感較好。']}
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

webpackJsonp([1],{0:function(t,e,s){s("j1ja"),t.exports=s("NHnr")},"1wN+":function(t,e){},"28aq":function(t,e){},"8o5p":function(t,e){},DBlp:function(t,e){},KkAG:function(t,e){},LP53:function(t,e,s){"use strict";function i(t,e,s,i,a,o,n,r,p,c){"boolean"!=typeof n&&(p=r,r=n,n=!1);const l="function"==typeof s?s.options:s;let d;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,a&&(l.functional=!0)),i&&(l._scopeId=i),o?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,p(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=d):e&&(d=n?function(t){e.call(this,c(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,r(t))}),d)if(l.functional){const t=l.render;l.render=function(e,s){return d.call(s),t(e,s)}}else{const t=l.beforeCreate;l.beforeCreate=t?[].concat(t,d):[d]}return s}Object.defineProperty(e,"__esModule",{value:!0}),s.d(e,"normalizeComponent",function(){return i}),s.d(e,"createInjector",function(){return o}),s.d(e,"createInjectorSSR",function(){return p}),s.d(e,"createInjectorShadow",function(){return l});const a="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function o(t){return(t,e)=>(function(t,e){const s=a?e.media||"default":t,i=r[s]||(r[s]={ids:new Set,styles:[]});if(!i.ids.has(t)){i.ids.add(t);let s=e.source;if(e.map&&(s+="\n/*# sourceURL="+e.map.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",e.media&&i.element.setAttribute("media",e.media),void 0===n&&(n=document.head||document.getElementsByTagName("head")[0]),n.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(s),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{const t=i.ids.size-1,e=document.createTextNode(s),a=i.element.childNodes;a[t]&&i.element.removeChild(a[t]),a.length?i.element.insertBefore(e,a[t]):i.element.appendChild(e)}}})(t,e)}let n;const r={};function p(t){return t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),t?("styles"in t||(t._styles=t._styles||{},Object.defineProperty(t,"styles",{enumerable:!0,get:()=>t._renderStyles(t._styles)}),t._renderStyles=t._renderStyles||c),(e,s)=>(function(t,e,s){const i=e.media||"default",a=s._styles[i]||(s._styles[i]={ids:[],css:""});if(!a.ids.includes(t)){a.media=e.media,a.ids.push(t);let s=e.source;0,a.css+=s+"\n"}})(e,s,t)):()=>{}}function c(t){let e="";for(const s in t){const i=t[s];e+='<style data-vue-ssr-id="'+Array.from(i.ids).join(" ")+'"'+(i.media?' media="'+i.media+'"':"")+">"+i.css+"</style>"}return e}function l(t,e){return(t,s)=>(function(t,e){const s=function(t){var e=document.createElement("style");return e.type="text/css",t.appendChild(e),e}(e);t.media&&s.setAttribute("media",t.media);if("styleSheet"in s)s.styleSheet.cssText=t.source;else{for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(t.source))}})(s,e)}},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"ui labeled icon menu"},[e("router-link",{staticClass:"item",attrs:{to:"/",exact:""}},[e("i",{staticClass:"fat-only home icon"}),e("span",[this._v("首頁")])]),e("router-link",{staticClass:"item",attrs:{to:"/foods",exact:""}},[e("i",{staticClass:"fat-only book icon"}),e("span",[this._v("食譜")])]),e("router-link",{staticClass:"item",attrs:{to:"/thoughts",exact:""}},[e("i",{staticClass:"fat-only comments icon"}),e("span",[this._v("小記")])]),e("router-link",{staticClass:"item",attrs:{to:"/outer",exact:""}},[e("i",{staticClass:"fat-only sign language icon"}),e("span",[this._v("資源")])]),this._m(0)],1),e("div",{attrs:{id:"main"}},[e("router-view",{attrs:{foods:this.foods}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right menu fat-only"},[e("div",{staticClass:"item"},[e("iframe",{staticStyle:{border:"none",overflow:"hidden"},attrs:{src:"https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Ffood.bestian.tw&layout=button_count&size=small&mobile_iframe=true&appId=485195848253155&width=100&height=20",width:"100",height:"20",scrolling:"no",frameborder:"0",allowTransparency:"true",allow:"encrypted-media"}})])])}]};var o=s("VU/8")({name:"App",data:function(){return{foods_o:[{t:"青木瓜、玉米、蓮藕雜煮",i:"青木瓜、玉米、蓮藕雜煮.jpg",p:["青木瓜、玉米、蓮藕切丁","把它們煮在一起，直接當主食"]},{t:"米糠茴香煎餅",i:"米糠茴香煎餅.jpg",p:["米糠粉、麵粉、新鮮茴香","米糠與麵粉大約1:2，似乎再多一點也OK","不用任何調味，細細咀嚼，有微甜，很好吃"]},{t:"紅藜薑黃蘿蔔糕",i:"紅藜薑黃蘿蔔糕.jpg",b:!0,p:["蘿蔔糕：在來米、梗米、地瓜粉","（在來米1.5碗、梗米0.5碗、地瓜粉約半碗，每種都是隨興加的）","口感Q嫩，非常像早餐店那種軟軟的蘿蔔糕，下次要用這個配方做芋頭粿～"]},{t:"牛蒡紅豆年糕",i:"紅豆年糕.jpg",b:!0,p:["這次年糕加了：糯米、梗米、台灣紅藜、地瓜粉","紅豆有先催芽","順手加入黑糖煮乾燥牛蒡片的甜湯","蒸熟後，融合在一起的味道很棒","外面賣的年糕都太甜了！","自製年糕／麻糬真的又快又好吃喲，經濟實惠^_^"]},{t:"芭蕉+芝麻椰奶\n米布丁",i:"米布丁.jpg",p:["冷水、米粉、冷水煮沸","以上以碗為單位，2:2:2","比例上，水可以再多一點，口感比較嫩，例如水改3碗。","A :冷水拌在來米粉（有其他料等拌勻再放，或料先放B，避免米粉結塊。）可直接試味道，嚐起來不夠甜再加糖。","B :將A倒入煮沸熱水中慢慢攪拌（均勻中小火），有些稠度後，放入容器，電鍋蒸熟。","剛蒸熟太軟，放涼口感較好。"]},{t:"椰奶紅豆米布丁",i:"椰奶紅豆米布丁.jpg",p:["米布丁試作過：","黑糖、紅豆椰奶、芭蕉、芝麻椰奶","黑糖：吃起來像黑糖粉圓的味道","紅豆椰奶：滋味溫和，跟紅豆牛奶的味道超像","芝麻椰奶：同上，椰奶很好用。","芭蕉：整體比較黏，建議先試上面幾種","椰奶：使用純椰肉+椰油攪拌製成的「椰子奶醬油」，濃郁甜美的椰香，煮咖哩、泰式鍋、各類甜點都好用，大力推薦！","米布丁作法：","冷水、米粉、冷水煮沸","以上以碗為單位，2:2:2","比例上，水可以再多一點，口感比較嫩，例如水改3碗。","A :冷水拌在來米粉（有其他料等拌勻再放，或料先放B，避免米粉結塊。）可直接試味道，嚐起來不夠甜再加糖。","B :將A倒入煮沸熱水中慢慢攪拌（均勻中小火），有些稠度後，放入容器，電鍋蒸熟。","紅豆口味米布丁，使用較稠的紅豆湯，斟酌替代部分冷水，例如一碗稠稠紅豆湯，取代半碗水...大概吧～我都隨意憑感覺，兩次都很成功⋯⋯照片是最後與沸水拌煮後的稠度參考。","剛蒸熟太軟，放涼口感較好。"]},{t:"麻糬+炒紅豆沙",i:"麻糬+炒紅豆沙.jpg",b:!0,p:["糯米先浸泡，打成漿後蒸熟。這種做法，白糯米黏性比『純紫糯米or純糯小米』打漿後的黏性高，因此後兩種口味，建議混搭白糯米一起打漿。","炒紅豆沙：煮好的紅豆撈出來，只要水瀝乾、均勻小火，炒起來很快乾，要多甜，自在隨意。自製紅豆沙超級好吃。"]},{t:"小米麻糬+金時芋蘋婆醬",i:"小米麻糬.jpg",b:!0,p:["小米麻糬沾白芝麻，餡料是金時芋+蘋婆，再加點二號砂調味。這個餡料本身當甜點很好吃。"]},{t:"小米麻糬烏龍麵（應用補充）",i:"小米麻糬-烏龍麵.jpg",p:["柴魚味噌湯加小米麻糬非常好吃呀，任何糯米先泡水打漿再蒸熟吃起來就不黏牙，充滿糯米香，簡單料理卻能有各種可能性。不懂怎麼很少見到小米麻糬相關料理。","另外，將小米麻糬與冰箱剩存的紅燒紅麴滷汁（再加入蒜頭、生抽壺底醬油），拌著醬吃，風味有像吃肉圓~","小米粥、小米綠豆糊、小米＋紅藜+胚芽米飯、小米甜／鹹麻糬料理...台灣自產的糯小米，營養又好料理喔^^"]},{t:"味噌蔬菜烏龍麵",i:"味噌蔬菜烏龍麵.jpg",b:!0,p:["加了台灣藜、少許芋頭、海苔。味噌和芋頭很搭配。"]},{t:"蘋婆黃醬燉飯",i:"蘋婆黃醬燉飯.jpg",b:!0,p:["如果剛好買到不甜的地瓜，試試看鹹煮吧！例如跟油豆包一起紅燒，很搭配喔。","這次把不甜的地瓜跟蘋婆一起打泥，口感溫和綿密，黃醬拿來煮蔬菜濃湯、燉飯、義大利麵都非常好吃（此款黃醬煮蔬食特別契合，裡裡外外透著一股溫和"]},{t:"薑黃烤餅",i:"薑黃烤餅.jpg",b:!0,p:["使用上下游市集的「台灣好好小麥粉」、福和自然田園的薑黃粉，直接用鐵鍋乾煎就是好吃的捲餅，訣竅是餅皮要薄一點，拍點麵粉不黏手再煎，風味有點像外面賣的印度甩餅，乾麵粉有烤過的香氣，餅皮脆中帶軟有嚼勁，有點薑黃香氣。煎薄餅很快。"]},{t:"藜麥酪梨沙拉",i:"藜麥酪梨沙拉.jpg",b:!0,p:["酪梨、番茄、小黃瓜、地瓜、蘋果","拌上無奶蛋的沙拉醬","混搭白藜麥感覺也不錯，有陣子這樣當早餐吃：）","同樣原料，改淋芥末醬油、泰式酸辣醬，又是不同風味"]},{t:"潤餅皮應用",i:"中式蛋捲潤餅皮.jpg",b:!0,p:["發現潤餅皮很好用，比吐司Q、薄、有嚼勁、好入味，很適合當點心呢～","潤餅皮也可冷凍（要封好），直接拿出來退冰，或電鍋稍微蒸過即可食。用電鍋蒸氣潤過的餅皮口感較好。愛抹什麼醬，隨意抹。","也可以包任何沙拉、鹹食，簡直百搭好用。"]},{t:"芝麻潤餅旦捲",i:"芝麻卷.jpg",b:!0,p:["誰說甜味旦捲一定要酥酥脆脆呢，孩子用潤餅皮DIY當旦捲，吃的很樂，不烘不烤即可食的中式旦捲~"]},{t:"綠茶麻糬+紅豆",i:"綠茶麻糬+紅豆.jpg",b:!0,p:["白麻糬沾綠茶粉，end."]},{t:"宇宙紫甜湯",i:"宇宙紫甜湯.jpg",b:!0,p:["家裡小孩想吃「宇宙紫」的麻糬","用甜菜根汁+蝶豆花染成紫色甜湯","甜菜根是之前當季買的，打汁後罐裝冷凍，染色好用。（可拿來做麵團黏土，顏色鮮豔）","鍋裡的深色沈澱是打碎的甜菜根"]},{t:"薑黃椰油抹醬",i:"薑黃椰油抹醬.jpg",b:!0,p:["薑黃粉+黑糖+椰油拌勻當麵包抹醬（非常非常好吃！）"]},{t:"雙色紅豆麻糬",i:"雙色紅豆麻糬.jpg",b:!0,p:["一層白糯米漿先蒸成型，再倒入小米+白糯米漿，做出來很像早期雜貨店的蛋黃&蛋白軟糖~滿可愛的。也像水煮蛋丁。","麻糬用鐵便當盒蒸很方便，多做可直接冷凍，要吃再用電鍋蒸，口感不變。"]},{t:"牛蒡桂圓紅豆湯麻糬",i:"牛蒡桂圓紅豆湯麻糬.jpg",b:!0,p:["甜湯+麻糬應用~","自家小孩很愛紅豆跟麻糬，因此常出現這兩款食材。"]},{t:"葉香飯",i:"葉子蒸飯.jpg",b:!0,p:["野薑花葉裹-胚芽小米飯","搭配南瓜杏香菇鹹蛋食用","又快要端午節了，我覺得如果是一家人吃一餐，這樣吃個『大餅粽』也滿有Fu的啦，不用一個個捆了又拆，而且葉子飯滿有Fu的～","一種不需要研究粽子包法的新樂趣","也可以用任何食用薑的葉子、芭蕉、荷花、月桃葉試試","月桃葉的香氣十分獨特，怎麼包都會入味，野薑花葉的優點是特別軟，放進鍋子好擺放。","照片中是梗米，不是糯米，比較好消化，","另加了小米，讓葉子與米飯間更密實。","煮飯比例的水量即可，也可以多點水，讓米飯比較濕潤、入味。","葉片不需抹油，完全不沾黏。包好後，最上方壓個盤子、蓋上鍋蓋，悶煮更入味~","曾經嘗試過的還有：","月桃葉：南瓜小米飯（原味／鹹味-加菜脯、紅蔥頭、香菇）","粽葉：紅藜紅豆栗子／南瓜粽（原味／鹹味）"]},{t:"紫米粽葉炊飯",i:"紫米粽葉炊飯.jpg",p:["蒸好打開來有點像昆布，哈！","原味葉子飯香單純，想吃鹹就拌點炒料，吃甜的就沾黑糖粉，很彈性。"]},{t:"紅藜香蕉飯",i:"紅藜香蕉飯.jpg",p:["紅藜香蕉飯（香蕉、黑糖適量，以香蕉葉包飯）","米我是用四季耕讀的五分米（糙米殼去一半的米），不用糯米"]},{t:"椰奶白醬燉飯",i:"椰奶白醬燉飯.jpg",b:!0,p:["省時料理，加個水把冷凍馬鈴薯丁、三色蔬菜、剩飯（紅藜胚芽米）煮一煮，加上水、椰奶、高麗菜調味就行了。 ","完全就是白醬奶香風味喔^^"]},{t:"椰奶南瓜紅豆（鹹）",i:"椰奶南瓜紅豆（鹹）.jpg",p:["南瓜先煮，再加蔬菜、蒸好的紅豆、椰奶、鹽調味","紅豆跟南瓜都可以作主食。","這好像是某天的一餐。"]},{t:"椰奶黃醬-蔬菜燉煮",i:"椰奶白醬-蔬菜燉煮.jpg",b:!0,p:["椰奶非常適合做白醬，不想吃太多鮮奶油、又喜歡白醬風味的可以參考。"]},{t:"南瓜義大利麵",i:"南瓜義大利麵.jpg",b:!0,p:["愛南瓜！椰奶南瓜義麵，非常好吃（口水）"]},{t:"椰奶紅豆＋黑糖麻糬",i:"椰奶紅豆－黑糖麻糬.jpg",b:!0,p:["麻糬冷藏後拿出來切，看著有點像切片蛋糕www","要再蒸過才能吃！只是拍照好看~","加了點黑糖的麻糬，其實也是年糕啦。"]},{t:"椰奶紅糯米麻糬",i:"椰奶紅糯米麻糬.jpg",b:!0,p:["紅糯米+白糯米製作的麻糬","淋上椰奶、黑糖，非常有南洋風味喔！"]},{t:"香蕉煎餅",i:"香蕉煎餅.jpg",b:!0,p:["香蕉、地瓜粉、糙米粉、極少許水","全部拌在一起油煎，甜甜香香的。有陣子我們全家吃超級多。","我用的是『佳實糙米米穀粉』，上下游市集可買到，粉很細，口感跟白米米穀粉一樣，推薦糙米的。","米粉混地瓜粉可以煎其他種餅，或做米疙瘩、米糕、勾芡。"]},{t:"紅糯米麻糬",i:"紅糯米麻糬.jpg",b:!0,p:["紅糯米、白糯米、梗米混搭的黑糖麻糬","超級推薦","紅糯米麻糬香氣非常棒"]},{t:"米疙瘩",i:"米疙瘩.jpg",b:!0,p:["跟麵疙撘一樣，非常快熟，口感好，充滿淡淡芋米香，適合想吃米食又沒煮飯的人。方便。","我用的是『佳實糙米米穀粉』。"]},{t:"鷹嘴豆＋燕麥胚芽米飯",i:"鷹嘴豆＋燕麥胚芽米飯.jpg",b:!0},{t:"南瓜小米粥",i:"南瓜小米粥.jpg",b:!0,p:["溫和的南瓜小米粥，愛"]},{t:"芋頭鹹粿",i:"芋頭鹹粿.jpg",b:!0,p:["因為不想吃全糯米，因此加了梗米一起打漿作粿。","跟做麻糬一樣，生米浸泡後打漿，生米漿放置一段時間後，倒掉浮在上方的水，增加米漿濃稠度，再拌入鹹鹹的炒料（湯汁不要太多），放電鍋蒸熟，這就行啦！芋頭跟醬油搭配超香，好吃！","鍋子裡如果墊著月桃葉一起蒸，另有一番風味喲～"]},{t:"紅豆湯",i:"紅豆湯.jpg",b:!0,p:["紅豆湯（紅棗、南瓜、栗子、地瓜）","紅豆湯的湯頭，我喜歡加點乾燥牛蒡","有時候會加點自製麻糬、薑粉。"]},{t:"椰棗燕麥粥",i:"椰棗燕麥粥.jpg",b:!0,p:["椰棗跟椰子沒有關係","是另一種植物","果實非常甜可以當代糖，風味溫和，有它迷人之處","我通常把椰棗切一切加點水，用果汁機打椰棗醬，用途很廣。","用椰棗調味的燕麥粥非常好吃。粥裡好像也有加點南瓜／地瓜。"]},{t:"蓮藕燕麥粥",i:"蓮藕燕麥粥.jpg",b:!0,p:["先煮蓮藕，等蓮藕煮好再加燕麥粒也OK","因為蓮藕不怕燉煮，燕麥粒很好煮熟，煮久會爆開，一樣好吃有嚼感。","燕麥粒可以事先浸泡，也可以不浸泡直接煮，","蓮藕燕麥煮出來的原味高湯超好喝，當嬰兒副食品很棒。","燕麥粒煮水的湯，冷藏隔天會有膠質凍呢，紅豆燕麥粒的高湯也很棒。","雜糧清煮的好處是沒吃完的話，隔天打漿、簡單調味也是很好的飲料／點心。（像是芋頭、胚芽米打漿後加椰奶、黑糖也很美味！）"]},{t:"紅豆天貝+蔬菜糙米飯",i:"紅豆天貝+蔬菜糙米飯.jpg",b:!0,p:["天貝是什麼，請直接google，不同豆子做的天貝，風味不太一樣。"]},{t:"家常菜飯+煎蘿蔔排\n",i:"薑黃糙米飯.jpg",b:!0,p:["超超超超好吃的蘿蔔排，用煎完蘿蔔的麻油炒青菜，配上糙米飯、灑點薑黃粉，哇！！！"]},{t:"蔬食隨手煮",i:"蔬食隨手煮.jpg",p:["（喜願米麵條）拌紫蘇葉、醬油等調味","絲瓜蔬菜","牛蒡紅藜清湯"]},{t:"南瓜米糕",i:"南瓜米糕.jpg",b:!0,p:["南瓜在來米糕配新鮮的亞麻仁油、醬油"]},{t:"黃耆當歸蔬麵",i:"黃耆當歸蔬麵.jpg",b:!0,p:["黃耆、當歸、紅棗湯底，濾過留下紅棗，加名豐油豆包、鮮菇、青菜，就是好吃的蔬食補湯麵^_^"]},{t:"味噌湯＆烏龍麵",i:"味噌湯＆烏龍麵.jpg",b:!0,p:["茄子吸油，與油豆包、花椰菜很對味，這款味噌湯我會煮多一點的量，隔天再加點烏龍麵、馬鈴薯、味噌，成為濃郁的烏龍湯麵。"]},{t:"薑黃鮮菇飯",i:"薑黃鮮菇飯.jpg",b:!0,p:["鮮菇直接用手撕開加點鹽拌炒，加入薑黃粉、少許水，最後直接和煮好的米飯拌在一起。不習慣薑黃味就少加一點。有淡淡香氣、適合慢慢咀嚼滋味的拌飯。","是從《幸福市集》這本書學的做法，裡面還有不少簡單好吃的原味料理～"]},{t:"樹豆料理",i:"樹豆料理.jpg",b:!0,p:["樹豆！她本身有自己的豆子香氣，較硬，建議先泡水，我通常會先用電鍋煮熟，煮米飯或煮料理再丟下去一起煮，吃起來比較軟。一次燉久一點也會軟。","吃樹豆會長精神喲，有蛋白質和各種營養，也很有飽食感，咀嚼樹豆，總有一種完整的滿足喜悅，身體好像在跟我傳達，是的，我就是想吃這樣的食物！","我煮過樹豆青木瓜湯、紅燒湯、樹豆咖哩、樹豆排骨、沙拉、樹納豆...各有風味，其實直接加到米飯裡煮就很好吃，雖然已經煮軟，但嚼起豆子，吃飯也會放慢品嚐。"]},{t:"天貝南瓜蔬菜麵",i:"天貝南瓜蔬菜麵.jpg",b:!0,p:["照片中是紅豆天貝、黃豆天貝天貝吃起來有點鮮菇的味道。它本來就是菌跟豆子作用的發酵食品，像納豆那樣。天貝要單獨煎，跟煎豆干類似，吃起來帶著油香。"]},{t:"月桃南瓜小米飯",i:"月桃南瓜小米飯.jpg",b:!0,p:["微微鹹的月桃南瓜小米飯（五分米、小米、南瓜、香菇、紅蔥頭、菜脯）","我是用煮好的飯XD只是好玩，試試看包入葉中冷凍，當成粽子飯吃。"]},{t:"粽葉、香蕉葉、月桃葉",i:"粽葉、香蕉葉、月桃葉.jpg",p:["由左至右","粽葉、香蕉葉、月桃葉"]},{t:"豆鼓炒黑豆芽",i:"豆鼓炒黑豆芽.jpg",p:["自己種的黑豆芽菜"]},{t:"秈稻薑黃飯",i:"秈稻薑黃飯.jpg",b:!0,p:["薑黃飯煮好後，抹一點鹽麴，配上碗豆、蔬菜，也可以加少許冷壓椰油，令人驚豔的清爽美味。"]},{t:"納豆山藥泥",i:"納豆山藥泥.jpg",b:!0,p:["生山藥泥非常綿密，加上海苔、醬油當主食，好搭配。"]},{t:"糙米納豆飯",i:"糙米納豆飯.jpg",b:!0},{t:"味噌薑醋海帶飯",i:"味噌薑醋海帶飯.jpg",b:!0,p:["味噌、蘿蔔泥、薑醋、海帶醬與米飯拌勻，吃起來像壽司飯糰，很清爽，搭配玉米、豌豆莢、蔬菜盤...這是去陽明山探路的野餐便當^^"]},{t:"蜂蜜肉桂小米麻糬",i:"蜂蜜肉桂小米麻糬.jpg",b:!0,p:["肉桂麻糬好好吃啊","肉桂粉混搭薑粉的麻糬應該也不錯"]},{t:"蘿蔔糕配芝麻葉",i:"蘿蔔糕配芝麻葉.jpg",b:!0},{t:"艾草醬米糕、青菜",i:"艾草醬米糕、青菜.jpg",b:!0,p:["新鮮艾草切碎搭配素燥醬","在來米糕加了糙米，配蔬菜享用"]},{t:"鹹小米麻糬－艾草醬、少許黑米",i:"鹹小米麻糬－艾草醬、少許黑米.jpg",b:!0},{t:"地瓜夾鹹綠豆沙",i:"地瓜夾薑炒鹹綠豆沙.jpg",b:!0,p:["這是有一年過年聚餐，我做的點心。","綠豆加鹽麴、薑泥一起炒，就是好吃的鹹綠豆沙，和甜甜的地瓜很搭配。","因為喜歡草籽粿鹹綠豆口味，靈光一現把鹹綠豆沙夾在地瓜裡～這過程有點厚工，其實地瓜切片直接抹鹹綠豆沙就行了"]},{t:"免揉麵團-薑汁肉桂葡萄乾",i:"薑汁肉桂葡萄乾麵包.jpg",b:!0,p:["薑汁肉桂+葡萄乾很搭配","這個免揉麵團配方，讓人省了很多力氣，我是蒸熟吃（喜歡蒸勝於烤麵團）吃起來是很有嚼感麵包。（還是必須叫饅頭？）"," 免揉麵團做法：（我是用三匙麵粉+加一匙全麥的比例）http://e7453268.pixnet.net/blog/post/304594190-%E5%85%A8%E9%BA%A5%E6%B3%95%E5%9C%8B%E9%BA%B5%E5%8C%85%28%E5%85%8D%E6%8F%89%E4%B8%80%29?fbclid=IwAR1APmZompDebFZr-LrJFhJMYpOH_URPNeOLjQG3-xw4lREIEXun_24Diks"]},{t:"薑黃黑胡椒麵包",i:"薑黃黑胡椒麵包.jpg",b:!0,p:["薑黃是用新鮮薑黃打汁做的，長時間發酵，薑黃汁麵團表層的顏色會比較暗，但揉一揉就看不出來了。用薑黃粉就不會這樣，但這兩種風味不太一樣。"]},{t:"紫米紅棗麵包",i:"紫米紅棗麵包.jpg",b:!0,p:["紅棗口味的蒸麵包，風味很好，紫米和紅棗搭配的口味也很棒，各有特色。紫米是另外煮熟，麵團發酵完畢才再混進去的。"]},{t:"蔬菜咖哩炒三色關廟麵",i:"蔬菜咖哩炒三色關廟麵.jpg",b:!0},{t:"蔬食紅醬義麵",i:"蔬食紅醬義麵.jpg",b:!0},{t:"全麥瓠子蒸餅",i:"全麥瓠子蒸餅.jpg",b:!0,p:["胡瓜絲、紅蘿蔔絲、全麥麵粉，調味（鹽、白胡椒等）蒸熟後，淋上麻油蔥花醬"]},{t:"紅燒粉絲",i:"紅燒粉絲.jpg",b:!0,p:["全以老菜脯、帶殼龍眼乾調味的紅燒粉絲","有個感覺就是要連殼一起煮，放心，並不會吃到殼...."]},{t:"洋蔥白蘿蔔絲全麥麵糕-素肉羹",i:"洋蔥白蘿蔔絲全麥麵糕.jpg",b:!0,p:["以上材料，加入胡椒鹽、少許麻油，整鍋麵糊蒸熟，用湯匙挖一勺勺，滋味有鹹有甜有香，有像肉羹，素食店或可考慮棄素料，用這樣的真食物做素羹。"]},{t:"樹豆納豆",i:"樹豆納豆.jpg",b:!0,p:["花了幾天催芽，昨晚用電鍋嘗試－樹豆納豆，算是成功啦！","樹豆要煮軟比黃豆快，所以我用樹豆。","本日早餐：糙在來米、蕎麥、海苔、少許白蘿蔔泥、醬油、樹豆納豆。","本來還有蔬菜雜煮湯，但吃完活生生的納豆飯就不想吃烹煮全熟的菜湯了。"]},{t:"暖身餐1",i:"暖身餐1.jpg",b:!0,p:["南瓜、催芽紅豆、雙色地瓜、湯圓、無糖黑芝麻"]},{t:"暖身餐2",i:"暖身餐2.jpg",b:!0,p:["紅棗、紅糯米、雙色地瓜、薑黃、薑片"]},{t:"煎白蘿蔔",i:"煎白蘿蔔.jpg",p:["煎白蘿蔔、自然農法柚子醬、豬乳母、味噌雜煮湯（芋頭地瓜豆腐）"]},{t:"牛蒡山藥蔬菜味噌湯",i:"牛蒡山藥蔬菜味噌湯.jpg",p:["牛蒡好東西，做涼拌菜好吃，煮湯有溫和的牛蒡香氣、甜味，","照片是牛蒡山藥蔬菜味噌湯","（牛蒡豆苗海苔味噌湯也很棒）:D"]},{t:"炸醬",i:"炸醬.jpg",p:["四片豆干、一顆半的洋蔥、紅蘿蔔、豆瓣醬適量","（改用豆鼓和少量豆腐乳也很對味），","煮起來很快，最左邊的圓盒就夠兩人份的拌量。"]},{t:"耐人尋味番茄麵",i:"耐人尋味番茄麵.jpg",p:["耐人尋味的好吃啊，步驟簡單，好吃的關鍵是下鍋手順與煮番茄的時間：）"]},{t:"葛鬱金、蕃茄蔬菜燉煮",i:"葛鬱金、蕃茄蔬菜燉煮.jpg"},{t:"無敵拌麵",i:"無敵拌麵.jpg",p:["加的冷水不超過麵粉的一半，","例如500g麵粉配230g水，","揉勻後靜置40分鐘醒麵，","擀麵時撒點麵粉，切厚薄寬細隨喜，","搭配喜歡的醬料與蔥花後，就是無敵拌麵啦：Ｄ"]},{t:"蔬菜咖哩",i:"蔬菜咖哩.jpg",p:["以米糠、薑黃汁當底的蔬菜咖哩","冷凍生薑黃片打汁，並以米糠增加部分濃稠度，其實加點鹽調味，不做成咖哩也很棒。"]},{t:"百香果醬",i:"百香果醬.jpg",p:["用百香果殼的膠質煮百香果醬，google搜尋有作法，是用百香果殼的膠質做軟糖，我是做成果醬。膠質本身沒有味道，百香果醬我建議煮好先吃完全沒加糖的味道，再一點一點調味，我很驚訝的是，一旦額外加糖，果香的風味真的完全不一樣了，糖還得加到一個量，才會有滿意的味道。其實原本是不想加糖的，只是有蜂蜜沒用完，所以試著加加看～"]},{t:"芋粿燒茄子",i:"芋粿燒茄子.jpg",p:["福和的自然農法芋頭、四季耕讀的米糠、糯米、主婦聯盟的地瓜粉。","實驗性，芋米漿鋪平在盤子上用電鍋蒸熟，切成條，拌豆鼓炒茄子，很對味。任何的米製品加入芋頭，真的多一股迷人風味...."]},{t:"紫米紅棗饅頭",i:"紫米紅棗饅頭.jpg",p:["紫米紅棗饅頭大推薦，麵團加入大量煮熟的紫米、去籽切塊的紅棗，非常非常迷人的香甜！我覺得比紫米桂圓好吃欸！","照片不好看，那是麵團有加油、放進烤箱的紫米紅棗「麵包」，同樣的麵團蒸成饅頭好好吃呀～麵包比較乾一點。我愛水蒸的饅頭！推薦做做看，我沒另外加糖，風味非常棒！"]},{t:"紅豆糯米粥",i:"紅豆糯米粥.jpg",b:!0,p:["自然農法紅豆、糙糯米、帶殼龍眼、台灣公館紅棗","龍眼和紅棗有微甜，沒有另外放糖，吃起來感覺很溫和。"]},{t:"蘿蔔排",i:"蘿蔔排.jpg",b:!0,p:["自從看了若杉奶奶的書，白蘿蔔的首順料理方式，就變成煎蘿蔔排，吃起來有熱量，蘿蔔風味特別飽滿。作法：切片中小火煎，用黑麻油最好，快熟了加點米酒，起鍋前少許醬油。"]},{t:"豆薯酪梨沙拉",i:"豆薯酪梨沙拉.jpg"},{t:"蔬食咖哩",i:"蔬食咖哩.jpg",p:["咖哩最有趣就是突發奇想，組合後，意外的更好吃--至今最豐盛協調的蔬食咖哩^_^","材料：","主婦聯盟的原生山藥、三色蔬菜、白花椰","紫地瓜、喜願發芽黑豆、發芽黃豆","塘塘廚房蔬食咖哩醬包"]},{t:"青木瓜百香果",i:"青木瓜百香果.jpg",p:["青木瓜刨絲不是很容易，但用削皮器就很簡單啦，跟百香果拌在一起就是清爽的小菜，要加點糖或果醋隨意。百香果佛手瓜也不錯。"]},{t:"豆花茶碗蒸",i:"豆花茶碗蒸.jpg",p:["想吃嫩嫩的茶碗蒸，但不想吃用蛋，靈機一動把名豐豆花放到味噌高湯裡（柴魚、主婦聯盟火鍋料、味噌），哇！幾乎就像在吃茶碗蒸，高湯加入米麵條、牛蒡蔬菜就是正餐了。吃素的人，豆花茶碗蒸加味噌、香菇煮友（鮮菇）、蔥花，也是很好的風味。當然和味噌豆腐湯滋味不同啦～"]},{t:"海苔飯捲",i:"海苔飯捲.jpg",p:["五分米加紫米，越嚼越香，飯捲愛什麼捲什麼，搭配吃滿樂趣的，五顏六色看著也很愉快。不用工具，攤平用手卷就行了。其中裡面的梅汁南瓜是小姑姑教我的，南瓜切薄片很快汆燙，泡梅汁/梅醋，清脆酸爽，好吃。"]},{t:"薑汁南瓜豆花",i:"薑汁南瓜豆花.jpg",p:["名豐豆腐拿來當豆花吃，豆香十足，加入自然農法薑汁蜜/溪底遙桂圓薑汁/棗道薑汁紅棗....方便的夏日甜點。"]},{t:"漬蘿蔔",i:"漬蘿蔔.jpg",p:["白蘿蔔、彩虹蘿蔔切薄片醃漬，甜甜的，夏天夾幾片配飯好清爽，糖鹽沒有比例，隨意做的，越放越好吃。也用味噌做一些，切片後直接埋進去。"]},{t:"梅子番茄",i:"梅子番茄.jpg",p:["番茄切半或用叉子戳洞，或直接丟下去煮，都試試看沒關係。"]},{t:"家常便當",i:"家常便當.jpg",p:["有段時間早上會去散步，先在家喝牛蒡油豆腐湯，散步再吃便當。昆布佃煮、彩虹蘿蔔漬、艾草破布子煎蛋、紅藜胚芽米飯。"]},{t:"味噌雜煮",i:"味噌雜煮.jpg",p:["味噌煮什麼都很好吃，蓮藕、芋頭、牛蒡、茄子、地瓜....","第一鍋可以吃原味清湯，之後加薑片味噌、再來加豆瓣／韓式泡菜....一鍋多吃"]},{t:"免煮洛神果醬",i:"免煮洛神果醬.jpg",p:["半顆紅龍果皮切條、洛神果乾、少許紅龍果肉、檸檬汁，丟到果汁機打，就是新鮮速成果醬。加紅龍果肉是為了機器攪打方便，火龍果皮富膠質、無雜味，可運用任何紅色果醬，例如紅龍果皮鮮草莓醬、蘋果醬、草莓蔓越莓、草莓葡萄乾...新鮮好吃，不用加糖一直煮^^"]},{t:"紅火龍果皮",i:"紅火龍果皮.jpg",p:["自然農法、新鮮火龍果皮","洗淨留下紅色的皮切細條，沒特殊味道，有膠質，可以當木耳絲用...搭配涼麵也很亮眼。"]},{t:"自製米漿",i:"自製米漿.jpg",p:["除了喝鹹濃湯，發芽玄米（糙米）粉以中小火乾炒加花生醬就是好喝的米漿！不用怕焦，反正一點焦也無所謂，還會更香。我加了白芝麻粒、黑芝麻粉一起炒，最後加點黃砂糖，非常好喝呀，濃稠版像麵茶，比外面調好的麵茶粉（我買過好幾種真材實料牌）要更好喝，而且是糙米粉營養又飽足，真是找到利用米粉的好方法了＾＾"]},{t:"栗子豆漿",i:"栗子豆漿.jpg",p:["顧名思義，可自行調配地瓜豆漿、黑芝麻豆漿、黑豆黃豆漿....愛加什麼加什麼。不過我這是買到太甜的栗子醬，混到自打的無糖豆漿裡。"]},{t:"臭豆腐+辣腐乳",i:"臭豆腐+辣腐乳.jpg",p:["自製臭豆腐常常不夠臭...湯汁跟豆腐要有風味，我加了加辣腐乳覺得很搭！"]},{t:"芋頭燒飯",i:"芋頭燒飯.jpg",p:["有種作法是所有生料和生米一起炒，再放電鍋蒸熟。我的做法是料炒熟拌煮好的米飯。蒜頭、香菇、豆包、醬油、海鹽，也許還有一點自然農法薑油，除了芋頭飯，換成長豆飯、高麗菜飯都很香。"]},{t:"自製甜麴",i:"自製甜麴.jpg",p:["把米麴跟溫暖的米飯，用手混合均勻，黏黏的糯米飯會變得濕潤。","不知為什麼以前覺得麻煩，想了兩年，現在製作起來才發現這麼快。","感受麴菌喜歡的溫度，雙手一起工作，製做出發酵食品，這個過程，人的狀態、產生的思考，也像孕育著和宇宙串連的種子呢。","做法：","米麴200g","熟飯800g（白米/糯米皆可，糯米比較甜）","飯煮熟後，在溫暖不燙手的狀態，均勻拌入米麴。","製作甜麴：維持約30度放一天","製作甘酒：維持50-60度一個晚上","這次製作的是甜麴，打算當代糖使用。","兩者吃起來都甜甜的，甘酒會比較甜。甜麴我是跟幸福農莊的惠雯老師那邊接觸到的，米麴也是向她們（藝食知選）購買。","上網只查得到甘酒，這次會做甜麴，也是剛好遇到惠雯老師，請益這兩者的作法。","這也是我目前跟網路上看到的自製甘酒教學比較後，最簡單的作法。","『甘酒』資訊參考：","https://www.japaholic.com/tw/article/348863/","期待冬天喝上溫暖甘酒，以及自製甜麴點心:D"]},{t:"椰子",i:"椰子.jpg",p:["跟可靠的店家，買了台東的新鮮椰子，喝完椰子水(2碗量)，把椰肉挖出來、去皮，加水用小美機打新鮮椰奶(有半鍋多)、瀝出椰蓉。全家一起分工~","生的新鮮椰奶很好喝啊，乳脂香甜溫和。","冷藏一晚上，表面是椰子鮮奶油，底下是椰子汁，我覺得新鮮椰奶＆椰奶油在風味上可以替代牛奶、鮮奶油。直接吃椰子鮮奶油非常美味。","網路上有教學，保存足夠的椰子鮮奶油，就能打發成蛋糕上塗抹的鮮奶油。","喜歡這樣，抱一顆椰子回家DIY，吃得開心～","最大工程是把椰肉跟堅硬的椰殼分離這步驟。"]},{t:"百香果蒟蒻條",i:"百香果蒟蒻條.jpg",p:["蒟蒻洗一洗，加水、一點醋浸泡，去味比較快。","之後拌入新鮮百香果。","鳳梨蒟蒻條也很清爽。"]},{t:"荔枝糕",i:"荔枝糕.jpg",p:["在來米、新鮮荔枝、椰子醬","在來米粉+水+椰子醬+新鮮荔枝拌煮後蒸熟。","吃起來超級有荔枝香氣，切小塊口感有點像綠豆糕。"]},{t:"九層塔臭豆腐義大利麵",i:"九層塔臭豆腐義大利麵.jpg"},{t:"北瓜",i:"北瓜.jpg",p:["北瓜是一種瓜，殼很堅硬，通常是直接剖半，放電鍋蒸熟再挖出瓜肉作料理。瓜本身有清甜，有部分像粉絲那樣一條條，很有嚼感。也有滑滑的汁液，像有膠質。","北瓜料理：","北瓜酸白菜","北瓜薑汁燒肉（混搭多種蔬菜拌炒，爽口好吃）","還想到北瓜酸辣羹、北瓜涼拌菜、北瓜韭菜盒子（代替粉絲）","也有人覺得北瓜可作為餐廳環保魚翅的料理可能。","突然愛上北瓜～"]}]}},computed:{foods:function(){return this.foods_o.slice().reverse()}}},a,!1,function(t){s("lzcb")},null,null).exports,n=s("/ocq"),r=s("9Zon"),p={name:"Intro",props:["foods"],components:{VueGallerySlideshow:s.n(r).a},data:function(){return{index:void 0,myIndex:93}},computed:{images:function(){return this.foods.map(function(t){return"/static/images/"+t.i})}},methods:{next:function(){}},mounted:function(){setInterval(this.next,2e3)}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("div",{staticClass:"ui piled segment container"},[s("h1",[t._v("關於平台")]),t._m(0),t._l(t.images,function(e,i){return s("img",{key:i,staticClass:"image",attrs:{src:e},on:{click:function(e){t.index=i}}})}),s("vue-gallery-slideshow",{attrs:{images:t.images,index:t.index},on:{close:function(e){t.index=null}}})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("這裡用來存放個人（Hsinyi）的煮食紀錄，"),e("br"),this._v("總數上，蔬食比例較多，沒有特別標素不素，"),e("br"),this._v("料理靈感來自大地、靈感乍現，以及許多人分享的經驗與智慧。"),e("br"),this._v("飲食區打食材關鍵字（如：紅豆）可以找到相關的料理，"),e("br"),this._v("祝大家食在喜悅、自然~")])}]};var l=s("VU/8")(p,c,!1,function(t){s("28aq")},"data-v-043958b4",null).exports,d=s("mvHQ"),u=s.n(d),m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("div",{attrs:{id:"pop"}},[s("div",{staticClass:"back"}),s("div",{staticClass:"ui container"},[s("div",{staticClass:"ui centered card"},[s("div",{staticClass:"item"},[s("iframe",{staticStyle:{border:"none",overflow:"hidden"},attrs:{src:"https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Ffood.bestian.tw%2F#%2Fitem%2F"+t.$route.params.id+"&layout=button&size=small&mobile_iframe=true&appId=485195848253155&width=63&height=20",width:"63",height:"20",scrolling:"no",frameborder:"0",allowTransparency:"true",allow:"encrypted-media"}})]),s("div",{staticClass:"image"},[s("img",{attrs:{src:"/static/images/"+t.pop.i}})]),s("div",{staticClass:"ui header"},[t._v(t._s(t.pop.t))]),t.pop.p?s("div",{staticClass:"description",class:{long:t.pop.p.length>2||t.pop.p[0].length>30}},[t._v("說明："),s("hr"),s("ol",{staticClass:"ui bulleted list"},t._l(t.pop.p,function(e,i){return s("li",{key:i,staticClass:"item"},[t._v(t._s(e))])}))]):t._e()])])])])},staticRenderFns:[]};var h={name:"Cards",props:["foods","showPop","mode"],components:{Pop:s("VU/8")({name:"Pop",props:["foods"],data:function(){return{pop:{}}},methods:{},mounted:function(){this.pop=this.foods[this.$route.params.id]}},m,!1,function(t){s("KkAG")},"data-v-1e381e48",null).exports},data:function(){return{msg:"自然美食DIY",mySearch:"",n:20}},methods:{has:function(t,e){return!e||u()(t).indexOf(e)>-1},loadMore:function(){this.n+=20}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("div",{staticClass:"ui from container"},[s("div",{staticClass:"ui search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.mySearch,expression:"mySearch"},{name:"autofocus",rawName:"v-autofocus",value:t.v-t.autofocus,expression:"v-autofocus"}],staticClass:"prompt",attrs:{placeholder:"以關鍵字搜詢"},domProps:{value:t.mySearch},on:{input:[function(e){e.target.composing||(t.mySearch=e.target.value)},function(e){t.n+=10}]}})])]),s("hr"),s("div",{directives:[{name:"show",rawName:"v-show",value:"image"==t.mode,expression:"mode == 'image'"},{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"ui animated four doubling cards container",attrs:{"infinite-scroll-distance":"10"}},t._l(t.foods.slice(0,t.n),function(e,i){return s("router-link",{directives:[{name:"show",rawName:"v-show",value:t.has(e,t.mySearch),expression:"has(f, mySearch)"}],key:i,staticClass:"ui card",attrs:{to:"/item/"+i}},[s("div",{staticClass:"image"},[s("img",{attrs:{src:"/static/images/"+e.i}})]),s("div",{staticClass:"filler"}),s("div",{staticClass:"ui header"},[t._v(t._s(e.t))]),(e.p,t._e())])})),s("div",{directives:[{name:"show",rawName:"v-show",value:"avatar"==t.mode,expression:"mode == 'avatar'"},{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"ui animated eight doubling cards container",attrs:{"infinite-scroll-distance":"10"}},t._l(t.foods.slice(0,t.n),function(e,i){return s("router-link",{directives:[{name:"show",rawName:"v-show",value:t.has(e,t.mySearch),expression:"has(f, mySearch)"}],key:i,staticClass:"ui card",attrs:{to:"/item/"+i}},[s("div",{staticClass:"image"},[s("img",{attrs:{src:"/static/images/"+e.i}})]),s("div",{staticClass:"filler"}),s("div",{staticClass:"ui header"},[t._v(t._s(e.t))]),(e.p,t._e())])})),s("div",{directives:[{name:"show",rawName:"v-show",value:"list"==t.mode,expression:"mode == 'list'"},{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"ui animated horizontal divided left aligned list container",attrs:{"infinite-scroll-distance":"10"}},t._l(t.foods.slice(0,t.n),function(e,i){return s("router-link",{directives:[{name:"show",rawName:"v-show",value:t.has(e,t.mySearch),expression:"has(f, mySearch)"}],key:i,staticClass:"item",attrs:{to:"/item/"+i}},[s("div",{staticClass:"image ui avatar"},[s("img",{attrs:{src:"/static/images/"+e.i}})]),s("div",{staticClass:"filler"}),s("div",{staticClass:"ui header"},[t._v(t._s(e.t))]),(e.p,t._e())])})),s("router-link",{attrs:{to:"/foods"}},[s("transition",{attrs:{name:"fade"}},[s("pop",{directives:[{name:"show",rawName:"v-show",value:t.showPop,expression:"showPop"}],attrs:{foods:t.foods}})],1)],1)],1)},staticRenderFns:[]};var f=s("VU/8")(h,v,!1,function(t){s("8o5p")},"data-v-265887d5",null).exports,g={name:"Foods",props:["foods"],components:{Cards:f},data:function(){return{mode:"image",msg:"自然美食DIY"}},methods:{has:function(t,e){return!e||u()(t).indexOf(e)>-1}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),s("div",{staticClass:"ui form container"},[s("div",{staticClass:"inline fields"},[s("label",[t._v("檢視模式")]),s("div",{staticClass:"field"},[s("div",{staticClass:"ui radio checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.mode,expression:"mode"}],attrs:{type:"radio",name:"mode",value:"image"},domProps:{checked:t._q(t.mode,"image")},on:{change:function(e){t.mode="image"}}}),s("label",[t._v("大圖示")])])]),s("div",{staticClass:"field"},[s("div",{staticClass:"ui radio checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.mode,expression:"mode"}],attrs:{type:"radio",name:"mode",value:"avatar"},domProps:{checked:t._q(t.mode,"avatar")},on:{change:function(e){t.mode="avatar"}}}),s("label",[t._v("小圖示")])])]),s("div",{staticClass:"field"},[s("div",{staticClass:"ui radio checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.mode,expression:"mode"}],attrs:{type:"radio",name:"mode",value:"list"},domProps:{checked:t._q(t.mode,"list")},on:{change:function(e){t.mode="list"}}}),s("label",[t._v("文字")])])])])]),s("cards",{attrs:{foods:t.foods,showPop:!1,mode:t.mode}})],1)},staticRenderFns:[]};var w=s("VU/8")(g,_,!1,function(t){s("PkYV")},"data-v-1b457444",null).exports,b={name:"Foods",props:["foods"],components:{Cards:f},data:function(){return{msg:"自然美食DIY"}},methods:{has:function(t,e){return!e||u()(t).indexOf(e)>-1}}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))]),e("cards",{attrs:{foods:this.foods,showPop:!0}})],1)},staticRenderFns:[]};var C=s("VU/8")(b,j,!1,function(t){s("DBlp")},"data-v-57f3b6ff",null).exports,y={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v("這裡放一些對煮食、飲食的想法記錄")]),s("div",{staticClass:"ui piled segment container"},[s("img",{attrs:{src:"/static/img/hsyinyi.jpg"}}),s("h2",[t._v("對飲食的想法")]),s("p",[t._v("如果真的要說有什麼特別，我會比較注意除了米飯和麵粉，也以其他澱粉、五穀雜糧當主食，例如吃小米、芋頭、南瓜、地瓜、山藥當主食。")]),s("p",[t._v("例如有天的早餐，是催芽綠豆與糙薏仁，加點南瓜、椰棗調味的清爽甜湯。")]),s("p",[t._v("有時也煮燕麥，私心很喜歡燕麥粒的風味與口感，它也是黏性比較低的澱粉，吃起來感覺很舒服。請注意這邊是說燕麥粒，不是燕麥片，燕麥粒好煮好嚼，可Ｑ可軟，可甜可鹹可搭配米飯一起煮，很好用。")]),s("p",[t._v("蓮藕高湯單煮非常好喝，混搭燕麥有點澱粉濃稠感也很棒，有時這就是我們家的主食！特別前陣子蓮藕產季，喜歡煮蓮藕燕麥湯！什麼調味都不加就好喝極了！小孩喜歡這種雜糧或五穀根莖（例如牛蒡）的清湯，風味好，營養又好吸收。")]),s("p",[t._v("我的經驗是，均衡的雜糧蔬食、不過度調味，比在意有沒有吃到肉啊蛋啊來得重要。^_^")])]),s("div",{staticClass:"ui piled segment container"},[s("img",{attrs:{src:"/static/img/hsyinyi.jpg"}}),s("h2",[t._v("吃夠了 VS 吃飽了")]),s("p",[t._v("小孩從小吃東西，我都是問他：吃夠了嗎？")]),s("p",[t._v("我不問他『吃飽了嗎？』，因為『飽』其實是身體在表達胃塞不下了、感到勉強的訊號，人真的不需要從小被養成『習慣吃撐』的感覺，才認為這是『吃到了』。")]),s("p",[t._v("大部分人都有這個經驗吧，小時候明明不太餓，或已經吃不下了，卻還得留在餐桌上，被要求碗裡的食物要吃完才能下桌（也可能開始討價還價）。")]),s("p",[t._v("有了小孩後，我選擇較自在的飲食量、飲食節奏。")]),s("p",[t._v("當然有時也希望他把碗裡的吃完:p 或多吃幾口~有時他願意，有時說：我已經吃夠了。或是：我睏了想先睡午覺，起來再吃。")]),s("p",[t._v("練習去感覺自己的狀態跟需要。")]),s("p",[t._v("我也比較少說『趕快吃』，畢竟餓了進食是本能，慢慢嚼，吃夠了就好^^")]),s("p",[t._v("大人要注意的就是食材的營養搭配、小孩的咀嚼習慣~")]),s("p",[t._v("關於後者，我跟他解釋(順手拿起桌子旁的袋子)：")]),s("p",[t._v("身體裡有個小袋子裝吞進去的食物，但袋子裡面沒有牙齒，牙齒是在外面幫忙咬碎，這樣吞進去，身體工作才比較舒服。不然太大塊，你胃裡的袋子說：啊~我沒有牙齒咬不動，這個吃不動啊～～～有時肚子會脹脹的，感覺不舒服，那是身體在跟你講話。")]),s("p",[t._v("有時小孩也會不想咬“有點難嚼”的東西，我說，你的牙齒在長大，他要咬有點硬的東西，才會變得強壯，才有力氣穩穩往上長。慢慢咬，吃地球媽媽的食物，你的牙齒跟身體會很有力量。")]),s("p",[t._v("：）")])])])}]};var x=s("VU/8")({name:"Thoughts",data:function(){return{}},methods:{}},y,!1,function(t){s("aAw4")},"data-v-73f12eb1",null).exports,k={name:"Baby",props:["foods"],components:{Cards:f},data:function(){return{msg:"嬰幼兒自然美食DIY",mySearch:"",showPop:!1,pop:""}},computed:{babyfoods:function(){return this.foods.filter(function(t){return t.b})}},methods:{has:function(t,e){return!e||u()(t).indexOf(e)>-1}}},S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),s("h3",[t._v("家裡孩子從小跟著大人吃")]),s("h3",[t._v("網站上的食譜")]),s("h3",[t._v("是家常料理紀錄")]),s("h3",[t._v("這區簡單列一些2歲前嬰兒沒長牙～長牙的副食品")]),s("h3",[t._v("幼兒飲食，請直接參考"),s("router-link",{staticClass:"item",attrs:{to:"/foods",exact:""}},[t._v("食譜區")])],1)])},staticRenderFns:[]};var E=s("VU/8")(k,S,!1,function(t){s("ZlVs")},"data-v-5c7e0644",null).exports,N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v("推薦")]),s("div",{staticClass:"ui grid container"},[s("div",{staticClass:"ui two column row"},[s("div",{staticClass:"column"},[s("div",{staticClass:"ui segment"},[s("h2",[t._v("採買網站")]),s("div",{staticClass:"ui list"},t._l(t.sites,function(e,i){return s("div",{key:i,staticClass:"item"},[s("a",{attrs:{href:e.h,target:"_blank"}},[s("img",{attrs:{src:"http://www.google.com/s2/favicons?domain="+e.h}}),t._v(t._s(e.t))])])}))])]),s("div",{staticClass:"column"},[s("div",{staticClass:"ui segment"},[s("h2",[t._v("書籍推薦")]),s("div",{staticClass:"ui left aligned list"},t._l(t.books,function(e,i){return s("div",{key:i,staticClass:"item"},[s("a",{attrs:{href:e.h,target:"_blank"}},[s("img",{attrs:{src:"http://www.google.com/s2/favicons?domain="+e.h}}),t._v(t._s(e.t))])])}))])]),s("div",{staticClass:"column"},[s("div",{staticClass:"ui segment"},[s("h2",[t._v("實體商店")]),s("div",{staticClass:"ui list"},t._l(t.markets,function(e,i){return s("div",{key:i,staticClass:"item"},[s("a",{attrs:{href:e.h,target:"_blank"}},[s("img",{attrs:{src:"http://www.google.com/s2/favicons?domain="+e.h}}),t._v(t._s(e.t))])])}))])])])])])},staticRenderFns:[]};var F=s("VU/8")({name:"Thoughts",data:function(){return{books:[{t:"幸福市集：種的安心、吃的放心",h:"https://www.books.com.tw/products/0010577238"},{t:"我的幸福農莊",h:"https://www.books.com.tw/products/0010563577"},{t:"這樣吃，就不需要看醫生：醫院不會告訴你的正確飲食方法",h:"https://www.books.com.tw/products/0010670374"},{t:"一菜一湯的健康奇蹟：吃出驚人自癒力！",h:"https://www.books.com.tw/products/0010656928"},{t:"玄米不思議：生機、美味、一身輕",h:"https://www.books.com.tw/products/0010342906"},{t:"新谷醫師的餐桌：不生病的幸福飲食",h:"https://www.books.com.tw/products/0010383951"},{t:"艾拉的奇蹟廚房 ： 告別過敏、慢性病，增強免疫力的無麩質蔬食料理",h:"https://www.books.com.tw/products/0010695721"},{t:"發現粗食好味道",h:"https://www.books.com.tw/products/0010585698"},{t:"發現粗食好味道２：塘塘與早乙女修夫婦傳授108道「穀物蔬食」樂活飲食",h:"https://www.books.com.tw/products/0010674121"},{t:"自然好食小廚房：品嘗全食料理，吃進穀豆菜果籽的陽光活力",h:"https://www.books.com.tw/products/0010690440"}],sites:[{t:"上下游",h:"https://www.newsmarket.com.tw/"},{t:"福和自然田園",h:"https://www.facebook.com/pages/category/Farm/554033414613311/"},{t:"248農學市集",h:"https://www.248.com.tw/"}],markets:[{t:"農夫市集",h:"https://blog.xuite.net/im918260/twblog/333145745"},{t:"健康廚房",h:"https://www.newsmarket.com.tw/blog/70729/"}]}},methods:{}},N,!1,function(t){s("1wN+")},"data-v-4ea334d9",null).exports;i.a.use(n.a);var R=new n.a({routes:[{path:"/",name:"Intro",component:l},{path:"/foods",name:"Foods",component:w},{path:"/item/:id",name:"item",component:C},{path:"/thoughts",name:"Thoughts",component:x},{path:"/baby",name:"Baby",component:E},{path:"/outer",name:"Outer",component:F}]}),A=s("vVk6"),P=s.n(A),T=s("bqTm"),V=s.n(T);i.a.directive("autofocus",P.a),i.a.use(V.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:R,components:{App:o},template:"<App/>"})},PkYV:function(t,e){},ZlVs:function(t,e){},aAw4:function(t,e){},lzcb:function(t,e){}},[0]);
//# sourceMappingURL=app.e9d430bdd67019522104.js.map
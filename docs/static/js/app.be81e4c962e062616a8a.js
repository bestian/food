webpackJsonp([1],{NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view",{attrs:{foods:this.foods}})],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App",data:function(){return{foods:[{t:"絲瓜蛤蠣湯",i:"絲瓜蛤蠣湯.jpg",p:["絲瓜削皮，半月切","與蛤蠣一起煮","加一點鹽"]},{t:"青木瓜、玉米、蓮藕雜煮",i:"青木瓜、玉米、蓮藕雜煮.jpg"},{t:"南瓜湯",i:"南瓜湯.jpg"},{t:"餅",i:"餅.jpg"}]}}},s,!1,function(e){a("na6x")},null,null).exports,i=a("/ocq"),o=a("mvHQ"),c=a.n(o),u={name:"HelloWorld",props:["foods"],data:function(){return{msg:"自然美食DIY",mySearch:""}},methods:{has:function(e,t){return!t||c()(e).indexOf(t)>-1}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._v(" "),a("div",{staticClass:"ui from container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mySearch,expression:"mySearch"}],attrs:{placeholder:"以關鍵字搜詢",autofocus:""},domProps:{value:e.mySearch},on:{input:function(t){t.target.composing||(e.mySearch=t.target.value)}}})]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"ui animated four doubling cards container"},e._l(e.foods,function(t,n){return a("div",{directives:[{name:"show",rawName:"v-show",value:e.has(t,e.mySearch),expression:"has(f, mySearch)"}],key:n,staticClass:"ui card"},[a("div",{staticClass:"image"},[a("img",{attrs:{src:"/static/images/"+t.i}})]),e._v(" "),a("div",{staticClass:"ui header"},[e._v("\n        "+e._s(t.t)+"\n      ")]),e._v(" "),t.p?a("div",{staticClass:"description"},[e._v("\n        作法：\n        "),a("ol",{staticClass:"ui ordered list"},e._l(t.p,function(t,n){return a("li",{key:n,staticClass:"item"},[e._v(e._s(t))])}))]):e._e()])}))])},staticRenderFns:[]};var d=a("VU/8")(u,l,!1,function(e){a("QzQm")},"data-v-7d0763c4",null).exports;n.a.use(i.a);var p=new i.a({routes:[{path:"/",name:"HelloWorld",component:d}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:p,components:{App:r},template:"<App/>"})},QzQm:function(e,t){},na6x:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.be81e4c962e062616a8a.js.map
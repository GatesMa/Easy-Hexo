(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{262:function(t,e,o){},387:function(t,e,o){t.exports=o(388)},388:function(t,e,o){o(50),o(29),t.exports=o(389)},389:function(t,e,o){var n=o(8),r=o(101);t.exports=o(0).getIterator=function(t){var e=r(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},390:function(t,e,o){"use strict";var n=o(262);o.n(n).a},395:function(t,e,o){"use strict";o.r(e);var n=o(95),r=o.n(n);var a=o(387),l=o.n(a);function i(t,e){return function(t){if(r()(t))return t}(t)||function(t,e){var o=[],n=!0,r=!1,a=void 0;try{for(var i,u=l()(t);!(n=(i=u.next()).done)&&(o.push(i.value),!e||o.length!==e);n=!0);}catch(t){r=!0,a=t}finally{try{n||null==u.return||u.return()}finally{if(r)throw a}}return o}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=o(40),s=o.n(u),p=(o(45),o(141),{props:{src:{type:String,default:"",required:!0},screenshot:{type:Boolean,default:!1},subtitle:{type:String,default:""},danmakuId:{type:String,default:""},danmakuApi:{type:String,default:"https://api.prprpr.me/dplayer/"},autoplay:{type:Boolean,default:!1},theme:{type:String,default:"#b7daff"},loop:{type:Boolean,default:!1},hotkey:{type:Boolean,default:!0},preload:{type:String,default:"auto"},logo:{type:String,default:""},mutex:{type:Boolean,default:!0},crossOrigin:{type:Boolean,default:!1},proxy:{type:String,default:"https://cors-anywhere.herokuapp.com"}},data:function(){return{shouldShowPlayer:!1}},methods:{showPlayer:function(){var t=this;this.shouldShowPlayer=!0,s.a.all([Promise.all([o.e(0),o.e(2)]).then(o.t.bind(null,392,7)),Promise.all([o.e(0),o.e(2)]).then(o.t.bind(null,393,7))]).then(function(e){new(0,i(e,1)[0].default)({container:t.$refs.container,autoplay:t.autoplay,theme:t.theme,loop:t.loop,screenshot:t.screenshot,hotkey:t.hotkey,preload:t.preload,logo:t.logo,video:{url:t.crossOrigin?"".concat(t.proxy,"/").concat(t.src):t.src},subtitle:{url:t.crossOrigin?"".concat(t.proxy,"/").concat(t.subtitle):t.subtitle,color:"#000000",fontSize:"25px",bottom:"2%"},danmaku:{id:t.danmakuId,api:t.danmakuApi},mutex:t.mutex})})}}}),c=(o(390),o(42)),d=Object(c.a)(p,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dplayer"},[e("button",{directives:[{name:"show",rawName:"v-show",value:!this.shouldShowPlayer,expression:"!shouldShowPlayer"}],staticClass:"btn-show-player",on:{click:this.showPlayer}},[this._v("\n    点击加载播放器\n  ")]),this._v(" "),this.shouldShowPlayer?e("div",{ref:"container"}):this._e()])},[],!1,null,"19aa3fd2",null);e.default=d.exports}}]);
(function(e){function t(t){for(var r,u,a=t[0],l=t[1],s=t[2],p=0,f=[];p<a.length;p++)u=a[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);i&&i(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var i=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},8594:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var r=n("7a23");const o=Object(r["createElementVNode"])("h1",null,"Test",-1);function c(e,t){const n=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[o,Object(r["createVNode"])(n)],64)}var u=n("6b0d"),a=n.n(u);const l={},s=a()(l,[["render",c]]);var i=s,p=n("6605");const f={class:"home"},b=Object(r["createElementVNode"])("h2",null,"Home",-1),d=[b];function m(e,t,n,o,c,u){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",f,d)}var v=Object(r["defineComponent"])({name:"Home",components:{}});const O=a()(v,[["render",m]]);var h=O;const j=[{path:"/",name:"Home",component:h}],y=Object(p["createRouter"])({history:Object(p["createWebHistory"])("/hero-admin-pro/"),routes:j});var g=y,w=n("5502"),k=Object(w["a"])({state:{},mutations:{},actions:{},modules:{}}),P=n("c3a1"),x=n("284f"),_=n.n(x);n("8594");const S=Object(r["createApp"])(i);S.use(P["a"]),S.use(_.a),S.use(k).use(g).mount("#app")}});
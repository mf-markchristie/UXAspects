(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"4CIL":function(n,a){n.exports={snippet:'angular<span class="token punctuation">.</span><span class="token function">module</span><span class="token punctuation">(</span><span class="token string">\'app\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">controller</span><span class="token punctuation">(</span><span class="token string">\'ProgressBarDemoCtrl\'</span><span class="token punctuation">,</span> ProgressBarDemoCtrl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">ProgressBarDemoCtrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n\n    vm<span class="token punctuation">.</span>percentComplete <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>\n\n    vm<span class="token punctuation">.</span><span class="token function-variable function">random</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        vm<span class="token punctuation">.</span>percentComplete <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>',example:"angular.module('app').controller('ProgressBarDemoCtrl', ProgressBarDemoCtrl);\n\nfunction ProgressBarDemoCtrl() {\n    var vm = this;\n\n    vm.percentComplete = 15;\n\n    vm.random = function () {\n        vm.percentComplete = Math.floor((Math.random() * 100) + 1);\n    };\n}"}},"5GH2":function(n,a,l){var t={"./app.html":"hIQ+","./app.ts":"LcJ0"};function s(n){var a=e(n);return l(a)}function e(n){var a=t[n];if(!(a+1)){var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}return a}s.keys=function(){return Object.keys(t)},s.resolve=e,n.exports=s,s.id="5GH2"},"6HwM":function(n,a,l){var t={"./controller.js":"4CIL","./layout.html":"p3Vb"};function s(n){var a=e(n);return l(a)}function e(n){var a=t[n];if(!(a+1)){var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}return a}s.keys=function(){return Object.keys(t)},s.resolve=e,n.exports=s,s.id="6HwM"},LcJ0:function(n,a){n.exports={snippet:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n\n@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    selector<span class="token punctuation">:</span> <span class="token string">\'app\'</span><span class="token punctuation">,</span>\n    templateUrl<span class="token punctuation">:</span> <span class="token string">\'./app.component.html\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span> <span class="token punctuation">{</span>\n\n    value<span class="token punctuation">:</span> number <span class="token operator">=</span> <span class="token number">15</span><span class="token punctuation">;</span>\n\n    <span class="token function">randomize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n',example:"import { Component } from '@angular/core';\n\n@Component({\n    selector: 'app',\n    templateUrl: './app.component.html'\n})\nexport class AppComponent {\n\n    value: number = 15;\n\n    randomize() {\n        this.value = Math.floor((Math.random() * 100) + 1);\n    }\n}\n"}},V3TL:function(n,a,l){"use strict";l.r(a);var t=l("CcnG"),s=l("T/2f"),e=l("YZ8U"),p=l("mrSG"),u=l("AVdU"),o=l("yHOM"),c=function(n){function a(){var a=n.call(this,l("6HwM"))||this;return a.codepen={html:a.snippets.raw.layoutHtml,htmlAttributes:{"ng-controller":"ProgressBarDemoCtrl as vm"},js:[a.snippets.raw.controllerJs]},a}return Object(p.__extends)(a,n),Object(p.__decorate)([Object(o.a)("ComponentsProgressBarNg1Component")],a)}(u.a),r=function(n){function a(){var a=n.call(this,l("5GH2"))||this;return a.value=15,a.plunk={files:{"app.component.html":a.snippets.raw.appHtml,"app.component.ts":a.snippets.raw.appTs},modules:[{imports:["ProgressBarModule"],library:"@ux-aspects/ux-aspects"}]},a}return Object(p.__extends)(a,n),a.prototype.randomize=function(){this.value=Math.floor(100*Math.random()+1)},Object(p.__decorate)([Object(o.a)("ComponentsProgressBarComponent")],a)}(u.a),i={category:e.b.resolveCategoryData(e.a.Components,"Progress")},d=function(){return function(n,a){a.registerResolver(n)}}(),m=l("WmtN"),k=l("CfOV"),b=l("pMnS"),g=l("GBPT"),v=l("rYg0"),f=l("wRzz"),h=l("unTc"),y=l("r1ng"),x=l("COk8"),C=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function w(n){return t["\u0275vid"](2,[(n()(),t["\u0275eld"](0,0,null,null,1,"uxd-progress-bar-wrapper",[],null,null,null,null,null)),t["\u0275did"](1,999424,null,0,f.a,[t.ElementRef,t.Injector],null,null),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](3,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](5,0,null,null,13,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Create a "])),(n()(),t["\u0275eld"](7,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["progressbar"])),(n()(),t["\u0275ted"](-1,null,[" element and set the value attribute to the value property. Set "])),(n()(),t["\u0275eld"](10,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,['type="accent"'])),(n()(),t["\u0275ted"](-1,null,["\n  and the max attribute to the maximum allowed value. Inside the "])),(n()(),t["\u0275eld"](13,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["progressbar"])),(n()(),t["\u0275ted"](-1,null,[" element you can specify a "])),(n()(),t["\u0275eld"](16,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["span"])),(n()(),t["\u0275ted"](-1,null,["\n  which can be used to display the current value."])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](20,0,null,null,17,"ux-tabset",[],[[2,"tabs-left",null],[2,"tabs-right",null]],null,null,k.Zb,k.S)),t["\u0275prd"](512,null,h.ve,h.ve,[]),t["\u0275did"](22,49152,null,0,h.te,[h.ve],{minimal:[0,"minimal"]},null),(n()(),t["\u0275ted"](-1,0,["\n  "])),(n()(),t["\u0275eld"](24,0,null,0,5,"ux-tab",[["heading","HTML"]],null,null,null,k.Yb,k.R)),t["\u0275did"](25,180224,null,0,h.me,[h.ve],{heading:[0,"heading"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](27,0,null,0,1,"uxd-snippet",[["language","html"]],null,null,null,y.b,y.a)),t["\u0275did"](28,114688,null,0,x.a,[],{language:[0,"language"],content:[1,"content"]},null),(n()(),t["\u0275ted"](-1,0,["\n  "])),(n()(),t["\u0275ted"](-1,0,["\n  "])),(n()(),t["\u0275eld"](31,0,null,0,5,"ux-tab",[["heading","JavaScript"]],null,null,null,k.Yb,k.R)),t["\u0275did"](32,180224,null,0,h.me,[h.ve],{heading:[0,"heading"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](34,0,null,0,1,"uxd-snippet",[["language","javascript"]],null,null,null,y.b,y.a)),t["\u0275did"](35,114688,null,0,x.a,[],{language:[0,"language"],content:[1,"content"]},null),(n()(),t["\u0275ted"](-1,0,["\n  "])),(n()(),t["\u0275ted"](-1,0,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n"]))],function(n,a){var l=a.component;n(a,1,0),n(a,22,0,!1),n(a,25,0,"HTML"),n(a,28,0,"html",l.snippets.compiled.layoutHtml),n(a,32,0,"JavaScript"),n(a,35,0,"javascript",l.snippets.compiled.controllerJs)},function(n,a){n(a,20,0,"left"===t["\u0275nov"](a,22).stacked,"right"===t["\u0275nov"](a,22).stacked)})}function M(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"uxd-progress-bar-ng1",[],null,null,null,w,C)),t["\u0275did"](1,49152,null,0,c,[],null,null)],null,null)}var T=t["\u0275ccf"]("uxd-progress-bar-ng1",c,M,{},{},[]),O=l("9hoY"),N=l("+gXg"),D=l("rpQh"),R=l("2RDK"),j=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function L(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"ux-progress-bar",[["class","m-b-md"],["max","100"],["role","progressbar"]],[[1,"aria-valuemin",0],[1,"aria-valuemax",0],[1,"aria-valuenow",0]],null,null,k.Nb,k.G)),t["\u0275did"](1,49152,null,0,h.gd,[],{value:[0,"value"],max:[1,"max"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](3,0,null,0,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(n()(),t["\u0275ted"](4,null,["","%"])),(n()(),t["\u0275ted"](-1,0,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](7,0,null,null,2,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(n,a,l){var t=!0;return"click"===a&&(t=!1!==n.component.randomize()&&t),t},null,null)),t["\u0275did"](8,212992,null,0,h.if,[t.ElementRef,h.Sb,h.c,t.ChangeDetectorRef],null,null),(n()(),t["\u0275ted"](-1,null,["Random"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](11,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](13,0,null,null,7,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n    A progress bar can be created by using the "])),(n()(),t["\u0275eld"](15,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["ux-progress-bar"])),(n()(),t["\u0275ted"](-1,null,[" component. Custom content can be added to the\n    bar by adding HTML inside the "])),(n()(),t["\u0275eld"](18,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["ux-progress-bar"])),(n()(),t["\u0275ted"](-1,null,[" tag.\n"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](22,0,null,null,7,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n    Additional contextual information can be provided to screen readers by adding an "])),(n()(),t["\u0275eld"](24,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["aria-valuetext"])),(n()(),t["\u0275ted"](-1,null,[" attribute\n    to the "])),(n()(),t["\u0275eld"](27,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["ux-progress-bar"])),(n()(),t["\u0275ted"](-1,null,[".\n"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](31,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n    The following attributes can be used to configure the appearance and behavior of the progress bar:\n"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](34,0,null,null,26,"uxd-api-properties",[["tableTitle","Inputs"]],null,null,null,O.b,O.a)),t["\u0275did"](35,49152,null,0,N.a,[],{tableTitle:[0,"tableTitle"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](37,0,null,0,23,"tbody",[],null,null,null,null,null)),(n()(),t["\u0275eld"](38,0,null,null,5,"tr",[["name","value"],["type","number"],["uxd-api-property",""]],null,null,null,D.b,D.a)),t["\u0275did"](39,49152,null,0,R.a,[],{name:[0,"name"],type:[1,"type"]},null),(n()(),t["\u0275ted"](-1,0,["\n        The value the bar should represent. This will be compared to the "])),(n()(),t["\u0275eld"](41,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["max"])),(n()(),t["\u0275ted"](-1,0,[" value to determine the width of\n        the bar.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](45,0,null,null,2,"tr",[["defaultValue","0"],["name","min"],["type","number"],["uxd-api-property",""]],null,null,null,D.b,D.a)),t["\u0275did"](46,49152,null,0,R.a,[],{name:[0,"name"],type:[1,"type"],defaultValue:[2,"defaultValue"]},null),(n()(),t["\u0275ted"](-1,0,["\n        The lower limit of the bar.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](49,0,null,null,2,"tr",[["defaultValue","100"],["name","max"],["type","number"],["uxd-api-property",""]],null,null,null,D.b,D.a)),t["\u0275did"](50,49152,null,0,R.a,[],{name:[0,"name"],type:[1,"type"],defaultValue:[2,"defaultValue"]},null),(n()(),t["\u0275ted"](-1,0,["\n        The upper limit of the bar.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](53,0,null,null,2,"tr",[["defaultValue","grey7"],["name","trackColor"],["type","string"],["uxd-api-property",""]],null,null,null,D.b,D.a)),t["\u0275did"](54,49152,null,0,R.a,[],{name:[0,"name"],type:[1,"type"],defaultValue:[2,"defaultValue"]},null),(n()(),t["\u0275ted"](-1,0,["\n        The color of the track.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](57,0,null,null,2,"tr",[["defaultValue","accent"],["name","barColor"],["type","string"],["uxd-api-property",""]],null,null,null,D.b,D.a)),t["\u0275did"](58,49152,null,0,R.a,[],{name:[0,"name"],type:[1,"type"],defaultValue:[2,"defaultValue"]},null),(n()(),t["\u0275ted"](-1,0,["\n        The color of the bar.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](62,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["The following code can be used to create the example above:"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](65,0,null,null,17,"ux-tabset",[],[[2,"tabs-left",null],[2,"tabs-right",null]],null,null,k.Zb,k.S)),t["\u0275prd"](512,null,h.ve,h.ve,[]),t["\u0275did"](67,49152,null,0,h.te,[h.ve],{minimal:[0,"minimal"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](69,0,null,0,5,"ux-tab",[["heading","HTML"]],null,null,null,k.Yb,k.R)),t["\u0275did"](70,180224,null,0,h.me,[h.ve],{heading:[0,"heading"]},null),(n()(),t["\u0275ted"](-1,0,["\n        "])),(n()(),t["\u0275eld"](72,0,null,0,1,"uxd-snippet",[["language","html"]],null,null,null,y.b,y.a)),t["\u0275did"](73,114688,null,0,x.a,[],{language:[0,"language"],content:[1,"content"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](76,0,null,0,5,"ux-tab",[["heading","JavaScript"]],null,null,null,k.Yb,k.R)),t["\u0275did"](77,180224,null,0,h.me,[h.ve],{heading:[0,"heading"]},null),(n()(),t["\u0275ted"](-1,0,["\n        "])),(n()(),t["\u0275eld"](79,0,null,0,1,"uxd-snippet",[["language","javascript"]],null,null,null,y.b,y.a)),t["\u0275did"](80,114688,null,0,x.a,[],{language:[0,"language"],content:[1,"content"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275ted"](-1,0,["\n"]))],function(n,a){var l=a.component;n(a,1,0,l.value,"100"),n(a,8,0),n(a,35,0,"Inputs"),n(a,39,0,"value","number"),n(a,46,0,"min","number","0"),n(a,50,0,"max","number","100"),n(a,54,0,"trackColor","string","grey7"),n(a,58,0,"barColor","string","accent"),n(a,67,0,!1),n(a,70,0,"HTML"),n(a,73,0,"html",l.snippets.compiled.appHtml),n(a,77,0,"JavaScript"),n(a,80,0,"javascript",l.snippets.compiled.appTs)},function(n,a){var l=a.component;n(a,0,0,t["\u0275nov"](a,1).min,t["\u0275nov"](a,1).max,t["\u0275nov"](a,1).valueNow),n(a,4,0,l.value),n(a,65,0,"left"===t["\u0275nov"](a,67).stacked,"right"===t["\u0275nov"](a,67).stacked)})}function E(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"uxd-progress-bar",[],null,null,null,L,j)),t["\u0275did"](1,49152,null,0,r,[],null,null)],null,null)}var H=t["\u0275ccf"]("uxd-progress-bar",r,E,{},{},[]),U=l("Ip0R"),V=l("gIcY"),_=l("Fzqc"),z=l("dWZg"),P=l("qAlS"),S=l("eDkP"),B=l("M2Lx"),I=l("lLAP"),F=l("x4zH"),Z=l("qina"),A=l("zCE2"),J=l("4c35"),Y=l("ZYCi"),G=l("FLOw"),q=l("XtaT");l.d(a,"ComponentsProgressModuleNgFactory",function(){return Q});var Q=t["\u0275cmf"](d,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[m.a,k.hb,k.a,b.a,g.a,v.a,T,H]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,U.NgLocalization,U.NgLocaleLocalization,[t.LOCALE_ID,[2,U["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,V.B,V.B,[]),t["\u0275mpd"](6144,_.b,null,[U.DOCUMENT]),t["\u0275mpd"](4608,_.c,_.c,[[2,_.b]]),t["\u0275mpd"](4608,z.a,z.a,[]),t["\u0275mpd"](5120,P.c,P.a,[[3,P.c],t.NgZone,z.a]),t["\u0275mpd"](5120,P.f,P.e,[[3,P.f],z.a,t.NgZone]),t["\u0275mpd"](4608,S.f,S.f,[P.c,P.f,t.NgZone,U.DOCUMENT]),t["\u0275mpd"](5120,S.b,S.g,[[3,S.b],U.DOCUMENT]),t["\u0275mpd"](4608,S.e,S.e,[P.f,U.DOCUMENT]),t["\u0275mpd"](5120,S.c,S.j,[[3,S.c],U.DOCUMENT]),t["\u0275mpd"](4608,S.a,S.a,[S.f,S.b,t.ComponentFactoryResolver,S.e,S.c,t.ApplicationRef,t.Injector,t.NgZone,U.DOCUMENT]),t["\u0275mpd"](5120,S.h,S.i,[S.a]),t["\u0275mpd"](4608,B.b,B.b,[]),t["\u0275mpd"](4608,h.Oe,h.Oe,[]),t["\u0275mpd"](4608,h.cd,h.cd,[]),t["\u0275mpd"](4608,I.j,I.j,[z.a]),t["\u0275mpd"](4608,I.i,I.i,[I.j,t.NgZone,U.DOCUMENT]),t["\u0275mpd"](136192,I.c,I.b,[[3,I.c],U.DOCUMENT]),t["\u0275mpd"](5120,I.m,I.l,[[3,I.m],[2,I.k],U.DOCUMENT]),t["\u0275mpd"](5120,I.h,I.f,[[3,I.h],t.NgZone,z.a]),t["\u0275mpd"](4608,h.c,h.c,[[2,h.a]]),t["\u0275mpd"](4608,h.Sb,h.Sb,[I.h,h.c,t.RendererFactory2]),t["\u0275mpd"](5120,"flotDataService",F.b,["$injector"]),t["\u0275mpd"](5120,"lineDataService",F.c,["$injector"]),t["\u0275mpd"](1073742336,Z.a,Z.a,[]),t["\u0275mpd"](1073742336,A.a,A.a,[]),t["\u0275mpd"](1073742336,U.CommonModule,U.CommonModule,[]),t["\u0275mpd"](1073742336,h.fb,h.fb,[]),t["\u0275mpd"](1073742336,V.y,V.y,[]),t["\u0275mpd"](1073742336,V.l,V.l,[]),t["\u0275mpd"](1073742336,_.a,_.a,[]),t["\u0275mpd"](1073742336,J.c,J.c,[]),t["\u0275mpd"](1073742336,z.b,z.b,[]),t["\u0275mpd"](1073742336,P.b,P.b,[]),t["\u0275mpd"](1073742336,S.d,S.d,[]),t["\u0275mpd"](1073742336,B.c,B.c,[]),t["\u0275mpd"](1073742336,h.z,h.z,[]),t["\u0275mpd"](1073742336,h.Ne,h.Ne,[]),t["\u0275mpd"](1073742336,h.fd,h.fd,[]),t["\u0275mpd"](1073742336,Y.p,Y.p,[[2,Y.v],[2,Y.m]]),t["\u0275mpd"](1073742336,h.yd,h.yd,[]),t["\u0275mpd"](1073742336,G.a,G.a,[]),t["\u0275mpd"](1073742336,h.bd,h.bd,[]),t["\u0275mpd"](1073742336,I.a,I.a,[]),t["\u0275mpd"](1073742336,h.b,h.b,[]),t["\u0275mpd"](1073742336,q.a,q.a,[]),t["\u0275mpd"](1073742336,h.hd,h.hd,[]),t["\u0275mpd"](1073742336,h.ue,h.ue,[]),t["\u0275mpd"](1073742336,F.a,F.a,[]),t["\u0275mpd"](1073742336,d,d,[t.ComponentFactoryResolver,e.b]),t["\u0275mpd"](1024,Y.k,function(){return[[{path:"**",component:s.a,data:i}]]},[])])})},"hIQ+":function(n,a){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ux-progress-bar</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m-b-md<span class="token punctuation">"</span></span> <span class="token attr-name">[value]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ value }}%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ux-progress-bar</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>randomize()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Random<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',example:'<ux-progress-bar class="m-b-md" [value]="value" max="100">\n    <span>{{ value }}%</span>\n</ux-progress-bar>\n\n<button type="button" class="btn btn-primary" (click)="randomize()">Random</button>'}},p3Vb:function(n,a){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>progressbar</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vm.percentComplete<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>accent<span class="token punctuation">"</span></span> <span class="token attr-name">max</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">ng-bind</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vm.percentComplete+<span class="token punctuation">\'</span>%<span class="token punctuation">\'</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>progressbar</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span> <span class="token attr-name">ng-click</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vm.random()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Random<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',example:'<progressbar value="vm.percentComplete" type="accent" max="100">\n    <span ng-bind="vm.percentComplete+\'%\'"></span>\n</progressbar>\n<button type="button" class="btn btn-primary" ng-click="vm.random()">Random</button>'}}}]);
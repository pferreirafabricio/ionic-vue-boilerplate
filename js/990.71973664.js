"use strict";(self["webpackChunkapp_boilerplate"]=self["webpackChunkapp_boilerplate"]||[]).push([[990],{8990:function(e,t,n){n.r(t),n.d(t,{createSwipeBackGesture:function(){return o}});var r=n(6587),a=n(545),i=n(1779);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const o=(e,t,n,o,c)=>{const s=e.ownerDocument.defaultView;let l=(0,a.i)(e);const u=e=>{const t=50,{startX:n}=e;return l?n>=s.innerWidth-t:n<=t},p=e=>l?-e.deltaX:e.deltaX,h=e=>l?-e.velocityX:e.velocityX,d=n=>(l=(0,a.i)(e),u(n)&&t()),b=e=>{const t=p(e),n=t/s.innerWidth;o(n)},f=e=>{const t=p(e),n=s.innerWidth,a=t/n,i=h(e),o=n/2,l=i>=0&&(i>.2||t>o),u=l?1-a:a,d=u*n;let b=0;if(d>5){const e=d/Math.abs(i);b=Math.min(e,540)}c(l,a<=0?.01:(0,r.m)(0,a,.9999),b)};return(0,i.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:d,onStart:n,onMove:b,onEnd:f})}}}]);
//# sourceMappingURL=990.71973664.js.map
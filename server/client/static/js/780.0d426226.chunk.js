"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[780],{9780:function(t,e,n){n.r(e),n.d(e,{MediaList:function(){return g},default:function(){return p}});var i=n(7689),r=n(7479),l=n(2791),s=n(9682),a=n(4935),o=n(184),c=function(){return(0,o.jsxs)("svg",{width:"13",height:"13",viewBox:"0 0 13 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M7 12L2 6.5L7 1",stroke:"#141414",strokeWidth:"2.2"}),(0,o.jsx)("path",{d:"M12.5 6.5L3 6.5",stroke:"#141414",strokeWidth:"2.2"})]})},u=function(){return(0,o.jsx)("svg",{width:"5",height:"9",viewBox:"0 0 5 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M1 1L4 4.5L0.999999 8",stroke:"#141414","stroke-width":"1.5"})})},d=function(t){var e=t.label,n=t.title,r=(0,i.s0)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("h4",{className:"title__links",onClick:function(){r(-1)},children:[(0,o.jsx)("div",{children:(0,o.jsx)(c,{})}),"back to ",n]}),(0,o.jsxs)("div",{className:"media__list-subtitle",children:[(0,o.jsx)("h5",{children:n}),(0,o.jsx)(u,{}),(0,o.jsx)("h5",{children:e})]})]})},h=function(t){var e=t.arr,n=t.label,c=t.mediaTypesFoo,u=(0,i.UO)().setId,h=(0,i.s0)(),f=(0,i.TH)();console.log("arrWraperList---\x3e",e);var m=(0,l.useContext)(s.I).device;return(0,o.jsxs)("div",{className:"media__list content",children:[(0,o.jsx)(i.j3,{}),(0,o.jsxs)("div",{className:"media",children:[(0,o.jsx)(d,{label:n,title:c.title}),(0,o.jsx)("div",{className:"media__list",children:(0,r.R)(e,m).map((function(t,e){return(0,o.jsx)("div",{className:"media__itemline-".concat(t.length,"-").concat(e%2===0?"p":"n"," media__itemline"),children:t.map((function(t,n){return(0,o.jsx)("div",{style:{backgroundImage:"url(".concat(a.n2,"uploads/").concat(t.src.url,")")},className:"media__item main--image",children:(0,o.jsx)("div",{className:"media__item-bg",onClick:function(){!function(t){h("/".concat(f.pathname.split("/")[1],"/").concat(u,"/").concat(c.title,"/").concat(t))}(t.src.currentNumber)},children:(0,o.jsxs)("button",{className:"media__item-bg_but",children:[" ",c.buttonTitle]})})},"media-list-wraper"+e)}))},"media-list-wraper"+e)}))})]})]})},f=n(9042),m=n(5747),g=function(){var t,e=(0,i.TH)(),n=(0,l.useContext)(s.I),r=n.video,a=n.image,c=(0,i.UO)().setId,u=(0,m.mz)(e.pathname.split("/")[1]),d=(0,l.useMemo)((function(){var t;return(null===(t=(u.tag===f.l.PHOTO?a:r).find((function(t){return c===t.folderId})))||void 0===t?void 0:t.src.map((function(t){return{src:t,photoId:t}})))||[]}),[r,a,u]),g=(null===(t=a.find((function(t){return c===t.folderId})))||void 0===t?void 0:t.label)||"";return(0,o.jsx)(h,{arr:d,label:g,mediaTypesFoo:u})},p=g},5747:function(t,e,n){n.d(e,{TF:function(){return s},bK:function(){return l},mz:function(){return r}});var i=n(9042),r=function(t){switch(t){case"photo-list":return{title:"photo",buttonTitle:"open full",tag:i.l.PHOTO};case"video-list":return{title:"video",buttonTitle:"play",tag:i.l.VIDEO};default:return{title:"not found",buttonTitle:"not found",tag:i.l.PHOTO}}},l=function(t){switch(t){case"photo":default:return{tag:i.l.PHOTO};case"video":return{tag:i.l.VIDEO}}},s=function(t){switch(t){case"folder-photo":default:return{format:i.s.PHOTO,tag:i.l.PHOTO};case"folder-video":return{format:i.s.VIDEO,tag:i.l.VIDEO}}}},7479:function(t,e,n){n.d(e,{R:function(){return r}});var i=n(3433),r=function(t,e){if(0===t.length)return[];if(1===t.length)return[(0,i.Z)(t)];if("pc"!==e)return t.map((function(t){return[t]}));for(var n=[],r=0;r<t.length;r+=3)n.push((0,i.Z)(t.slice(r,r+3>=t.length?t.length:r+3)));return 1===n[n.length-1].length&&n[n.length-1].unshift(n[n.length-2].pop()),n}}}]);
//# sourceMappingURL=780.0d426226.chunk.js.map
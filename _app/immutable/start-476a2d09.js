import{S as He,i as Xe,s as Ye,a as Qe,e as O,c as Ze,b as z,g as M,t as I,d as W,f as A,h as F,j as xe,o as ve,k as et,l as tt,m as rt,n as we,p as X,q as nt,r as at,u as ot,v as C,w as Y,x as B,y as J,z as Ce}from"./chunks/index-79f3f4d0.js";import{g as Be,f as Je,s as Z,a as Ee,b as it,i as st}from"./chunks/singletons-8d809a0b.js";const lt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),ct=function(a,e){return new URL(a,e).href},Fe={},w=function(e,r,o){return!r||r.length===0?e():Promise.all(r.map(n=>{if(n=ct(n,o),n in Fe)return;Fe[n]=!0;const c=n.endsWith(".css"),t=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${t}`))return;const s=document.createElement("link");if(s.rel=c?"stylesheet":lt,c||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),c)return new Promise((i,f)=>{s.addEventListener("load",i),s.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())};function ft(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function ut(a){for(const e in a)a[e]=a[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return a}const _t=["href","pathname","search","searchParams","toString","toJSON"];function pt(a,e){const r=new URL(a);for(const o of _t){let n=r[o];Object.defineProperty(r,o,{get(){return e(),n},enumerable:!0,configurable:!0})}return r[Symbol.for("nodejs.util.inspect.custom")]=(o,n,c)=>c(a,n),mt(r),r}function mt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function dt(a){let e=5381,r=a.length;if(typeof a=="string")for(;r;)e=e*33^a.charCodeAt(--r);else for(;r;)e=e*33^a[--r];return(e>>>0).toString(36)}const Re=window.fetch;window.fetch=(a,e)=>{if((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(a instanceof Request?a.url:a.toString(),document.baseURI).href;fe.delete(o)}return Re(a,e)};const fe=new Map;function ht(a,e,r){let n=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;r&&typeof r.body=="string"&&(n+=`[data-hash="${dt(r.body)}"]`);const c=document.querySelector(n);if(c!=null&&c.textContent){const{body:t,...s}=JSON.parse(c.textContent),i=c.getAttribute("data-ttl");return i&&fe.set(e,{body:t,init:s,ttl:1e3*Number(i)}),Promise.resolve(new Response(t,s))}return Re(a,r)}function gt(a,e){const r=fe.get(a);if(r){if(performance.now()<r.ttl)return new Response(r.body,r.init);fe.delete(a)}return Re(a,e)}const wt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function bt(a){const e=[],r=[];let o=!0;return{pattern:a===""?/^\/$/:new RegExp(`^${a.split(/(?:\/|$)/).filter(vt).map((c,t,s)=>{const i=decodeURIComponent(c),f=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(f)return e.push(f[1]),r.push(f[2]),"(?:/(.*))?";const g=t===s.length-1;return i&&"/"+i.split(/\[(.+?)\]/).map((T,K)=>{if(K%2){const U=wt.exec(T);if(!U)throw new Error(`Invalid param: ${T}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,G,$,H]=U;return e.push($),r.push(H),G?"(.*?)":"([^/]+?)"}return g&&T.includes(".")&&(o=!1),T.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:r}}function vt(a){return!/^\([^)]+\)$/.test(a)}function Et(a,e,r,o){const n={};for(let c=0;c<e.length;c+=1){const t=e[c],s=r[c],i=a[c+1]||"";if(s){const f=o[s];if(!f)throw new Error(`Missing "${s}" param matcher`);if(!f(i))return}n[t]=i}return n}function yt(a,e,r,o){const n=new Set(e);return Object.entries(r).map(([s,[i,f,g]])=>{const{pattern:T,names:K,types:U}=bt(s),G={id:s,exec:$=>{const H=T.exec($);if(H)return Et(H,K,U,o)},errors:[1,...g||[]].map($=>a[$]),layouts:[0,...f||[]].map(t),leaf:c(i)};return G.errors.length=G.layouts.length=Math.max(G.errors.length,G.layouts.length),G});function c(s){const i=s<0;return i&&(s=~s),[i,a[s]]}function t(s){return s===void 0?s:[n.has(s),a[s]]}}function $t(a){let e,r,o;var n=a[0][0];function c(t){return{props:{data:t[2],form:t[1]}}}return n&&(e=new n(c(a))),{c(){e&&C(e.$$.fragment),r=O()},l(t){e&&Y(e.$$.fragment,t),r=O()},m(t,s){e&&B(e,t,s),z(t,r,s),o=!0},p(t,s){const i={};if(s&4&&(i.data=t[2]),s&2&&(i.form=t[1]),n!==(n=t[0][0])){if(e){M();const f=e;I(f.$$.fragment,1,0,()=>{J(f,1)}),W()}n?(e=new n(c(t)),C(e.$$.fragment),A(e.$$.fragment,1),B(e,r.parentNode,r)):e=null}else n&&e.$set(i)},i(t){o||(e&&A(e.$$.fragment,t),o=!0)},o(t){e&&I(e.$$.fragment,t),o=!1},d(t){t&&F(r),e&&J(e,t)}}}function kt(a){let e,r,o;var n=a[0][0];function c(t){return{props:{data:t[2],$$slots:{default:[St]},$$scope:{ctx:t}}}}return n&&(e=new n(c(a))),{c(){e&&C(e.$$.fragment),r=O()},l(t){e&&Y(e.$$.fragment,t),r=O()},m(t,s){e&&B(e,t,s),z(t,r,s),o=!0},p(t,s){const i={};if(s&4&&(i.data=t[2]),s&4219&&(i.$$scope={dirty:s,ctx:t}),n!==(n=t[0][0])){if(e){M();const f=e;I(f.$$.fragment,1,0,()=>{J(f,1)}),W()}n?(e=new n(c(t)),C(e.$$.fragment),A(e.$$.fragment,1),B(e,r.parentNode,r)):e=null}else n&&e.$set(i)},i(t){o||(e&&A(e.$$.fragment,t),o=!0)},o(t){e&&I(e.$$.fragment,t),o=!1},d(t){t&&F(r),e&&J(e,t)}}}function Rt(a){let e,r,o;var n=a[0][1];function c(t){return{props:{data:t[3],form:t[1]}}}return n&&(e=new n(c(a))),{c(){e&&C(e.$$.fragment),r=O()},l(t){e&&Y(e.$$.fragment,t),r=O()},m(t,s){e&&B(e,t,s),z(t,r,s),o=!0},p(t,s){const i={};if(s&8&&(i.data=t[3]),s&2&&(i.form=t[1]),n!==(n=t[0][1])){if(e){M();const f=e;I(f.$$.fragment,1,0,()=>{J(f,1)}),W()}n?(e=new n(c(t)),C(e.$$.fragment),A(e.$$.fragment,1),B(e,r.parentNode,r)):e=null}else n&&e.$set(i)},i(t){o||(e&&A(e.$$.fragment,t),o=!0)},o(t){e&&I(e.$$.fragment,t),o=!1},d(t){t&&F(r),e&&J(e,t)}}}function Lt(a){let e,r,o;var n=a[0][1];function c(t){return{props:{data:t[3],$$slots:{default:[Vt]},$$scope:{ctx:t}}}}return n&&(e=new n(c(a))),{c(){e&&C(e.$$.fragment),r=O()},l(t){e&&Y(e.$$.fragment,t),r=O()},m(t,s){e&&B(e,t,s),z(t,r,s),o=!0},p(t,s){const i={};if(s&8&&(i.data=t[3]),s&4211&&(i.$$scope={dirty:s,ctx:t}),n!==(n=t[0][1])){if(e){M();const f=e;I(f.$$.fragment,1,0,()=>{J(f,1)}),W()}n?(e=new n(c(t)),C(e.$$.fragment),A(e.$$.fragment,1),B(e,r.parentNode,r)):e=null}else n&&e.$set(i)},i(t){o||(e&&A(e.$$.fragment,t),o=!0)},o(t){e&&I(e.$$.fragment,t),o=!1},d(t){t&&F(r),e&&J(e,t)}}}function Pt(a){let e,r,o;var n=a[0][2];function c(t){return{props:{data:t[4],form:t[1]}}}return n&&(e=new n(c(a))),{c(){e&&C(e.$$.fragment),r=O()},l(t){e&&Y(e.$$.fragment,t),r=O()},m(t,s){e&&B(e,t,s),z(t,r,s),o=!0},p(t,s){const i={};if(s&16&&(i.data=t[4]),s&2&&(i.form=t[1]),n!==(n=t[0][2])){if(e){M();const f=e;I(f.$$.fragment,1,0,()=>{J(f,1)}),W()}n?(e=new n(c(t)),C(e.$$.fragment),A(e.$$.fragment,1),B(e,r.parentNode,r)):e=null}else n&&e.$set(i)},i(t){o||(e&&A(e.$$.fragment,t),o=!0)},o(t){e&&I(e.$$.fragment,t),o=!1},d(t){t&&F(r),e&&J(e,t)}}}function Ot(a){let e,r,o;var n=a[0][2];function c(t){return{props:{data:t[4],$$slots:{default:[Dt]},$$scope:{ctx:t}}}}return n&&(e=new n(c(a))),{c(){e&&C(e.$$.fragment),r=O()},l(t){e&&Y(e.$$.fragment,t),r=O()},m(t,s){e&&B(e,t,s),z(t,r,s),o=!0},p(t,s){const i={};if(s&16&&(i.data=t[4]),s&4195&&(i.$$scope={dirty:s,ctx:t}),n!==(n=t[0][2])){if(e){M();const f=e;I(f.$$.fragment,1,0,()=>{J(f,1)}),W()}n?(e=new n(c(t)),C(e.$$.fragment),A(e.$$.fragment,1),B(e,r.parentNode,r)):e=null}else n&&e.$set(i)},i(t){o||(e&&A(e.$$.fragment,t),o=!0)},o(t){e&&I(e.$$.fragment,t),o=!1},d(t){t&&F(r),e&&J(e,t)}}}function It(a){let e,r,o;var n=a[0][3];function c(t){return{props:{data:t[5],form:t[1]}}}return n&&(e=new n(c(a))),{c(){e&&C(e.$$.fragment),r=O()},l(t){e&&Y(e.$$.fragment,t),r=O()},m(t,s){e&&B(e,t,s),z(t,r,s),o=!0},p(t,s){const i={};if(s&32&&(i.data=t[5]),s&2&&(i.form=t[1]),n!==(n=t[0][3])){if(e){M();const f=e;I(f.$$.fragment,1,0,()=>{J(f,1)}),W()}n?(e=new n(c(t)),C(e.$$.fragment),A(e.$$.fragment,1),B(e,r.parentNode,r)):e=null}else n&&e.$set(i)},i(t){o||(e&&A(e.$$.fragment,t),o=!0)},o(t){e&&I(e.$$.fragment,t),o=!1},d(t){t&&F(r),e&&J(e,t)}}}function At(a){let e,r,o;var n=a[0][3];function c(t){return{props:{data:t[5],$$slots:{default:[Tt]},$$scope:{ctx:t}}}}return n&&(e=new n(c(a))),{c(){e&&C(e.$$.fragment),r=O()},l(t){e&&Y(e.$$.fragment,t),r=O()},m(t,s){e&&B(e,t,s),z(t,r,s),o=!0},p(t,s){const i={};if(s&32&&(i.data=t[5]),s&4163&&(i.$$scope={dirty:s,ctx:t}),n!==(n=t[0][3])){if(e){M();const f=e;I(f.$$.fragment,1,0,()=>{J(f,1)}),W()}n?(e=new n(c(t)),C(e.$$.fragment),A(e.$$.fragment,1),B(e,r.parentNode,r)):e=null}else n&&e.$set(i)},i(t){o||(e&&A(e.$$.fragment,t),o=!0)},o(t){e&&I(e.$$.fragment,t),o=!1},d(t){t&&F(r),e&&J(e,t)}}}function Tt(a){let e,r,o;var n=a[0][4];function c(t){return{props:{data:t[6],form:t[1]}}}return n&&(e=new n(c(a))),{c(){e&&C(e.$$.fragment),r=O()},l(t){e&&Y(e.$$.fragment,t),r=O()},m(t,s){e&&B(e,t,s),z(t,r,s),o=!0},p(t,s){const i={};if(s&64&&(i.data=t[6]),s&2&&(i.form=t[1]),n!==(n=t[0][4])){if(e){M();const f=e;I(f.$$.fragment,1,0,()=>{J(f,1)}),W()}n?(e=new n(c(t)),C(e.$$.fragment),A(e.$$.fragment,1),B(e,r.parentNode,r)):e=null}else n&&e.$set(i)},i(t){o||(e&&A(e.$$.fragment,t),o=!0)},o(t){e&&I(e.$$.fragment,t),o=!1},d(t){t&&F(r),e&&J(e,t)}}}function Dt(a){let e,r,o,n;const c=[At,It],t=[];function s(i,f){return i[0][4]?0:1}return e=s(a),r=t[e]=c[e](a),{c(){r.c(),o=O()},l(i){r.l(i),o=O()},m(i,f){t[e].m(i,f),z(i,o,f),n=!0},p(i,f){let g=e;e=s(i),e===g?t[e].p(i,f):(M(),I(t[g],1,1,()=>{t[g]=null}),W(),r=t[e],r?r.p(i,f):(r=t[e]=c[e](i),r.c()),A(r,1),r.m(o.parentNode,o))},i(i){n||(A(r),n=!0)},o(i){I(r),n=!1},d(i){t[e].d(i),i&&F(o)}}}function Vt(a){let e,r,o,n;const c=[Ot,Pt],t=[];function s(i,f){return i[0][3]?0:1}return e=s(a),r=t[e]=c[e](a),{c(){r.c(),o=O()},l(i){r.l(i),o=O()},m(i,f){t[e].m(i,f),z(i,o,f),n=!0},p(i,f){let g=e;e=s(i),e===g?t[e].p(i,f):(M(),I(t[g],1,1,()=>{t[g]=null}),W(),r=t[e],r?r.p(i,f):(r=t[e]=c[e](i),r.c()),A(r,1),r.m(o.parentNode,o))},i(i){n||(A(r),n=!0)},o(i){I(r),n=!1},d(i){t[e].d(i),i&&F(o)}}}function St(a){let e,r,o,n;const c=[Lt,Rt],t=[];function s(i,f){return i[0][2]?0:1}return e=s(a),r=t[e]=c[e](a),{c(){r.c(),o=O()},l(i){r.l(i),o=O()},m(i,f){t[e].m(i,f),z(i,o,f),n=!0},p(i,f){let g=e;e=s(i),e===g?t[e].p(i,f):(M(),I(t[g],1,1,()=>{t[g]=null}),W(),r=t[e],r?r.p(i,f):(r=t[e]=c[e](i),r.c()),A(r,1),r.m(o.parentNode,o))},i(i){n||(A(r),n=!0)},o(i){I(r),n=!1},d(i){t[e].d(i),i&&F(o)}}}function Ke(a){let e,r=a[8]&&ze(a);return{c(){e=et("div"),r&&r.c(),this.h()},l(o){e=tt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var n=rt(e);r&&r.l(n),n.forEach(F),this.h()},h(){we(e,"id","svelte-announcer"),we(e,"aria-live","assertive"),we(e,"aria-atomic","true"),X(e,"position","absolute"),X(e,"left","0"),X(e,"top","0"),X(e,"clip","rect(0 0 0 0)"),X(e,"clip-path","inset(50%)"),X(e,"overflow","hidden"),X(e,"white-space","nowrap"),X(e,"width","1px"),X(e,"height","1px")},m(o,n){z(o,e,n),r&&r.m(e,null)},p(o,n){o[8]?r?r.p(o,n):(r=ze(o),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(o){o&&F(e),r&&r.d()}}}function ze(a){let e;return{c(){e=nt(a[9])},l(r){e=at(r,a[9])},m(r,o){z(r,e,o)},p(r,o){o&512&&ot(e,r[9])},d(r){r&&F(e)}}}function Ut(a){let e,r,o,n,c;const t=[kt,$t],s=[];function i(g,T){return g[0][1]?0:1}e=i(a),r=s[e]=t[e](a);let f=a[7]&&Ke(a);return{c(){r.c(),o=Qe(),f&&f.c(),n=O()},l(g){r.l(g),o=Ze(g),f&&f.l(g),n=O()},m(g,T){s[e].m(g,T),z(g,o,T),f&&f.m(g,T),z(g,n,T),c=!0},p(g,[T]){let K=e;e=i(g),e===K?s[e].p(g,T):(M(),I(s[K],1,1,()=>{s[K]=null}),W(),r=s[e],r?r.p(g,T):(r=s[e]=t[e](g),r.c()),A(r,1),r.m(o.parentNode,o)),g[7]?f?f.p(g,T):(f=Ke(g),f.c(),f.m(n.parentNode,n)):f&&(f.d(1),f=null)},i(g){c||(A(r),c=!0)},o(g){I(r),c=!1},d(g){s[e].d(g),g&&F(o),f&&f.d(g),g&&F(n)}}}function Nt(a,e,r){let{stores:o}=e,{page:n}=e,{components:c}=e,{form:t}=e,{data_0:s=null}=e,{data_1:i=null}=e,{data_2:f=null}=e,{data_3:g=null}=e,{data_4:T=null}=e;xe(o.page.notify);let K=!1,U=!1,G=null;return ve(()=>{const $=o.page.subscribe(()=>{K&&(r(8,U=!0),r(9,G=document.title||"untitled page"))});return r(7,K=!0),$}),a.$$set=$=>{"stores"in $&&r(10,o=$.stores),"page"in $&&r(11,n=$.page),"components"in $&&r(0,c=$.components),"form"in $&&r(1,t=$.form),"data_0"in $&&r(2,s=$.data_0),"data_1"in $&&r(3,i=$.data_1),"data_2"in $&&r(4,f=$.data_2),"data_3"in $&&r(5,g=$.data_3),"data_4"in $&&r(6,T=$.data_4)},a.$$.update=()=>{a.$$.dirty&3072&&o.page.set(n)},[c,t,s,i,f,g,T,K,U,G,o,n]}class jt extends He{constructor(e){super(),Xe(this,e,Nt,Ut,Ye,{stores:10,page:11,components:0,form:1,data_0:2,data_1:3,data_2:4,data_3:5,data_4:6})}}const qt={},ue=[()=>w(()=>import("./chunks/0-b082f5ce.js"),["chunks/0-b082f5ce.js","components/layout.svelte-619eeef9.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/1-6b310b9e.js"),["chunks/1-6b310b9e.js","components/error.svelte-43701a7a.js","chunks/index-79f3f4d0.js","chunks/stores-73a87155.js","chunks/singletons-8d809a0b.js"],import.meta.url),()=>w(()=>import("./chunks/2-2a2e2d06.js"),["chunks/2-2a2e2d06.js","components/pages/blog/_layout.svelte-f1064979.js","assets/_layout-35ec8ef8.css","chunks/index-79f3f4d0.js","chunks/stores-73a87155.js","chunks/singletons-8d809a0b.js","chunks/Footer-aa4c2641.js","assets/Footer-e64a5365.css"],import.meta.url),()=>w(()=>import("./chunks/3-95fddbbb.js"),["chunks/3-95fddbbb.js","components/pages/blog/engineering/_layout.svelte-7f428c94.js","assets/_layout-20ef2482.css","chunks/index-79f3f4d0.js","chunks/index-f570cc25.js","chunks/stores-73a87155.js","chunks/singletons-8d809a0b.js"],import.meta.url),()=>w(()=>import("./chunks/4-759bf9f7.js"),["chunks/4-759bf9f7.js","components/pages/blog/infotech/_layout.svelte-0423fd58.js","assets/_layout-4dc1d3f3.css","chunks/index-79f3f4d0.js","chunks/stores-73a87155.js","chunks/singletons-8d809a0b.js","chunks/index-f570cc25.js"],import.meta.url),()=>w(()=>import("./chunks/5-ace25454.js"),["chunks/5-ace25454.js","components/pages/blog/infotech/codename/_layout.svelte-3b4a1873.js","assets/_layout-20ef2482.css","chunks/index-79f3f4d0.js","chunks/index-f570cc25.js","chunks/stores-73a87155.js","chunks/singletons-8d809a0b.js"],import.meta.url),()=>w(()=>import("./chunks/6-7e2230f6.js"),["chunks/6-7e2230f6.js","components/pages/blog/infotech/dbms/_layout.svelte-63fbbee5.js","assets/_layout-20ef2482.css","chunks/index-79f3f4d0.js","chunks/index-f570cc25.js","chunks/stores-73a87155.js","chunks/singletons-8d809a0b.js"],import.meta.url),()=>w(()=>import("./chunks/7-37152cb9.js"),["chunks/7-37152cb9.js","components/pages/blog/infotech/framework/_layout.svelte-8090892b.js","assets/_layout-20ef2482.css","chunks/index-79f3f4d0.js","chunks/index-f570cc25.js","chunks/stores-73a87155.js","chunks/singletons-8d809a0b.js"],import.meta.url),()=>w(()=>import("./chunks/8-ff3ac45d.js"),["chunks/8-ff3ac45d.js","components/pages/blog/infotech/os/_layout.svelte-a872a37f.js","assets/_layout-414d0c62.css","chunks/index-79f3f4d0.js","chunks/index-f570cc25.js","chunks/stores-73a87155.js","chunks/singletons-8d809a0b.js"],import.meta.url),()=>w(()=>import("./chunks/9-39fcd137.js"),["chunks/9-39fcd137.js","components/pages/blog/infotech/vc/_layout.svelte-5e836236.js","assets/_layout-20ef2482.css","chunks/index-79f3f4d0.js","chunks/index-f570cc25.js","chunks/stores-73a87155.js","chunks/singletons-8d809a0b.js"],import.meta.url),()=>w(()=>import("./chunks/10-0fd31771.js"),["chunks/10-0fd31771.js","components/pages/blog/language/_layout.svelte-aa18c4c7.js","assets/_layout-4dc1d3f3.css","chunks/index-79f3f4d0.js","chunks/stores-73a87155.js","chunks/singletons-8d809a0b.js","chunks/index-f570cc25.js"],import.meta.url),()=>w(()=>import("./chunks/11-02b01efb.js"),["chunks/11-02b01efb.js","chunks/_page-0df15927.js","components/pages/_page.svelte-38d5af03.js","assets/_page-443c7245.css","chunks/index-79f3f4d0.js","chunks/stores-73a87155.js","chunks/singletons-8d809a0b.js","chunks/Footer-aa4c2641.js","assets/Footer-e64a5365.css"],import.meta.url),()=>w(()=>import("./chunks/12-6a068780.js"),["chunks/12-6a068780.js","chunks/_page-b43ba8f9.js","components/pages/about/_page.svelte-f545d700.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/13-4984e4e4.js"),["chunks/13-4984e4e4.js","chunks/_page-f15d52f8.js","components/pages/blog/_page.md-0a6e006a.js","chunks/index-79f3f4d0.js","chunks/MarkdownLayout-556d1ab0.js","assets/MarkdownLayout-641b5577.css"],import.meta.url),()=>w(()=>import("./chunks/14-3421d102.js"),["chunks/14-3421d102.js","chunks/_page-d0c357ac.js","components/pages/blog/cosmos/_page.md-8f0f40b7.js","chunks/index-79f3f4d0.js","chunks/MarkdownLayout-556d1ab0.js","assets/MarkdownLayout-641b5577.css"],import.meta.url),()=>w(()=>import("./chunks/15-72112d30.js"),["chunks/15-72112d30.js","chunks/_page-49991698.js","components/pages/blog/engineering/_page.svelte-16636d16.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/16-01759773.js"),["chunks/16-01759773.js","chunks/_page-2682c1d3.js","components/pages/blog/engineering/ml/_page.svelte-a6676585.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/17-9cff068d.js"),["chunks/17-9cff068d.js","chunks/_page-5b25517d.js","components/pages/blog/etc/_page.svelte-9eacec01.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/18-23f1322a.js"),["chunks/18-23f1322a.js","chunks/_page-8e2fc829.js","components/pages/blog/infotech/_page.svelte-2e40bfe6.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/19-45070cad.js"),["chunks/19-45070cad.js","chunks/_page-17f66285.js","components/pages/blog/infotech/codename/_page.svelte-735681fe.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/20-ecf31518.js"),["chunks/20-ecf31518.js","chunks/_page-a1b20979.js","components/pages/blog/infotech/codename/cpp/_page.svelte-d9f2cfec.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/21-262f8f54.js"),["chunks/21-262f8f54.js","chunks/_page-7eeca220.js","components/pages/blog/infotech/codename/csharp/_page.svelte-a9034958.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/22-ca6402d9.js"),["chunks/22-ca6402d9.js","chunks/_page-caad02fb.js","components/pages/blog/infotech/codename/css3/_page.svelte-13304237.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/23-fc88aad7.js"),["chunks/23-fc88aad7.js","chunks/_page-25ed07e6.js","components/pages/blog/infotech/codename/html5/_page.svelte-9cd4a0f4.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/24-d13f93ba.js"),["chunks/24-d13f93ba.js","chunks/_page-c736e6f5.js","components/pages/blog/infotech/codename/java/_page.svelte-38d950ad.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/25-fd33adc5.js"),["chunks/25-fd33adc5.js","chunks/_page-1c2aab1c.js","components/pages/blog/infotech/codename/javascript/_page.svelte-9657ac0d.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/26-d16886dd.js"),["chunks/26-d16886dd.js","chunks/_page-b712e042.js","components/pages/blog/infotech/codename/markdown/_page.svelte-8f7d73a6.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/27-ed83282a.js"),["chunks/27-ed83282a.js","chunks/_page-476b00e8.js","components/pages/blog/infotech/codename/python/_page.svelte-8d3ba1c8.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/28-552d9783.js"),["chunks/28-552d9783.js","chunks/_page-6d7dc454.js","components/pages/blog/infotech/dbms/_page.svelte-84e310d0.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/29-83908ca7.js"),["chunks/29-83908ca7.js","chunks/_page-d7764a60.js","components/pages/blog/infotech/dbms/MySQL/_page.svelte-48d6ce4a.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/30-1b7445ba.js"),["chunks/30-1b7445ba.js","chunks/_page-8c466fb3.js","components/pages/blog/infotech/dbms/Oracle/_page.svelte-22cf6294.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/31-49b81d47.js"),["chunks/31-49b81d47.js","chunks/_page-dd7e3a3c.js","components/pages/blog/infotech/framework/_page.svelte-e5f95734.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/32-17adbeca.js"),["chunks/32-17adbeca.js","chunks/_page-c9abc7e8.js","components/pages/blog/infotech/framework/springboot/_page.svelte-c539be04.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/33-bbe1b85a.js"),["chunks/33-bbe1b85a.js","chunks/_page-c45a5924.js","components/pages/blog/infotech/framework/svelte/_page.svelte-3eaf595a.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/34-790cd0ca.js"),["chunks/34-790cd0ca.js","chunks/_page-ebad08ef.js","components/pages/blog/infotech/os/_page.svelte-ef0d6664.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/35-eaa4a855.js"),["chunks/35-eaa4a855.js","chunks/_page-3eb6fc8d.js","components/pages/blog/infotech/os/ubuntu/_page.svelte-2f805629.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/36-3e2fdc60.js"),["chunks/36-3e2fdc60.js","chunks/_page-61541a6b.js","components/pages/blog/infotech/os/windows/_page.svelte-6f9f7780.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/37-ef1304a9.js"),["chunks/37-ef1304a9.js","chunks/_page-dc6cba1b.js","components/pages/blog/infotech/vc/_page.svelte-6b910123.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/38-43edd855.js"),["chunks/38-43edd855.js","chunks/_page-37fd5fea.js","components/pages/blog/infotech/vc/github/_page.svelte-77bb0559.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/39-f486cf3e.js"),["chunks/39-f486cf3e.js","chunks/_page-049ffb8f.js","components/pages/blog/language/_page.svelte-7edd21f9.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/40-07461a90.js"),["chunks/40-07461a90.js","chunks/_page-fa6fe1f0.js","components/pages/blog/language/deutsch/_page.svelte-363ea026.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/41-4c5ef827.js"),["chunks/41-4c5ef827.js","chunks/_page-abfb895d.js","components/pages/blog/language/english/_page.svelte-aa2b0415.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/42-3c6846ac.js"),["chunks/42-3c6846ac.js","chunks/_page-6ffb0652.js","components/pages/blog/language/espanol/_page.svelte-b359d93e.js","chunks/index-79f3f4d0.js"],import.meta.url),()=>w(()=>import("./chunks/43-36d5a574.js"),["chunks/43-36d5a574.js","chunks/_page-81014323.js","components/pages/blog/scific/_page.svelte-1f068f4a.js","chunks/index-79f3f4d0.js"],import.meta.url)],Ct=[],Bt={"":[11],about:[12],blog:[13,[2]],"blog/cosmos":[14,[2]],"blog/engineering":[15,[2,3]],"blog/etc":[17,[2]],"blog/infotech":[18,[2,4]],"blog/language":[39,[2,10]],"blog/scific":[43,[2]],"blog/engineering/ml":[16,[2,3]],"blog/infotech/codename":[19,[2,4,5]],"blog/infotech/dbms":[28,[2,4,6]],"blog/infotech/framework":[31,[2,4,7]],"blog/infotech/os":[34,[2,4,8]],"blog/infotech/vc":[37,[2,4,9]],"blog/language/deutsch":[40,[2,10]],"blog/language/english":[41,[2,10]],"blog/language/espanol":[42,[2,10]],"blog/infotech/codename/cpp":[20,[2,4,5]],"blog/infotech/codename/csharp":[21,[2,4,5]],"blog/infotech/codename/css3":[22,[2,4,5]],"blog/infotech/codename/html5":[23,[2,4,5]],"blog/infotech/codename/java":[24,[2,4,5]],"blog/infotech/codename/javascript":[25,[2,4,5]],"blog/infotech/codename/markdown":[26,[2,4,5]],"blog/infotech/codename/python":[27,[2,4,5]],"blog/infotech/dbms/MySQL":[29,[2,4,6]],"blog/infotech/dbms/Oracle":[30,[2,4,6]],"blog/infotech/framework/springboot":[32,[2,4,7]],"blog/infotech/framework/svelte":[33,[2,4,7]],"blog/infotech/os/ubuntu":[35,[2,4,8]],"blog/infotech/os/windows":[36,[2,4,8]],"blog/infotech/vc/github":[38,[2,4,9]]},Jt={handleError:({error:a})=>{console.error(a)}};class ye{constructor(e,r){this.status=e,typeof r=="string"?this.body={message:r}:r?this.body=r:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ge{constructor(e,r){this.status=e,this.location=r}}const Ft="/__data.js";async function Kt(a){var e;for(const r in a)if(typeof((e=a[r])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([o,n])=>[o,await n])));return a}const We="sveltekit:scroll",Q="sveltekit:index",se=yt(ue,Ct,Bt,qt),$e=ue[0],ke=ue[1];$e();ke();let ne={};try{ne=JSON.parse(sessionStorage[We])}catch{}function be(a){ne[a]=Ee()}function zt({target:a,base:e,trailing_slash:r}){var Ne;const o=[];let n=null;const c={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},s=!1,i=!1,f=!0,g=!1,T=!1,K,U=(Ne=history.state)==null?void 0:Ne[Q];U||(U=Date.now(),history.replaceState({...history.state,[Q]:U},"",location.href));const G=ne[U];G&&(history.scrollRestoration="manual",scrollTo(G.x,G.y));let $=!1,H,Le,ae;async function Pe(){ae=ae||Promise.resolve(),await ae,ae=null;const l=new URL(location.href),p=de(l,!0);n=null,await Ie(p,l,[])}async function _e(l,{noscroll:p=!1,replaceState:m=!1,keepfocus:u=!1,state:_={}},d,h){return typeof l=="string"&&(l=new URL(l,Be(document))),he({url:l,scroll:p?Ee():null,keepfocus:u,redirect_chain:d,details:{state:_,replaceState:m},nav_token:h,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Oe(l){const p=de(l,!1);if(!p)throw new Error("Attempted to prefetch a URL that does not belong to this app");return n={id:p.id,promise:De(p)},n.promise}async function Ie(l,p,m,u,_={},d){var k,y;Le=_;let h=l&&await De(l);if(h||(h=await Ue(p,null,re(new Error(`Not found: ${p.pathname}`),{url:p,params:{},routeId:null}),404)),p=(l==null?void 0:l.url)||p,Le!==_)return!1;if(h.type==="redirect")if(m.length>10||m.includes(p.pathname))h=await oe({status:500,error:re(new Error("Redirect loop"),{url:p,params:{},routeId:null}),url:p,routeId:null});else return _e(new URL(h.location,p).href,{},[...m,p.pathname],_),!1;else((y=(k=h.props)==null?void 0:k.page)==null?void 0:y.status)>=400&&await Z.updated.check()&&await ie(p);if(o.length=0,T=!1,g=!0,u&&u.details){const{details:v}=u,E=v.replaceState?0:1;v.state[Q]=U+=E,history[v.replaceState?"replaceState":"pushState"](v.state,"",p)}if(n=null,i){t=h.state,h.props.page&&(h.props.page.url=p);const v=ce();K.$set(h.props),v()}else Ae(h);if(u){const{scroll:v,keepfocus:E}=u;if(!E){const L=document.body,D=L.getAttribute("tabindex");L.tabIndex=-1,L.focus({preventScroll:!0}),setTimeout(()=>{var V;(V=getSelection())==null||V.removeAllRanges()}),D!==null?L.setAttribute("tabindex",D):L.removeAttribute("tabindex")}if(await Ce(),f){const L=p.hash&&document.getElementById(p.hash.slice(1));v?scrollTo(v.x,v.y):L?L.scrollIntoView():scrollTo(0,0)}}else await Ce();f=!0,h.props.page&&(H=h.props.page),d&&d(),g=!1}function Ae(l){var _,d;t=l.state;const p=document.querySelector("style[data-sveltekit]");p&&p.remove(),H=l.props.page;const m=ce();K=new jt({target:a,props:{...l.props,stores:Z},hydrate:!0}),m();const u={from:null,to:le("to",{params:t.params,routeId:(d=(_=t.route)==null?void 0:_.id)!=null?d:null,url:new URL(location.href)}),type:"load"};c.after_navigate.forEach(h=>h(u)),i=!0}async function ee({url:l,params:p,branch:m,status:u,error:_,route:d,form:h}){var D;const k=m.filter(Boolean),y={type:"loaded",state:{url:l,params:p,branch:m,error:_,route:d},props:{components:k.map(V=>V.node.component)}};h!==void 0&&(y.props.form=h);let v={},E=!H;for(let V=0;V<k.length;V+=1){const j=k[V];v={...v,...j.data},(E||!t.branch.some(q=>q===j))&&(y.props[`data_${V}`]=v,E=E||Object.keys((D=j.data)!=null?D:{}).length>0)}if(E||(E=Object.keys(H.data).length!==Object.keys(v).length),!t.url||l.href!==t.url.href||t.error!==_||h!==void 0||E){y.props.page={error:_,params:p,routeId:d&&d.id,status:u,url:l,form:h,data:E?v:H.data};const V=(j,q)=>{Object.defineProperty(y.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${q}`)}})};V("origin","origin"),V("path","pathname"),V("query","searchParams")}return y}async function pe({loader:l,parent:p,url:m,params:u,routeId:_,server_data_node:d}){var v,E,L,D,V;let h=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},y=await l();if((v=y.shared)!=null&&v.load){let j=function(...P){for(const b of P){const{href:R}=new URL(b,m);k.dependencies.add(R)}};const q={routeId:_,params:new Proxy(u,{get:(P,b)=>(k.params.add(b),P[b])}),data:(E=d==null?void 0:d.data)!=null?E:null,url:pt(m,()=>{k.url=!0}),async fetch(P,b){let R;P instanceof Request?(R=P.url,b={body:P.method==="GET"||P.method==="HEAD"?void 0:await P.blob(),cache:P.cache,credentials:P.credentials,headers:P.headers,integrity:P.integrity,keepalive:P.keepalive,method:P.method,mode:P.mode,redirect:P.redirect,referrer:P.referrer,referrerPolicy:P.referrerPolicy,signal:P.signal,...b}):R=P;const N=new URL(R,m).href;return j(N),i?gt(N,b):ht(R,N,b)},setHeaders:()=>{},depends:j,parent(){return k.parent=!0,p()}};Object.defineProperties(q,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),h=(L=await y.shared.load.call(null,q))!=null?L:null,h=h?await Kt(h):null}return{node:y,loader:l,server:d,shared:(D=y.shared)!=null&&D.load?{type:"data",data:h,uses:k}:null,data:(V=h!=null?h:d==null?void 0:d.data)!=null?V:null}}function Te(l,p,m,u){if(T)return!0;if(!m)return!1;if(m.parent&&p||m.url&&l)return!0;for(const _ of m.params)if(u[_]!==t.params[_])return!0;for(const _ of m.dependencies)if(o.some(d=>d(new URL(_))))return!0;return!1}function me(l,p){var m,u;return(l==null?void 0:l.type)==="data"?{type:"data",data:l.data,uses:{dependencies:new Set((m=l.uses.dependencies)!=null?m:[]),params:new Set((u=l.uses.params)!=null?u:[]),parent:!!l.uses.parent,url:!!l.uses.url}}:(l==null?void 0:l.type)==="skip"&&p!=null?p:null}async function De({id:l,invalidating:p,url:m,params:u,route:_}){var P;if((n==null?void 0:n.id)===l)return n.promise;const{errors:d,layouts:h,leaf:k}=_,y=[...h,k];d.forEach(b=>b==null?void 0:b().catch(()=>{})),y.forEach(b=>b==null?void 0:b[1]().catch(()=>{}));let v=null;const E=t.url?l!==t.url.pathname+t.url.search:!1,L=y.reduce((b,R,N)=>{var te;const S=t.branch[N],x=!!(R!=null&&R[0])&&((S==null?void 0:S.loader)!==R[1]||Te(E,b.some(Boolean),(te=S.server)==null?void 0:te.uses,u));return b.push(x),b},[]);if(L.some(Boolean)){try{v=await Me(m,L)}catch(b){return oe({status:500,error:re(b,{url:m,params:u,routeId:_.id}),url:m,routeId:_.id})}if(v.type==="redirect")return v}const D=v==null?void 0:v.nodes;let V=!1;const j=y.map(async(b,R)=>{var te;if(!b)return;const N=t.branch[R],S=D==null?void 0:D[R];if((!S||S.type==="skip")&&b[1]===(N==null?void 0:N.loader)&&!Te(E,V,(te=N.shared)==null?void 0:te.uses,u))return N;if(V=!0,(S==null?void 0:S.type)==="error")throw S;return pe({loader:b[1],url:m,params:u,routeId:_.id,parent:async()=>{var qe;const je={};for(let ge=0;ge<R;ge+=1)Object.assign(je,(qe=await j[ge])==null?void 0:qe.data);return je},server_data_node:me(S===void 0&&b[0]?{type:"skip"}:S!=null?S:null,N==null?void 0:N.server)})});for(const b of j)b.catch(()=>{});const q=[];for(let b=0;b<y.length;b+=1)if(y[b])try{q.push(await j[b])}catch(R){if(R instanceof Ge)return{type:"redirect",location:R.location};let N=500,S;D!=null&&D.includes(R)?(N=(P=R.status)!=null?P:N,S=R.error):R instanceof ye?(N=R.status,S=R.body):S=re(R,{params:u,url:m,routeId:_.id});const x=await Ve(b,q,d);return x?await ee({url:m,params:u,branch:q.slice(0,x.idx).concat(x.node),status:N,error:S,route:_}):await Ue(m,_.id,S,N)}else q.push(void 0);return await ee({url:m,params:u,branch:q,status:200,error:null,route:_,form:p?void 0:null})}async function Ve(l,p,m){for(;l--;)if(m[l]){let u=l;for(;!p[u];)u-=1;try{return{idx:u+1,node:{node:await m[l](),loader:m[l],data:{},server:null,shared:null}}}catch{continue}}}async function oe({status:l,error:p,url:m,routeId:u}){var v;const _={},d=await $e();let h=null;if(d.server)try{const E=await Me(m,[!0]);if(E.type!=="data"||E.nodes[0]&&E.nodes[0].type!=="data")throw 0;h=(v=E.nodes[0])!=null?v:null}catch{(m.origin!==location.origin||m.pathname!==location.pathname||s)&&await ie(m)}const k=await pe({loader:$e,url:m,params:_,routeId:u,parent:()=>Promise.resolve({}),server_data_node:me(h)}),y={node:await ke(),loader:ke,shared:null,server:null,data:null};return await ee({url:m,params:_,branch:[k,y],status:l,error:p,route:null})}function de(l,p){if(Se(l))return;const m=decodeURI(l.pathname.slice(e.length)||"/");for(const u of se){const _=u.exec(m);if(_){const d=new URL(l.origin+ft(l.pathname,r)+l.search+l.hash);return{id:d.pathname+d.search,invalidating:p,route:u,params:ut(_),url:d}}}}function Se(l){return l.origin!==location.origin||!l.pathname.startsWith(e)}async function he({url:l,scroll:p,keepfocus:m,redirect_chain:u,details:_,type:d,delta:h,nav_token:k,accepted:y,blocked:v}){var j,q,P,b;let E=!1;const L=de(l,!1),D={from:le("from",{params:t.params,routeId:(q=(j=t.route)==null?void 0:j.id)!=null?q:null,url:t.url}),to:le("to",{params:(P=L==null?void 0:L.params)!=null?P:null,routeId:(b=L==null?void 0:L.route.id)!=null?b:null,url:l}),type:d};h!==void 0&&(D.delta=h);const V={...D,cancel:()=>{E=!0}};if(c.before_navigate.forEach(R=>R(V)),E){v();return}be(U),y(),i&&Z.navigating.set(D),await Ie(L,l,u,{scroll:p,keepfocus:m,details:_},k,()=>{c.after_navigate.forEach(R=>R(D)),Z.navigating.set(null)})}async function Ue(l,p,m,u){return l.origin===location.origin&&l.pathname===location.pathname&&!s?await oe({status:u,error:m,url:l,routeId:p}):await ie(l)}function ie(l){return location.href=l.href,new Promise(()=>{})}return{after_navigate:l=>{ve(()=>(c.after_navigate.push(l),()=>{const p=c.after_navigate.indexOf(l);c.after_navigate.splice(p,1)}))},before_navigate:l=>{ve(()=>(c.before_navigate.push(l),()=>{const p=c.before_navigate.indexOf(l);c.before_navigate.splice(p,1)}))},disable_scroll_handling:()=>{(g||!i)&&(f=!1)},goto:(l,p={})=>_e(l,p,[]),invalidate:l=>{if(l===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof l=="function")o.push(l);else{const{href:p}=new URL(l,location.href);o.push(m=>m.href===p)}return Pe()},invalidateAll:()=>(T=!0,Pe()),prefetch:async l=>{const p=new URL(l,Be(document));await Oe(p)},prefetch_routes:async l=>{const m=(l?se.filter(u=>l.some(_=>u.exec(_))):se).map(u=>Promise.all([...u.layouts,u.leaf].map(_=>_==null?void 0:_[1]())));await Promise.all(m)},apply_action:async l=>{if(l.type==="error"){const p=new URL(location.href),{branch:m,route:u}=t;if(!u)return;const _=await Ve(t.branch.length,m,u.errors);if(_){const d=await ee({url:p,params:t.params,branch:m.slice(0,_.idx).concat(_.node),status:500,error:l.error,route:u});t=d.state;const h=ce();K.$set(d.props),h()}}else if(l.type==="redirect")_e(l.location,{},[]);else{const p={form:l.data,page:{...H,form:l.data,status:l.status}},m=ce();K.$set(p),m()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",u=>{var h,k;let _=!1;const d={from:le("from",{params:t.params,routeId:(k=(h=t.route)==null?void 0:h.id)!=null?k:null,url:t.url}),to:null,type:"unload",cancel:()=>_=!0};c.before_navigate.forEach(y=>y(d)),_?(u.preventDefault(),u.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){be(U);try{sessionStorage[We]=JSON.stringify(ne)}catch{}}});const l=u=>{const{url:_,options:d}=Je(u);if(_&&d.prefetch){if(Se(_))return;Oe(_)}};let p;const m=u=>{clearTimeout(p),p=setTimeout(()=>{var _;(_=u.target)==null||_.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",l),addEventListener("mousemove",m),addEventListener("sveltekit:trigger_prefetch",l),addEventListener("click",u=>{if(u.button||u.which!==1||u.metaKey||u.ctrlKey||u.shiftKey||u.altKey||u.defaultPrevented)return;const{a:_,url:d,options:h}=Je(u);if(!_||!d)return;const k=_ instanceof SVGAElement;if(!k&&!(d.protocol==="https:"||d.protocol==="http:"))return;const y=(_.getAttribute("rel")||"").split(/\s+/);if(_.hasAttribute("download")||y.includes("external")||h.reload||(k?_.target.baseVal:_.target))return;const[v,E]=d.href.split("#");if(E!==void 0&&v===location.href.split("#")[0]){$=!0,be(U),t.url=d,Z.page.set({...H,url:d}),Z.page.notify();return}he({url:d,scroll:h.noscroll?Ee():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:d.href===location.href},accepted:()=>u.preventDefault(),blocked:()=>u.preventDefault(),type:"link"})}),addEventListener("popstate",u=>{if(u.state){if(u.state[Q]===U)return;const _=u.state[Q]-U;he({url:new URL(location.href),scroll:ne[u.state[Q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{U=u.state[Q]},blocked:()=>{history.go(-_)},type:"popstate",delta:_})}}),addEventListener("hashchange",()=>{$&&($=!1,history.replaceState({...history.state,[Q]:++U},"",location.href))});for(const u of document.querySelectorAll("link"))u.rel==="icon"&&(u.href=u.href);addEventListener("pageshow",u=>{u.persisted&&Z.navigating.set(null)})},_hydrate:async({status:l,error:p,node_ids:m,params:u,routeId:_,data:d,form:h})=>{var v;s=!0;const k=new URL(location.href);let y;try{const E=m.map(async(L,D)=>{const V=d[D];return pe({loader:ue[L],url:k,params:u,routeId:_,parent:async()=>{const j={};for(let q=0;q<D;q+=1)Object.assign(j,(await E[q]).data);return j},server_data_node:me(V)})});y=await ee({url:k,params:u,branch:await Promise.all(E),status:l,error:p,form:h,route:(v=se.find(L=>L.id===_))!=null?v:null})}catch(E){if(E instanceof Ge){await ie(new URL(E.location,location.href));return}y=await oe({status:E instanceof ye?E.status:500,error:re(E,{url:k,params:u,routeId:_}),url:k,routeId:_})}Ae(y)}}}let Gt=1;async function Me(a,e){const r=new URL(a);r.pathname=a.pathname.replace(/\/$/,"")+Ft,r.searchParams.set("__invalid",e.map(n=>n?"y":"n").join("")),r.searchParams.set("__id",String(Gt++)),await w(()=>import(r.href),[],import.meta.url);const o=window.__sveltekit_data;return delete window.__sveltekit_data,o}function re(a,e){var r;return a instanceof ye?a.body:(r=Jt.handleError({error:a,event:e}))!=null?r:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Mt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function le(a,e){for(const r of Mt)Object.defineProperty(e,r,{get(){throw new Error(`The navigation shape changed - ${a}.${r} should now be ${a}.url.${r}`)},enumerable:!1});return e}function ce(){return()=>{}}async function Xt({env:a,hydrate:e,paths:r,target:o,trailing_slash:n}){it(r);const c=zt({target:o,base:r.base,trailing_slash:n});st({client:c}),e?await c._hydrate(e):c.goto(location.href,{replaceState:!0}),c._start_router()}export{Xt as start};

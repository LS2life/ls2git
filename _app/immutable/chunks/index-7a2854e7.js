function x(){}const K=t=>t;function ft(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function I(){return Object.create(null)}function b(t){t.forEach(Q)}function B(t){return typeof t=="function"}function Dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function Rt(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function _t(t){return Object.keys(t).length===0}function dt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Tt(t,e,n){t.$$.on_destroy.push(dt(e,n))}function zt(t,e,n,i){if(t){const r=U(t,e,n,i);return t[0](r)}}function U(t,e,n,i){return t[1]&&i?ft(n.ctx.slice(),t[1](i(e))):n.ctx}function Bt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let c=0;c<s;c+=1)u[c]=e.dirty[c]|r[c];return u}return e.dirty|r}return e.dirty}function Ft(t,e,n,i,r,u){if(r){const s=U(e,n,i,u);t.p(s,r)}}function Lt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ht(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}const W=typeof window<"u";let V=W?()=>window.performance.now():()=>Date.now(),F=W?t=>requestAnimationFrame(t):x;const g=new Set;function X(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&F(X)}function Y(t){let e;return g.size===0&&F(X),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let P=!1;function ht(){P=!0}function mt(){P=!1}function pt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:pt(1,r,_=>e[n[_]].claim_order,l))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,r=Math.max(a,r)}const u=[],s=[];let c=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);c>=o;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);u.reverse(),s.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<s.length;o++){for(;l<u.length&&s[o].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;t.insertBefore(s[o],f)}}function gt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=et("style");return bt(Z(t),e),e.sheet}function bt(t,e){return gt(t.head||t,e),e.sheet}function $t(t,e){if(P){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function It(t,e,n){P&&!n?$t(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode.removeChild(t)}function et(t){return document.createElement(t)}function wt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function Gt(){return L(" ")}function Jt(){return L("")}function Kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function vt(t){return Array.from(t.childNodes)}function kt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){kt(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const o=n(c);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const o=n(c);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function it(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const c=r.attributes[s];n[c.name]||u.push(c.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Qt(t,e,n){return it(t,e,n,et)}function Ut(t,e,n){return it(t,e,n,wt)}function Et(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>L(e),!0)}function Wt(t){return Et(t," ")}function Vt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Xt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Yt(t,e,n){t.classList[n?"add":"remove"](e)}function Nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Zt(t,e=document.body){return Array.from(e.querySelectorAll(t))}const q=new Map;let M=0;function At(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:xt(e),rules:{}};return q.set(t,n),n}function rt(t,e,n,i,r,u,s,c=0){const o=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=o){const N=e+(n-e)*u(m);l+=m*100+`%{${s(N,1-N)}}
`}const f=l+`100% {${s(n,1-n)}}
}`,a=`__svelte_${At(f)}_${c}`,_=Z(t),{stylesheet:d,rules:h}=q.get(_)||St(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,M+=1,a}function T(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||jt())}function jt(){F(()=>{M||(q.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&tt(e)}),q.clear())})}let k;function v(t){k=t}function ot(){if(!k)throw new Error("Function called outside component initialization");return k}function te(t){ot().$$.on_mount.push(t)}function ee(t){ot().$$.after_update.push(t)}const w=[],G=[],j=[],J=[],st=Promise.resolve();let z=!1;function ct(){z||(z=!0,st.then(lt))}function ne(){return ct(),st}function E(t){j.push(t)}const R=new Set;let S=0;function lt(){const t=k;do{for(;S<w.length;){const e=w[S];S++,v(e),Ct(e.$$)}for(v(null),w.length=0,S=0;G.length;)G.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];R.has(n)||(R.add(n),n())}j.length=0}while(w.length);for(;J.length;)J.pop()();z=!1,R.clear(),v(t)}function Ct(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}let $;function ut(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function O(t,e,n){t.dispatchEvent(Nt(`${e?"intro":"outro"}${n}`))}const C=new Set;let y;function ie(){y={r:0,c:[],p:y}}function re(){y.r||b(y.c),y=y.p}function qt(t,e){t&&t.i&&(C.delete(t),t.i(e))}function oe(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),y.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const at={duration:0};function se(t,e,n){let i=e(t,n),r=!1,u,s,c=0;function o(){u&&T(t,u)}function l(){const{delay:a=0,duration:_=300,easing:d=K,tick:h=x,css:p}=i||at;p&&(u=rt(t,0,1,_,a,d,p,c++)),h(0,1);const m=V()+a,N=m+_;s&&s.abort(),r=!0,E(()=>O(t,!0,"start")),s=Y(D=>{if(r){if(D>=N)return h(1,0),O(t,!0,"end"),o(),r=!1;if(D>=m){const H=d((D-m)/_);h(H,1-H)}}return r})}let f=!1;return{start(){f||(f=!0,T(t),B(i)?(i=i(),ut().then(l)):l())},invalidate(){f=!1},end(){r&&(o(),r=!1)}}}function ce(t,e,n){let i=e(t,n),r=!0,u;const s=y;s.r+=1;function c(){const{delay:o=0,duration:l=300,easing:f=K,tick:a=x,css:_}=i||at;_&&(u=rt(t,1,0,l,o,f,_));const d=V()+o,h=d+l;E(()=>O(t,!1,"start")),Y(p=>{if(r){if(p>=h)return a(0,1),O(t,!1,"end"),--s.r||b(s.c),!1;if(p>=d){const m=f((p-d)/l);a(1-m,m)}}return r})}return B(i)?ut().then(()=>{i=i(),c()}):c(),{end(o){o&&i.tick&&i.tick(1,0),r&&(u&&T(t,u),r=!1)}}}function le(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const s=t[u],c=e[u];if(c){for(const o in s)o in c||(i[o]=1);for(const o in c)r[o]||(n[o]=c[o],r[o]=1);t[u]=c}else for(const o in s)r[o]=1}for(const s in i)s in n||(n[s]=void 0);return n}function ue(t){return typeof t=="object"&&t!==null?t:{}}function ae(t){t&&t.c()}function fe(t,e){t&&t.l(e)}function Mt(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:s,after_update:c}=t.$$;r&&r.m(e,n),i||E(()=>{const o=u.map(Q).filter(B);s?s.push(...o):b(o),t.$$.on_mount=[]}),c.forEach(E)}function Ot(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Pt(t,e){t.$$.dirty[0]===-1&&(w.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _e(t,e,n,i,r,u,s,c=[-1]){const o=k;v(t);const l=t.$$={fragment:null,ctx:null,props:u,update:x,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:I(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&r(l.ctx[a],l.ctx[a]=h)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](h),f&&Pt(t,a)),_}):[],l.update(),f=!0,b(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){ht();const a=vt(e.target);l.fragment&&l.fragment.l(a),a.forEach(tt)}else l.fragment&&l.fragment.c();e.intro&&qt(t.$$.fragment),Mt(t,e.target,e.anchor,e.customElement),mt(),lt()}v(o)}class de{$destroy(){Ot(this,1),this.$destroy=x}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{x as A,zt as B,Ft as C,Lt as D,Bt as E,$t as F,Tt as G,wt as H,Ut as I,Rt as J,Yt as K,Zt as L,E as M,se as N,ce as O,K as P,ft as Q,le as R,de as S,ue as T,Ht as U,Gt as a,It as b,Wt as c,re as d,Jt as e,qt as f,ie as g,tt as h,_e as i,ee as j,et as k,Qt as l,vt as m,Kt as n,te as o,Xt as p,L as q,Et as r,Dt as s,oe as t,Vt as u,ae as v,fe as w,Mt as x,Ot as y,ne as z};

"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const V="[",X="]",Z=/[&"<]/g,$=/[&<]/g;function f(e,t){const n=String(e??""),s=t?Z:$;s.lastIndex=0;let o="",l=0;for(;s.test(n);){const i=s.lastIndex-1,r=n[i];o+=n.substring(l,i)+(r==="&"?"&amp;":r==='"'?"&quot;":"&lt;"),l=i+1}return o+n.substring(l)}const P={translate:new Map([[!0,"yes"],[!1,"no"]])};function j(e,t,n=!1){if(t==null||!t&&n||t===""&&e==="class")return"";const s=e in P&&P[e].get(t)||t,o=n?"":`="${f(s,!0)}"`;return` ${e}${o}`}const _=()=>{};function ee(e,t,n=!1){return e===void 0?n?t():t:e}function te(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ne(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let y=!1;function se(e){var t=y;try{return y=!0,e()}finally{y=t}}const m=[];function D(e,t=_){let n=null;const s=new Set;function o(r){if(te(e,r)&&(e=r,n)){const d=!m.length;for(const u of s)u[1](),m.push(u,e);if(d){for(let u=0;u<m.length;u+=2)m[u][0](m[u+1]);m.length=0}}}function l(r){o(r(e))}function i(r,d=_){const u=[r,d];return s.add(u),s.size===1&&(n=t(o,l)||_),r(e),()=>{s.delete(u),s.size===0&&n&&(n(),n=null)}}return{set:o,update:l,subscribe:i}}function oe(e,t,n){if(e==null)return t(void 0),_;const s=se(()=>e.subscribe(t,n));return s.unsubscribe?()=>s.unsubscribe():s}var g=null;function re(e){return le().get(e)}function le(e){return g===null&&ne(),g.c??(g.c=new Map(ce(g)||void 0))}function N(e){g={p:g,c:null,d:null}}function z(){var e=g,t=e.d;t&&fe.push(...t),g=e.p}function ce(e){let t=e.p;for(;t!==null;){const n=t.c;if(n!==null)return n;t=t.p}return null}const ie=`<!--${V}-->`,ue=`<!--${X}-->`;function ae({out:e,css:t,head:n}){return{out:e,css:new Set(t),head:{title:n.title,out:n.out}}}function de(e,t){e.out=t.out,e.head=t.head}let fe=[];function he(e,t){const n=e.head;n.out+=ie,t(n),n.out+=ue}function ve(e){const t={};let n;for(let s=0;s<e.length;s++){const o=e[s];for(n in o){const l=Object.getOwnPropertyDescriptor(o,n);l?Object.defineProperty(t,n,l):t[n]=o[n]}}return t}function k(e,t,n){var o;if(t in e&&e[t][0]===n)return e[t][2];(o=e[t])==null||o[1](),e[t]=[n,null,void 0];const s=oe(n,l=>e[t][2]=l);return e[t][1]=s,e[t][2]}function F(e){for(const t in e)e[t][1]()}function x(e,t){var n;for(const s in t){const o=e[s],l=t[s];o===void 0&&l!==void 0&&((n=Object.getOwnPropertyDescriptor(e,s))!=null&&n.set)&&(e[s]=l)}}function w(e){return e?e.length!==void 0?e:Array.from(e):[]}function ge(e,t){var r;var n;let s=t.node,o=t.index;const{next:l,content:i}=s;e.out+="<!---->",(r=i.comp)==null||r.call(i,e,ve([i.props,{children:d=>{d.out+="<!---->",k(n??(n={}),"$next",l)?(d.out+="<!--[-->",Y(d,{node:k(n??(n={}),"$next",l),index:o+1})):d.out+="<!--[!-->",d.out+="<!--]-->",d.out+="<!---->"},$$slots:{default:!0}}])),e.out+="<!---->",n&&F(n),x(t,{node:s,index:o})}const G=Symbol(),M=ge,be={...M,$$render:(e,t,n,s,o)=>{try{return M.$$render(e,t,n,s,o)}catch{const r={status:500,message:"Internal Error"};return re(G)({index:t.index,props:r}),t.node.content.errPage.$$render(e,r,n,s,o)}}},Y=be;function pe(e){let t=D(null);for(let n=e.length-1;n>=0;n--)t=D({content:e[n],next:t});return t}let C;function me(e,t){C={},C.url=D(new URL(e)),C.node=pe(t)}function Se(e,t){N();var n;let s=t.nodes,o=t.contextData;me(o.URL,s);const{node:l}=C;e.out+="<!---->",k(n??(n={}),"$node",l)?(e.out+="<!--[-->",Y(e,{node:k(n??(n={}),"$node",l),index:0})):e.out+="<!--[!-->",e.out+="<!--]-->",e.out+="<!---->",n&&F(n),x(t,{nodes:s,contextData:o}),z()}function U(e){e.out+='<div class="info-card svelte-15kz9bl"><strong>估咩評論小扒手</strong> 幫你輕鬆爬取 Google Maps 商家評論，<br> 輸入店名立即開始吧！</div>'}function W(e,t){N();let n=t.searchInputStr,s=t.selectedStore,o=t.pagesToFetch,l=t.handleSearch,i=t.handleGetReview,r=ee(t.storeData,()=>[],!0);if(Object.keys(r).length!==0){e.out+="<!--[-->";const d=w(r);e.out+='<form class="input-form chose-store svelte-e5nmlf"><div class="store-select-box svelte-e5nmlf"><label for="store" class="svelte-e5nmlf">選擇店家</label> <select class="store-select svelte-e5nmlf"><!--[-->';for(let u=0,h=d.length;u<h;u++){let a=d[u];e.out+=`<option${j("value",a)}>${f(a.Name)}</option>`}e.out+=`<!--]--></select></div> <div class="pages-box svelte-e5nmlf"><label for="pages" class="svelte-e5nmlf">輸入頁數，0代表全部</label> <input type="number" name="pages" placeholder="輸入頁數"${j("value",o)} class="svelte-e5nmlf"></div> <button type="submit" class="button svelte-e5nmlf">確定</button></form>`}else e.out+="<!--[!-->",U(e),e.out+=`<!----> <form class="input-form svelte-e5nmlf"><input type="text" placeholder="輸入關鍵字"${j("value",n)} class="svelte-e5nmlf"> <button type="submit" class="button svelte-e5nmlf">搜尋</button></form>`;e.out+="<!--]-->",x(t,{searchInputStr:n,selectedStore:s,pagesToFetch:o,handleSearch:l,handleGetReview:i,storeData:r}),z()}function H(e){const t=["loading","loading.","loading..","loading..."];let n=t[0],s=1;setInterval(()=>{n=t[s],s=(s+1)%t.length},500),e.out+=`<div class="loader-container svelte-nx5s04"><p class="svelte-nx5s04">${f(n)}</p> <div class="loader svelte-nx5s04"></div></div>`}function xe(e,t){N();let n=t.title,s=t.subtitle;const o="/api/search",l="/api/reviews";let i="",r="",d=1,u=[],h=[],a=!1;const p=async()=>{if(a=!0,console.log(i),i===""){alert("請輸入搜尋關鍵字"),a=!1;return}try{const c=await fetch(o+`?storeName=${i}`);if(!c.ok){console.error("Error:",c.statusText),alert("無法取得搜尋結果");return}u=await c.json(),console.log(u)}catch(c){console.error(c),alert("無法取得搜尋結果")}finally{a=!1}},I=async()=>{if(a=!0,console.log(r),r===""){alert("請選擇店家"),a=!1;return}try{const c=await fetch(l+`?storeID=${r.ID}&pages=${d}`);if(!c.ok){console.error("Error:",c.statusText),alert("無法取得評論");return}h=await c.json(),console.log(h)}catch(c){console.error(c),alert("無法取得評論")}finally{a=!1}};let S=!0,q;function K(c){if(he(c,v=>{v.title=`<title>${f(n)} - 榛果繽紛樂</title>`}),c.out+=`<div class="container svelte-vqnkcd"><img src="https://src.hazelnut-paradise.com/GooMapReviewSnatcher.png" alt="GooMapReviewSnatcher" style="width: 100%; max-width: 150px;" class="svelte-vqnkcd"> <div class="title-box svelte-vqnkcd"><h1 class="title svelte-vqnkcd">${f(n)}</h1> <h2 class="subtitle svelte-vqnkcd">${f(s)}</h2></div> `,a)c.out+="<!--[-->",H(c);else{if(c.out+="<!--[!-->",Object.keys(h).length==0)c.out+="<!--[-->",W(c,{handleSearch:p,handleGetReview:I,storeData:u,get pagesToFetch(){return d},set pagesToFetch(v){d=v,S=!1},get searchInputStr(){return i},set searchInputStr(v){i=v,S=!1},get selectedStore(){return r},set selectedStore(v){r=v,S=!1}});else{c.out+="<!--[!-->";const v=w(Object.keys(h[0])),A=w(h);c.out+=`<button class="reset-button button svelte-vqnkcd">查詢其他商家</button> <div class="review-box svelte-vqnkcd"><h3 class="store-name svelte-vqnkcd">${f(r.Name)}</h3> <button class="download-button button svelte-vqnkcd">下載 CSV</button> <button class="download-button button svelte-vqnkcd">下載 JSON</button> <div class="review-table-box svelte-vqnkcd"><table class="review-table svelte-vqnkcd"><thead class="svelte-vqnkcd"><tr class="svelte-vqnkcd"><!--[-->`;for(let b=0,O=v.length;b<O;b++){let R=v[b];c.out+=`<th class="svelte-vqnkcd">${f(R)}</th>`}c.out+='<!--]--></tr></thead><tbody class="svelte-vqnkcd"><!--[-->';for(let b=0,O=A.length;b<O;b++){let R=A[b];const L=w(Object.values(R));c.out+='<tr class="svelte-vqnkcd"><!--[-->';for(let E=0,Q=L.length;E<Q;E++){let J=L[E];c.out+=`<td class="svelte-vqnkcd">${f(J)}</td>`}c.out+="<!--]--></tr>"}c.out+="<!--]--></tbody></table></div></div>"}c.out+="<!--]-->"}c.out+='<!--]--></div> <div id="navbar-placeholder" style="height: 50px; z-index: 100;" class="svelte-vqnkcd"></div> <footer class="svelte-vqnkcd">2025 - 榛果繽紛樂</footer>'}do S=!0,q=ae(e),K(q);while(!S);de(e,q),x(t,{title:n,subtitle:s}),z()}function _e(e,t){let n=t.status,s=t.message;e.out+=`<h1>${f(n)}</h1> <p class="svelte-5zxcoy">${f(s)}</p>`,x(t,{status:n,message:s})}const we=Se,Ce="/golte_/entries/hydrate-B7QQ0sLc.js",T={"components/InfoCard":{server:U,Client:"/golte_/entries/InfoCard-DsmM0Zsi.js",CSS:["/golte_/assets/InfoCard-3z19lYhA.css"]},"components/InputCard":{server:W,Client:"/golte_/entries/InputCard-C4RW-2B8.js",CSS:["/golte_/assets/InputCard-Bp3zFdIY.css","/golte_/assets/InfoCard-3z19lYhA.css"]},"components/Loader":{server:H,Client:"/golte_/entries/Loader-CFgeOWCn.js",CSS:["/golte_/assets/Loader-BbdzO3D6.css"]},"pages/App":{server:xe,Client:"/golte_/entries/App-Do1Z38nU.js",CSS:["/golte_/assets/App-DvIcxNDf.css","/golte_/assets/InputCard-Bp3zFdIY.css","/golte_/assets/InfoCard-3z19lYhA.css","/golte_/assets/Loader-BbdzO3D6.css"]},$$$GOLTE_DEFAULT_ERROR$$$:{server:_e,Client:"/golte_/entries/default-error-RbP_9ccR.js",CSS:["/golte_/assets/default-error-jCKc6TVQ.css"]}};function ke(e,t,n){const s=[],o=[],l=new Set,i=T[n];if(!i)throw new Error(`"${n}" is not a component`);for(const a of e){const p=T[a.Comp];if(!p)throw new Error(`"${a.Comp}" is not a component`);s.push({comp:p.server,props:a.Props,errPage:i.server}),o.push({comp:`${p.Client}`,props:a.Props,errPage:`${i.Client}`});for(const I of p.CSS)l.add(I)}for(const a of i.CSS)l.add(a);let r;const d=new Map;d.set(G,a=>r=a);let{html:u,head:h}=we.render({nodes:s,contextData:t},{context:d});for(const a of l)h+=`
<link href="${a}" rel="stylesheet">`;return r&&(o[r.index].ssrError=r.props),u+=`
        <script>
            (async function () {
                const target = document.currentScript.parentElement;
                const { hydrate } = await import("${Ce}");
                await hydrate(target, ${B(o)}, ${B(t)});
            })();
        <\/script>
    `,{Head:h,Body:u,HasError:!!r}}function B(e){return JSON.stringify(e).replace("<\/script>","<\\/script>")}exports.Manifest=T;exports.Render=ke;

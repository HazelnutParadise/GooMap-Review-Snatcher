"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const V="[",Z="]",$=/[&"<]/g,ee=/[&<]/g;function f(e,t){const n=String(e??""),s=t?$:ee;s.lastIndex=0;let o="",c=0;for(;s.test(n);){const i=s.lastIndex-1,r=n[i];o+=n.substring(c,i)+(r==="&"?"&amp;":r==='"'?"&quot;":"&lt;"),c=i+1}return o+n.substring(c)}const B={translate:new Map([[!0,"yes"],[!1,"no"]])};function N(e,t,n=!1){if(t==null||!t&&n||t===""&&e==="class")return"";const s=e in B&&B[e].get(t)||t,o=n?"":`="${f(s,!0)}"`;return` ${e}${o}`}const x=()=>{};function te(e,t,n=!1){return e===void 0?n?t():t:e}function ne(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function se(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let R=!1;function oe(e){var t=R;try{return R=!0,e()}finally{R=t}}const w=[];function y(e,t=x){let n=null;const s=new Set;function o(r){if(ne(e,r)&&(e=r,n)){const d=!w.length;for(const u of s)u[1](),w.push(u,e);if(d){for(let u=0;u<w.length;u+=2)w[u][0](w[u+1]);w.length=0}}}function c(r){o(r(e))}function i(r,d=x){const u=[r,d];return s.add(u),s.size===1&&(n=t(o,c)||x),r(e),()=>{s.delete(u),s.size===0&&n&&(n(),n=null)}}return{set:o,update:c,subscribe:i}}function re(e,t,n){if(e==null)return t(void 0),x;const s=oe(()=>e.subscribe(t,n));return s.unsubscribe?()=>s.unsubscribe():s}var g=null;function le(e){return ce().get(e)}function ce(e){return g===null&&se(),g.c??(g.c=new Map(ie(g)||void 0))}function z(e){g={p:g,c:null,d:null}}function L(){var e=g,t=e.d;t&&he.push(...t),g=e.p}function ie(e){let t=e.p;for(;t!==null;){const n=t.c;if(n!==null)return n;t=t.p}return null}const ue=`<!--${V}-->`,ae=`<!--${Z}-->`;function de({out:e,css:t,head:n}){return{out:e,css:new Set(t),head:{title:n.title,out:n.out}}}function fe(e,t){e.out=t.out,e.head=t.head}let he=[];function ve(e,t){const n=e.head;n.out+=ue,t(n),n.out+=ae}function ge(e){const t={};let n;for(let s=0;s<e.length;s++){const o=e[s];for(n in o){const c=Object.getOwnPropertyDescriptor(o,n);c?Object.defineProperty(t,n,c):t[n]=o[n]}}return t}function E(e,t,n){var o;if(t in e&&e[t][0]===n)return e[t][2];(o=e[t])==null||o[1](),e[t]=[n,null,void 0];const s=re(n,c=>e[t][2]=c);return e[t][1]=s,e[t][2]}function G(e){for(const t in e)e[t][1]()}function _(e,t){var n;for(const s in t){const o=e[s],c=t[s];o===void 0&&c!==void 0&&((n=Object.getOwnPropertyDescriptor(e,s))!=null&&n.set)&&(e[s]=c)}}function S(e){return e?e.length!==void 0?e:Array.from(e):[]}function be(e,t){var r;var n;let s=t.node,o=t.index;const{next:c,content:i}=s;e.out+="<!---->",(r=i.comp)==null||r.call(i,e,ge([i.props,{children:d=>{d.out+="<!---->",E(n??(n={}),"$next",c)?(d.out+="<!--[-->",Y(d,{node:E(n??(n={}),"$next",c),index:o+1})):d.out+="<!--[!-->",d.out+="<!--]-->",d.out+="<!---->"},$$slots:{default:!0}}])),e.out+="<!---->",n&&G(n),_(t,{node:s,index:o})}const X=Symbol(),M=be,pe={...M,$$render:(e,t,n,s,o)=>{try{return M.$$render(e,t,n,s,o)}catch{const r={status:500,message:"Internal Error"};return le(X)({index:t.index,props:r}),t.node.content.errPage.$$render(e,r,n,s,o)}}},Y=pe;function we(e){let t=y(null);for(let n=e.length-1;n>=0;n--)t=y({content:e[n],next:t});return t}let C;function me(e,t){C={},C.url=y(new URL(e)),C.node=we(t)}function _e(e,t){z();var n;let s=t.nodes,o=t.contextData;me(o.URL,s);const{node:c}=C;e.out+="<!---->",E(n??(n={}),"$node",c)?(e.out+="<!--[-->",Y(e,{node:E(n??(n={}),"$node",c),index:0})):e.out+="<!--[!-->",e.out+="<!--]-->",e.out+="<!---->",n&&G(n),_(t,{nodes:s,contextData:o}),L()}function W(e){e.out+='<div class="info-card svelte-15kz9bl"><strong>估咩評論小扒手</strong> 幫你輕鬆爬取 Google Maps 商家評論，<br> 輸入店名立即開始吧！</div>'}function q(e,t){z();let n=t.searchInputStr,s=t.selectedStore,o=t.pagesToFetch,c=t.handleSearch,i=t.handleGetReview,r=te(t.storeData,()=>[],!0);if(Object.keys(r).length!==0){e.out+="<!--[-->";const d=S(r);e.out+='<form class="input-form chose-store svelte-e5nmlf"><div class="store-select-box svelte-e5nmlf"><label for="store" class="svelte-e5nmlf">選擇店家</label> <select class="store-select svelte-e5nmlf"><!--[-->';for(let u=0,h=d.length;u<h;u++){let a=d[u];e.out+=`<option${N("value",a)}>${f(a.Name)}</option>`}e.out+=`<!--]--></select></div> <div class="pages-box svelte-e5nmlf"><label for="pages" class="svelte-e5nmlf">輸入頁數，0代表全部</label> <input type="number" name="pages" placeholder="輸入頁數"${N("value",o)} class="svelte-e5nmlf"></div> <button type="submit" class="button svelte-e5nmlf">確定</button></form>`}else e.out+="<!--[!-->",W(e),e.out+=`<!----> <form class="input-form svelte-e5nmlf"><input type="text" placeholder="輸入關鍵字"${N("value",n)} class="svelte-e5nmlf"> <button type="submit" class="button svelte-e5nmlf">搜尋</button></form>`;e.out+="<!--]-->",_(t,{searchInputStr:n,selectedStore:s,pagesToFetch:o,handleSearch:c,handleGetReview:i,storeData:r}),L()}function U(e){const t=["loading","loading.","loading..","loading..."];let n=t[0],s=1;setInterval(()=>{n=t[s],s=(s+1)%t.length},500),e.out+=`<div class="loader-container svelte-nx5s04"><p class="svelte-nx5s04">${f(n)}</p> <div class="loader svelte-nx5s04"></div></div>`}function H(e){var t=function(n){n.hasAd?console.log("TD has AD"):console.log("TD AD Empty")};ONEAD_TEXT={},ONEAD_TEXT.pub={},ONEAD_TEXT.pub.uid="2000181",ONEAD_TEXT.pub.slotobj=document.getElementById("div-onead-draft"),ONEAD_TEXT.pub.player_mode="text-drive",ONEAD_TEXT.pub.queryAdCallback=t,window.ONEAD_text_pubs=window.ONEAD_text_pubs||[],ONEAD_text_pubs.push(ONEAD_TEXT),e.out+='<div id="div-onead-draft"></div>'}function xe(e,t){z();let n=t.title,s=t.subtitle;const o="/api/search",c="/api/reviews";let i="",r="",d=1,u=[],h=[],a=!1;const p=async()=>{if(a=!0,console.log(i),i===""){alert("請輸入搜尋關鍵字"),a=!1;return}try{const l=await fetch(o+`?storeName=${i}`);if(!l.ok){console.error("Error:",l.statusText),alert("無法取得搜尋結果");return}u=await l.json(),console.log(u)}catch(l){console.error(l),alert("無法取得搜尋結果")}finally{a=!1}},T=async()=>{if(a=!0,console.log(r),r===""){alert("請選擇店家"),a=!1;return}try{const l=await fetch(c+`?storeID=${r.ID}&pages=${d}`);if(!l.ok){console.error("Error:",l.statusText),alert("無法取得評論");return}h=await l.json(),console.log(h)}catch(l){console.error(l),alert("無法取得評論")}finally{a=!1}};let m=!0,O;function K(l){if(ve(l,v=>{v.title=`<title>${f(n)} - 榛果繽紛樂</title>`}),l.out+=`<div id="navbar-placeholder" style="height: 50px; z-index: 100;" class="svelte-12wvi4t"></div> <div id="Pistachio-Announcement" style="display: fixed; top: 20px; left: 0; z-index: 100;" class="svelte-12wvi4t"></div> <div class="container svelte-12wvi4t"><img src="https://src.hazelnut-paradise.com/GooMapReviewSnatcher.png" alt="GooMapReviewSnatcher" style="width: 100%; max-width: 150px;" class="svelte-12wvi4t"> <div class="title-box svelte-12wvi4t"><h1 class="title svelte-12wvi4t">${f(n)}</h1> <h2 class="subtitle svelte-12wvi4t">${f(s)}</h2></div> `,a)l.out+="<!--[-->",U(l);else{if(l.out+="<!--[!-->",Object.keys(h).length==0)l.out+="<!--[-->",q(l,{handleSearch:p,handleGetReview:T,storeData:u,get pagesToFetch(){return d},set pagesToFetch(v){d=v,m=!1},get searchInputStr(){return i},set searchInputStr(v){i=v,m=!1},get selectedStore(){return r},set selectedStore(v){r=v,m=!1}});else{l.out+="<!--[!-->";const v=S(Object.keys(h[0])),k=S(h);l.out+=`<button class="reset-button button svelte-12wvi4t">查詢其他商家</button> <div class="review-box svelte-12wvi4t"><h3 class="store-name svelte-12wvi4t">${f(r.Name)}</h3> <button class="download-button button svelte-12wvi4t">下載 CSV</button> <button class="download-button button svelte-12wvi4t">下載 JSON</button> <div class="review-table-box svelte-12wvi4t"><table class="review-table svelte-12wvi4t"><thead class="svelte-12wvi4t"><tr class="svelte-12wvi4t"><!--[-->`;for(let b=0,D=v.length;b<D;b++){let A=v[b];l.out+=`<th class="svelte-12wvi4t">${f(A)}</th>`}l.out+='<!--]--></tr></thead><tbody class="svelte-12wvi4t"><!--[-->';for(let b=0,D=k.length;b<D;b++){let A=k[b];const P=S(Object.values(A));l.out+='<tr class="svelte-12wvi4t"><!--[-->';for(let I=0,J=P.length;I<J;I++){let Q=P[I];l.out+=`<td class="svelte-12wvi4t">${f(Q)}</td>`}l.out+="<!--]--></tr>"}l.out+="<!--]--></tbody></table></div></div>"}l.out+="<!--]-->"}l.out+='<!--]--></div> <footer class="svelte-12wvi4t">',H(l),l.out+="<!----> 2025 - 榛果繽紛樂</footer>"}do m=!0,O=de(e),K(O);while(!m);fe(e,O),_(t,{title:n,subtitle:s}),L()}function Se(e,t){let n=t.status,s=t.message;e.out+=`<h1>${f(n)}</h1> <p class="svelte-5zxcoy">${f(s)}</p>`,_(t,{status:n,message:s})}const Ce=_e,Ee="/golte_/entries/hydrate-B7QQ0sLc.js",j={"pages/App":{server:xe,Client:"/golte_/entries/App-DKJTafrw.js",CSS:["/golte_/assets/App-DhfV6BpC.css","/golte_/assets/InputCard-Bp3zFdIY.css","/golte_/assets/InfoCard-3z19lYhA.css","/golte_/assets/Loader-BbdzO3D6.css"]},"components/Ad":{server:H,Client:"/golte_/entries/Ad-DkWk2OLu.js",CSS:[]},"components/InfoCard":{server:W,Client:"/golte_/entries/InfoCard-DsmM0Zsi.js",CSS:["/golte_/assets/InfoCard-3z19lYhA.css"]},"components/InputCard":{server:q,Client:"/golte_/entries/InputCard-C4RW-2B8.js",CSS:["/golte_/assets/InputCard-Bp3zFdIY.css","/golte_/assets/InfoCard-3z19lYhA.css"]},"components/Loader":{server:U,Client:"/golte_/entries/Loader-CFgeOWCn.js",CSS:["/golte_/assets/Loader-BbdzO3D6.css"]},$$$GOLTE_DEFAULT_ERROR$$$:{server:Se,Client:"/golte_/entries/default-error-RbP_9ccR.js",CSS:["/golte_/assets/default-error-jCKc6TVQ.css"]}};function Te(e,t,n){const s=[],o=[],c=new Set,i=j[n];if(!i)throw new Error(`"${n}" is not a component`);for(const a of e){const p=j[a.Comp];if(!p)throw new Error(`"${a.Comp}" is not a component`);s.push({comp:p.server,props:a.Props,errPage:i.server}),o.push({comp:`${p.Client}`,props:a.Props,errPage:`${i.Client}`});for(const T of p.CSS)c.add(T)}for(const a of i.CSS)c.add(a);let r;const d=new Map;d.set(X,a=>r=a);let{html:u,head:h}=Ce.render({nodes:s,contextData:t},{context:d});for(const a of c)h+=`
<link href="${a}" rel="stylesheet">`;return r&&(o[r.index].ssrError=r.props),u+=`
        <script>
            (async function () {
                const target = document.currentScript.parentElement;
                const { hydrate } = await import("${Ee}");
                await hydrate(target, ${F(o)}, ${F(t)});
            })();
        <\/script>
    `,{Head:h,Body:u,HasError:!!r}}function F(e){return JSON.stringify(e).replace("<\/script>","<\\/script>")}exports.Manifest=j;exports.Render=Te;

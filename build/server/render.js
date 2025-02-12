"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});function m(){}function L(e){return e()}function Z(){return Object.create(null)}function T(e){e.forEach(L)}function F(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function k(e,...t){if(e==null){for(const a of t)a(void 0);return m}const A=e.subscribe(...t);return A.unsubscribe?()=>A.unsubscribe():A}let E;function S(e){E=e}function N(){if(!E)throw new Error("Function called outside component initialization");return E}function V(e){return N().$$.context.get(e)}function X(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}const Y=/[&"<]/g,Q=/[&<]/g;function u(e,t=!1){const A=String(e),a=t?Y:Q;a.lastIndex=0;let o="",r=0;for(;a.test(A);){const s=a.lastIndex-1,n=A[s];o+=A.substring(r,s)+(n==="&"?"&amp;":n==='"'?"&quot;":"&lt;"),r=s+1}return o+A.substring(r)}function w(e,t){e=X(e);let A="";for(let a=0;a<e.length;a+=1)A+=t(e[a],a);return A}const P={$$render:()=>""};function b(e,t){if(!e||!e.$$render)throw t==="svelte:component"&&(t+=" this={...}"),new Error(`<${t}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${t}>.`);return e}let B;function v(e){function t(A,a,o,r,s){const n=E,c={on_destroy:B,context:new Map(s||(n?n.$$.context:[])),on_mount:[],before_update:[],after_update:[],callbacks:Z()};S({$$:c});const l=e(A,a,o,r);return S(n),l}return{render:(A={},{$$slots:a={},context:o=new Map}={})=>{B=[];const r={title:"",head:"",css:new Set},s=t(r,A,{},a,o);return T(B),{html:s,css:{code:Array.from(r.css).map(n=>n.code).join(`
`),map:null},head:r.title+r.head}},$$render:t}}function g(e,t,A){if(t==null||A)return"";const a=`="${u(t,!0)}"`;return` ${e}${a}`}const H=v((e,t,A,a)=>{let o,r,{node:s}=t,{index:n}=t;const{next:c,content:l}=s;return r=k(c,d=>o=d),t.node===void 0&&A.node&&s!==void 0&&A.node(s),t.index===void 0&&A.index&&n!==void 0&&A.index(n),r(),`  ${b(l.comp||P,"svelte:component").$$render(e,Object.assign({},l.props),{},{default:()=>` ${o?` ${b(D,"Node").$$render(e,{node:o,index:n+1},{},{})}`:""}`})}`}),j=Symbol(),O=H,q={...O,$$render:(e,t,A,a,o)=>{try{return O.$$render(e,t,A,a,o)}catch{const n={status:500,message:"Internal Error"};return V(j)({index:t.index,props:n}),t.node.content.errPage.$$render(e,n,A,a,o)}}},D=q,h=[];function y(e,t=m){let A;const a=new Set;function o(n){if(F(e,n)&&(e=n,A)){const c=!h.length;for(const l of a)l[1](),h.push(l,e);if(c){for(let l=0;l<h.length;l+=2)h[l][0](h[l+1]);h.length=0}}}function r(n){o(n(e))}function s(n,c=m){const l=[n,c];return a.add(l),a.size===1&&(A=t(o,r)||m),n(e),()=>{a.delete(l),a.size===0&&A&&(A(),A=null)}}return{set:o,update:r,subscribe:s}}function J(e){let t=y(null);for(let A=e.length-1;A>=0;A--)t=y({content:e[A],next:t});return t}let x;function $(e,t){x={},x.url=y(new URL(e)),x.node=J(t)}const ee=v((e,t,A,a)=>{let o,r,{nodes:s}=t,{contextData:n}=t;$(n.URL,s);const{node:c}=x;return r=k(c,l=>o=l),t.nodes===void 0&&A.nodes&&s!==void 0&&A.nodes(s),t.contextData===void 0&&A.contextData&&n!==void 0&&A.contextData(n),r(),` ${o?`${b(D,"Node").$$render(e,{node:o,index:0},{},{})}`:""}`}),te={code:".info-card.svelte-1ekwafl{background-color:#70798C;border-radius:20px;padding:20px;color:white;margin-bottom:20px;font-size:medium}",map:'{"version":3,"file":"InfoCard.svelte","sources":["InfoCard.svelte"],"sourcesContent":["<div class=\\"info-card\\">\\n    <strong>估咩評論小扒手</strong> 幫你輕鬆爬取 Google Maps 商家評論，<br/>\\n    輸入店名立即開始吧！\\n</div>\\n\\n<style>\\n    .info-card {\\n        background-color: #70798C;\\n        border-radius: 20px;\\n        padding: 20px;\\n        color: white;\\n        margin-bottom: 20px;\\n        font-size: medium;\\n    }  \\n</style>"],"names":[],"mappings":"AAMI,yBAAW,CACP,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,KAAK,CACZ,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,MACf"}'},z=v((e,t,A,a)=>(e.css.add(te),`<div class="info-card svelte-1ekwafl" data-svelte-h="svelte-1ndbl8w"><strong>估咩評論小扒手</strong> 幫你輕鬆爬取 Google Maps 商家評論，<br>
    輸入店名立即開始吧！
</div>`)),Ae={code:'.input-form.svelte-e5nmlf{min-height:100px;width:500px;max-width:90vw;padding:20px;background-color:#70798C;border-radius:20px;display:flex;justify-items:center;align-items:center}.chose-store.svelte-e5nmlf{flex-direction:column;align-items:start}input[type="text"].svelte-e5nmlf{height:40px;width:80%;border-radius:15px;border:none;padding:5px;margin-right:10px}input[type="text"].svelte-e5nmlf:focus{border:3px solid #0A0903}input[type="number"].svelte-e5nmlf{height:40px;width:100%;border-radius:15px;border:none;padding:5px;margin-right:10px}button.svelte-e5nmlf{height:40px;width:20%;border-radius:15px;border:none;background-color:#0A0903;color:white;font-size:1rem;cursor:pointer}.button.svelte-e5nmlf:hover{background-color:#f1f1f1;color:#0A0903}.store-select.svelte-e5nmlf{height:40px;width:100%;border-radius:15px;border:none;padding:5px;margin-right:10px}.store-select-box.svelte-e5nmlf{width:100%;display:flex;flex-direction:column;margin-bottom:10px}.pages-box.svelte-e5nmlf{width:100%;display:flex;flex-direction:column;margin-bottom:10px}label.svelte-e5nmlf{font-weight:500;font-size:large;color:white;margin-bottom:5px}',map:`{"version":3,"file":"InputCard.svelte","sources":["InputCard.svelte"],"sourcesContent":["<script>\\n    import InfoCard from './InfoCard.svelte';\\n    export let searchInputStr;\\n    export let selectedStore;\\n    export let pagesToFetch;\\n    export let handleSearch;\\n    export let handleGetReview;\\n    export let storeData = [];\\n    let form = null;\\n<\/script>\\n\\n\\n\\n{#if  Object.keys(storeData).length !== 0}\\n    <form on:submit|preventDefault={handleGetReview} class=\\"input-form chose-store\\" bind:this={form}>\\n        <div class=\\"store-select-box\\">\\n            <label for=\\"store\\">選擇店家</label>\\n            <select bind:value={selectedStore} class=\\"store-select\\">\\n                {#each storeData as store}\\n                    <option value={store}>{store.Name}</option>\\n                {/each}\\n            </select>\\n        </div>\\n        <div class=\\"pages-box\\">\\n            <label for=\\"pages\\">輸入頁數，0代表全部</label>\\n            <input type=\\"number\\" name=\\"pages\\" placeholder=\\"輸入頁數\\" bind:value={pagesToFetch} />\\n        </div>\\n        <button type=\\"submit\\" class=\\"button\\">確定</button>\\n    </form>\\n{:else}\\n    <InfoCard/>\\n    <form on:submit|preventDefault={handleSearch} class=\\"input-form\\" bind:this={form}>\\n        <input type=\\"text\\" placeholder=\\"輸入關鍵字\\" bind:value={searchInputStr} />\\n        <button type=\\"submit\\" class=\\"button\\">搜尋</button>\\n    </form>\\n{/if}\\n\\n\\n<style>\\n    .input-form {\\n        min-height: 100px;\\n        width: 500px;\\n        max-width: 90vw;\\n        padding: 20px;\\n        background-color: #70798C;\\n        border-radius: 20px;\\n        display: flex;\\n        justify-items: center;\\n        align-items: center;\\n    }\\n\\n    .chose-store {\\n        flex-direction: column;\\n        align-items: start;\\n    }\\n\\n    input[type=\\"text\\"] {\\n        height: 40px;\\n        width: 80%;\\n        border-radius: 15px;\\n        border: none;\\n        padding: 5px;\\n        margin-right: 10px;\\n    }\\n\\n    input[type=\\"text\\"]:focus {\\n        border: 3px solid #0A0903;\\n    }\\n\\n    input[type=\\"number\\"] {\\n        height: 40px;\\n        width: 100%;\\n        border-radius: 15px;\\n        border: none;\\n        padding: 5px;\\n        margin-right: 10px;\\n    }\\n\\n    button {\\n        height: 40px;\\n        width: 20%;\\n        border-radius: 15px;\\n        border: none;\\n        background-color: #0A0903;\\n        color: white;\\n        font-size: 1rem;\\n        cursor: pointer;\\n    }\\n\\n    .button:hover {\\n        background-color: #f1f1f1;\\n        color: #0A0903;\\n    }\\n\\n    .store-select {\\n        height: 40px;\\n        width: 100%;\\n        border-radius: 15px;\\n        border: none;\\n        padding: 5px;\\n        margin-right: 10px;\\n    }\\n    .store-select-box {\\n        width: 100%;\\n        display: flex;\\n        flex-direction: column;\\n        margin-bottom: 10px;\\n    }\\n\\n    .pages-box {\\n        width: 100%;\\n        display: flex;\\n        flex-direction: column;\\n        margin-bottom: 10px;\\n    }\\n\\n    label{\\n        font-weight: 500;\\n        font-size: large;\\n        color: white;\\n        margin-bottom: 5px;\\n    }\\n</style>"],"names":[],"mappings":"AAuCI,yBAAY,CACR,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MAAM,CACrB,WAAW,CAAE,MACjB,CAEA,0BAAa,CACT,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,KACjB,CAEA,KAAK,CAAC,IAAI,CAAC,MAAM,eAAE,CACf,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GAAG,CACV,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,GAAG,CACZ,YAAY,CAAE,IAClB,CAEA,KAAK,CAAC,IAAI,CAAC,MAAM,eAAC,MAAO,CACrB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OACtB,CAEA,KAAK,CAAC,IAAI,CAAC,QAAQ,eAAE,CACjB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,GAAG,CACZ,YAAY,CAAE,IAClB,CAEA,oBAAO,CACH,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GAAG,CACV,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,OACZ,CAEA,qBAAO,MAAO,CACV,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OACX,CAEA,2BAAc,CACV,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,GAAG,CACZ,YAAY,CAAE,IAClB,CACA,+BAAkB,CACd,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,aAAa,CAAE,IACnB,CAEA,wBAAW,CACP,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,aAAa,CAAE,IACnB,CAEA,mBAAK,CACD,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,KAAK,CACZ,aAAa,CAAE,GACnB"}`},W=v((e,t,A,a)=>{let{searchInputStr:o}=t,{selectedStore:r}=t,{pagesToFetch:s}=t,{handleSearch:n}=t,{handleGetReview:c}=t,{storeData:l=[]}=t,d=null;return t.searchInputStr===void 0&&A.searchInputStr&&o!==void 0&&A.searchInputStr(o),t.selectedStore===void 0&&A.selectedStore&&r!==void 0&&A.selectedStore(r),t.pagesToFetch===void 0&&A.pagesToFetch&&s!==void 0&&A.pagesToFetch(s),t.handleSearch===void 0&&A.handleSearch&&n!==void 0&&A.handleSearch(n),t.handleGetReview===void 0&&A.handleGetReview&&c!==void 0&&A.handleGetReview(c),t.storeData===void 0&&A.storeData&&l!==void 0&&A.storeData(l),e.css.add(Ae),`${Object.keys(l).length!==0?`<form class="input-form chose-store svelte-e5nmlf"${g("this",d,0)}><div class="store-select-box svelte-e5nmlf"><label for="store" class="svelte-e5nmlf" data-svelte-h="svelte-cly9uh">選擇店家</label> <select class="store-select svelte-e5nmlf">${w(l,i=>`<option${g("value",i,0)}>${u(i.Name)}</option>`)}</select></div> <div class="pages-box svelte-e5nmlf"><label for="pages" class="svelte-e5nmlf" data-svelte-h="svelte-u04ycx">輸入頁數，0代表全部</label> <input type="number" name="pages" placeholder="輸入頁數" class="svelte-e5nmlf"${g("value",s,0)}></div> <button type="submit" class="button svelte-e5nmlf" data-svelte-h="svelte-tcqmmk">確定</button></form>`:`${b(z,"InfoCard").$$render(e,{},{},{})} <form class="input-form svelte-e5nmlf"${g("this",d,0)}><input type="text" placeholder="輸入關鍵字" class="svelte-e5nmlf"${g("value",o,0)}> <button type="submit" class="button svelte-e5nmlf" data-svelte-h="svelte-1jb2twj">搜尋</button></form>`}`}),ne={code:".loader-container.svelte-nx5s04{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100px}.loader.svelte-nx5s04{width:48px;height:48px;border:5px solid #f3f3f3;border-top:5px solid #3498db;border-radius:50%;animation:svelte-nx5s04-spin 1s linear infinite}@keyframes svelte-nx5s04-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",map:`{"version":3,"file":"Loader.svelte","sources":["Loader.svelte"],"sourcesContent":["<script>\\n    const loadingWords = ['loading', 'loading.', 'loading..', 'loading...'];\\n    let loadingWord = loadingWords[0];\\n    let index = 1;\\n    const interval = setInterval(() => {\\n        loadingWord = loadingWords[index];\\n        index = (index + 1) % loadingWords.length;\\n    }, 500);\\n<\/script>\\n\\n<div class=\\"loader-container\\">\\n    <p>{loadingWord}</p>\\n    <div class=\\"loader\\"></div>\\n</div>\\n\\n<style>\\n    .loader-container {\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: center;\\n        align-items: center;\\n        min-height: 100px;\\n    }\\n\\n    .loader {\\n        width: 48px;\\n        height: 48px;\\n        border: 5px solid #f3f3f3;\\n        border-top: 5px solid #3498db;\\n        border-radius: 50%;\\n        animation: spin 1s linear infinite;\\n    }\\n\\n    @keyframes spin {\\n        0% {\\n        transform: rotate(0deg);\\n        }\\n        100% {\\n        transform: rotate(360deg);\\n        }\\n    }\\n</style>"],"names":[],"mappings":"AAgBI,+BAAkB,CACd,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,KAChB,CAEA,qBAAQ,CACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAC7B,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,kBAAI,CAAC,EAAE,CAAC,MAAM,CAAC,QAC9B,CAEA,WAAW,kBAAK,CACZ,EAAG,CACH,SAAS,CAAE,OAAO,IAAI,CACtB,CACA,IAAK,CACL,SAAS,CAAE,OAAO,MAAM,CACxB,CACJ"}`},U=v((e,t,A,a)=>{const o=["loading","loading.","loading..","loading..."];let r=o[0],s=1;return setInterval(()=>{r=o[s],s=(s+1)%o.length},500),e.css.add(ne),`<div class="loader-container svelte-nx5s04"><p>${u(r)}</p> <div class="loader svelte-nx5s04"></div> </div>`}),oe={code:".container.svelte-12wvi4t.svelte-12wvi4t{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;padding-top:20px;padding-bottom:70px}.title-box.svelte-12wvi4t.svelte-12wvi4t{display:flex;flex-direction:column;align-items:start;justify-content:center;margin-bottom:1rem;transition:transform 0.3s ease}.title.svelte-12wvi4t.svelte-12wvi4t{font-size:2.5rem;color:#2c3e50;margin:0;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.1)}.title-box.svelte-12wvi4t.svelte-12wvi4t:hover{transform:scale(1.05)}.subtitle.svelte-12wvi4t.svelte-12wvi4t{font-size:1.5rem;color:#0A0903;margin:0}.review-box.svelte-12wvi4t.svelte-12wvi4t{width:80%}.store-name.svelte-12wvi4t.svelte-12wvi4t{font-size:1.5rem}.review-table.svelte-12wvi4t.svelte-12wvi4t{border-collapse:collapse;width:100%;background-color:white;box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);border-radius:8px;overflow:hidden}.review-table.svelte-12wvi4t th.svelte-12wvi4t{background-color:#2c3e50;color:white;padding:12px 15px;text-align:left;font-weight:600}.review-table.svelte-12wvi4t td.svelte-12wvi4t{padding:12px 15px;border-bottom:1px solid #ddd}.review-table.svelte-12wvi4t tbody tr.svelte-12wvi4t:hover{background-color:#f5f5f5;transition:background-color 0.2s ease}.review-table.svelte-12wvi4t tbody tr:last-child td.svelte-12wvi4t{border-bottom:none}.review-table-box.svelte-12wvi4t.svelte-12wvi4t{width:100%;height:500px;overflow:auto;background-color:white;border-radius:8px;box-shadow:0 0 20px rgba(0, 0, 0, 0.1);padding:1rem}.review-table-box.svelte-12wvi4t.svelte-12wvi4t::-webkit-scrollbar{width:8px;height:8px}.review-table-box.svelte-12wvi4t.svelte-12wvi4t::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.review-table-box.svelte-12wvi4t.svelte-12wvi4t::-webkit-scrollbar-thumb{background:#888;border-radius:4px}.review-table-box.svelte-12wvi4t.svelte-12wvi4t::-webkit-scrollbar-thumb:hover{background:#555}.reset-button.svelte-12wvi4t.svelte-12wvi4t{height:50px;width:20%;min-width:200px;border-radius:15px;border:none;background-color:#0A0903;color:white;font-size:1rem;cursor:pointer;margin-bottom:1rem}.download-button.svelte-12wvi4t.svelte-12wvi4t{height:40px;width:20%;min-width:200px;border-radius:15px;border:none;background-color:#0A0903;color:white;font-size:1rem;cursor:pointer;margin-bottom:1rem}footer.svelte-12wvi4t.svelte-12wvi4t{width:100vw;height:50px;background-color:#0A0903;color:white;display:flex;justify-content:center;align-items:center}.button.svelte-12wvi4t.svelte-12wvi4t:hover{background-color:#f1f1f1;color:#0A0903}@keyframes svelte-12wvi4t-pop{0%{transform:scale(1)}50%{transform:scale(1.1)}100%{transform:scale(1)}}",map:'{"version":3,"file":"App.svelte","sources":["App.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport InputCard from \\"../components/InputCard.svelte\\";\\nimport Loader from \\"../components/Loader.svelte\\";\\nexport let title;\\nexport let subtitle;\\nconst searchStoreUrl = \\"/api/search\\";\\nconst getReviewsUrl = \\"/api/reviews\\";\\nlet searchInputStr = \\"\\";\\nlet selectedStore = \\"\\";\\nlet pagesToFetch = 1;\\nlet storeData = [];\\nlet reviews = [];\\nlet isLoading = false;\\nconst handleSearch = async () => {\\n  isLoading = true;\\n  console.log(searchInputStr);\\n  if (searchInputStr === \\"\\") {\\n    alert(\\"\\\\u8ACB\\\\u8F38\\\\u5165\\\\u641C\\\\u5C0B\\\\u95DC\\\\u9375\\\\u5B57\\");\\n    isLoading = false;\\n    return;\\n  }\\n  try {\\n    const res = await fetch(searchStoreUrl + `?storeName=${searchInputStr}`);\\n    if (!res.ok) {\\n      console.error(\\"Error:\\", res.statusText);\\n      alert(\\"\\\\u7121\\\\u6CD5\\\\u53D6\\\\u5F97\\\\u641C\\\\u5C0B\\\\u7D50\\\\u679C\\");\\n      return;\\n    }\\n    storeData = await res.json();\\n    console.log(storeData);\\n  } catch (e) {\\n    console.error(e);\\n    alert(\\"\\\\u7121\\\\u6CD5\\\\u53D6\\\\u5F97\\\\u641C\\\\u5C0B\\\\u7D50\\\\u679C\\");\\n  } finally {\\n    isLoading = false;\\n  }\\n};\\nconst handleGetReview = async () => {\\n  isLoading = true;\\n  console.log(selectedStore);\\n  if (selectedStore === \\"\\") {\\n    alert(\\"\\\\u8ACB\\\\u9078\\\\u64C7\\\\u5E97\\\\u5BB6\\");\\n    isLoading = false;\\n    return;\\n  }\\n  try {\\n    const res = await fetch(getReviewsUrl + `?storeID=${selectedStore.ID}&pages=${pagesToFetch}`);\\n    if (!res.ok) {\\n      console.error(\\"Error:\\", res.statusText);\\n      alert(\\"\\\\u7121\\\\u6CD5\\\\u53D6\\\\u5F97\\\\u8A55\\\\u8AD6\\");\\n      return;\\n    }\\n    reviews = await res.json();\\n    console.log(reviews);\\n  } catch (e) {\\n    console.error(e);\\n    alert(\\"\\\\u7121\\\\u6CD5\\\\u53D6\\\\u5F97\\\\u8A55\\\\u8AD6\\");\\n  } finally {\\n    isLoading = false;\\n  }\\n};\\nconst download = (type) => {\\n  const a = document.createElement(\\"a\\");\\n  let url = \\"\\";\\n  switch (type) {\\n    case \\"csv\\":\\n      const BOM = new Uint8Array([239, 187, 191]);\\n      const headers = Object.keys(reviews[0]).join(\\",\\");\\n      const rows = reviews.map(\\n        (row) => Object.values(row).map((value) => {\\n          if (typeof value === \\"string\\") {\\n            if (value.includes(\\",\\") || value.includes(\\"\\\\n\\") || value.includes(\'\\"\')) {\\n              return `\\"${value.replace(/\\"/g, \'\\"\\"\')}\\"`;\\n            }\\n          }\\n          return value;\\n        }).join(\\",\\")\\n      );\\n      const csvContent = headers + \\"\\\\n\\" + rows.join(\\"\\\\n\\");\\n      const csvBlob = new Blob([BOM, csvContent], { type: \\"text/csv;charset=utf-8\\" });\\n      url = window.URL.createObjectURL(csvBlob);\\n      a.href = url;\\n      a.download = `${selectedStore.Name}.csv`;\\n      a.click();\\n      break;\\n    case \\"json\\":\\n      const json = JSON.stringify(reviews, null, 2);\\n      const jsonBlob = new Blob([json], { type: \\"application/json;charset=utf-8\\" });\\n      url = window.URL.createObjectURL(jsonBlob);\\n      a.href = url;\\n      a.download = `${selectedStore.Name}.json`;\\n      a.click();\\n      break;\\n    default:\\n      break;\\n  }\\n  window.URL.revokeObjectURL(url);\\n};\\nonMount(async () => {\\n  getNavbar();\\n});\\n<\/script>\\n\\n<svelte:head>\\n    <title>{title} - 榛果繽紛樂</title>\\n</svelte:head>\\n\\n<div id=\\"navbar-placeholder\\" style=\\"height: 50px;\\"></div>\\n<div id=\\"Pistachio-Announcement\\" style=\\"height: 50px; z-index: 100;\\"></div>\\n<div class=\\"container\\">\\n    <img src=\\"https://src.hazelnut-paradise.com/GooMapReviewSnatcher.png\\" alt=\\"GooMapReviewSnatcher\\" style=\\"width: 100%; max-width: 150px;\\"/>\\n    <div class=\\"title-box\\">\\n        <h1 class=\\"title\\">{title}</h1>\\n        <h2 class=\\"subtitle\\">{subtitle}</h2>\\n    </div>\\n    {#if isLoading}\\n        <Loader/>\\n    {:else if Object.keys(reviews).length == 0}\\n    <InputCard\\n        bind:pagesToFetch\\n        bind:searchInputStr\\n        bind:selectedStore\\n        {handleSearch}\\n        {handleGetReview}\\n        {storeData}\\n    />\\n    {:else}\\n    <button class=\\"reset-button button\\" on:click={()=> {\\n        searchInputStr = \'\';\\n        storeData = [];\\n        reviews = [];\\n    }}>查詢其他商家</button>\\n    <div class=\\"review-box\\">\\n        <h3 class=\\"store-name\\">{selectedStore.Name}</h3>\\n        <button class=\\"download-button button\\" on:click={() => download(\\"csv\\")}>下載 CSV</button>\\n        <button class=\\"download-button button\\" on:click={() => download(\\"json\\")}>下載 JSON</button>\\n        <div class=\\"review-table-box\\">\\n            <table class=\\"review-table\\">\\n                <thead>\\n                    <tr>\\n                    {#each Object.keys(reviews[0]) as key}\\n                        <th>{key}</th>\\n                    {/each}\\n                    </tr>\\n                </thead>\\n                <tbody>\\n                    {#each reviews as review}\\n                        <tr>\\n                            {#each Object.values(review) as value}\\n                                <td>{value}</td>\\n                            {/each}\\n                        </tr>\\n                    {/each}\\n                </tbody>\\n            </table>\\n        </div>\\n    </div>\\n    {/if}\\n</div>\\n<footer>\\n    2025 - 榛果繽紛樂\\n</footer>\\n\\n<style>\\n    .container {\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center;\\n        justify-content: center;\\n        min-height: 100vh;\\n        padding-top: 20px;\\n        padding-bottom: 70px;\\n        /* background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); */\\n    }\\n\\n    .title-box {\\n        display: flex;\\n        flex-direction: column;\\n        align-items: start;\\n        justify-content: center;\\n        margin-bottom: 1rem;\\n        transition: transform 0.3s ease;\\n    }\\n\\n    .title {\\n        font-size: 2.5rem;\\n        color: #2c3e50;\\n        margin: 0;\\n        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\\n    }\\n\\n    .title-box:hover {\\n        transform: scale(1.05);\\n    }\\n\\n    .subtitle {\\n        font-size: 1.5rem;\\n        color: #0A0903;\\n        margin: 0;\\n    }\\n\\n    .review-box {\\n        width: 80%;\\n    }\\n\\n    .store-name {\\n        font-size: 1.5rem;\\n    }\\n\\n    .review-table {\\n        border-collapse: collapse;\\n        width: 100%;\\n        background-color: white;\\n        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\\n        border-radius: 8px;\\n        overflow: hidden;\\n    }\\n\\n    .review-table th {\\n        background-color: #2c3e50;\\n        color: white;\\n        padding: 12px 15px;\\n        text-align: left;\\n        font-weight: 600;\\n    }\\n\\n    .review-table td {\\n        padding: 12px 15px;\\n        border-bottom: 1px solid #ddd;\\n    }\\n\\n    .review-table tbody tr:hover {\\n        background-color: #f5f5f5;\\n        transition: background-color 0.2s ease;\\n    }\\n\\n    .review-table tbody tr:last-child td {\\n        border-bottom: none;\\n    }\\n\\n    .review-table-box {\\n        width: 100%;\\n        height: 500px;\\n        overflow: auto;\\n        background-color: white;\\n        border-radius: 8px;\\n        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\\n        padding: 1rem;\\n    }\\n\\n    /* 美化捲軸 */\\n    .review-table-box::-webkit-scrollbar {\\n        width: 8px;\\n        height: 8px;\\n    }\\n\\n    .review-table-box::-webkit-scrollbar-track {\\n        background: #f1f1f1;\\n        border-radius: 4px;\\n    }\\n\\n    .review-table-box::-webkit-scrollbar-thumb {\\n        background: #888;\\n        border-radius: 4px;\\n    }\\n\\n    .review-table-box::-webkit-scrollbar-thumb:hover {\\n        background: #555;\\n    }\\n\\n    .reset-button {\\n        height: 50px;\\n        width: 20%;\\n        min-width: 200px;\\n        border-radius: 15px;\\n        border: none;\\n        background-color: #0A0903;\\n        color: white;\\n        font-size: 1rem;\\n        cursor: pointer;\\n        margin-bottom: 1rem;\\n    }\\n\\n    .download-button {\\n        height: 40px;\\n        width: 20%;\\n        min-width: 200px;\\n        border-radius: 15px;\\n        border: none;\\n        background-color: #0A0903;\\n        color: white;\\n        font-size: 1rem;\\n        cursor: pointer;\\n        margin-bottom: 1rem;\\n    }\\n\\n    footer {\\n        width: 100vw;\\n        height: 50px;\\n        background-color: #0A0903;\\n        color: white;\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n    }\\n\\n    .button:hover {\\n        background-color: #f1f1f1;\\n        color: #0A0903;\\n    }\\n\\n    @keyframes pop {\\n        0% { transform: scale(1); }\\n        50% { transform: scale(1.1); }\\n        100% { transform: scale(1); }\\n    }\\n</style>\\n"],"names":[],"mappings":"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"}'},re="/api/search",se="/api/reviews",ae=v((e,t,A,a)=>{let{title:o}=t,{subtitle:r}=t,s="",n="",c=1,l=[],d=[],i=!1;const p=async()=>{if(i=!0,console.log(s),s===""){alert("請輸入搜尋關鍵字"),i=!1;return}try{const C=await fetch(re+`?storeName=${s}`);if(!C.ok){console.error("Error:",C.statusText),alert("無法取得搜尋結果");return}l=await C.json(),console.log(l)}catch(C){console.error(C),alert("無法取得搜尋結果")}finally{i=!1}},I=async()=>{if(i=!0,console.log(n),n===""){alert("請選擇店家"),i=!1;return}try{const C=await fetch(se+`?storeID=${n.ID}&pages=${c}`);if(!C.ok){console.error("Error:",C.statusText),alert("無法取得評論");return}d=await C.json(),console.log(d)}catch(C){console.error(C),alert("無法取得評論")}finally{i=!1}};t.title===void 0&&A.title&&o!==void 0&&A.title(o),t.subtitle===void 0&&A.subtitle&&r!==void 0&&A.subtitle(r),e.css.add(oe);let f,K,R=e.head;do f=!0,e.head=R,K=`${e.head+=`<!-- HEAD_svelte-wrcujp_START -->${e.title=`<title>${u(o)} - 榛果繽紛樂</title>`,""}<!-- HEAD_svelte-wrcujp_END -->`,""} <div id="navbar-placeholder" style="height: 50px;"></div> <div id="Pistachio-Announcement" style="height: 50px; z-index: 100;"></div> <div class="container svelte-12wvi4t"><img src="https://src.hazelnut-paradise.com/GooMapReviewSnatcher.png" alt="GooMapReviewSnatcher" style="width: 100%; max-width: 150px;"> <div class="title-box svelte-12wvi4t"><h1 class="title svelte-12wvi4t">${u(o)}</h1> <h2 class="subtitle svelte-12wvi4t">${u(r)}</h2></div> ${i?`${b(U,"Loader").$$render(e,{},{},{})}`:`${Object.keys(d).length==0?`${b(W,"InputCard").$$render(e,{handleSearch:p,handleGetReview:I,storeData:l,pagesToFetch:c,searchInputStr:s,selectedStore:n},{pagesToFetch:C=>{c=C,f=!1},searchInputStr:C=>{s=C,f=!1},selectedStore:C=>{n=C,f=!1}},{})}`:`<button class="reset-button button svelte-12wvi4t" data-svelte-h="svelte-gc4oaf">查詢其他商家</button> <div class="review-box svelte-12wvi4t"><h3 class="store-name svelte-12wvi4t">${u(n.Name)}</h3> <button class="download-button button svelte-12wvi4t" data-svelte-h="svelte-1cm302j">下載 CSV</button> <button class="download-button button svelte-12wvi4t" data-svelte-h="svelte-zkdu87">下載 JSON</button> <div class="review-table-box svelte-12wvi4t"><table class="review-table svelte-12wvi4t"><thead><tr class="svelte-12wvi4t">${w(Object.keys(d[0]),C=>`<th class="svelte-12wvi4t">${u(C)}</th>`)}</tr></thead> <tbody>${w(d,C=>`<tr class="svelte-12wvi4t">${w(Object.values(C),_=>`<td class="svelte-12wvi4t">${u(_)}</td>`)} </tr>`)}</tbody></table></div></div>`}`}</div> <footer class="svelte-12wvi4t" data-svelte-h="svelte-livmhd">2025 - 榛果繽紛樂
</footer>`;while(!f);return K}),le={code:"p.svelte-5zxcoy{white-space:pre-wrap}",map:'{"version":3,"file":"default-error.svelte","sources":["default-error.svelte"],"sourcesContent":["<script>\\n    /** @type {number} */\\n    export let status;\\n\\n    /** @type {string} */\\n    export let message;\\n<\/script>\\n\\n<h1>{status}</h1>\\n<p>{message}</p>\\n\\n<style>\\n    p {\\n        white-space: pre-wrap;\\n    }\\n</style>\\n"],"names":[],"mappings":"AAYI,eAAE,CACE,WAAW,CAAE,QACjB"}'},ie=v((e,t,A,a)=>{let{status:o}=t,{message:r}=t;return t.status===void 0&&A.status&&o!==void 0&&A.status(o),t.message===void 0&&A.message&&r!==void 0&&A.message(r),e.css.add(le),`<h1>${u(o)}</h1> <p class="svelte-5zxcoy">${u(r)}</p>`}),Ce=ee,ce="/golte_/entries/hydrate-AdlkQVZG.js",M={"components/InfoCard":{server:z,Client:"/golte_/entries/InfoCard-COxViyc-.js",CSS:["/golte_/assets/InfoCard-BXxVxhrr.css"]},"components/InputCard":{server:W,Client:"/golte_/entries/InputCard-COWgdaVS.js",CSS:["/golte_/assets/InputCard-Bp3zFdIY.css","/golte_/assets/InfoCard-BXxVxhrr.css"]},"components/Loader":{server:U,Client:"/golte_/entries/Loader-CuxEN0jw.js",CSS:["/golte_/assets/Loader-BbdzO3D6.css"]},"pages/App":{server:ae,Client:"/golte_/entries/App-hxL20R16.js",CSS:["/golte_/assets/App-oERxYHgO.css","/golte_/assets/InputCard-Bp3zFdIY.css","/golte_/assets/InfoCard-BXxVxhrr.css","/golte_/assets/Loader-BbdzO3D6.css"]},$$$GOLTE_DEFAULT_ERROR$$$:{server:ie,Client:"/golte_/entries/default-error-DjMe-io_.js",CSS:["/golte_/assets/default-error-jCKc6TVQ.css"]}};function de(e,t,A){const a=[],o=[],r=new Set,s=M[A];if(!s)throw new Error(`"${A}" is not a component`);for(const i of e){const p=M[i.Comp];if(!p)throw new Error(`"${i.Comp}" is not a component`);a.push({comp:p.server,props:i.Props,errPage:s.server}),o.push({comp:`${p.Client}`,props:i.Props,errPage:`${s.Client}`});for(const I of p.CSS)r.add(I)}for(const i of s.CSS)r.add(i);let n;const c=new Map;c.set(j,i=>n=i);let{html:l,head:d}=Ce.render({nodes:a,contextData:t},{context:c});for(const i of r)d+=`
<link href="${i}" rel="stylesheet">`;return n&&(o[n.index].ssrError=n.props),l+=`
        <script>
            (async function () {
                const target = document.currentScript.parentElement;
                const { hydrate } = await import("${ce}");
                await hydrate(target, ${G(o)}, ${G(t)});
            })();
        <\/script>
    `,{Head:d,Body:l,HasError:!!n}}function G(e){return JSON.stringify(e).replace("<\/script>","<\\/script>")}exports.Manifest=M;exports.Render=de;

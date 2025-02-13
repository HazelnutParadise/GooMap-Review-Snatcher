"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});function m(){}function L(e){return e()}function Z(){return Object.create(null)}function T(e){e.forEach(L)}function N(e,A){return e!=e?A==A:e!==A||e&&typeof e=="object"||typeof e=="function"}function k(e,...A){if(e==null){for(const a of A)a(void 0);return m}const t=e.subscribe(...A);return t.unsubscribe?()=>t.unsubscribe():t}let w;function K(e){w=e}function Y(){if(!w)throw new Error("Function called outside component initialization");return w}function F(e){return Y().$$.context.get(e)}function V(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}const Q=/[&"<]/g,X=/[&<]/g;function u(e,A=!1){const t=String(e),a=A?Q:X;a.lastIndex=0;let o="",r=0;for(;a.test(t);){const s=a.lastIndex-1,n=t[s];o+=t.substring(r,s)+(n==="&"?"&amp;":n==='"'?"&quot;":"&lt;"),r=s+1}return o+t.substring(r)}function x(e,A){e=V(e);let t="";for(let a=0;a<e.length;a+=1)t+=A(e[a],a);return t}const P={$$render:()=>""};function f(e,A){if(!e||!e.$$render)throw A==="svelte:component"&&(A+=" this={...}"),new Error(`<${A}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${A}>.`);return e}let B;function h(e){function A(t,a,o,r,s){const n=w,c={on_destroy:B,context:new Map(s||(n?n.$$.context:[])),on_mount:[],before_update:[],after_update:[],callbacks:Z()};K({$$:c});const l=e(t,a,o,r);return K(n),l}return{render:(t={},{$$slots:a={},context:o=new Map}={})=>{B=[];const r={title:"",head:"",css:new Set},s=A(r,t,{},a,o);return T(B),{html:s,css:{code:Array.from(r.css).map(n=>n.code).join(`
`),map:null},head:r.title+r.head}},$$render:A}}function v(e,A,t){if(A==null||t)return"";const a=`="${u(A,!0)}"`;return` ${e}${a}`}const q=h((e,A,t,a)=>{let o,r,{node:s}=A,{index:n}=A;const{next:c,content:l}=s;return r=k(c,d=>o=d),A.node===void 0&&t.node&&s!==void 0&&t.node(s),A.index===void 0&&t.index&&n!==void 0&&t.index(n),r(),`  ${f(l.comp||P,"svelte:component").$$render(e,Object.assign({},l.props),{},{default:()=>` ${o?` ${f(z,"Node").$$render(e,{node:o,index:n+1},{},{})}`:""}`})}`}),j=Symbol(),O=q,H={...O,$$render:(e,A,t,a,o)=>{try{return O.$$render(e,A,t,a,o)}catch{const n={status:500,message:"Internal Error"};return F(j)({index:A.index,props:n}),A.node.content.errPage.$$render(e,n,t,a,o)}}},z=H,b=[];function y(e,A=m){let t;const a=new Set;function o(n){if(N(e,n)&&(e=n,t)){const c=!b.length;for(const l of a)l[1](),b.push(l,e);if(c){for(let l=0;l<b.length;l+=2)b[l][0](b[l+1]);b.length=0}}}function r(n){o(n(e))}function s(n,c=m){const l=[n,c];return a.add(l),a.size===1&&(t=A(o,r)||m),n(e),()=>{a.delete(l),a.size===0&&t&&(t(),t=null)}}return{set:o,update:r,subscribe:s}}function J(e){let A=y(null);for(let t=e.length-1;t>=0;t--)A=y({content:e[t],next:A});return A}let E;function $(e,A){E={},E.url=y(new URL(e)),E.node=J(A)}const ee=h((e,A,t,a)=>{let o,r,{nodes:s}=A,{contextData:n}=A;$(n.URL,s);const{node:c}=E;return r=k(c,l=>o=l),A.nodes===void 0&&t.nodes&&s!==void 0&&t.nodes(s),A.contextData===void 0&&t.contextData&&n!==void 0&&t.contextData(n),r(),` ${o?`${f(z,"Node").$$render(e,{node:o,index:0},{},{})}`:""}`}),Ae={code:".info-card.svelte-15kz9bl{max-width:90vw;background-color:#70798C;border-radius:20px;padding:20px;color:white;margin-bottom:20px;font-size:medium}",map:'{"version":3,"file":"InfoCard.svelte","sources":["InfoCard.svelte"],"sourcesContent":["<div class=\\"info-card\\">\\n    <strong>估咩評論小扒手</strong> 幫你輕鬆爬取 Google Maps 商家評論，<br/>\\n    輸入店名立即開始吧！\\n</div>\\n\\n<style>\\n    .info-card {\\n        max-width: 90vw;\\n        background-color: #70798C;\\n        border-radius: 20px;\\n        padding: 20px;\\n        color: white;\\n        margin-bottom: 20px;\\n        font-size: medium;\\n    }  \\n</style>"],"names":[],"mappings":"AAMI,yBAAW,CACP,SAAS,CAAE,IAAI,CACf,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,KAAK,CACZ,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,MACf"}'},U=h((e,A,t,a)=>(e.css.add(Ae),`<div class="info-card svelte-15kz9bl" data-svelte-h="svelte-1ndbl8w"><strong>估咩評論小扒手</strong> 幫你輕鬆爬取 Google Maps 商家評論，<br>
    輸入店名立即開始吧！
</div>`)),te={code:'.input-form.svelte-e5nmlf{min-height:100px;width:500px;max-width:90vw;padding:20px;background-color:#70798C;border-radius:20px;display:flex;justify-items:center;align-items:center}.chose-store.svelte-e5nmlf{flex-direction:column;align-items:start}input[type="text"].svelte-e5nmlf{height:40px;width:80%;border-radius:15px;border:none;padding:5px;margin-right:10px}input[type="text"].svelte-e5nmlf:focus{border:3px solid #0A0903}input[type="number"].svelte-e5nmlf{height:40px;width:100%;border-radius:15px;border:none;padding:5px;margin-right:10px}button.svelte-e5nmlf{height:40px;width:20%;border-radius:15px;border:none;background-color:#0A0903;color:white;font-size:1rem;cursor:pointer}.button.svelte-e5nmlf:hover{background-color:#f1f1f1;color:#0A0903}.store-select.svelte-e5nmlf{height:40px;width:100%;border-radius:15px;border:none;padding:5px;margin-right:10px}.store-select-box.svelte-e5nmlf{width:100%;display:flex;flex-direction:column;margin-bottom:10px}.pages-box.svelte-e5nmlf{width:100%;display:flex;flex-direction:column;margin-bottom:10px}label.svelte-e5nmlf{font-weight:500;font-size:large;color:white;margin-bottom:5px}',map:`{"version":3,"file":"InputCard.svelte","sources":["InputCard.svelte"],"sourcesContent":["<script>\\n    import InfoCard from './InfoCard.svelte';\\n    export let searchInputStr;\\n    export let selectedStore;\\n    export let pagesToFetch;\\n    export let handleSearch;\\n    export let handleGetReview;\\n    export let storeData = [];\\n    let form = null;\\n<\/script>\\n\\n\\n\\n{#if  Object.keys(storeData).length !== 0}\\n    <form on:submit|preventDefault={handleGetReview} class=\\"input-form chose-store\\" bind:this={form}>\\n        <div class=\\"store-select-box\\">\\n            <label for=\\"store\\">選擇店家</label>\\n            <select bind:value={selectedStore} class=\\"store-select\\">\\n                {#each storeData as store}\\n                    <option value={store}>{store.Name}</option>\\n                {/each}\\n            </select>\\n        </div>\\n        <div class=\\"pages-box\\">\\n            <label for=\\"pages\\">輸入頁數，0代表全部</label>\\n            <input type=\\"number\\" name=\\"pages\\" placeholder=\\"輸入頁數\\" bind:value={pagesToFetch} />\\n        </div>\\n        <button type=\\"submit\\" class=\\"button\\">確定</button>\\n    </form>\\n{:else}\\n    <InfoCard/>\\n    <form on:submit|preventDefault={handleSearch} class=\\"input-form\\" bind:this={form}>\\n        <input type=\\"text\\" placeholder=\\"輸入關鍵字\\" bind:value={searchInputStr} />\\n        <button type=\\"submit\\" class=\\"button\\">搜尋</button>\\n    </form>\\n{/if}\\n\\n\\n<style>\\n    .input-form {\\n        min-height: 100px;\\n        width: 500px;\\n        max-width: 90vw;\\n        padding: 20px;\\n        background-color: #70798C;\\n        border-radius: 20px;\\n        display: flex;\\n        justify-items: center;\\n        align-items: center;\\n    }\\n\\n    .chose-store {\\n        flex-direction: column;\\n        align-items: start;\\n    }\\n\\n    input[type=\\"text\\"] {\\n        height: 40px;\\n        width: 80%;\\n        border-radius: 15px;\\n        border: none;\\n        padding: 5px;\\n        margin-right: 10px;\\n    }\\n\\n    input[type=\\"text\\"]:focus {\\n        border: 3px solid #0A0903;\\n    }\\n\\n    input[type=\\"number\\"] {\\n        height: 40px;\\n        width: 100%;\\n        border-radius: 15px;\\n        border: none;\\n        padding: 5px;\\n        margin-right: 10px;\\n    }\\n\\n    button {\\n        height: 40px;\\n        width: 20%;\\n        border-radius: 15px;\\n        border: none;\\n        background-color: #0A0903;\\n        color: white;\\n        font-size: 1rem;\\n        cursor: pointer;\\n    }\\n\\n    .button:hover {\\n        background-color: #f1f1f1;\\n        color: #0A0903;\\n    }\\n\\n    .store-select {\\n        height: 40px;\\n        width: 100%;\\n        border-radius: 15px;\\n        border: none;\\n        padding: 5px;\\n        margin-right: 10px;\\n    }\\n    .store-select-box {\\n        width: 100%;\\n        display: flex;\\n        flex-direction: column;\\n        margin-bottom: 10px;\\n    }\\n\\n    .pages-box {\\n        width: 100%;\\n        display: flex;\\n        flex-direction: column;\\n        margin-bottom: 10px;\\n    }\\n\\n    label{\\n        font-weight: 500;\\n        font-size: large;\\n        color: white;\\n        margin-bottom: 5px;\\n    }\\n</style>"],"names":[],"mappings":"AAuCI,yBAAY,CACR,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MAAM,CACrB,WAAW,CAAE,MACjB,CAEA,0BAAa,CACT,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,KACjB,CAEA,KAAK,CAAC,IAAI,CAAC,MAAM,eAAE,CACf,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GAAG,CACV,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,GAAG,CACZ,YAAY,CAAE,IAClB,CAEA,KAAK,CAAC,IAAI,CAAC,MAAM,eAAC,MAAO,CACrB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OACtB,CAEA,KAAK,CAAC,IAAI,CAAC,QAAQ,eAAE,CACjB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,GAAG,CACZ,YAAY,CAAE,IAClB,CAEA,oBAAO,CACH,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GAAG,CACV,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,OACZ,CAEA,qBAAO,MAAO,CACV,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OACX,CAEA,2BAAc,CACV,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,GAAG,CACZ,YAAY,CAAE,IAClB,CACA,+BAAkB,CACd,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,aAAa,CAAE,IACnB,CAEA,wBAAW,CACP,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,aAAa,CAAE,IACnB,CAEA,mBAAK,CACD,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,KAAK,CACZ,aAAa,CAAE,GACnB"}`},W=h((e,A,t,a)=>{let{searchInputStr:o}=A,{selectedStore:r}=A,{pagesToFetch:s}=A,{handleSearch:n}=A,{handleGetReview:c}=A,{storeData:l=[]}=A,d=null;return A.searchInputStr===void 0&&t.searchInputStr&&o!==void 0&&t.searchInputStr(o),A.selectedStore===void 0&&t.selectedStore&&r!==void 0&&t.selectedStore(r),A.pagesToFetch===void 0&&t.pagesToFetch&&s!==void 0&&t.pagesToFetch(s),A.handleSearch===void 0&&t.handleSearch&&n!==void 0&&t.handleSearch(n),A.handleGetReview===void 0&&t.handleGetReview&&c!==void 0&&t.handleGetReview(c),A.storeData===void 0&&t.storeData&&l!==void 0&&t.storeData(l),e.css.add(te),`${Object.keys(l).length!==0?`<form class="input-form chose-store svelte-e5nmlf"${v("this",d,0)}><div class="store-select-box svelte-e5nmlf"><label for="store" class="svelte-e5nmlf" data-svelte-h="svelte-cly9uh">選擇店家</label> <select class="store-select svelte-e5nmlf">${x(l,C=>`<option${v("value",C,0)}>${u(C.Name)}</option>`)}</select></div> <div class="pages-box svelte-e5nmlf"><label for="pages" class="svelte-e5nmlf" data-svelte-h="svelte-u04ycx">輸入頁數，0代表全部</label> <input type="number" name="pages" placeholder="輸入頁數" class="svelte-e5nmlf"${v("value",s,0)}></div> <button type="submit" class="button svelte-e5nmlf" data-svelte-h="svelte-tcqmmk">確定</button></form>`:`${f(U,"InfoCard").$$render(e,{},{},{})} <form class="input-form svelte-e5nmlf"${v("this",d,0)}><input type="text" placeholder="輸入關鍵字" class="svelte-e5nmlf"${v("value",o,0)}> <button type="submit" class="button svelte-e5nmlf" data-svelte-h="svelte-1jb2twj">搜尋</button></form>`}`}),ne={code:".loader-container.svelte-nx5s04{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100px}.loader.svelte-nx5s04{width:48px;height:48px;border:5px solid #f3f3f3;border-top:5px solid #3498db;border-radius:50%;animation:svelte-nx5s04-spin 1s linear infinite}@keyframes svelte-nx5s04-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",map:`{"version":3,"file":"Loader.svelte","sources":["Loader.svelte"],"sourcesContent":["<script>\\n    const loadingWords = ['loading', 'loading.', 'loading..', 'loading...'];\\n    let loadingWord = loadingWords[0];\\n    let index = 1;\\n    const interval = setInterval(() => {\\n        loadingWord = loadingWords[index];\\n        index = (index + 1) % loadingWords.length;\\n    }, 500);\\n<\/script>\\n\\n<div class=\\"loader-container\\">\\n    <p>{loadingWord}</p>\\n    <div class=\\"loader\\"></div>\\n</div>\\n\\n<style>\\n    .loader-container {\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: center;\\n        align-items: center;\\n        min-height: 100px;\\n    }\\n\\n    .loader {\\n        width: 48px;\\n        height: 48px;\\n        border: 5px solid #f3f3f3;\\n        border-top: 5px solid #3498db;\\n        border-radius: 50%;\\n        animation: spin 1s linear infinite;\\n    }\\n\\n    @keyframes spin {\\n        0% {\\n        transform: rotate(0deg);\\n        }\\n        100% {\\n        transform: rotate(360deg);\\n        }\\n    }\\n</style>"],"names":[],"mappings":"AAgBI,+BAAkB,CACd,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,KAChB,CAEA,qBAAQ,CACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAC7B,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,kBAAI,CAAC,EAAE,CAAC,MAAM,CAAC,QAC9B,CAEA,WAAW,kBAAK,CACZ,EAAG,CACH,SAAS,CAAE,OAAO,IAAI,CACtB,CACA,IAAK,CACL,SAAS,CAAE,OAAO,MAAM,CACxB,CACJ"}`},R=h((e,A,t,a)=>{const o=["loading","loading.","loading..","loading..."];let r=o[0],s=1;return setInterval(()=>{r=o[s],s=(s+1)%o.length},500),e.css.add(ne),`<div class="loader-container svelte-nx5s04"><p>${u(r)}</p> <div class="loader svelte-nx5s04"></div> </div>`}),oe={code:".container.svelte-1g7cuhe.svelte-1g7cuhe{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;padding-top:20px;padding-bottom:20px}.title-box.svelte-1g7cuhe.svelte-1g7cuhe{display:flex;flex-direction:column;align-items:start;justify-content:center;margin-bottom:1rem;transition:transform 0.3s ease}.title.svelte-1g7cuhe.svelte-1g7cuhe{font-size:2.5rem;color:#2c3e50;margin:0;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.1)}.title-box.svelte-1g7cuhe.svelte-1g7cuhe:hover{transform:scale(1.05)}.subtitle.svelte-1g7cuhe.svelte-1g7cuhe{font-size:1.5rem;color:#0A0903;margin:0}.review-box.svelte-1g7cuhe.svelte-1g7cuhe{width:80%}.store-name.svelte-1g7cuhe.svelte-1g7cuhe{font-size:1.5rem}.review-table.svelte-1g7cuhe.svelte-1g7cuhe{border-collapse:collapse;width:100%;background-color:white;box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);border-radius:8px;overflow:hidden}.review-table.svelte-1g7cuhe th.svelte-1g7cuhe{background-color:#2c3e50;color:white;padding:12px 15px;text-align:left;font-weight:600}.review-table.svelte-1g7cuhe td.svelte-1g7cuhe{padding:12px 15px;border-bottom:1px solid #ddd}.review-table.svelte-1g7cuhe tbody tr.svelte-1g7cuhe:hover{background-color:#f5f5f5;transition:background-color 0.2s ease}.review-table.svelte-1g7cuhe tbody tr:last-child td.svelte-1g7cuhe{border-bottom:none}.review-table-box.svelte-1g7cuhe.svelte-1g7cuhe{width:100%;height:500px;overflow:auto;background-color:white;border-radius:8px;box-shadow:0 0 20px rgba(0, 0, 0, 0.1);padding:1rem}.review-table-box.svelte-1g7cuhe.svelte-1g7cuhe::-webkit-scrollbar{width:8px;height:8px}.review-table-box.svelte-1g7cuhe.svelte-1g7cuhe::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.review-table-box.svelte-1g7cuhe.svelte-1g7cuhe::-webkit-scrollbar-thumb{background:#888;border-radius:4px}.review-table-box.svelte-1g7cuhe.svelte-1g7cuhe::-webkit-scrollbar-thumb:hover{background:#555}.reset-button.svelte-1g7cuhe.svelte-1g7cuhe{height:50px;width:20%;min-width:200px;border-radius:15px;border:none;background-color:#0A0903;color:white;font-size:1rem;cursor:pointer;margin-bottom:1rem}.download-button.svelte-1g7cuhe.svelte-1g7cuhe{height:40px;width:20%;min-width:200px;border-radius:15px;border:none;background-color:#0A0903;color:white;font-size:1rem;cursor:pointer;margin-bottom:1rem}footer.svelte-1g7cuhe.svelte-1g7cuhe{width:100vw;height:50px;background-color:#0A0903;color:white;display:flex;justify-content:center;align-items:center}.button.svelte-1g7cuhe.svelte-1g7cuhe:hover{background-color:#f1f1f1;color:#0A0903}@keyframes svelte-1g7cuhe-pop{0%{transform:scale(1)}50%{transform:scale(1.1)}100%{transform:scale(1)}}",map:`{"version":3,"file":"App.svelte","sources":["App.svelte"],"sourcesContent":["<script>\\n    import { onMount } from 'svelte';\\n    import InputCard from '../components/InputCard.svelte';\\n    import Loader from '../components/Loader.svelte';\\n    export let title;\\n    export let subtitle;\\n    const searchStoreUrl = \\"/api/search\\";\\n    const getReviewsUrl = \\"/api/reviews\\";\\n    let searchInputStr = '';\\n    let selectedStore = '';\\n    let pagesToFetch = 1;\\n    let storeData = [];\\n    let reviews = [];\\n\\n    let isLoading = false;\\n    const handleSearch = async() => {\\n        isLoading = true;\\n        console.log(searchInputStr);\\n        if (searchInputStr === \\"\\") {\\n            alert('請輸入搜尋關鍵字');\\n            isLoading = false;\\n            return;\\n        }\\n        try{\\n            const res = await fetch(searchStoreUrl+\`?storeName=\${searchInputStr}\`);\\n            if (!res.ok) {\\n                console.error('Error:', res.statusText);\\n                alert('無法取得搜尋結果');\\n                return;\\n            }\\n            storeData = await res.json();\\n            console.log(storeData);\\n        }catch(e){\\n            console.error(e);\\n            alert('無法取得搜尋結果');\\n        }finally {\\n            isLoading = false;\\n        }\\n    }\\n    const handleGetReview = async() => {\\n        isLoading = true;\\n        console.log(selectedStore);\\n        if (selectedStore === \\"\\") {\\n            alert('請選擇店家');\\n            isLoading = false;\\n            return;\\n        }\\n        try{\\n            const res = await fetch(getReviewsUrl+\`?storeID=\${selectedStore.ID}&pages=\${pagesToFetch}\`);\\n            if (!res.ok) {\\n                console.error('Error:', res.statusText);\\n                alert('無法取得評論');\\n                return;\\n            }\\n            reviews = await res.json();\\n            console.log(reviews);\\n        }catch(e){\\n            console.error(e);\\n            alert('無法取得評論');\\n        }finally {\\n            isLoading = false;\\n        }\\n    }\\n\\n    const download = (type) => {\\n        const a = document.createElement(\\"a\\");\\n        let url = \\"\\";\\n        switch (type) {\\n            case \\"csv\\":\\n                // 添加 BOM 標記\\n                const BOM = new Uint8Array([0xEF, 0xBB, 0xBF]);\\n                // 建立 CSV 內容，加入標題列\\n                const headers = Object.keys(reviews[0]).join(',');\\n                const rows = reviews.map(row => \\n                    Object.values(row)\\n                        .map(value => {\\n                            // 處理數值、字串中的特殊字元\\n                            if (typeof value === 'string') {\\n                                // 如果內容包含逗號、換行或雙引號，就用雙引號包起來\\n                                if (value.includes(',') || value.includes('\\\\n') || value.includes('\\"')) {\\n                                    return \`\\"\${value.replace(/\\"/g, '\\"\\"')}\\"\`;\\n                                }\\n                            }\\n                            return value;\\n                        })\\n                        .join(',')\\n                );\\n                const csvContent = headers + '\\\\n' + rows.join('\\\\n');\\n                \\n                // 合併 BOM 和 CSV 內容\\n                const csvBlob = new Blob([BOM, csvContent], { type: 'text/csv;charset=utf-8' });\\n                url = window.URL.createObjectURL(csvBlob);\\n                \\n                a.href = url;\\n                a.download = \`\${selectedStore.Name}.csv\`;\\n                a.click();\\n                break;\\n            case \\"json\\":\\n                const json = JSON.stringify(reviews, null, 2);\\n                const jsonBlob = new Blob([json], { type: 'application/json;charset=utf-8' });\\n                url = window.URL.createObjectURL(jsonBlob);\\n                a.href = url;\\n                a.download = \`\${selectedStore.Name}.json\`;\\n                a.click();\\n                break;\\n            default:\\n                break;\\n        }\\n        window.URL.revokeObjectURL(url);\\n    }\\n\\n    onMount(async () => {\\n        getNavbar();\\n    });\\n<\/script>\\n\\n<svelte:head>\\n    <title>{title} - 榛果繽紛樂</title>\\n</svelte:head>\\n\\n<div id=\\"Pistachio-Announcement\\" style=\\"display: fixed; top: 20px; left: 0; z-index: 100;\\"></div>\\n<div class=\\"container\\">\\n    <img src=\\"https://src.hazelnut-paradise.com/GooMapReviewSnatcher.png\\" alt=\\"GooMapReviewSnatcher\\" style=\\"width: 100%; max-width: 150px;\\"/>\\n    <div class=\\"title-box\\">\\n        <h1 class=\\"title\\">{title}</h1>\\n        <h2 class=\\"subtitle\\">{subtitle}</h2>\\n    </div>\\n    {#if isLoading}\\n        <Loader/>\\n    {:else if Object.keys(reviews).length == 0}\\n    <InputCard\\n        bind:pagesToFetch\\n        bind:searchInputStr\\n        bind:selectedStore\\n        {handleSearch}\\n        {handleGetReview}\\n        {storeData}\\n    />\\n    {:else}\\n    <button class=\\"reset-button button\\" on:click={()=> {\\n        searchInputStr = '';\\n        storeData = [];\\n        reviews = [];\\n    }}>查詢其他商家</button>\\n    <div class=\\"review-box\\">\\n        <h3 class=\\"store-name\\">{selectedStore.Name}</h3>\\n        <button class=\\"download-button button\\" on:click={() => download(\\"csv\\")}>下載 CSV</button>\\n        <button class=\\"download-button button\\" on:click={() => download(\\"json\\")}>下載 JSON</button>\\n        <div class=\\"review-table-box\\">\\n            <table class=\\"review-table\\">\\n                <thead>\\n                    <tr>\\n                    {#each Object.keys(reviews[0]) as key}\\n                        <th>{key}</th>\\n                    {/each}\\n                    </tr>\\n                </thead>\\n                <tbody>\\n                    {#each reviews as review}\\n                        <tr>\\n                            {#each Object.values(review) as value}\\n                                <td>{value}</td>\\n                            {/each}\\n                        </tr>\\n                    {/each}\\n                </tbody>\\n            </table>\\n        </div>\\n    </div>\\n    {/if}\\n</div>\\n<div id=\\"navbar-placeholder\\" style=\\"height: 50px; z-index: 100;\\"></div>\\n<footer>\\n    2025 - 榛果繽紛樂\\n</footer>\\n\\n<style>\\n    .container {\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center;\\n        justify-content: center;\\n        min-height: 100vh;\\n        padding-top: 20px;\\n        padding-bottom: 20px;\\n        /* background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); */\\n    }\\n\\n    .title-box {\\n        display: flex;\\n        flex-direction: column;\\n        align-items: start;\\n        justify-content: center;\\n        margin-bottom: 1rem;\\n        transition: transform 0.3s ease;\\n    }\\n\\n    .title {\\n        font-size: 2.5rem;\\n        color: #2c3e50;\\n        margin: 0;\\n        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\\n    }\\n\\n    .title-box:hover {\\n        transform: scale(1.05);\\n    }\\n\\n    .subtitle {\\n        font-size: 1.5rem;\\n        color: #0A0903;\\n        margin: 0;\\n    }\\n\\n    .review-box {\\n        width: 80%;\\n    }\\n\\n    .store-name {\\n        font-size: 1.5rem;\\n    }\\n\\n    .review-table {\\n        border-collapse: collapse;\\n        width: 100%;\\n        background-color: white;\\n        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\\n        border-radius: 8px;\\n        overflow: hidden;\\n    }\\n\\n    .review-table th {\\n        background-color: #2c3e50;\\n        color: white;\\n        padding: 12px 15px;\\n        text-align: left;\\n        font-weight: 600;\\n    }\\n\\n    .review-table td {\\n        padding: 12px 15px;\\n        border-bottom: 1px solid #ddd;\\n    }\\n\\n    .review-table tbody tr:hover {\\n        background-color: #f5f5f5;\\n        transition: background-color 0.2s ease;\\n    }\\n\\n    .review-table tbody tr:last-child td {\\n        border-bottom: none;\\n    }\\n\\n    .review-table-box {\\n        width: 100%;\\n        height: 500px;\\n        overflow: auto;\\n        background-color: white;\\n        border-radius: 8px;\\n        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\\n        padding: 1rem;\\n    }\\n\\n    /* 美化捲軸 */\\n    .review-table-box::-webkit-scrollbar {\\n        width: 8px;\\n        height: 8px;\\n    }\\n\\n    .review-table-box::-webkit-scrollbar-track {\\n        background: #f1f1f1;\\n        border-radius: 4px;\\n    }\\n\\n    .review-table-box::-webkit-scrollbar-thumb {\\n        background: #888;\\n        border-radius: 4px;\\n    }\\n\\n    .review-table-box::-webkit-scrollbar-thumb:hover {\\n        background: #555;\\n    }\\n\\n    .reset-button {\\n        height: 50px;\\n        width: 20%;\\n        min-width: 200px;\\n        border-radius: 15px;\\n        border: none;\\n        background-color: #0A0903;\\n        color: white;\\n        font-size: 1rem;\\n        cursor: pointer;\\n        margin-bottom: 1rem;\\n    }\\n\\n    .download-button {\\n        height: 40px;\\n        width: 20%;\\n        min-width: 200px;\\n        border-radius: 15px;\\n        border: none;\\n        background-color: #0A0903;\\n        color: white;\\n        font-size: 1rem;\\n        cursor: pointer;\\n        margin-bottom: 1rem;\\n    }\\n\\n    footer {\\n        width: 100vw;\\n        height: 50px;\\n        background-color: #0A0903;\\n        color: white;\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n    }\\n\\n    .button:hover {\\n        background-color: #f1f1f1;\\n        color: #0A0903;\\n    }\\n\\n    @keyframes pop {\\n        0% { transform: scale(1); }\\n        50% { transform: scale(1.1); }\\n        100% { transform: scale(1); }\\n    }\\n</style>\\n"],"names":[],"mappings":"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"}`},re="/api/search",se="/api/reviews",ae=h((e,A,t,a)=>{let{title:o}=A,{subtitle:r}=A,s="",n="",c=1,l=[],d=[],C=!1;const p=async()=>{if(C=!0,console.log(s),s===""){alert("請輸入搜尋關鍵字"),C=!1;return}try{const i=await fetch(re+`?storeName=${s}`);if(!i.ok){console.error("Error:",i.statusText),alert("無法取得搜尋結果");return}l=await i.json(),console.log(l)}catch(i){console.error(i),alert("無法取得搜尋結果")}finally{C=!1}},I=async()=>{if(C=!0,console.log(n),n===""){alert("請選擇店家"),C=!1;return}try{const i=await fetch(se+`?storeID=${n.ID}&pages=${c}`);if(!i.ok){console.error("Error:",i.statusText),alert("無法取得評論");return}d=await i.json(),console.log(d)}catch(i){console.error(i),alert("無法取得評論")}finally{C=!1}};A.title===void 0&&t.title&&o!==void 0&&t.title(o),A.subtitle===void 0&&t.subtitle&&r!==void 0&&t.subtitle(r),e.css.add(oe);let g,S,D=e.head;do g=!0,e.head=D,S=`${e.head+=`<!-- HEAD_svelte-wrcujp_START -->${e.title=`<title>${u(o)} - 榛果繽紛樂</title>`,""}<!-- HEAD_svelte-wrcujp_END -->`,""} <div id="Pistachio-Announcement" style="display: fixed; top: 20px; left: 0; z-index: 100;"></div> <div class="container svelte-1g7cuhe"><img src="https://src.hazelnut-paradise.com/GooMapReviewSnatcher.png" alt="GooMapReviewSnatcher" style="width: 100%; max-width: 150px;"> <div class="title-box svelte-1g7cuhe"><h1 class="title svelte-1g7cuhe">${u(o)}</h1> <h2 class="subtitle svelte-1g7cuhe">${u(r)}</h2></div> ${C?`${f(R,"Loader").$$render(e,{},{},{})}`:`${Object.keys(d).length==0?`${f(W,"InputCard").$$render(e,{handleSearch:p,handleGetReview:I,storeData:l,pagesToFetch:c,searchInputStr:s,selectedStore:n},{pagesToFetch:i=>{c=i,g=!1},searchInputStr:i=>{s=i,g=!1},selectedStore:i=>{n=i,g=!1}},{})}`:`<button class="reset-button button svelte-1g7cuhe" data-svelte-h="svelte-gc4oaf">查詢其他商家</button> <div class="review-box svelte-1g7cuhe"><h3 class="store-name svelte-1g7cuhe">${u(n.Name)}</h3> <button class="download-button button svelte-1g7cuhe" data-svelte-h="svelte-1cm302j">下載 CSV</button> <button class="download-button button svelte-1g7cuhe" data-svelte-h="svelte-zkdu87">下載 JSON</button> <div class="review-table-box svelte-1g7cuhe"><table class="review-table svelte-1g7cuhe"><thead><tr class="svelte-1g7cuhe">${x(Object.keys(d[0]),i=>`<th class="svelte-1g7cuhe">${u(i)}</th>`)}</tr></thead> <tbody>${x(d,i=>`<tr class="svelte-1g7cuhe">${x(Object.values(i),_=>`<td class="svelte-1g7cuhe">${u(_)}</td>`)} </tr>`)}</tbody></table></div></div>`}`}</div> <div id="navbar-placeholder" style="height: 50px; z-index: 100;"></div> <footer class="svelte-1g7cuhe" data-svelte-h="svelte-livmhd">2025 - 榛果繽紛樂
</footer>`;while(!g);return S}),le={code:"p.svelte-5zxcoy{white-space:pre-wrap}",map:'{"version":3,"file":"default-error.svelte","sources":["default-error.svelte"],"sourcesContent":["<script>\\n    /** @type {number} */\\n    export let status;\\n\\n    /** @type {string} */\\n    export let message;\\n<\/script>\\n\\n<h1>{status}</h1>\\n<p>{message}</p>\\n\\n<style>\\n    p {\\n        white-space: pre-wrap;\\n    }\\n</style>\\n"],"names":[],"mappings":"AAYI,eAAE,CACE,WAAW,CAAE,QACjB"}'},Ce=h((e,A,t,a)=>{let{status:o}=A,{message:r}=A;return A.status===void 0&&t.status&&o!==void 0&&t.status(o),A.message===void 0&&t.message&&r!==void 0&&t.message(r),e.css.add(le),`<h1>${u(o)}</h1> <p class="svelte-5zxcoy">${u(r)}</p>`}),ie=ee,ce="/golte_/entries/hydrate-AdlkQVZG.js",M={"components/InfoCard":{server:U,Client:"/golte_/entries/InfoCard-DuMYciqN.js",CSS:["/golte_/assets/InfoCard-3z19lYhA.css"]},"components/InputCard":{server:W,Client:"/golte_/entries/InputCard-BI53KCt0.js",CSS:["/golte_/assets/InputCard-Bp3zFdIY.css","/golte_/assets/InfoCard-3z19lYhA.css"]},"components/Loader":{server:R,Client:"/golte_/entries/Loader-CuxEN0jw.js",CSS:["/golte_/assets/Loader-BbdzO3D6.css"]},"pages/App":{server:ae,Client:"/golte_/entries/App-D6DYvgsc.js",CSS:["/golte_/assets/App-DJ1eehdA.css","/golte_/assets/InputCard-Bp3zFdIY.css","/golte_/assets/InfoCard-3z19lYhA.css","/golte_/assets/Loader-BbdzO3D6.css"]},$$$GOLTE_DEFAULT_ERROR$$$:{server:Ce,Client:"/golte_/entries/default-error-DjMe-io_.js",CSS:["/golte_/assets/default-error-jCKc6TVQ.css"]}};function de(e,A,t){const a=[],o=[],r=new Set,s=M[t];if(!s)throw new Error(`"${t}" is not a component`);for(const C of e){const p=M[C.Comp];if(!p)throw new Error(`"${C.Comp}" is not a component`);a.push({comp:p.server,props:C.Props,errPage:s.server}),o.push({comp:`${p.Client}`,props:C.Props,errPage:`${s.Client}`});for(const I of p.CSS)r.add(I)}for(const C of s.CSS)r.add(C);let n;const c=new Map;c.set(j,C=>n=C);let{html:l,head:d}=ie.render({nodes:a,contextData:A},{context:c});for(const C of r)d+=`
<link href="${C}" rel="stylesheet">`;return n&&(o[n.index].ssrError=n.props),l+=`
        <script>
            (async function () {
                const target = document.currentScript.parentElement;
                const { hydrate } = await import("${ce}");
                await hydrate(target, ${G(o)}, ${G(A)});
            })();
        <\/script>
    `,{Head:d,Body:l,HasError:!!n}}function G(e){return JSON.stringify(e).replace("<\/script>","<\\/script>")}exports.Manifest=M;exports.Render=de;

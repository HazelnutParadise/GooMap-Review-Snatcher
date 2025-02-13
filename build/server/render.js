"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});function m(){}function L(e){return e()}function _(){return Object.create(null)}function Z(e){e.forEach(L)}function T(e,A){return e!=e?A==A:e!==A||e&&typeof e=="object"||typeof e=="function"}function G(e,...A){if(e==null){for(const a of A)a(void 0);return m}const n=e.subscribe(...A);return n.unsubscribe?()=>n.unsubscribe():n}let w;function K(e){w=e}function N(){if(!w)throw new Error("Function called outside component initialization");return w}function F(e){return N().$$.context.get(e)}function Y(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}const Q=/[&"<]/g,V=/[&<]/g;function u(e,A=!1){const n=String(e),a=A?Q:V;a.lastIndex=0;let o="",r=0;for(;a.test(n);){const s=a.lastIndex-1,t=n[s];o+=n.substring(r,s)+(t==="&"?"&amp;":t==='"'?"&quot;":"&lt;"),r=s+1}return o+n.substring(r)}function x(e,A){e=Y(e);let n="";for(let a=0;a<e.length;a+=1)n+=A(e[a],a);return n}const X={$$render:()=>""};function b(e,A){if(!e||!e.$$render)throw A==="svelte:component"&&(A+=" this={...}"),new Error(`<${A}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${A}>.`);return e}let B;function v(e){function A(n,a,o,r,s){const t=w,c={on_destroy:B,context:new Map(s||(t?t.$$.context:[])),on_mount:[],before_update:[],after_update:[],callbacks:_()};K({$$:c});const l=e(n,a,o,r);return K(t),l}return{render:(n={},{$$slots:a={},context:o=new Map}={})=>{B=[];const r={title:"",head:"",css:new Set},s=A(r,n,{},a,o);return Z(B),{html:s,css:{code:Array.from(r.css).map(t=>t.code).join(`
`),map:null},head:r.title+r.head}},$$render:A}}function g(e,A,n){if(A==null||n)return"";const a=`="${u(A,!0)}"`;return` ${e}${a}`}const P=v((e,A,n,a)=>{let o,r,{node:s}=A,{index:t}=A;const{next:c,content:l}=s;return r=G(c,d=>o=d),A.node===void 0&&n.node&&s!==void 0&&n.node(s),A.index===void 0&&n.index&&t!==void 0&&n.index(t),r(),`  ${b(l.comp||X,"svelte:component").$$render(e,Object.assign({},l.props),{},{default:()=>` ${o?` ${b(q,"Node").$$render(e,{node:o,index:t+1},{},{})}`:""}`})}`}),j=Symbol(),S=P,H={...S,$$render:(e,A,n,a,o)=>{try{return S.$$render(e,A,n,a,o)}catch{const t={status:500,message:"Internal Error"};return F(j)({index:A.index,props:t}),A.node.content.errPage.$$render(e,t,n,a,o)}}},q=H,h=[];function k(e,A=m){let n;const a=new Set;function o(t){if(T(e,t)&&(e=t,n)){const c=!h.length;for(const l of a)l[1](),h.push(l,e);if(c){for(let l=0;l<h.length;l+=2)h[l][0](h[l+1]);h.length=0}}}function r(t){o(t(e))}function s(t,c=m){const l=[t,c];return a.add(l),a.size===1&&(n=A(o,r)||m),t(e),()=>{a.delete(l),a.size===0&&n&&(n(),n=null)}}return{set:o,update:r,subscribe:s}}function J(e){let A=k(null);for(let n=e.length-1;n>=0;n--)A=k({content:e[n],next:A});return A}let E;function $(e,A){E={},E.url=k(new URL(e)),E.node=J(A)}const ee=v((e,A,n,a)=>{let o,r,{nodes:s}=A,{contextData:t}=A;$(t.URL,s);const{node:c}=E;return r=G(c,l=>o=l),A.nodes===void 0&&n.nodes&&s!==void 0&&n.nodes(s),A.contextData===void 0&&n.contextData&&t!==void 0&&n.contextData(t),r(),` ${o?`${b(q,"Node").$$render(e,{node:o,index:0},{},{})}`:""}`}),Ae={code:".info-card.svelte-15kz9bl{max-width:90vw;background-color:#70798C;border-radius:20px;padding:20px;color:white;margin-bottom:20px;font-size:medium}",map:'{"version":3,"file":"InfoCard.svelte","sources":["InfoCard.svelte"],"sourcesContent":["<div class=\\"info-card\\">\\n    <strong>估咩評論小扒手</strong> 幫你輕鬆爬取 Google Maps 商家評論，<br/>\\n    輸入店名立即開始吧！\\n</div>\\n\\n<style>\\n    .info-card {\\n        max-width: 90vw;\\n        background-color: #70798C;\\n        border-radius: 20px;\\n        padding: 20px;\\n        color: white;\\n        margin-bottom: 20px;\\n        font-size: medium;\\n    }  \\n</style>"],"names":[],"mappings":"AAMI,yBAAW,CACP,SAAS,CAAE,IAAI,CACf,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,KAAK,CACZ,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,MACf"}'},z=v((e,A,n,a)=>(e.css.add(Ae),`<div class="info-card svelte-15kz9bl" data-svelte-h="svelte-1ndbl8w"><strong>估咩評論小扒手</strong> 幫你輕鬆爬取 Google Maps 商家評論，<br>
    輸入店名立即開始吧！
</div>`)),ne={code:'.input-form.svelte-e5nmlf{min-height:100px;width:500px;max-width:90vw;padding:20px;background-color:#70798C;border-radius:20px;display:flex;justify-items:center;align-items:center}.chose-store.svelte-e5nmlf{flex-direction:column;align-items:start}input[type="text"].svelte-e5nmlf{height:40px;width:80%;border-radius:15px;border:none;padding:5px;margin-right:10px}input[type="text"].svelte-e5nmlf:focus{border:3px solid #0A0903}input[type="number"].svelte-e5nmlf{height:40px;width:100%;border-radius:15px;border:none;padding:5px;margin-right:10px}button.svelte-e5nmlf{height:40px;width:20%;border-radius:15px;border:none;background-color:#0A0903;color:white;font-size:1rem;cursor:pointer}.button.svelte-e5nmlf:hover{background-color:#f1f1f1;color:#0A0903}.store-select.svelte-e5nmlf{height:40px;width:100%;border-radius:15px;border:none;padding:5px;margin-right:10px}.store-select-box.svelte-e5nmlf{width:100%;display:flex;flex-direction:column;margin-bottom:10px}.pages-box.svelte-e5nmlf{width:100%;display:flex;flex-direction:column;margin-bottom:10px}label.svelte-e5nmlf{font-weight:500;font-size:large;color:white;margin-bottom:5px}',map:`{"version":3,"file":"InputCard.svelte","sources":["InputCard.svelte"],"sourcesContent":["<script>\\n    import InfoCard from './InfoCard.svelte';\\n    export let searchInputStr;\\n    export let selectedStore;\\n    export let pagesToFetch;\\n    export let handleSearch;\\n    export let handleGetReview;\\n    export let storeData = [];\\n    let form = null;\\n<\/script>\\n\\n\\n\\n{#if  Object.keys(storeData).length !== 0}\\n    <form on:submit|preventDefault={handleGetReview} class=\\"input-form chose-store\\" bind:this={form}>\\n        <div class=\\"store-select-box\\">\\n            <label for=\\"store\\">選擇店家</label>\\n            <select bind:value={selectedStore} class=\\"store-select\\">\\n                {#each storeData as store}\\n                    <option value={store}>{store.Name}</option>\\n                {/each}\\n            </select>\\n        </div>\\n        <div class=\\"pages-box\\">\\n            <label for=\\"pages\\">輸入頁數，0代表全部</label>\\n            <input type=\\"number\\" name=\\"pages\\" placeholder=\\"輸入頁數\\" bind:value={pagesToFetch} />\\n        </div>\\n        <button type=\\"submit\\" class=\\"button\\">確定</button>\\n    </form>\\n{:else}\\n    <InfoCard/>\\n    <form on:submit|preventDefault={handleSearch} class=\\"input-form\\" bind:this={form}>\\n        <input type=\\"text\\" placeholder=\\"輸入關鍵字\\" bind:value={searchInputStr} />\\n        <button type=\\"submit\\" class=\\"button\\">搜尋</button>\\n    </form>\\n{/if}\\n\\n\\n<style>\\n    .input-form {\\n        min-height: 100px;\\n        width: 500px;\\n        max-width: 90vw;\\n        padding: 20px;\\n        background-color: #70798C;\\n        border-radius: 20px;\\n        display: flex;\\n        justify-items: center;\\n        align-items: center;\\n    }\\n\\n    .chose-store {\\n        flex-direction: column;\\n        align-items: start;\\n    }\\n\\n    input[type=\\"text\\"] {\\n        height: 40px;\\n        width: 80%;\\n        border-radius: 15px;\\n        border: none;\\n        padding: 5px;\\n        margin-right: 10px;\\n    }\\n\\n    input[type=\\"text\\"]:focus {\\n        border: 3px solid #0A0903;\\n    }\\n\\n    input[type=\\"number\\"] {\\n        height: 40px;\\n        width: 100%;\\n        border-radius: 15px;\\n        border: none;\\n        padding: 5px;\\n        margin-right: 10px;\\n    }\\n\\n    button {\\n        height: 40px;\\n        width: 20%;\\n        border-radius: 15px;\\n        border: none;\\n        background-color: #0A0903;\\n        color: white;\\n        font-size: 1rem;\\n        cursor: pointer;\\n    }\\n\\n    .button:hover {\\n        background-color: #f1f1f1;\\n        color: #0A0903;\\n    }\\n\\n    .store-select {\\n        height: 40px;\\n        width: 100%;\\n        border-radius: 15px;\\n        border: none;\\n        padding: 5px;\\n        margin-right: 10px;\\n    }\\n    .store-select-box {\\n        width: 100%;\\n        display: flex;\\n        flex-direction: column;\\n        margin-bottom: 10px;\\n    }\\n\\n    .pages-box {\\n        width: 100%;\\n        display: flex;\\n        flex-direction: column;\\n        margin-bottom: 10px;\\n    }\\n\\n    label{\\n        font-weight: 500;\\n        font-size: large;\\n        color: white;\\n        margin-bottom: 5px;\\n    }\\n</style>"],"names":[],"mappings":"AAuCI,yBAAY,CACR,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MAAM,CACrB,WAAW,CAAE,MACjB,CAEA,0BAAa,CACT,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,KACjB,CAEA,KAAK,CAAC,IAAI,CAAC,MAAM,eAAE,CACf,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GAAG,CACV,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,GAAG,CACZ,YAAY,CAAE,IAClB,CAEA,KAAK,CAAC,IAAI,CAAC,MAAM,eAAC,MAAO,CACrB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OACtB,CAEA,KAAK,CAAC,IAAI,CAAC,QAAQ,eAAE,CACjB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,GAAG,CACZ,YAAY,CAAE,IAClB,CAEA,oBAAO,CACH,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GAAG,CACV,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,OACZ,CAEA,qBAAO,MAAO,CACV,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OACX,CAEA,2BAAc,CACV,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,GAAG,CACZ,YAAY,CAAE,IAClB,CACA,+BAAkB,CACd,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,aAAa,CAAE,IACnB,CAEA,wBAAW,CACP,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,aAAa,CAAE,IACnB,CAEA,mBAAK,CACD,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,KAAK,CACZ,aAAa,CAAE,GACnB"}`},U=v((e,A,n,a)=>{let{searchInputStr:o}=A,{selectedStore:r}=A,{pagesToFetch:s}=A,{handleSearch:t}=A,{handleGetReview:c}=A,{storeData:l=[]}=A,d=null;return A.searchInputStr===void 0&&n.searchInputStr&&o!==void 0&&n.searchInputStr(o),A.selectedStore===void 0&&n.selectedStore&&r!==void 0&&n.selectedStore(r),A.pagesToFetch===void 0&&n.pagesToFetch&&s!==void 0&&n.pagesToFetch(s),A.handleSearch===void 0&&n.handleSearch&&t!==void 0&&n.handleSearch(t),A.handleGetReview===void 0&&n.handleGetReview&&c!==void 0&&n.handleGetReview(c),A.storeData===void 0&&n.storeData&&l!==void 0&&n.storeData(l),e.css.add(ne),`${Object.keys(l).length!==0?`<form class="input-form chose-store svelte-e5nmlf"${g("this",d,0)}><div class="store-select-box svelte-e5nmlf"><label for="store" class="svelte-e5nmlf" data-svelte-h="svelte-cly9uh">選擇店家</label> <select class="store-select svelte-e5nmlf">${x(l,C=>`<option${g("value",C,0)}>${u(C.Name)}</option>`)}</select></div> <div class="pages-box svelte-e5nmlf"><label for="pages" class="svelte-e5nmlf" data-svelte-h="svelte-u04ycx">輸入頁數，0代表全部</label> <input type="number" name="pages" placeholder="輸入頁數" class="svelte-e5nmlf"${g("value",s,0)}></div> <button type="submit" class="button svelte-e5nmlf" data-svelte-h="svelte-tcqmmk">確定</button></form>`:`${b(z,"InfoCard").$$render(e,{},{},{})} <form class="input-form svelte-e5nmlf"${g("this",d,0)}><input type="text" placeholder="輸入關鍵字" class="svelte-e5nmlf"${g("value",o,0)}> <button type="submit" class="button svelte-e5nmlf" data-svelte-h="svelte-1jb2twj">搜尋</button></form>`}`}),te={code:".loader-container.svelte-nx5s04{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100px}.loader.svelte-nx5s04{width:48px;height:48px;border:5px solid #f3f3f3;border-top:5px solid #3498db;border-radius:50%;animation:svelte-nx5s04-spin 1s linear infinite}@keyframes svelte-nx5s04-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",map:`{"version":3,"file":"Loader.svelte","sources":["Loader.svelte"],"sourcesContent":["<script>\\n    const loadingWords = ['loading', 'loading.', 'loading..', 'loading...'];\\n    let loadingWord = loadingWords[0];\\n    let index = 1;\\n    const interval = setInterval(() => {\\n        loadingWord = loadingWords[index];\\n        index = (index + 1) % loadingWords.length;\\n    }, 500);\\n<\/script>\\n\\n<div class=\\"loader-container\\">\\n    <p>{loadingWord}</p>\\n    <div class=\\"loader\\"></div>\\n</div>\\n\\n<style>\\n    .loader-container {\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: center;\\n        align-items: center;\\n        min-height: 100px;\\n    }\\n\\n    .loader {\\n        width: 48px;\\n        height: 48px;\\n        border: 5px solid #f3f3f3;\\n        border-top: 5px solid #3498db;\\n        border-radius: 50%;\\n        animation: spin 1s linear infinite;\\n    }\\n\\n    @keyframes spin {\\n        0% {\\n        transform: rotate(0deg);\\n        }\\n        100% {\\n        transform: rotate(360deg);\\n        }\\n    }\\n</style>"],"names":[],"mappings":"AAgBI,+BAAkB,CACd,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,KAChB,CAEA,qBAAQ,CACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAC7B,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,kBAAI,CAAC,EAAE,CAAC,MAAM,CAAC,QAC9B,CAEA,WAAW,kBAAK,CACZ,EAAG,CACH,SAAS,CAAE,OAAO,IAAI,CACtB,CACA,IAAK,CACL,SAAS,CAAE,OAAO,MAAM,CACxB,CACJ"}`},W=v((e,A,n,a)=>{const o=["loading","loading.","loading..","loading..."];let r=o[0],s=1;return setInterval(()=>{r=o[s],s=(s+1)%o.length},500),e.css.add(te),`<div class="loader-container svelte-nx5s04"><p>${u(r)}</p> <div class="loader svelte-nx5s04"></div> </div>`}),oe={code:".container.svelte-vqnkcd.svelte-vqnkcd{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;padding-top:20px;padding-bottom:20px}.title-box.svelte-vqnkcd.svelte-vqnkcd{display:flex;flex-direction:column;align-items:start;justify-content:center;margin-bottom:1rem;transition:transform 0.3s ease}.title.svelte-vqnkcd.svelte-vqnkcd{font-size:2.5rem;color:#2c3e50;margin:0;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.1)}.title-box.svelte-vqnkcd.svelte-vqnkcd:hover{transform:scale(1.05)}.subtitle.svelte-vqnkcd.svelte-vqnkcd{font-size:1.5rem;color:#0A0903;margin:0}.review-box.svelte-vqnkcd.svelte-vqnkcd{width:80%}.store-name.svelte-vqnkcd.svelte-vqnkcd{font-size:1.5rem}.review-table.svelte-vqnkcd.svelte-vqnkcd{border-collapse:collapse;width:100%;background-color:white;box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);border-radius:8px;overflow:hidden}.review-table.svelte-vqnkcd th.svelte-vqnkcd{background-color:#2c3e50;color:white;padding:12px 15px;text-align:left;font-weight:600}.review-table.svelte-vqnkcd td.svelte-vqnkcd{padding:12px 15px;border-bottom:1px solid #ddd}.review-table.svelte-vqnkcd tbody tr.svelte-vqnkcd:hover{background-color:#f5f5f5;transition:background-color 0.2s ease}.review-table.svelte-vqnkcd tbody tr:last-child td.svelte-vqnkcd{border-bottom:none}.review-table-box.svelte-vqnkcd.svelte-vqnkcd{width:100%;height:500px;overflow:auto;background-color:white;border-radius:8px;box-shadow:0 0 20px rgba(0, 0, 0, 0.1);padding:1rem}.review-table-box.svelte-vqnkcd.svelte-vqnkcd::-webkit-scrollbar{width:8px;height:8px}.review-table-box.svelte-vqnkcd.svelte-vqnkcd::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.review-table-box.svelte-vqnkcd.svelte-vqnkcd::-webkit-scrollbar-thumb{background:#888;border-radius:4px}.review-table-box.svelte-vqnkcd.svelte-vqnkcd::-webkit-scrollbar-thumb:hover{background:#555}.reset-button.svelte-vqnkcd.svelte-vqnkcd{height:50px;width:20%;min-width:200px;border-radius:15px;border:none;background-color:#0A0903;color:white;font-size:1rem;cursor:pointer;margin-bottom:1rem}.download-button.svelte-vqnkcd.svelte-vqnkcd{height:40px;width:20%;min-width:200px;border-radius:15px;border:none;background-color:#0A0903;color:white;font-size:1rem;cursor:pointer;margin-bottom:1rem}footer.svelte-vqnkcd.svelte-vqnkcd{width:100vw;height:50px;background-color:black;color:white;display:flex;justify-content:center;align-items:center}.button.svelte-vqnkcd.svelte-vqnkcd:hover{background-color:#f1f1f1;color:#0A0903}@keyframes svelte-vqnkcd-pop{0%{transform:scale(1)}50%{transform:scale(1.1)}100%{transform:scale(1)}}",map:`{"version":3,"file":"App.svelte","sources":["App.svelte"],"sourcesContent":["<script>\\n    import { onMount } from 'svelte';\\n    import InputCard from '../components/InputCard.svelte';\\n    import Loader from '../components/Loader.svelte';\\n    export let title;\\n    export let subtitle;\\n    const searchStoreUrl = \\"/api/search\\";\\n    const getReviewsUrl = \\"/api/reviews\\";\\n    let searchInputStr = '';\\n    let selectedStore = '';\\n    let pagesToFetch = 1;\\n    let storeData = [];\\n    let reviews = [];\\n\\n    let isLoading = false;\\n    const handleSearch = async() => {\\n        isLoading = true;\\n        console.log(searchInputStr);\\n        if (searchInputStr === \\"\\") {\\n            alert('請輸入搜尋關鍵字');\\n            isLoading = false;\\n            return;\\n        }\\n        try{\\n            const res = await fetch(searchStoreUrl+\`?storeName=\${searchInputStr}\`);\\n            if (!res.ok) {\\n                console.error('Error:', res.statusText);\\n                alert('無法取得搜尋結果');\\n                return;\\n            }\\n            storeData = await res.json();\\n            console.log(storeData);\\n        }catch(e){\\n            console.error(e);\\n            alert('無法取得搜尋結果');\\n        }finally {\\n            isLoading = false;\\n        }\\n    }\\n    const handleGetReview = async() => {\\n        isLoading = true;\\n        console.log(selectedStore);\\n        if (selectedStore === \\"\\") {\\n            alert('請選擇店家');\\n            isLoading = false;\\n            return;\\n        }\\n        try{\\n            const res = await fetch(getReviewsUrl+\`?storeID=\${selectedStore.ID}&pages=\${pagesToFetch}\`);\\n            if (!res.ok) {\\n                console.error('Error:', res.statusText);\\n                alert('無法取得評論');\\n                return;\\n            }\\n            reviews = await res.json();\\n            console.log(reviews);\\n        }catch(e){\\n            console.error(e);\\n            alert('無法取得評論');\\n        }finally {\\n            isLoading = false;\\n        }\\n    }\\n\\n    const download = (type) => {\\n        const a = document.createElement(\\"a\\");\\n        let url = \\"\\";\\n        switch (type) {\\n            case \\"csv\\":\\n                // 添加 BOM 標記\\n                const BOM = new Uint8Array([0xEF, 0xBB, 0xBF]);\\n                // 建立 CSV 內容，加入標題列\\n                const headers = Object.keys(reviews[0]).join(',');\\n                const rows = reviews.map(row => \\n                    Object.values(row)\\n                        .map(value => {\\n                            // 處理數值、字串中的特殊字元\\n                            if (typeof value === 'string') {\\n                                // 如果內容包含逗號、換行或雙引號，就用雙引號包起來\\n                                if (value.includes(',') || value.includes('\\\\n') || value.includes('\\"')) {\\n                                    return \`\\"\${value.replace(/\\"/g, '\\"\\"')}\\"\`;\\n                                }\\n                            }\\n                            return value;\\n                        })\\n                        .join(',')\\n                );\\n                const csvContent = headers + '\\\\n' + rows.join('\\\\n');\\n                \\n                // 合併 BOM 和 CSV 內容\\n                const csvBlob = new Blob([BOM, csvContent], { type: 'text/csv;charset=utf-8' });\\n                url = window.URL.createObjectURL(csvBlob);\\n                \\n                a.href = url;\\n                a.download = \`\${selectedStore.Name}.csv\`;\\n                a.click();\\n                break;\\n            case \\"json\\":\\n                const json = JSON.stringify(reviews, null, 2);\\n                const jsonBlob = new Blob([json], { type: 'application/json;charset=utf-8' });\\n                url = window.URL.createObjectURL(jsonBlob);\\n                a.href = url;\\n                a.download = \`\${selectedStore.Name}.json\`;\\n                a.click();\\n                break;\\n            default:\\n                break;\\n        }\\n        window.URL.revokeObjectURL(url);\\n    }\\n\\n    onMount(async () => {\\n        getNavbar();\\n    });\\n<\/script>\\n\\n<svelte:head>\\n    <title>{title} - 榛果繽紛樂</title>\\n</svelte:head>\\n\\n<div class=\\"container\\">\\n    <img src=\\"https://src.hazelnut-paradise.com/GooMapReviewSnatcher.png\\" alt=\\"GooMapReviewSnatcher\\" style=\\"width: 100%; max-width: 150px;\\"/>\\n    <div class=\\"title-box\\">\\n        <h1 class=\\"title\\">{title}</h1>\\n        <h2 class=\\"subtitle\\">{subtitle}</h2>\\n    </div>\\n    {#if isLoading}\\n        <Loader/>\\n    {:else if Object.keys(reviews).length == 0}\\n    <InputCard\\n        bind:pagesToFetch\\n        bind:searchInputStr\\n        bind:selectedStore\\n        {handleSearch}\\n        {handleGetReview}\\n        {storeData}\\n    />\\n    {:else}\\n    <button class=\\"reset-button button\\" on:click={()=> {\\n        searchInputStr = '';\\n        storeData = [];\\n        reviews = [];\\n    }}>查詢其他商家</button>\\n    <div class=\\"review-box\\">\\n        <h3 class=\\"store-name\\">{selectedStore.Name}</h3>\\n        <button class=\\"download-button button\\" on:click={() => download(\\"csv\\")}>下載 CSV</button>\\n        <button class=\\"download-button button\\" on:click={() => download(\\"json\\")}>下載 JSON</button>\\n        <div class=\\"review-table-box\\">\\n            <table class=\\"review-table\\">\\n                <thead>\\n                    <tr>\\n                    {#each Object.keys(reviews[0]) as key}\\n                        <th>{key}</th>\\n                    {/each}\\n                    </tr>\\n                </thead>\\n                <tbody>\\n                    {#each reviews as review}\\n                        <tr>\\n                            {#each Object.values(review) as value}\\n                                <td>{value}</td>\\n                            {/each}\\n                        </tr>\\n                    {/each}\\n                </tbody>\\n            </table>\\n        </div>\\n    </div>\\n    {/if}\\n</div>\\n<div id=\\"navbar-placeholder\\" style=\\"height: 50px; z-index: 100;\\"></div>\\n<footer>\\n    2025 - 榛果繽紛樂\\n</footer>\\n\\n<style>\\n    .container {\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center;\\n        justify-content: center;\\n        min-height: 100vh;\\n        padding-top: 20px;\\n        padding-bottom: 20px;\\n        /* background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); */\\n    }\\n\\n    .title-box {\\n        display: flex;\\n        flex-direction: column;\\n        align-items: start;\\n        justify-content: center;\\n        margin-bottom: 1rem;\\n        transition: transform 0.3s ease;\\n    }\\n\\n    .title {\\n        font-size: 2.5rem;\\n        color: #2c3e50;\\n        margin: 0;\\n        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\\n    }\\n\\n    .title-box:hover {\\n        transform: scale(1.05);\\n    }\\n\\n    .subtitle {\\n        font-size: 1.5rem;\\n        color: #0A0903;\\n        margin: 0;\\n    }\\n\\n    .review-box {\\n        width: 80%;\\n    }\\n\\n    .store-name {\\n        font-size: 1.5rem;\\n    }\\n\\n    .review-table {\\n        border-collapse: collapse;\\n        width: 100%;\\n        background-color: white;\\n        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\\n        border-radius: 8px;\\n        overflow: hidden;\\n    }\\n\\n    .review-table th {\\n        background-color: #2c3e50;\\n        color: white;\\n        padding: 12px 15px;\\n        text-align: left;\\n        font-weight: 600;\\n    }\\n\\n    .review-table td {\\n        padding: 12px 15px;\\n        border-bottom: 1px solid #ddd;\\n    }\\n\\n    .review-table tbody tr:hover {\\n        background-color: #f5f5f5;\\n        transition: background-color 0.2s ease;\\n    }\\n\\n    .review-table tbody tr:last-child td {\\n        border-bottom: none;\\n    }\\n\\n    .review-table-box {\\n        width: 100%;\\n        height: 500px;\\n        overflow: auto;\\n        background-color: white;\\n        border-radius: 8px;\\n        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\\n        padding: 1rem;\\n    }\\n\\n    /* 美化捲軸 */\\n    .review-table-box::-webkit-scrollbar {\\n        width: 8px;\\n        height: 8px;\\n    }\\n\\n    .review-table-box::-webkit-scrollbar-track {\\n        background: #f1f1f1;\\n        border-radius: 4px;\\n    }\\n\\n    .review-table-box::-webkit-scrollbar-thumb {\\n        background: #888;\\n        border-radius: 4px;\\n    }\\n\\n    .review-table-box::-webkit-scrollbar-thumb:hover {\\n        background: #555;\\n    }\\n\\n    .reset-button {\\n        height: 50px;\\n        width: 20%;\\n        min-width: 200px;\\n        border-radius: 15px;\\n        border: none;\\n        background-color: #0A0903;\\n        color: white;\\n        font-size: 1rem;\\n        cursor: pointer;\\n        margin-bottom: 1rem;\\n    }\\n\\n    .download-button {\\n        height: 40px;\\n        width: 20%;\\n        min-width: 200px;\\n        border-radius: 15px;\\n        border: none;\\n        background-color: #0A0903;\\n        color: white;\\n        font-size: 1rem;\\n        cursor: pointer;\\n        margin-bottom: 1rem;\\n    }\\n\\n    footer {\\n        width: 100vw;\\n        height: 50px;\\n        background-color: black;\\n        color: white;\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n    }\\n\\n    .button:hover {\\n        background-color: #f1f1f1;\\n        color: #0A0903;\\n    }\\n\\n    @keyframes pop {\\n        0% { transform: scale(1); }\\n        50% { transform: scale(1.1); }\\n        100% { transform: scale(1); }\\n    }\\n</style>\\n"],"names":[],"mappings":"AAgLI,sCAAW,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,KAAK,CACjB,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,IAEpB,CAEA,sCAAW,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,KAAK,CAClB,eAAe,CAAE,MAAM,CACvB,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,IAC/B,CAEA,kCAAO,CACH,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,CAAC,CACT,WAAW,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAC9C,CAEA,sCAAU,MAAO,CACb,SAAS,CAAE,MAAM,IAAI,CACzB,CAEA,qCAAU,CACN,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,CACZ,CAEA,uCAAY,CACR,KAAK,CAAE,GACX,CAEA,uCAAY,CACR,SAAS,CAAE,MACf,CAEA,yCAAc,CACV,eAAe,CAAE,QAAQ,CACzB,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,KAAK,CACvB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACxC,aAAa,CAAE,GAAG,CAClB,QAAQ,CAAE,MACd,CAEA,2BAAa,CAAC,gBAAG,CACb,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,GACjB,CAEA,2BAAa,CAAC,gBAAG,CACb,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAC7B,CAEA,2BAAa,CAAC,KAAK,CAAC,gBAAE,MAAO,CACzB,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,gBAAgB,CAAC,IAAI,CAAC,IACtC,CAEA,2BAAa,CAAC,KAAK,CAAC,EAAE,WAAW,CAAC,gBAAG,CACjC,aAAa,CAAE,IACnB,CAEA,6CAAkB,CACd,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,IAAI,CACd,gBAAgB,CAAE,KAAK,CACvB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACvC,OAAO,CAAE,IACb,CAGA,6CAAiB,mBAAoB,CACjC,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GACZ,CAEA,6CAAiB,yBAA0B,CACvC,UAAU,CAAE,OAAO,CACnB,aAAa,CAAE,GACnB,CAEA,6CAAiB,yBAA0B,CACvC,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,GACnB,CAEA,6CAAiB,yBAAyB,MAAO,CAC7C,UAAU,CAAE,IAChB,CAEA,yCAAc,CACV,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GAAG,CACV,SAAS,CAAE,KAAK,CAChB,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,OAAO,CACf,aAAa,CAAE,IACnB,CAEA,4CAAiB,CACb,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GAAG,CACV,SAAS,CAAE,KAAK,CAChB,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,OAAO,CACf,aAAa,CAAE,IACnB,CAEA,kCAAO,CACH,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,KAAK,CACvB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACjB,CAEA,mCAAO,MAAO,CACV,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OACX,CAEA,WAAW,iBAAI,CACX,EAAG,CAAE,SAAS,CAAE,MAAM,CAAC,CAAG,CAC1B,GAAI,CAAE,SAAS,CAAE,MAAM,GAAG,CAAG,CAC7B,IAAK,CAAE,SAAS,CAAE,MAAM,CAAC,CAAG,CAChC"}`},re="/api/search",se="/api/reviews",ae=v((e,A,n,a)=>{let{title:o}=A,{subtitle:r}=A,s="",t="",c=1,l=[],d=[],C=!1;const p=async()=>{if(C=!0,console.log(s),s===""){alert("請輸入搜尋關鍵字"),C=!1;return}try{const i=await fetch(re+`?storeName=${s}`);if(!i.ok){console.error("Error:",i.statusText),alert("無法取得搜尋結果");return}l=await i.json(),console.log(l)}catch(i){console.error(i),alert("無法取得搜尋結果")}finally{C=!1}},I=async()=>{if(C=!0,console.log(t),t===""){alert("請選擇店家"),C=!1;return}try{const i=await fetch(se+`?storeID=${t.ID}&pages=${c}`);if(!i.ok){console.error("Error:",i.statusText),alert("無法取得評論");return}d=await i.json(),console.log(d)}catch(i){console.error(i),alert("無法取得評論")}finally{C=!1}};A.title===void 0&&n.title&&o!==void 0&&n.title(o),A.subtitle===void 0&&n.subtitle&&r!==void 0&&n.subtitle(r),e.css.add(oe);let f,M,R=e.head;do f=!0,e.head=R,M=`${e.head+=`<!-- HEAD_svelte-wrcujp_START -->${e.title=`<title>${u(o)} - 榛果繽紛樂</title>`,""}<!-- HEAD_svelte-wrcujp_END -->`,""} <div class="container svelte-vqnkcd"><img src="https://src.hazelnut-paradise.com/GooMapReviewSnatcher.png" alt="GooMapReviewSnatcher" style="width: 100%; max-width: 150px;"> <div class="title-box svelte-vqnkcd"><h1 class="title svelte-vqnkcd">${u(o)}</h1> <h2 class="subtitle svelte-vqnkcd">${u(r)}</h2></div> ${C?`${b(W,"Loader").$$render(e,{},{},{})}`:`${Object.keys(d).length==0?`${b(U,"InputCard").$$render(e,{handleSearch:p,handleGetReview:I,storeData:l,pagesToFetch:c,searchInputStr:s,selectedStore:t},{pagesToFetch:i=>{c=i,f=!1},searchInputStr:i=>{s=i,f=!1},selectedStore:i=>{t=i,f=!1}},{})}`:`<button class="reset-button button svelte-vqnkcd" data-svelte-h="svelte-gc4oaf">查詢其他商家</button> <div class="review-box svelte-vqnkcd"><h3 class="store-name svelte-vqnkcd">${u(t.Name)}</h3> <button class="download-button button svelte-vqnkcd" data-svelte-h="svelte-1cm302j">下載 CSV</button> <button class="download-button button svelte-vqnkcd" data-svelte-h="svelte-zkdu87">下載 JSON</button> <div class="review-table-box svelte-vqnkcd"><table class="review-table svelte-vqnkcd"><thead><tr class="svelte-vqnkcd">${x(Object.keys(d[0]),i=>`<th class="svelte-vqnkcd">${u(i)}</th>`)}</tr></thead> <tbody>${x(d,i=>`<tr class="svelte-vqnkcd">${x(Object.values(i),D=>`<td class="svelte-vqnkcd">${u(D)}</td>`)} </tr>`)}</tbody></table></div></div>`}`}</div> <div id="navbar-placeholder" style="height: 50px; z-index: 100;"></div> <footer class="svelte-vqnkcd" data-svelte-h="svelte-livmhd">2025 - 榛果繽紛樂
</footer>`;while(!f);return M}),le={code:"p.svelte-5zxcoy{white-space:pre-wrap}",map:'{"version":3,"file":"default-error.svelte","sources":["default-error.svelte"],"sourcesContent":["<script>\\n    /** @type {number} */\\n    export let status;\\n\\n    /** @type {string} */\\n    export let message;\\n<\/script>\\n\\n<h1>{status}</h1>\\n<p>{message}</p>\\n\\n<style>\\n    p {\\n        white-space: pre-wrap;\\n    }\\n</style>\\n"],"names":[],"mappings":"AAYI,eAAE,CACE,WAAW,CAAE,QACjB"}'},Ce=v((e,A,n,a)=>{let{status:o}=A,{message:r}=A;return A.status===void 0&&n.status&&o!==void 0&&n.status(o),A.message===void 0&&n.message&&r!==void 0&&n.message(r),e.css.add(le),`<h1>${u(o)}</h1> <p class="svelte-5zxcoy">${u(r)}</p>`}),ie=ee,ce="/golte_/entries/hydrate-ByQAE34D.js",y={"components/InfoCard":{server:z,Client:"/golte_/entries/InfoCard-Dh1rx6av.js",CSS:["/golte_/assets/InfoCard-3z19lYhA.css"]},"components/InputCard":{server:U,Client:"/golte_/entries/InputCard-CJOtxHk-.js",CSS:["/golte_/assets/InputCard-Bp3zFdIY.css","/golte_/assets/InfoCard-3z19lYhA.css"]},"components/Loader":{server:W,Client:"/golte_/entries/Loader-D84Q-Lp6.js",CSS:["/golte_/assets/Loader-BbdzO3D6.css"]},"pages/App":{server:ae,Client:"/golte_/entries/App-B-Qy66y8.js",CSS:["/golte_/assets/App-BdZDpd6l.css","/golte_/assets/InputCard-Bp3zFdIY.css","/golte_/assets/InfoCard-3z19lYhA.css","/golte_/assets/Loader-BbdzO3D6.css"]},$$$GOLTE_DEFAULT_ERROR$$$:{server:Ce,Client:"/golte_/entries/default-error-C6-zgG-C.js",CSS:["/golte_/assets/default-error-jCKc6TVQ.css"]}};function de(e,A,n){const a=[],o=[],r=new Set,s=y[n];if(!s)throw new Error(`"${n}" is not a component`);for(const C of e){const p=y[C.Comp];if(!p)throw new Error(`"${C.Comp}" is not a component`);a.push({comp:p.server,props:C.Props,errPage:s.server}),o.push({comp:`${p.Client}`,props:C.Props,errPage:`${s.Client}`});for(const I of p.CSS)r.add(I)}for(const C of s.CSS)r.add(C);let t;const c=new Map;c.set(j,C=>t=C);let{html:l,head:d}=ie.render({nodes:a,contextData:A},{context:c});for(const C of r)d+=`
<link href="${C}" rel="stylesheet">`;return t&&(o[t.index].ssrError=t.props),l+=`
        <script>
            (async function () {
                const target = document.currentScript.parentElement;
                const { hydrate } = await import("${ce}");
                await hydrate(target, ${O(o)}, ${O(A)});
            })();
        <\/script>
    `,{Head:d,Body:l,HasError:!!t}}function O(e){return JSON.stringify(e).replace("<\/script>","<\\/script>")}exports.Manifest=y;exports.Render=de;

"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});function g(){}function T(e){return e()}function Z(){return Object.create(null)}function D(e){e.forEach(T)}function N(e,n){return e!=e?n==n:e!==n||e&&typeof e=="object"||typeof e=="function"}function G(e,...n){if(e==null){for(const r of n)r(void 0);return g}const t=e.subscribe(...n);return t.unsubscribe?()=>t.unsubscribe():t}let w;function K(e){w=e}function F(){if(!w)throw new Error("Function called outside component initialization");return w}function Y(e){return F().$$.context.get(e)}function V(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}const P=/[&"<]/g,X=/[&<]/g;function p(e,n=!1){const t=String(e),r=n?P:X;r.lastIndex=0;let A="",s=0;for(;r.test(t);){const a=r.lastIndex-1,o=t[a];A+=t.substring(s,a)+(o==="&"?"&amp;":o==='"'?"&quot;":"&lt;"),s=a+1}return A+t.substring(s)}function x(e,n){e=V(e);let t="";for(let r=0;r<e.length;r+=1)t+=n(e[r],r);return t}const Q={$$render:()=>""};function f(e,n){if(!e||!e.$$render)throw n==="svelte:component"&&(n+=" this={...}"),new Error(`<${n}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${n}>.`);return e}let B;function u(e){function n(t,r,A,s,a){const o=w,c={on_destroy:B,context:new Map(a||(o?o.$$.context:[])),on_mount:[],before_update:[],after_update:[],callbacks:Z()};K({$$:c});const l=e(t,r,A,s);return K(o),l}return{render:(t={},{$$slots:r={},context:A=new Map}={})=>{B=[];const s={title:"",head:"",css:new Set},a=n(s,t,{},r,A);return D(B),{html:a,css:{code:Array.from(s.css).map(o=>o.code).join(`
`),map:null},head:s.title+s.head}},$$render:n}}function b(e,n,t){if(n==null||t)return"";const r=`="${p(n,!0)}"`;return` ${e}${r}`}const $=u((e,n,t,r)=>{let A,s,{node:a}=n,{index:o}=n;const{next:c,content:l}=a;return s=G(c,d=>A=d),n.node===void 0&&t.node&&a!==void 0&&t.node(a),n.index===void 0&&t.index&&o!==void 0&&t.index(o),s(),`  ${f(l.comp||Q,"svelte:component").$$render(e,Object.assign({},l.props),{},{default:()=>` ${A?` ${f(j,"Node").$$render(e,{node:A,index:o+1},{},{})}`:""}`})}`}),k=Symbol(),O=$,H={...O,$$render:(e,n,t,r,A)=>{try{return O.$$render(e,n,t,r,A)}catch{const o={status:500,message:"Internal Error"};return Y(k)({index:n.index,props:o}),n.node.content.errPage.$$render(e,o,t,r,A)}}},j=H,h=[];function y(e,n=g){let t;const r=new Set;function A(o){if(N(e,o)&&(e=o,t)){const c=!h.length;for(const l of r)l[1](),h.push(l,e);if(c){for(let l=0;l<h.length;l+=2)h[l][0](h[l+1]);h.length=0}}}function s(o){A(o(e))}function a(o,c=g){const l=[o,c];return r.add(l),r.size===1&&(t=n(A,s)||g),o(e),()=>{r.delete(l),r.size===0&&t&&(t(),t=null)}}return{set:A,update:s,subscribe:a}}function q(e){let n=y(null);for(let t=e.length-1;t>=0;t--)n=y({content:e[t],next:n});return n}let E;function J(e,n){E={},E.url=y(new URL(e)),E.node=q(n)}const ee=u((e,n,t,r)=>{let A,s,{nodes:a}=n,{contextData:o}=n;J(o.URL,a);const{node:c}=E;return s=G(c,l=>A=l),n.nodes===void 0&&t.nodes&&a!==void 0&&t.nodes(a),n.contextData===void 0&&t.contextData&&o!==void 0&&t.contextData(o),s(),` ${A?`${f(j,"Node").$$render(e,{node:A,index:0},{},{})}`:""}`}),ne={code:".info-card.svelte-15kz9bl{max-width:90vw;background-color:#70798C;border-radius:20px;padding:20px;color:white;margin-bottom:20px;font-size:medium}",map:'{"version":3,"file":"InfoCard.svelte","sources":["InfoCard.svelte"],"sourcesContent":["<div class=\\"info-card\\">\\n    <strong>估咩評論小扒手</strong> 幫你輕鬆爬取 Google Maps 商家評論，<br/>\\n    輸入店名立即開始吧！\\n</div>\\n\\n<style>\\n    .info-card {\\n        max-width: 90vw;\\n        background-color: #70798C;\\n        border-radius: 20px;\\n        padding: 20px;\\n        color: white;\\n        margin-bottom: 20px;\\n        font-size: medium;\\n    }  \\n</style>"],"names":[],"mappings":"AAMI,yBAAW,CACP,SAAS,CAAE,IAAI,CACf,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,KAAK,CACZ,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,MACf"}'},L=u((e,n,t,r)=>(e.css.add(ne),`<div class="info-card svelte-15kz9bl" data-svelte-h="svelte-1ndbl8w"><strong>估咩評論小扒手</strong> 幫你輕鬆爬取 Google Maps 商家評論，<br>
    輸入店名立即開始吧！
</div>`)),te={code:'.input-form.svelte-e5nmlf{min-height:100px;width:500px;max-width:90vw;padding:20px;background-color:#70798C;border-radius:20px;display:flex;justify-items:center;align-items:center}.chose-store.svelte-e5nmlf{flex-direction:column;align-items:start}input[type="text"].svelte-e5nmlf{height:40px;width:80%;border-radius:15px;border:none;padding:5px;margin-right:10px}input[type="text"].svelte-e5nmlf:focus{border:3px solid #0A0903}input[type="number"].svelte-e5nmlf{height:40px;width:100%;border-radius:15px;border:none;padding:5px;margin-right:10px}button.svelte-e5nmlf{height:40px;width:20%;border-radius:15px;border:none;background-color:#0A0903;color:white;font-size:1rem;cursor:pointer}.button.svelte-e5nmlf:hover{background-color:#f1f1f1;color:#0A0903}.store-select.svelte-e5nmlf{height:40px;width:100%;border-radius:15px;border:none;padding:5px;margin-right:10px}.store-select-box.svelte-e5nmlf{width:100%;display:flex;flex-direction:column;margin-bottom:10px}.pages-box.svelte-e5nmlf{width:100%;display:flex;flex-direction:column;margin-bottom:10px}label.svelte-e5nmlf{font-weight:500;font-size:large;color:white;margin-bottom:5px}',map:`{"version":3,"file":"InputCard.svelte","sources":["InputCard.svelte"],"sourcesContent":["<script>\\n    import InfoCard from './InfoCard.svelte';\\n    export let searchInputStr;\\n    export let selectedStore;\\n    export let pagesToFetch;\\n    export let handleSearch;\\n    export let handleGetReview;\\n    export let storeData = [];\\n    let form = null;\\n<\/script>\\n\\n\\n\\n{#if  Object.keys(storeData).length !== 0}\\n    <form on:submit|preventDefault={handleGetReview} class=\\"input-form chose-store\\" bind:this={form}>\\n        <div class=\\"store-select-box\\">\\n            <label for=\\"store\\">選擇店家</label>\\n            <select bind:value={selectedStore} class=\\"store-select\\">\\n                {#each storeData as store}\\n                    <option value={store}>{store.Name}</option>\\n                {/each}\\n            </select>\\n        </div>\\n        <div class=\\"pages-box\\">\\n            <label for=\\"pages\\">輸入頁數，0代表全部</label>\\n            <input type=\\"number\\" inputmode=\\"numeric\\" name=\\"pages\\" placeholder=\\"輸入頁數\\" bind:value={pagesToFetch} />\\n        </div>\\n        <button type=\\"submit\\" class=\\"button\\">確定</button>\\n    </form>\\n{:else}\\n    <InfoCard/>\\n    <form on:submit|preventDefault={handleSearch} class=\\"input-form\\" bind:this={form}>\\n        <input type=\\"text\\" placeholder=\\"輸入關鍵字\\" bind:value={searchInputStr} />\\n        <button type=\\"submit\\" class=\\"button\\">搜尋</button>\\n    </form>\\n{/if}\\n\\n\\n<style>\\n    .input-form {\\n        min-height: 100px;\\n        width: 500px;\\n        max-width: 90vw;\\n        padding: 20px;\\n        background-color: #70798C;\\n        border-radius: 20px;\\n        display: flex;\\n        justify-items: center;\\n        align-items: center;\\n    }\\n\\n    .chose-store {\\n        flex-direction: column;\\n        align-items: start;\\n    }\\n\\n    input[type=\\"text\\"] {\\n        height: 40px;\\n        width: 80%;\\n        border-radius: 15px;\\n        border: none;\\n        padding: 5px;\\n        margin-right: 10px;\\n    }\\n\\n    input[type=\\"text\\"]:focus {\\n        border: 3px solid #0A0903;\\n    }\\n\\n    input[type=\\"number\\"] {\\n        height: 40px;\\n        width: 100%;\\n        border-radius: 15px;\\n        border: none;\\n        padding: 5px;\\n        margin-right: 10px;\\n    }\\n\\n    button {\\n        height: 40px;\\n        width: 20%;\\n        border-radius: 15px;\\n        border: none;\\n        background-color: #0A0903;\\n        color: white;\\n        font-size: 1rem;\\n        cursor: pointer;\\n    }\\n\\n    .button:hover {\\n        background-color: #f1f1f1;\\n        color: #0A0903;\\n    }\\n\\n    .store-select {\\n        height: 40px;\\n        width: 100%;\\n        border-radius: 15px;\\n        border: none;\\n        padding: 5px;\\n        margin-right: 10px;\\n    }\\n    .store-select-box {\\n        width: 100%;\\n        display: flex;\\n        flex-direction: column;\\n        margin-bottom: 10px;\\n    }\\n\\n    .pages-box {\\n        width: 100%;\\n        display: flex;\\n        flex-direction: column;\\n        margin-bottom: 10px;\\n    }\\n\\n    label{\\n        font-weight: 500;\\n        font-size: large;\\n        color: white;\\n        margin-bottom: 5px;\\n    }\\n</style>"],"names":[],"mappings":"AAuCI,yBAAY,CACR,UAAU,CAAE,KAAK,CACjB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MAAM,CACrB,WAAW,CAAE,MACjB,CAEA,0BAAa,CACT,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,KACjB,CAEA,KAAK,CAAC,IAAI,CAAC,MAAM,eAAE,CACf,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GAAG,CACV,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,GAAG,CACZ,YAAY,CAAE,IAClB,CAEA,KAAK,CAAC,IAAI,CAAC,MAAM,eAAC,MAAO,CACrB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OACtB,CAEA,KAAK,CAAC,IAAI,CAAC,QAAQ,eAAE,CACjB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,GAAG,CACZ,YAAY,CAAE,IAClB,CAEA,oBAAO,CACH,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GAAG,CACV,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,OACZ,CAEA,qBAAO,MAAO,CACV,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OACX,CAEA,2BAAc,CACV,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,GAAG,CACZ,YAAY,CAAE,IAClB,CACA,+BAAkB,CACd,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,aAAa,CAAE,IACnB,CAEA,wBAAW,CACP,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,aAAa,CAAE,IACnB,CAEA,mBAAK,CACD,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,KAAK,CAChB,KAAK,CAAE,KAAK,CACZ,aAAa,CAAE,GACnB"}`},R=u((e,n,t,r)=>{let{searchInputStr:A}=n,{selectedStore:s}=n,{pagesToFetch:a}=n,{handleSearch:o}=n,{handleGetReview:c}=n,{storeData:l=[]}=n,d=null;return n.searchInputStr===void 0&&t.searchInputStr&&A!==void 0&&t.searchInputStr(A),n.selectedStore===void 0&&t.selectedStore&&s!==void 0&&t.selectedStore(s),n.pagesToFetch===void 0&&t.pagesToFetch&&a!==void 0&&t.pagesToFetch(a),n.handleSearch===void 0&&t.handleSearch&&o!==void 0&&t.handleSearch(o),n.handleGetReview===void 0&&t.handleGetReview&&c!==void 0&&t.handleGetReview(c),n.storeData===void 0&&t.storeData&&l!==void 0&&t.storeData(l),e.css.add(te),`${Object.keys(l).length!==0?`<form class="input-form chose-store svelte-e5nmlf"${b("this",d,0)}><div class="store-select-box svelte-e5nmlf"><label for="store" class="svelte-e5nmlf" data-svelte-h="svelte-cly9uh">選擇店家</label> <select class="store-select svelte-e5nmlf">${x(l,i=>`<option${b("value",i,0)}>${p(i.Name)}</option>`)}</select></div> <div class="pages-box svelte-e5nmlf"><label for="pages" class="svelte-e5nmlf" data-svelte-h="svelte-u04ycx">輸入頁數，0代表全部</label> <input type="number" inputmode="numeric" name="pages" placeholder="輸入頁數" class="svelte-e5nmlf"${b("value",a,0)}></div> <button type="submit" class="button svelte-e5nmlf" data-svelte-h="svelte-tcqmmk">確定</button></form>`:`${f(L,"InfoCard").$$render(e,{},{},{})} <form class="input-form svelte-e5nmlf"${b("this",d,0)}><input type="text" placeholder="輸入關鍵字" class="svelte-e5nmlf"${b("value",A,0)}> <button type="submit" class="button svelte-e5nmlf" data-svelte-h="svelte-1jb2twj">搜尋</button></form>`}`}),Ae={code:".loader-container.svelte-nx5s04{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100px}.loader.svelte-nx5s04{width:48px;height:48px;border:5px solid #f3f3f3;border-top:5px solid #3498db;border-radius:50%;animation:svelte-nx5s04-spin 1s linear infinite}@keyframes svelte-nx5s04-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",map:`{"version":3,"file":"Loader.svelte","sources":["Loader.svelte"],"sourcesContent":["<script>\\n    const loadingWords = ['loading', 'loading.', 'loading..', 'loading...'];\\n    let loadingWord = loadingWords[0];\\n    let index = 1;\\n    const interval = setInterval(() => {\\n        loadingWord = loadingWords[index];\\n        index = (index + 1) % loadingWords.length;\\n    }, 500);\\n<\/script>\\n\\n<div class=\\"loader-container\\">\\n    <p>{loadingWord}</p>\\n    <div class=\\"loader\\"></div>\\n</div>\\n\\n<style>\\n    .loader-container {\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: center;\\n        align-items: center;\\n        min-height: 100px;\\n    }\\n\\n    .loader {\\n        width: 48px;\\n        height: 48px;\\n        border: 5px solid #f3f3f3;\\n        border-top: 5px solid #3498db;\\n        border-radius: 50%;\\n        animation: spin 1s linear infinite;\\n    }\\n\\n    @keyframes spin {\\n        0% {\\n        transform: rotate(0deg);\\n        }\\n        100% {\\n        transform: rotate(360deg);\\n        }\\n    }\\n</style>"],"names":[],"mappings":"AAgBI,+BAAkB,CACd,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,KAChB,CAEA,qBAAQ,CACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAC7B,aAAa,CAAE,GAAG,CAClB,SAAS,CAAE,kBAAI,CAAC,EAAE,CAAC,MAAM,CAAC,QAC9B,CAEA,WAAW,kBAAK,CACZ,EAAG,CACH,SAAS,CAAE,OAAO,IAAI,CACtB,CACA,IAAK,CACL,SAAS,CAAE,OAAO,MAAM,CACxB,CACJ"}`},U=u((e,n,t,r)=>{const A=["loading","loading.","loading..","loading..."];let s=A[0],a=1;return setInterval(()=>{s=A[a],a=(a+1)%A.length},500),e.css.add(Ae),`<div class="loader-container svelte-nx5s04"><p>${p(s)}</p> <div class="loader svelte-nx5s04"></div> </div>`}),oe={code:"footer.svelte-14s16xz{width:100vw;height:50px;background-color:black;color:white;display:flex;justify-content:center;align-items:center}",map:'{"version":3,"file":"Layout.svelte","sources":["Layout.svelte"],"sourcesContent":["<div id=\\"Pistachio-Announcement\\" bind:this={bannerContainer} style=\\"z-index: 100;\\"></div>\\n<div id=\\"navbar-placeholder\\" style=\\"min-height: 50px; z-index: 100;\\"></div>\\n<slot></slot>\\n<footer>\\n    2025 - 榛果繽紛樂\\n</footer>\\n\\n<style>\\n    footer {\\n        width: 100vw;\\n        height: 50px;\\n        background-color: black;\\n        color: white;\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n    }\\n</style>\\n\\n<script>\\n    import { onMount } from \\"svelte\\";\\n    let bannerContainer;\\n    let bannerContent = \\"\\"\\n    onMount(() => async () => {\\n        while (true){\\n            if (bannerContainer.innerHTML === \\"\\") {\\n                bannerContainer.innerHTML = bannerContent;\\n            } else {\\n                bannerContent = bannerContainer.innerHTML;\\n                console.log(bannerContent);\\n            }\\n        }\\n    });\\n<\/script>\\n"],"names":[],"mappings":"AAQI,qBAAO,CACH,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,KAAK,CACvB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACjB"}'},re=u((e,n,t,r)=>{let A;return e.css.add(oe),`<div id="Pistachio-Announcement" style="z-index: 100;"${b("this",A,0)}></div> <div id="navbar-placeholder" style="min-height: 50px; z-index: 100;"></div> ${r.default?r.default({}):""} <footer class="svelte-14s16xz" data-svelte-h="svelte-livmhd">2025 - 榛果繽紛樂
</footer>`}),se={code:".container.svelte-zppriv.svelte-zppriv{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;padding-top:20px;padding-bottom:20px}.title-box.svelte-zppriv.svelte-zppriv{display:flex;flex-direction:column;align-items:start;justify-content:center;margin-bottom:1rem;transition:transform 0.3s ease}.title.svelte-zppriv.svelte-zppriv{font-size:2.5rem;color:#2c3e50;margin:0;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.1)}.title-box.svelte-zppriv.svelte-zppriv:hover{transform:scale(1.05)}.subtitle.svelte-zppriv.svelte-zppriv{font-size:1.5rem;color:#0A0903;margin:0}.review-box.svelte-zppriv.svelte-zppriv{width:80%}.store-name.svelte-zppriv.svelte-zppriv{font-size:1.5rem}.review-table.svelte-zppriv.svelte-zppriv{border-collapse:collapse;width:100%;background-color:white;box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);border-radius:8px;overflow:hidden}.review-table.svelte-zppriv th.svelte-zppriv{background-color:#2c3e50;color:white;padding:12px 15px;text-align:left;font-weight:600}.review-table.svelte-zppriv td.svelte-zppriv{padding:12px 15px;border-bottom:1px solid #ddd}.review-table.svelte-zppriv tbody tr.svelte-zppriv:hover{background-color:#f5f5f5;transition:background-color 0.2s ease}.review-table.svelte-zppriv tbody tr:last-child td.svelte-zppriv{border-bottom:none}.review-table-box.svelte-zppriv.svelte-zppriv{width:100%;height:500px;overflow:auto;background-color:white;border-radius:8px;box-shadow:0 0 20px rgba(0, 0, 0, 0.1);padding:1rem}.review-table-box.svelte-zppriv.svelte-zppriv::-webkit-scrollbar{width:8px;height:8px}.review-table-box.svelte-zppriv.svelte-zppriv::-webkit-scrollbar-track{background:#f1f1f1;border-radius:4px}.review-table-box.svelte-zppriv.svelte-zppriv::-webkit-scrollbar-thumb{background:#888;border-radius:4px}.review-table-box.svelte-zppriv.svelte-zppriv::-webkit-scrollbar-thumb:hover{background:#555}.reset-button.svelte-zppriv.svelte-zppriv{height:50px;width:20%;min-width:200px;border-radius:15px;border:none;background-color:#0A0903;color:white;font-size:1rem;cursor:pointer;margin-bottom:1rem}.download-button.svelte-zppriv.svelte-zppriv{height:40px;width:20%;min-width:200px;border-radius:15px;border:none;background-color:#0A0903;color:white;font-size:1rem;cursor:pointer;margin-bottom:1rem}.button.svelte-zppriv.svelte-zppriv:hover{background-color:#f1f1f1;color:#0A0903}@keyframes svelte-zppriv-pop{0%{transform:scale(1)}50%{transform:scale(1.1)}100%{transform:scale(1)}}",map:`{"version":3,"file":"App.svelte","sources":["App.svelte"],"sourcesContent":["<script>\\n    import { onMount } from 'svelte';\\n    import InputCard from '../components/InputCard.svelte';\\n    import Loader from '../components/Loader.svelte';\\n    export let title;\\n    export let subtitle;\\n    const searchStoreUrl = \\"/api/search\\";\\n    const getReviewsUrl = \\"/api/reviews\\";\\n    let searchInputStr = '';\\n    let selectedStore = '';\\n    let pagesToFetch = 1;\\n    let storeData = [];\\n    let reviews = [];\\n\\n    let isLoading = false;\\n    const handleSearch = async() => {\\n        isLoading = true;\\n        console.log(searchInputStr);\\n        if (searchInputStr === \\"\\") {\\n            alert('請輸入搜尋關鍵字');\\n            isLoading = false;\\n            return;\\n        }\\n        try{\\n            const res = await fetch(searchStoreUrl+\`?storeName=\${searchInputStr}\`);\\n            if (!res.ok) {\\n                console.error('Error:', res.statusText);\\n                alert('無法取得搜尋結果');\\n                return;\\n            }\\n            storeData = await res.json();\\n            console.log(storeData);\\n        }catch(e){\\n            console.error(e);\\n            alert('無法取得搜尋結果');\\n        }finally {\\n            isLoading = false;\\n        }\\n    }\\n    const handleGetReview = async() => {\\n        isLoading = true;\\n        console.log(selectedStore);\\n        if (selectedStore === \\"\\") {\\n            alert('請選擇店家');\\n            isLoading = false;\\n            return;\\n        }\\n        try{\\n            const res = await fetch(getReviewsUrl+\`?storeID=\${selectedStore.ID}&pages=\${pagesToFetch}\`);\\n            if (!res.ok) {\\n                console.error('Error:', res.statusText);\\n                alert('無法取得評論');\\n                return;\\n            }\\n            reviews = await res.json();\\n            console.log(reviews);\\n        }catch(e){\\n            console.error(e);\\n            alert('無法取得評論');\\n        }finally {\\n            isLoading = false;\\n        }\\n    }\\n\\n    const download = (type) => {\\n        const a = document.createElement(\\"a\\");\\n        let url = \\"\\";\\n        switch (type) {\\n            case \\"csv\\":\\n                // 添加 BOM 標記\\n                const BOM = new Uint8Array([0xEF, 0xBB, 0xBF]);\\n                // 建立 CSV 內容，加入標題列\\n                const headers = Object.keys(reviews[0]).join(',');\\n                const rows = reviews.map(row => \\n                    Object.values(row)\\n                        .map(value => {\\n                            // 處理數值、字串中的特殊字元\\n                            if (typeof value === 'string') {\\n                                // 如果內容包含逗號、換行或雙引號，就用雙引號包起來\\n                                if (value.includes(',') || value.includes('\\\\n') || value.includes('\\"')) {\\n                                    return \`\\"\${value.replace(/\\"/g, '\\"\\"')}\\"\`;\\n                                }\\n                            }\\n                            return value;\\n                        })\\n                        .join(',')\\n                );\\n                const csvContent = headers + '\\\\n' + rows.join('\\\\n');\\n                \\n                // 合併 BOM 和 CSV 內容\\n                const csvBlob = new Blob([BOM, csvContent], { type: 'text/csv;charset=utf-8' });\\n                url = window.URL.createObjectURL(csvBlob);\\n                \\n                a.href = url;\\n                a.download = \`\${selectedStore.Name}.csv\`;\\n                a.click();\\n                break;\\n            case \\"json\\":\\n                const json = JSON.stringify(reviews, null, 2);\\n                const jsonBlob = new Blob([json], { type: 'application/json;charset=utf-8' });\\n                url = window.URL.createObjectURL(jsonBlob);\\n                a.href = url;\\n                a.download = \`\${selectedStore.Name}.json\`;\\n                a.click();\\n                break;\\n            default:\\n                break;\\n        }\\n        window.URL.revokeObjectURL(url);\\n    }\\n\\n    onMount(async () => {\\n        getNavbar();\\n    });\\n<\/script>\\n\\n<svelte:head>\\n    <title>{title} - 榛果繽紛樂</title>\\n</svelte:head>\\n\\n<div class=\\"container\\">\\n    <img src=\\"https://src.hazelnut-paradise.com/GooMapReviewSnatcher.png\\" alt=\\"GooMapReviewSnatcher\\" style=\\"width: 100%; max-width: 150px;\\"/>\\n    <div class=\\"title-box\\">\\n        <h1 class=\\"title\\">{title}</h1>\\n        <h2 class=\\"subtitle\\">{subtitle}</h2>\\n    </div>\\n    {#if isLoading}\\n        <Loader/>\\n    {:else if Object.keys(reviews).length == 0}\\n    <InputCard\\n        bind:pagesToFetch\\n        bind:searchInputStr\\n        bind:selectedStore\\n        {handleSearch}\\n        {handleGetReview}\\n        {storeData}\\n    />\\n    {:else}\\n    <button class=\\"reset-button button\\" on:click={()=> {\\n        searchInputStr = '';\\n        storeData = [];\\n        reviews = [];\\n    }}>查詢其他商家</button>\\n    <div class=\\"review-box\\">\\n        <h3 class=\\"store-name\\">{selectedStore.Name}</h3>\\n        <button class=\\"download-button button\\" on:click={() => download(\\"csv\\")}>下載 CSV</button>\\n        <button class=\\"download-button button\\" on:click={() => download(\\"json\\")}>下載 JSON</button>\\n        <div class=\\"review-table-box\\">\\n            <table class=\\"review-table\\">\\n                <thead>\\n                    <tr>\\n                    {#each Object.keys(reviews[0]) as key}\\n                        <th>{key}</th>\\n                    {/each}\\n                    </tr>\\n                </thead>\\n                <tbody>\\n                    {#each reviews as review}\\n                        <tr>\\n                            {#each Object.values(review) as value}\\n                                <td>{value}</td>\\n                            {/each}\\n                        </tr>\\n                    {/each}\\n                </tbody>\\n            </table>\\n        </div>\\n    </div>\\n    {/if}\\n</div>\\n\\n<style>\\n    .container {\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center;\\n        justify-content: center;\\n        min-height: 100vh;\\n        padding-top: 20px;\\n        padding-bottom: 20px;\\n        /* background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); */\\n    }\\n\\n    .title-box {\\n        display: flex;\\n        flex-direction: column;\\n        align-items: start;\\n        justify-content: center;\\n        margin-bottom: 1rem;\\n        transition: transform 0.3s ease;\\n    }\\n\\n    .title {\\n        font-size: 2.5rem;\\n        color: #2c3e50;\\n        margin: 0;\\n        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);\\n    }\\n\\n    .title-box:hover {\\n        transform: scale(1.05);\\n    }\\n\\n    .subtitle {\\n        font-size: 1.5rem;\\n        color: #0A0903;\\n        margin: 0;\\n    }\\n\\n    .review-box {\\n        width: 80%;\\n    }\\n\\n    .store-name {\\n        font-size: 1.5rem;\\n    }\\n\\n    .review-table {\\n        border-collapse: collapse;\\n        width: 100%;\\n        background-color: white;\\n        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\\n        border-radius: 8px;\\n        overflow: hidden;\\n    }\\n\\n    .review-table th {\\n        background-color: #2c3e50;\\n        color: white;\\n        padding: 12px 15px;\\n        text-align: left;\\n        font-weight: 600;\\n    }\\n\\n    .review-table td {\\n        padding: 12px 15px;\\n        border-bottom: 1px solid #ddd;\\n    }\\n\\n    .review-table tbody tr:hover {\\n        background-color: #f5f5f5;\\n        transition: background-color 0.2s ease;\\n    }\\n\\n    .review-table tbody tr:last-child td {\\n        border-bottom: none;\\n    }\\n\\n    .review-table-box {\\n        width: 100%;\\n        height: 500px;\\n        overflow: auto;\\n        background-color: white;\\n        border-radius: 8px;\\n        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\\n        padding: 1rem;\\n    }\\n\\n    /* 美化捲軸 */\\n    .review-table-box::-webkit-scrollbar {\\n        width: 8px;\\n        height: 8px;\\n    }\\n\\n    .review-table-box::-webkit-scrollbar-track {\\n        background: #f1f1f1;\\n        border-radius: 4px;\\n    }\\n\\n    .review-table-box::-webkit-scrollbar-thumb {\\n        background: #888;\\n        border-radius: 4px;\\n    }\\n\\n    .review-table-box::-webkit-scrollbar-thumb:hover {\\n        background: #555;\\n    }\\n\\n    .reset-button {\\n        height: 50px;\\n        width: 20%;\\n        min-width: 200px;\\n        border-radius: 15px;\\n        border: none;\\n        background-color: #0A0903;\\n        color: white;\\n        font-size: 1rem;\\n        cursor: pointer;\\n        margin-bottom: 1rem;\\n    }\\n\\n    .download-button {\\n        height: 40px;\\n        width: 20%;\\n        min-width: 200px;\\n        border-radius: 15px;\\n        border: none;\\n        background-color: #0A0903;\\n        color: white;\\n        font-size: 1rem;\\n        cursor: pointer;\\n        margin-bottom: 1rem;\\n    }\\n\\n    .button:hover {\\n        background-color: #f1f1f1;\\n        color: #0A0903;\\n    }\\n\\n    @keyframes pop {\\n        0% { transform: scale(1); }\\n        50% { transform: scale(1.1); }\\n        100% { transform: scale(1); }\\n    }\\n</style>\\n"],"names":[],"mappings":"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"}`},ae="/api/search",le="/api/reviews",ie=u((e,n,t,r)=>{let{title:A}=n,{subtitle:s}=n,a="",o="",c=1,l=[],d=[],i=!1;const v=async()=>{if(i=!0,console.log(a),a===""){alert("請輸入搜尋關鍵字"),i=!1;return}try{const C=await fetch(ae+`?storeName=${a}`);if(!C.ok){console.error("Error:",C.statusText),alert("無法取得搜尋結果");return}l=await C.json(),console.log(l)}catch(C){console.error(C),alert("無法取得搜尋結果")}finally{i=!1}},I=async()=>{if(i=!0,console.log(o),o===""){alert("請選擇店家"),i=!1;return}try{const C=await fetch(le+`?storeID=${o.ID}&pages=${c}`);if(!C.ok){console.error("Error:",C.statusText),alert("無法取得評論");return}d=await C.json(),console.log(d)}catch(C){console.error(C),alert("無法取得評論")}finally{i=!1}};n.title===void 0&&t.title&&A!==void 0&&t.title(A),n.subtitle===void 0&&t.subtitle&&s!==void 0&&t.subtitle(s),e.css.add(se);let m,S,W=e.head;do m=!0,e.head=W,S=`${e.head+=`<!-- HEAD_svelte-wrcujp_START -->${e.title=`<title>${p(A)} - 榛果繽紛樂</title>`,""}<!-- HEAD_svelte-wrcujp_END -->`,""} <div class="container svelte-zppriv"><img src="https://src.hazelnut-paradise.com/GooMapReviewSnatcher.png" alt="GooMapReviewSnatcher" style="width: 100%; max-width: 150px;"> <div class="title-box svelte-zppriv"><h1 class="title svelte-zppriv">${p(A)}</h1> <h2 class="subtitle svelte-zppriv">${p(s)}</h2></div> ${i?`${f(U,"Loader").$$render(e,{},{},{})}`:`${Object.keys(d).length==0?`${f(R,"InputCard").$$render(e,{handleSearch:v,handleGetReview:I,storeData:l,pagesToFetch:c,searchInputStr:a,selectedStore:o},{pagesToFetch:C=>{c=C,m=!1},searchInputStr:C=>{a=C,m=!1},selectedStore:C=>{o=C,m=!1}},{})}`:`<button class="reset-button button svelte-zppriv" data-svelte-h="svelte-gc4oaf">查詢其他商家</button> <div class="review-box svelte-zppriv"><h3 class="store-name svelte-zppriv">${p(o.Name)}</h3> <button class="download-button button svelte-zppriv" data-svelte-h="svelte-1cm302j">下載 CSV</button> <button class="download-button button svelte-zppriv" data-svelte-h="svelte-zkdu87">下載 JSON</button> <div class="review-table-box svelte-zppriv"><table class="review-table svelte-zppriv"><thead><tr class="svelte-zppriv">${x(Object.keys(d[0]),C=>`<th class="svelte-zppriv">${p(C)}</th>`)}</tr></thead> <tbody>${x(d,C=>`<tr class="svelte-zppriv">${x(Object.values(C),_=>`<td class="svelte-zppriv">${p(_)}</td>`)} </tr>`)}</tbody></table></div></div>`}`} </div>`;while(!m);return S}),Ce={code:"p.svelte-5zxcoy{white-space:pre-wrap}",map:'{"version":3,"file":"default-error.svelte","sources":["default-error.svelte"],"sourcesContent":["<script>\\n    /** @type {number} */\\n    export let status;\\n\\n    /** @type {string} */\\n    export let message;\\n<\/script>\\n\\n<h1>{status}</h1>\\n<p>{message}</p>\\n\\n<style>\\n    p {\\n        white-space: pre-wrap;\\n    }\\n</style>\\n"],"names":[],"mappings":"AAYI,eAAE,CACE,WAAW,CAAE,QACjB"}'},ce=u((e,n,t,r)=>{let{status:A}=n,{message:s}=n;return n.status===void 0&&t.status&&A!==void 0&&t.status(A),n.message===void 0&&t.message&&s!==void 0&&t.message(s),e.css.add(Ce),`<h1>${p(A)}</h1> <p class="svelte-5zxcoy">${p(s)}</p>`}),de=ee,pe="/golte_/entries/hydrate-CPt8Zl7a.js",M={"components/InfoCard":{server:L,Client:"/golte_/entries/InfoCard-BZknu_7p.js",CSS:["/golte_/assets/InfoCard-3z19lYhA.css"]},"components/InputCard":{server:R,Client:"/golte_/entries/InputCard-BeFi93F1.js",CSS:["/golte_/assets/InputCard-Bp3zFdIY.css","/golte_/assets/InfoCard-3z19lYhA.css"]},"components/Loader":{server:U,Client:"/golte_/entries/Loader-Cd-iapTC.js",CSS:["/golte_/assets/Loader-BbdzO3D6.css"]},"layouts/Layout":{server:re,Client:"/golte_/entries/Layout-BsNs5wTR.js",CSS:["/golte_/assets/Layout-BX7EiMRL.css"]},"pages/App":{server:ie,Client:"/golte_/entries/App-DoxRsS63.js",CSS:["/golte_/assets/App-SqoAxoe_.css","/golte_/assets/InputCard-Bp3zFdIY.css","/golte_/assets/InfoCard-3z19lYhA.css","/golte_/assets/Loader-BbdzO3D6.css"]},$$$GOLTE_DEFAULT_ERROR$$$:{server:ce,Client:"/golte_/entries/default-error-B19OOPLr.js",CSS:["/golte_/assets/default-error-jCKc6TVQ.css"]}};function ue(e,n,t){const r=[],A=[],s=new Set,a=M[t];if(!a)throw new Error(`"${t}" is not a component`);for(const i of e){const v=M[i.Comp];if(!v)throw new Error(`"${i.Comp}" is not a component`);r.push({comp:v.server,props:i.Props,errPage:a.server}),A.push({comp:`${v.Client}`,props:i.Props,errPage:`${a.Client}`});for(const I of v.CSS)s.add(I)}for(const i of a.CSS)s.add(i);let o;const c=new Map;c.set(k,i=>o=i);let{html:l,head:d}=de.render({nodes:r,contextData:n},{context:c});for(const i of s)d+=`
<link href="${i}" rel="stylesheet">`;return o&&(A[o.index].ssrError=o.props),l+=`
        <script>
            (async function () {
                const target = document.currentScript.parentElement;
                const { hydrate } = await import("${pe}");
                await hydrate(target, ${z(A)}, ${z(n)});
            })();
        <\/script>
    `,{Head:d,Body:l,HasError:!!o}}function z(e){return JSON.stringify(e).replace("<\/script>","<\\/script>")}exports.Manifest=M;exports.Render=ue;

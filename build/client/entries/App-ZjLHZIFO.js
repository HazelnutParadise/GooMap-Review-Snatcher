import{S as te,i as se,s as ne,d as j,t as O,b as B,r as P,e as re,h as Q,u as y,D as oe,v as D,E as W,F as ae,z as C,w as T,x as q,y as X,C as A,A as E,B as Y,q as le,o as ce,a as z,m as V,j as J,f as K,G as U,H as F,I as L,g as ie}from"../chunks/index-BtOapRR_.js";import ue from"./InputCard-Bz9AB6hQ.js";import fe from"./Loader-Cd00ZqkO.js";import pe from"./Result-DEFzValN.js";import"../chunks/each-D6YF6ztN.js";import"./InfoCard-DITffwXq.js";import"./Redirecting-CznNsw3q.js";const de=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,{document:H}=de;function _e(n){let e,t,s;function i(r){n[16](r)}let p={selectedStore:n[3],download:n[11],handleReset:n[8]};return n[6]!==void 0&&(p.reviews=n[6]),e=new pe({props:p}),U.push(()=>F(e,"reviews",i)),{c(){K(e.$$.fragment)},l(r){J(e.$$.fragment,r)},m(r,c){V(e,r,c),s=!0},p(r,c){const u={};c&8&&(u.selectedStore=r[3]),!t&&c&64&&(t=!0,u.reviews=r[6],L(()=>t=!1)),e.$set(u)},i(r){s||(B(e.$$.fragment,r),s=!0)},o(r){O(e.$$.fragment,r),s=!1},d(r){z(e,r)}}}function he(n){let e,t,s,i,p,r;function c(a){n[12](a)}function u(a){n[13](a)}function d(a){n[14](a)}function m(a){n[15](a)}let _={handleSearch:n[9],handleGetReview:n[10]};return n[2]!==void 0&&(_.searchInputStr=n[2]),n[3]!==void 0&&(_.selectedStore=n[3]),n[5]!==void 0&&(_.storeData=n[5]),n[4]!==void 0&&(_.pagesToFetch=n[4]),e=new ue({props:_}),U.push(()=>F(e,"searchInputStr",c)),U.push(()=>F(e,"selectedStore",u)),U.push(()=>F(e,"storeData",d)),U.push(()=>F(e,"pagesToFetch",m)),{c(){K(e.$$.fragment)},l(a){J(e.$$.fragment,a)},m(a,b){V(e,a,b),r=!0},p(a,b){const w={};!t&&b&4&&(t=!0,w.searchInputStr=a[2],L(()=>t=!1)),!s&&b&8&&(s=!0,w.selectedStore=a[3],L(()=>s=!1)),!i&&b&32&&(i=!0,w.storeData=a[5],L(()=>i=!1)),!p&&b&16&&(p=!0,w.pagesToFetch=a[4],L(()=>p=!1)),e.$set(w)},i(a){r||(B(e.$$.fragment,a),r=!0)},o(a){O(e.$$.fragment,a),r=!1},d(a){z(e,a)}}}function ge(n){let e,t;return e=new fe({}),{c(){K(e.$$.fragment)},l(s){J(e.$$.fragment,s)},m(s,i){V(e,s,i),t=!0},p:ce,i(s){t||(B(e.$$.fragment,s),t=!0)},o(s){O(e.$$.fragment,s),t=!1},d(s){z(e,s)}}}function me(n){let e,t,s,i,p,r,c,u,d,m,_,a,b,w,h,g,v;H.title=e=n[0]+" - 榛果繽紛樂";const G=[ge,he,_e],S=[];function o(l,f){return f&64&&(w=null),l[7]?0:(w==null&&(w=Object.keys(l[6]).length==0),w?1:2)}return h=o(n,-1),g=S[h]=G[h](n),{c(){t=A(),s=E("div"),i=E("img"),r=A(),c=E("div"),u=E("h1"),d=Y(n[0]),m=A(),_=E("h2"),a=Y(n[1]),b=A(),g.c(),this.h()},l(l){ae("svelte-1kuv545",H.head).forEach(j),t=C(l),s=T(l,"DIV",{class:!0});var k=q(s);i=T(k,"IMG",{src:!0,alt:!0,style:!0}),r=C(k),c=T(k,"DIV",{class:!0});var I=q(c);u=T(I,"H1",{class:!0});var M=q(u);d=X(M,n[0]),M.forEach(j),m=C(I),_=T(I,"H2",{class:!0});var N=q(_);a=X(N,n[1]),N.forEach(j),I.forEach(j),b=C(k),g.l(k),k.forEach(j),this.h()},h(){oe(i.src,p="https://src.hazelnut-paradise.com/GooMapReviewSnatcher.png")||D(i,"src",p),D(i,"alt","GooMapReviewSnatcher"),W(i,"width","100%"),W(i,"max-width","150px"),D(u,"class","title svelte-fc3bky"),D(_,"class","subtitle svelte-fc3bky"),D(c,"class","title-box svelte-fc3bky"),D(s,"class","container svelte-fc3bky")},m(l,f){Q(l,t,f),Q(l,s,f),y(s,i),y(s,r),y(s,c),y(c,u),y(u,d),y(c,m),y(c,_),y(_,a),y(s,b),S[h].m(s,null),v=!0},p(l,[f]){(!v||f&1)&&e!==(e=l[0]+" - 榛果繽紛樂")&&(H.title=e),(!v||f&1)&&P(d,l[0]),(!v||f&2)&&P(a,l[1]);let k=h;h=o(l,f),h===k?S[h].p(l,f):(ie(),O(S[k],1,1,()=>{S[k]=null}),re(),g=S[h],g?g.p(l,f):(g=S[h]=G[h](l),g.c()),B(g,1),g.m(s,null))},i(l){v||(B(g),v=!0)},o(l){O(g),v=!1},d(l){l&&(j(t),j(s)),S[h].d()}}}const be="/api/search",we="/api/reviews";function ke(n,e,t){let{title:s}=e,{subtitle:i}=e,p="",r="",c=1,u=[],d=[],m=!1;const _=()=>{t(2,p=""),t(3,r=""),t(4,c=1),t(5,u=[]),t(6,d=[])},a=async()=>{if(t(7,m=!0),console.log(p),p===""){alert("請輸入搜尋關鍵字"),t(7,m=!1);return}try{const o=await fetch(be+`?storeName=${p}`);if(!o.ok){console.error("Error:",o.statusText),alert("無法取得搜尋結果");return}t(5,u=await o.json()),console.log(u)}catch(o){console.error(o),alert("無法取得搜尋結果")}finally{t(7,m=!1)}},b=async()=>{if(t(7,m=!0),console.log(r),r===""){alert("請選擇店家"),t(7,m=!1);return}try{const o=await fetch(we+`?storeID=${r.ID}&pages=${c}`);if(!o.ok){console.error("Error:",o.statusText),alert("無法取得評論");return}t(6,d=await o.json()),console.log(d)}catch(o){console.error(o),alert("無法取得評論")}finally{t(7,m=!1)}},w=o=>{const l=document.createElement("a");let f="";switch(o){case"csv":const k=new Uint8Array([239,187,191]),I=Object.keys(d[0]).join(","),M=d.map(ee=>Object.values(ee).map(R=>typeof R=="string"&&(R.includes(",")||R.includes(`
`)||R.includes('"'))?`"${R.replace(/"/g,'""')}"`:R).join(",")),N=I+`
`+M.join(`
`),Z=new Blob([k,N],{type:"text/csv;charset=utf-8"});f=window.URL.createObjectURL(Z),l.href=f,l.download=`${r.Name}.csv`,l.click();break;case"json":const $=JSON.stringify(d,null,2),x=new Blob([$],{type:"application/json;charset=utf-8"});f=window.URL.createObjectURL(x),l.href=f,l.download=`${r.Name}.json`,l.click();break}window.URL.revokeObjectURL(f)};le(async()=>{getNavbar()});function h(o){p=o,t(2,p)}function g(o){r=o,t(3,r)}function v(o){u=o,t(5,u)}function G(o){c=o,t(4,c)}function S(o){d=o,t(6,d)}return n.$$set=o=>{"title"in o&&t(0,s=o.title),"subtitle"in o&&t(1,i=o.subtitle)},[s,i,p,r,c,u,d,m,_,a,b,w,h,g,v,G,S]}class Te extends te{constructor(e){super(),se(this,e,ke,me,ne,{title:0,subtitle:1})}}export{Te as default};

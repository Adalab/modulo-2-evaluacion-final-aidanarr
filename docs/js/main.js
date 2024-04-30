const k=document.querySelector(".js_searchInput"),v=document.querySelector(".js_searchBtn"),h=document.querySelector(".js_resetBtn"),D=document.querySelector(".js_deleteFavs"),d=document.querySelector(".js_searchResults"),c=document.querySelector(".js_faveList");let r=[],i=[];const f=JSON.parse(localStorage.getItem("fave drinks"));f!==null&&(i=f);function u(e){return`<li id="${e.idDrink}">
    <p class="li-title">${e.strDrink}</p>
    <div class="delete js_deleteBtn" id="${e.idDrink}" >x</div>
    <img src="${e.strDrinkThumb}">
    </li>`}function a(){c.innerHTML="";for(let e of i)c.innerHTML+=u(e);L()}function p(e){let n=e.currentTarget.id;const t=i.findIndex(l=>l.idDrink===n);i.splice(t,1),a(),o(r),localStorage.setItem("fave drinks",JSON.stringify(i))}function L(){let e=document.querySelectorAll(".js_deleteBtn");for(let n of e)n.addEventListener("click",p)}function g(e){let n=e.currentTarget.id;const t=r.find(s=>s.idDrink===n),l=i.findIndex(s=>s.idDrink===n);l===-1?i.push(t):i.splice(l,1),c.innerHTML="";for(let s of i)c.innerHTML+=u(s);o(r),a(),localStorage.setItem("fave drinks",JSON.stringify(i))}a();function m(e){e.preventDefault(),i=[],localStorage.clear(),c.innerHTML="",o(r)}D.addEventListener("click",m);function S(e){let n="",t="";return t=i.findIndex(s=>s.idDrink===e.idDrink)===-1?"":"fave",e.strDrinkThumb!==null?n=`<li class="js_li" id="${e.idDrink}">
        <p class="li-title ${t}">${e.strDrink}</p>
        <img class="${t}" src="${e.strDrinkThumb}">
      </li>`:n=`<li class="js_li" id="${e.idDrink}">
        <p class="li-title ${t}">${e.strDrink}</p>
        <img class="${t}" src="/images/placeholder.jpg">
      </li>`,n}function o(e){d.innerHTML="";for(let t of e)d.innerHTML+=S(t);const n=d.childNodes;for(const t of n)t.addEventListener("click",g)}function I(e){e.preventDefault();const n=k.value.toLowerCase();T(n)}function j(e){e.preventDefault(),d.innerHTML="",r=[]}function T(e){fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+e.toLowerCase()).then(n=>n.json()).then(n=>{r=n.drinks,o(r)})}v.addEventListener("click",I);h.addEventListener("click",j);
//# sourceMappingURL=main.js.map

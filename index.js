import{a as q,S as x,i}from"./assets/vendor-BjRz3xa9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();q.defaults.baseURL="https://pixabay.com/api/";async function S(t,o={}){const r={key:"49159303-69e39ecdcc21e97a7866413fa",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,...o};try{return(await q.get("",{params:r})).data}catch(n){throw n}}let d;function E(){return d=new x(".gallery a",{captions:!0,captionsData:"alt",captionType:"attr",captionDelay:250,animationSpeed:350,captionPosition:"bottom"}),d.on("show.simplelightbox",function(){}),d.on("error.simplelightbox",function(t){console.log(t)}),d}function M(t){const{webformatURL:o,largeImageURL:r,tags:n,likes:e,views:a,comments:l,downloads:R}=t;return`<li class="gallery-item">
          <a href="${r}">
            <img src="${o}" alt="${n}" />
          </a>
          <div class="img-info">
            <div>
              <p class="info-name">Likes</p>
              <p class="info-data">${e}</p>
            </div>
            <div>
              <p class="info-name">Views</p>
              <p class="info-data">${a}</p>
            </div>
            <div>
              <p class="info-name">Comments</p>
              <p class="info-data">${l}</p>
            </div>
            <div>
              <p class="info-name">Downloads</p>
              <p class="info-data">${R}</p>
            </div>
          </div>
        </li>`}function H(t,o,r){o.innerHTML=t.map(M).join(""),r&&typeof r.refresh=="function"&&r.refresh()}const O=document.querySelector(".form"),v=document.querySelector(".js-input"),s=document.querySelector(".gallery"),f=document.querySelector(".initial-loader"),L=document.querySelector(".aditional-loader"),y=document.querySelector(".load-more-btn"),C=E();let P="",c=1,p=0,b=0;function $(t){t.classList.remove("visually-hidden")}function m(t){t.classList.add("visually-hidden")}function g(){y.classList.remove("visually-hidden")}function u(){y.classList.add("visually-hidden")}const h={message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight"},T={message:"Enter your search request!",messageColor:"#000",backgroundColor:"#f5c386",position:"topRight"},w={message:"We're sorry, but you've reached the end of search results.",messageColor:"#000",backgroundColor:"#78afe0",position:"topRight"};O.addEventListener("submit",async t=>{t.preventDefault();const o=v.value.trim();if(o===""){s.innerHTML="",m(f),u(),i.warning(T);return}P=o,c=1,s.innerHTML="",u(),$(f);try{const r=await S(o,{page:c}),n=r.hits;if(n.length===0){i.error(h),u();return}H(n,s,C),b=n.length,p=Math.ceil(r.totalHits/b),c<p&&g()}catch(r){i.error(h),console.log("Error request:",r)}finally{m(f),v.value=""}});y.addEventListener("click",async()=>{c+=1,u(),$(L);try{const o=(await S(P,{page:c})).hits;if(o.length===0){i.info(w);return}const r=o.map(a=>M(a)).join("");s.insertAdjacentHTML("beforeend",r),C.refresh();const{height:n}=s.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:n*2,behavior:"smooth"});const e=s.querySelectorAll(".gallery-item").length;if(c>=p){i.info(w);return}g()}catch(t){i.error(h),console.log("Error loading more:",t),g()}finally{m(L)}});
//# sourceMappingURL=index.js.map

import{S as u,a as f,i as d}from"./assets/vendor-DlV5MTJP.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const c=new u(".gallery a",{captionsData:"alt",captionDelay:250});function m(e){const r=document.querySelector(".gallery");if(!r)return;const o=e.map(a=>`<li class="gallery-item">
       <figure class="gallery-figure">
  <a class="gallery-link" href="${a.largeImageURL}">
    <img
      class="gallery-image"
      src="${a.webformatURL}"
      alt="${a.tags}"
    />
  </a>
   <figcaption class="gallery-info">
      <ul class="gallery-stats">
        <li class='stats-item'><span class='social-info'>Likes</span> <span>${a.likes}</span> </li>
        <li class='stats-item'><span class='social-info'>Views</span> <span>${a.views}</span></li>
        <li class='stats-item'><span class='social-info'>Comments</span> <span>${a.comments}</span></li>
        <li class='stats-item'><span class='social-info'>Downloads</span> <span>${a.downloads}</span></li>
      </ul>
    </figcaption>
   </figure>
</li>`).join("");r.insertAdjacentHTML("beforeend",o),c.refresh()}function p(){const e=document.querySelector(".gallery");e&&(e.innerHTML="",c.refresh())}function y(){const e=document.querySelector(".load");e.hidden=!1,e.classList.add("loader")}function g(){const e=document.querySelector(".load");e.hidden=!0,e.classList.remove("loader")}const h="https://pixabay.com/api/",L="52758797-16c779dc2baa00e6d4d028fc2";function S(e){const r={key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(`${h}`,{params:r}).then(o=>o).catch(o=>o)}document.querySelector(".container");const b=document.querySelector(".form"),i=document.querySelector(".form-text");let l="";b.addEventListener("submit",e=>{e.preventDefault(),y(),l=i.value.trim().toLowerCase(),p(),l&&(S(l).then(r=>{if(r.data.hits.length===0)return d.warning({backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",iconUrl:iconOctagongit,closeOnEscape:!0});const o=r.data.hits;m(o)}).catch(r=>{console.error("Виникла помилка:",r)}).finally(g),i.value="")});
//# sourceMappingURL=index.js.map

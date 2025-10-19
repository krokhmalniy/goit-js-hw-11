import{S as u,a as f,i as d}from"./assets/vendor-DlV5MTJP.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const c=new u(".gallery a",{captionsData:"alt",captionDelay:250});function m(e){const r=document.querySelector(".gallery");if(!r)return;const s=e.map(a=>`<li class="gallery-item">
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
        <li><span class='social-info'>Likes</span> ${a.likes}</li>
        <li><span class='social-info'>Views</span> ${a.views}</li>
        <li><span class='social-info'>Comments</span> ${a.comments}</li>
        <li><span class='social-info'>Downloads</span> ${a.downloads}</li>
      </ul>
    </figcaption>
   </figure>
</li>`).join("");r.insertAdjacentHTML("beforeend",s),c.refresh()}function y(){const e=document.querySelector(".gallery");e&&(e.innerHTML="",c.refresh())}function p(){const e=document.querySelector(".load");e.hidden=!1,e.classList.add("loader")}function g(){const e=document.querySelector(".load");e.hidden=!0,e.classList.remove("loader")}const h="https://pixabay.com/api/",L="52758797-16c779dc2baa00e6d4d028fc2";function S(e){const r={key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(`${h}`,{params:r}).then(s=>s).catch(s=>s)}document.querySelector(".container");const b=document.querySelector(".form"),i=document.querySelector(".form-text");let l="";b.addEventListener("submit",e=>{e.preventDefault(),p(),l=i.value.trim().toLowerCase(),y(),l&&(S(l).then(r=>{if(r.data.hits.length===0)return d.warning({message:"Sorry, there are no images matching your search query. Please try again!"});const s=r.data.hits;m(s)}).catch(r=>{console.error("Виникла помилка:",r)}).finally(g),i.value="")});
//# sourceMappingURL=index.js.map

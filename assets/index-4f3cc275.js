(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu-btn"),r=document.querySelectorAll(".js-close-menu"),e=()=>{const t=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!t),n.classList.toggle("is-open"),o.classList.toggle("is-close"),s.classList.toggle("is-close")};o.addEventListener("click",e),s.addEventListener("click",e),r.forEach(t=>t.addEventListener("click",e)),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(n.classList.remove("is-open"),s.classList.add("is-close"),o.classList.remove("is-close"),o.setAttribute("aria-expanded",!1))})})();(()=>{const n={openModalBtn:document.querySelectorAll(".data-modal-open"),closeModalBtn:document.querySelector(".data-modal-close"),modal:document.querySelector(".data-modal")};n.openModalBtn.forEach(s=>s.addEventListener("click",o)),n.closeModalBtn.addEventListener("click",o);function o(){n.modal.classList.toggle("is-hidden")}})();

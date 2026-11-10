(function(){
var K="theme",R=document.documentElement,M=window.matchMedia("(prefers-color-scheme: dark)");
function saved(){try{return localStorage.getItem(K)}catch(e){return null}}
function pick(){return saved()||(M.matches?"dark":"light")}
function apply(t){R.setAttribute("data-theme",t);var b=document.querySelector(".theme-toggle");if(b)b.setAttribute("aria-pressed",String(t==="dark"))}
apply(pick());
document.addEventListener("DOMContentLoaded",function(){
var b=document.querySelector(".theme-toggle");apply(pick());
if(b)b.addEventListener("click",function(){
var t=R.getAttribute("data-theme")==="dark"?"light":"dark";
try{localStorage.setItem(K,t)}catch(e){}apply(t)})});
if(M.addEventListener)M.addEventListener("change",function(e){if(!saved())apply(e.matches?"dark":"light")});
})();

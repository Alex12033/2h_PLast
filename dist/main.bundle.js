(()=>{var e,t,n,o,r,c,l,s={546:(e,t,n)=>{n(145),e.exports=function(){var e=document.querySelector(".scroll-to-top"),t=document.querySelector("#about-us"),n=document.querySelector(".contact-form");console.log(n),window.addEventListener("scroll",(function(){window.pageYOffset>"1000"?e.style.display="block":e.style.display="none"})),e.addEventListener("click",(function(){window.scrollTo({top:1,behavior:"smooth"})})),t.addEventListener("click",(function(e){e.preventDefault(),n.scrollIntoView({behavior:"smooth",block:"center"})}))}},122:(e,t,n)=>{n(98),e.exports=function(){var e=document.querySelector(".toggle-button"),t=document.querySelector(".mobile-nav"),n=document.querySelector(".mobile-nav__close"),o=document.querySelector(".mobile-nav__backdrop");e.addEventListener("click",(function(){t.style.display="flex",o.style.display="block"})),n.addEventListener("click",(function(){t.classList.add("hide-back"),setTimeout((function(){t.classList.remove("hide-back"),t.style.display="none",o.style.display="none"}),1e3)}))}},871:(e,t,n)=>{n(782),e.exports=function(){var e=document.querySelectorAll("[data-modal]"),t=document.querySelector(".modal");function n(){t.classList.add("show"),t.classList.remove("hide"),document.body.style.overflow="hidden",clearInterval(r)}function o(){t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}e.forEach((function(e){e.addEventListener("click",n)})),t.addEventListener("click",(function(e){e.target!==t&&""!=e.target.getAttribute("data-close")||o()})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&t.classList.contains("show")&&o()}));var r=setTimeout(n,5e3);window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(n(),window.removeEventListener("scroll",e))}))}},522:(e,t,n)=>{n(270);var o=new Date("Sep 01 2022 00:00:00");function r(){var e=new Date;gap=o-e;var t=Math.floor(gap/1e3/60/60/24),n=Math.floor(gap/1e3/60/60)%24,r=Math.floor(gap/1e3/60)%60,c=Math.floor(gap/1e3)%60;gap<0&&(t+=14,n+=24,r+=60,c+=60),document.getElementById("d").innerText=t,document.getElementById("h").innerText=n,document.getElementById("m").innerText=r,document.getElementById("s").innerText=c}r(),setInterval(r,1e3),e.exports=r},323:(e,t,n)=>{n(951);var o=document.querySelectorAll(".gallery__slider"),r=document.querySelectorAll(".project-gallery-card");e.exports=function(){var e=1;function t(){r.forEach((function(e){e.addEventListener("touchstart",s,!1)})),r.forEach((function(e){e.addEventListener("touchmove",a,!1)}))}function n(t){var n,o=document.getElementsByClassName("project-gallery-card"),r=document.getElementsByClassName("gallery__slider-item");for(t>o.length&&(e=1),t<1&&(e=o.length),n=0;n<o.length;n++)o[n].style.display="none";for(n=0;n<r.length;n++)r[n].className=r[n].className.replace("active","");o[e-1].style.display="block",r[e-1].className+=" active"}window.innerWidth<800&&(n(e),t()),window.addEventListener("resize",(function(){window.innerWidth<800?(n(e),t()):(!function(){var e=document.getElementsByClassName("project-gallery-card");for(i=0;i<e.length;i++)e[i].style.display="block"}(),r.forEach((function(e){e.removeEventListener("touchstart",a,!1)})),r.forEach((function(e){e.removeEventListener("touchmove",a,!1)})))})),o.forEach((function(t){t.addEventListener("click",(function(t){n(e=t.target.id)}))}));var c=null,l=null;function s(e){var t=e.touches[0];c=t.clientX,l=t.clientY}function a(t){if(!c||!l)return!1;var o=t.touches[0].clientX,r=t.touches[0].clientY,i=o-c,s=r-l;Math.abs(i)>Math.abs(s)&&n(i>0?e-=1:e+=1),c=null,l=null}}},149:(e,t,n)=>{n(745);var o=document.querySelectorAll(".next"),r=document.querySelectorAll(".prev"),c=document.querySelectorAll(".reviews__slider");e.exports=function(){var e=1;function t(t){var n,o=document.getElementsByClassName("rewievs"),r=document.getElementsByClassName("reviews__slider-item");for(t>o.length&&(e=1),t<1&&(e=o.length),n=0;n<o.length;n++)o[n].style.display="none";for(n=0;n<r.length;n++)o[e-1].style.display="block"}t(e),o.forEach((function(n){n.addEventListener("click",(function(){t(e+=1)}))})),r.forEach((function(n){n.addEventListener("click",(function(){t(e-=1)}))})),c.forEach((function(n){n.addEventListener("click",(function(n){t(e=n.target.id)}))}));var n=document.querySelectorAll(".rewievs");n.forEach((function(e){e.addEventListener("touchstart",s,!1)})),n.forEach((function(e){e.addEventListener("touchmove",a,!1)}));var l=null,i=null;function s(e){var t=e.touches[0];l=t.clientX,i=t.clientY}function a(n){if(!l||!i)return!1;var o=n.touches[0].clientX,r=n.touches[0].clientY,c=o-l,s=r-i;Math.abs(c)>Math.abs(s)&&t(c>0?e-=1:e+=1),l=null,i=null}}},629:(e,t,n)=>{n(417),n(877),n(322),n(71),n(402),n(11),n(555),n(951),n(745),e.exports=function(){var e=document.querySelector(".tabs-variants"),t=document.querySelector("#comercial"),n=document.querySelector("#residential"),o=document.querySelector("#industrial"),r=document.querySelector(".comercial"),c=document.querySelector(".residential"),l=document.querySelector(".industrial");function i(e){document.querySelector(e).classList.remove("extractor-tabs")}e.addEventListener("click",(function(e){console.log(e.target.className),"comercial__tab-identify"!==e.target.id&&"comercial-image-btn"!==e.target.className&&"comercial-text-btn"!==e.target.className||(r.classList.add("extractor-tabs"),i(".residential"),i(".industrial"),o.style.display="none",n.style.display="none",t.style.display="flex"),"residential__tab-identify"!==e.target.id&&"residential-image-btn"!==e.target.className&&"residential-text-btn"!==e.target.className||(c.classList.add("extractor-tabs"),i(".comercial"),i(".industrial"),o.style.display="none",t.style.display="none",n.style.display="flex"),"industrial__tab-identify"!==e.target.id&&"industrial-image-btn"!==e.target.className&&"industrial-text-btn"!==e.target.className||(l.classList.add("extractor-tabs"),i(".comercial"),i(".residential"),t.style.display="none",n.style.display="none",o.style.display="flex")}))}},145:(e,t,n)=>{"use strict";n.r(t)},98:(e,t,n)=>{"use strict";n.r(t)},745:(e,t,n)=>{"use strict";n.r(t)},322:(e,t,n)=>{"use strict";n.r(t)},11:(e,t,n)=>{"use strict";n.r(t)},877:(e,t,n)=>{"use strict";n.r(t)},417:(e,t,n)=>{"use strict";n.r(t)},71:(e,t,n)=>{"use strict";n.r(t)},782:(e,t,n)=>{"use strict";n.r(t)},270:(e,t,n)=>{"use strict";n.r(t)},402:(e,t,n)=>{"use strict";n.r(t)},951:(e,t,n)=>{"use strict";n.r(t)},555:(e,t,n)=>{"use strict";n.r(t)}},a={};function d(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return s[e](n,n.exports,d),n.exports}d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=d(629),t=d(122),n=d(522),o=d(871),r=d(149),c=d(546),l=d(323),c(),e(),t(),n(),o(),r(),l()})();
//# sourceMappingURL=main.bundle.js.map
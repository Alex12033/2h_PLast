(()=>{var e={115:(e,t,n)=>{n(718),e.exports=function(){var e=document.querySelector(".toggle-button"),t=document.querySelector(".mobile-nav"),n=document.querySelector(".mobile-nav__close"),o=document.querySelector(".mobile-nav__backdrop");function r(e){e.addEventListener("click",(function(){t.classList.add("hide-back"),setTimeout((function(){t.classList.remove("hide-back"),t.style.display="none",o.style.display="none"}),1e3)}))}e.addEventListener("click",(function(){t.style.display="flex",o.style.display="block"})),r(n),r(o)}},450:(e,t,n)=>{n(993);var o=n(115);n(993),n(212),n(454),n(718),n(549),n(708),o();var r=document.querySelector(".confirm-button"),a=document.querySelector(".loader"),s=document.querySelectorAll("input"),c=document.querySelector(".what-want-client");e.exports=function(){function e(e){var t=document.querySelector(".msg-for-user");t.style.display="flex",t.innerHTML+="".concat(e," <br><br>"),setTimeout((function(){t.style.display="none",t.innerHTML=""}),4e3)}r.addEventListener("click",(function(t){t.preventDefault(),a.style.display="block";var n,o,r={};s.forEach((function(e){var t=e.name,n=e.value;r[t]=n})),""===r.name||""===r.email||""===r.phone||!1==(o=r.email,!!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(o)||(e("Введіть правільну пошту"),!1))||!1==(!(!1===(n=r.phone)||!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(n))||(e("Введіть правильний номер"),!1))?(e("Заповніть усі поля корректно"),a.style.display="none"):setTimeout((function(){Email.send({Host:"smtp.elasticemail.com",Username:"aleksandrignashov42@gmail.com",Password:"DB964427927B5971C90B0BFCEDB9191FBFA5",To:"aleksandrignashov42@gmail.com",From:"aleksandrignashov42@gmail.com",Subject:"Інформація про кліента",Body:"Інформація від кліента: ім'я ".concat(r.name,", пошта: ").concat(r.email,", телефон: ").concat(r.phone,", примітки від кліента: ").concat(""===c.value?"немає":c.value)}).then((function(t){"OK"===t?(a.style.display="none",e("Ми з вами зв'яжемося найближчим часом")):(a.style.display="none",e("Щось пішло не так! Ми скоро це виправимо."))}))}),2e3)}))}},718:(e,t,n)=>{"use strict";n.r(t)},212:(e,t,n)=>{"use strict";n.r(t)},993:(e,t,n)=>{"use strict";n.r(t)},708:(e,t,n)=>{"use strict";n.r(t)},454:(e,t,n)=>{"use strict";n.r(t)},549:(e,t,n)=>{"use strict";n.r(t)}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(450)()})();
(()=>{var t,e,n,s,a,o,r,c,l,u,d={546:(t,e,n)=>{n(103),t.exports=function(){var t=document.querySelector(".scroll-to-top"),e=document.querySelector(".contact-form"),n=document.querySelector(".services-btn"),i=document.querySelector(".our-services"),s=document.querySelectorAll(".view-more"),a=document.querySelectorAll(".tab-button"),o=document.querySelector(".question-btn");window.addEventListener("scroll",(function(){window.pageYOffset>"1000"?t.style.display="block":t.style.display="none"})),t.addEventListener("click",(function(t){t.preventDefault(),window.scrollTo({top:1,behavior:"smooth"})})),n.addEventListener("click",(function(t){t.preventDefault(),i.scrollIntoView({behavior:"smooth",block:"center"})})),s.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),e.scrollIntoView({behavior:"smooth",block:"center"})}))})),a.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),e.scrollIntoView({behavior:"smooth",block:"center"})}))})),o.addEventListener("click",(function(t){t.preventDefault(),e.scrollIntoView({behavior:"smooth",block:"center"})}))}},122:(t,e,n)=>{n(98),t.exports=function(){var t=document.querySelector(".toggle-button"),e=document.querySelector(".mobile-nav"),n=document.querySelector(".mobile-nav__close"),i=document.querySelector(".mobile-nav__backdrop");function s(t){t.addEventListener("click",(function(){e.classList.add("hide-back"),setTimeout((function(){e.classList.remove("hide-back"),e.style.display="none",i.style.display="none"}),1e3)}))}t.addEventListener("click",(function(){e.style.display="flex",i.style.display="block"})),s(n),s(i)}},337:(t,e,n)=>{function i(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n(379),t.exports=function(){var t=function(){function t(e,n){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._el="string"==typeof e?document.querySelector(e):e,this._elWrapper=this._el.querySelector(".".concat(this.constructor.EL_WRAPPER)),this._elItems=this._el.querySelector(".".concat(this.constructor.EL_ITEMS)),this._elListItem=this._el.querySelectorAll(".".concat(this.constructor.EL_ITEM)),this._exOrderMin=0,this._exOrderMax=0,this._exItemMin=null,this._exItemMax=null,this._exTranslateMin=0,this._exTranslateMax=0,this._states=[],this._isBalancing=!1,this._direction="next",this._transform=0,this._clientRect=this._elWrapper.getBoundingClientRect(),this._supportResizeObserver=void 0!==window.ResizeObserver;var s=window.getComputedStyle(this._elItems);if(this._delay=Math.round(50*parseFloat(s.transitionDuration)),this._hasSwipeState=!1,this._swipeStartPosX=0,this._intervalId=null,this._config=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({loop:!0,autoplay:!1,interval:5e3,indicators:!0,swipe:!0},n),this._elItems.dataset.translate="0",this._elListItem.forEach((function(t,e){t.dataset.order="".concat(e),t.dataset.index="".concat(e),t.dataset.translate="0",i._states.push(0===e?1:0)})),this._config.loop){var o=this._elListItem.length-1,c=-this._elListItem.length;this._elListItem[o].dataset.order="-1",this._elListItem[o].dataset.translate="".concat(-this._elListItem.length);var l=c*this._clientRect.width;this._elListItem[o].style.transform="translate3D(".concat(l,"px, 0px, 0.1px)")}this._addIndicators(),this._elListIndicator=document.querySelectorAll(".".concat(this.constructor.EL_INDICATOR)),this._updateExProperties(),this._changeActiveItems(),this._addEventListener(),this._autoplay()}var e,n,s;return e=t,n=[{key:"_changeActiveItems",value:function(){var t=this;this._states.forEach((function(e,n){e?t._elListItem[n].classList.add(t.constructor.EL_ITEM_ACTIVE):t._elListItem[n].classList.remove(t.constructor.EL_ITEM_ACTIVE),t._elListIndicator.length&&e?t._elListIndicator[n].classList.add(t.constructor.EL_INDICATOR_ACTIVE):t._elListIndicator.length&&!e&&t._elListIndicator[n].classList.remove(t.constructor.EL_INDICATOR_ACTIVE)})),this._el.dispatchEvent(new CustomEvent("change.itc.slider",{bubbles:!0}))}},{key:"_move",value:function(){if(this._elItems.classList.remove(this.constructor.TRANSITION_NONE),"none"!==this._direction){if(!this._config.loop){var t=this._states[0]&&"prev"===this._direction,e=this._states[this._states.length-1]&&"next"===this._direction;if(t||e)return void this._autoplay("stop")}this._transform+="next"===this._direction?-1:1,"next"===this._direction?this._states=[].concat(i(this._states.slice(-1)),i(this._states.slice(0,-1))):"prev"===this._direction&&(this._states=[].concat(i(this._states.slice(1)),i(this._states.slice(0,1)))),this._elItems.dataset.translate=this._transform;var n=this._transform*this._clientRect.width;this._elItems.style.transform="translate3D(".concat(n,"px, 0px, 0.1px)"),this._elItems.dispatchEvent(new CustomEvent("moving.itc.slider",{bubbles:!0})),this._changeActiveItems(),this._isBalancing||(this._isBalancing=!0,window.requestAnimationFrame(this._balanceItems.bind(this)))}else{var s=this._transform*this._clientRect.width;this._elItems.style.transform="translate3D(".concat(s,"px, 0px, 0.1px)")}}},{key:"_moveTo",value:function(t){var e=this._states.indexOf(1);this._direction=t>e?"next":"prev";for(var n=0;n<Math.abs(t-e);n++)this._move()}},{key:"_autoplay",value:function(t){var e=this;if(this._config.autoplay)return"stop"===t?(clearInterval(this._intervalId),void(this._intervalId=null)):void(null===this._intervalId&&(this._intervalId=setInterval((function(){e._direction="next",e._move()}),this._config.interval)))}},{key:"_addIndicators",value:function(){if(!this._el.querySelector(".".concat(this.constructor.EL_INDICATORS))&&this._config.indicators){for(var t="",e=0,n=this._elListItem.length;e<n;e++)t+='<li class="'.concat(this.constructor.EL_INDICATOR,'" data-slide-to="').concat(e,'"></li>');var i='<ol class="'.concat(this.constructor.EL_INDICATORS,'">').concat(t,"</ol>");this._el.insertAdjacentHTML("beforeend",i)}}},{key:"_updateExProperties",value:function(){var t=Object.values(this._elListItem).map((function(t){return t})),e=t.map((function(t){return Number(t.dataset.order)}));this._exOrderMin=Math.min.apply(Math,i(e)),this._exOrderMax=Math.max.apply(Math,i(e));var n=e.indexOf(this._exOrderMin),s=e.indexOf(this._exOrderMax);this._exItemMin=t[n],this._exItemMax=t[s],this._exTranslateMin=Number(this._exItemMin.dataset.translate),this._exTranslateMax=Number(this._exItemMax.dataset.translate)}},{key:"_balanceItems",value:function(){var t=this;if(this._isBalancing){if("next"===this._direction){if(this._exItemMin.getBoundingClientRect().right<this._clientRect.left-this._clientRect.width/2){this._exItemMin.dataset.order="".concat(this._exOrderMin+this._elListItem.length),this._exItemMin.dataset.translate="".concat(this._exTranslateMin+this._elListItem.length);var e=(this._exTranslateMin+this._elListItem.length)*this._clientRect.width;this._exItemMin.style.transform="translate3D(".concat(e,"px, 0px, 0.1px)"),this._updateExProperties()}}else if(this._exItemMax.getBoundingClientRect().left>this._clientRect.right+this._clientRect.width/2){this._exItemMax.dataset.order="".concat(this._exOrderMax-this._elListItem.length),this._exItemMax.dataset.translate="".concat(this._exTranslateMax-this._elListItem.length);var n=(this._exTranslateMax-this._elListItem.length)*this._clientRect.width;this._exItemMax.style.transform="translate3D(".concat(n,"px, 0px, 0.1px)"),this._updateExProperties()}window.setTimeout((function(){window.requestAnimationFrame(t._balanceItems.bind(t))}),this._delay)}}},{key:"_addEventListener",value:function(){var t=this,e=function(e){if(t._autoplay("stop"),!e.target.closest(".".concat(t.constructor.EL_CONTROL))){var n=0===e.type.search("touch")?e.touches[0]:e;t._swipeStartPosX=n.clientX,t._swipeStartPosY=n.clientY,t._hasSwipeState=!0,t._hasSwiping=!1}},n=function(e){if(t._hasSwipeState){var n=0===e.type.search("touch")?e.touches[0]:e,i=t._swipeStartPosX-n.clientX,s=t._swipeStartPosY-n.clientY;if(!t._hasSwiping){if(Math.abs(s)>Math.abs(i)||0===Math.abs(i))return void(t._hasSwipeState=!1);t._hasSwiping=!0}if(e.preventDefault(),!t._config.loop){var a=t._states[0]&&i<=0,o=t._states[t._states.length-1]&&i>=0;(a||o)&&(i/=4)}t._elItems.classList.add(t.constructor.TRANSITION_NONE);var r=t._transform*t._clientRect.width-i;t._elItems.style.transform="translate3D(".concat(r,"px, 0px, 0.1px)")}},i=function(e){if(t._hasSwipeState){var n=0===e.type.search("touch")?e.changedTouches[0]:e,i=t._swipeStartPosX-n.clientX;if(0!==i){if(!t._config.loop){var s=t._states[0]&&i<=0,a=t._states[t._states.length-1]&&i>=0;(s||a)&&(i=0)}var o=i/t._clientRect.width*100;t._elItems.classList.remove(t.constructor.TRANSITION_NONE),o>t.constructor.SWIPE_THRESHOLD?(t._direction="next",t._move()):o<-t.constructor.SWIPE_THRESHOLD?(t._direction="prev",t._move()):(t._direction="none",t._move()),t._hasSwipeState=!1,t._autoplay()}else t._hasSwipeState=!1}};if(this._el.addEventListener("click",(function(e){var n=e.target;if(t._autoplay("stop"),n.classList.contains(t.constructor.EL_CONTROL))e.preventDefault(),t._direction=n.dataset.slide,t._move();else if(n.dataset.slideTo){e.preventDefault();var i=parseInt(n.dataset.slideTo,10);t._moveTo(i)}t._autoplay()})),this._config.loop&&this._elItems.addEventListener("transitionend",(function(){t._isBalancing=!1})),this._config.swipe){var s=!!this.constructor.checkSupportPassiveEvents()&&{passive:!1};this._el.addEventListener("touchstart",e,s),this._el.addEventListener("touchmove",n,s),this._el.addEventListener("mousedown",e),this._el.addEventListener("mousemove",n),document.addEventListener("touchend",i),document.addEventListener("mouseup",i),document.addEventListener("mouseout",i)}this._el.addEventListener("dragstart",(function(t){t.preventDefault()})),document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState&&t._config.loop?t._autoplay():t._autoplay("stop")})),this._supportResizeObserver&&new ResizeObserver((function(e){var n=e[0].contentRect;if(Math.round(10*t._clientRect.width)!==Math.round(10*n.width)){t._clientRect=n;var i=n.width*Number(t._elItems.dataset.translate);t.reset(i,!0),t._autoplay()}})).observe(this._elWrapper)}},{key:"reset",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this._autoplay("stop"),this._elItems.classList.add(this.constructor.TRANSITION_NONE),this._elItems.style.transform="translate3D(".concat(e,"px, 0px, 0.1px)"),this._elListItem.forEach((function(e){var i=n?Number(e.dataset.translate)*t._clientRect.width:0;e.style.transform="translate3D(".concat(i,"px, 0px, 0.1px)")})),!n){if(this._transform=0,this._states=[],this._elItems.dataset.translate="0",this._elListItem=this._el.querySelectorAll(".".concat(this.constructor.EL_ITEM)),this._elListItem.forEach((function(e,n){e.dataset.order="".concat(n),e.dataset.index="".concat(n),e.dataset.translate="0",t._states.push(0===n?1:0)})),this._config.loop){var i=this._elListItem.length-1,s=-this._elListItem.length;this._elListItem[i].dataset.order="-1",this._elListItem[i].dataset.translate="".concat(-this._elListItem.length);var a=s*this._clientRect.width;this._elListItem[i].style.transform="translate3D(".concat(a,"px, 0px, 0.1px)")}this._el.querySelector(".".concat(this.constructor.EL_INDICATORS)).remove(),this._addIndicators(),this._elListIndicator=document.querySelectorAll(".".concat(this.constructor.EL_INDICATOR)),this._updateExProperties(),this._changeActiveItems()}this._autoplay()}},{key:"next",value:function(){this._direction="next",this._move()}},{key:"prev",value:function(){this._direction="prev",this._move()}},{key:"autoplay",value:function(){this._autoplay("stop")}},{key:"moveTo",value:function(t){this._moveTo(t)}}],s=[{key:"checkSupportPassiveEvents",value:function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveListener",null,e),window.removeEventListener("testPassiveListener",null,e)}catch(e){t=!1}return t}}],n&&o(e.prototype,n),s&&o(e,s),Object.defineProperty(e,"prototype",{writable:!1}),t}();r(t,"PREFIX","itcss"),r(t,"EL_WRAPPER","".concat(t.PREFIX,"__wrapper")),r(t,"EL_ITEM","".concat(t.PREFIX,"__item")),r(t,"EL_ITEM_ACTIVE","".concat(t.PREFIX,"__item_active")),r(t,"EL_ITEMS","".concat(t.PREFIX,"__items")),r(t,"EL_INDICATOR","".concat(t.PREFIX,"__indicator")),r(t,"EL_INDICATOR_ACTIVE","".concat(t.PREFIX,"__indicator_active")),r(t,"EL_INDICATORS","".concat(t.PREFIX,"__indicators")),r(t,"EL_CONTROL","".concat(t.PREFIX,"__btn")),r(t,"SWIPE_THRESHOLD",20),r(t,"TRANSITION_NONE","transition-none"),new t(".itcss",{loop:!0,autoplay:!0,interval:7e3,swipe:!1})}},383:t=>{var e=document.querySelector(".confirm-button"),n=document.querySelector(".loader"),i=document.querySelectorAll("input"),s=document.querySelector(".what-want-client");t.exports=function(){function t(t){var e=document.querySelector(".msg-for-user");e.style.display="flex",e.innerHTML+="".concat(t," <br><br>"),setTimeout((function(){e.style.display="none",e.innerHTML=""}),4e3)}e.addEventListener("click",(function(e){e.preventDefault(),n.style.display="block";var a,o,r={};i.forEach((function(t){var e=t.name,n=t.value;r[e]=n})),""===r.name||""===r.email||""===r.phone||!1==(o=r.email,!!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(o)||(t("Введіть правільну пошту"),!1))||!1==(!(!1===(a=r.phone)||!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(a))||(t("Введіть правильний номер"),!1))?(t("Заповніть усі поля корректно"),n.style.display="none"):setTimeout((function(){Email.send({Host:"smtp.elasticemail.com",Username:"aleksandrignashov42@gmail.com",Password:"DB964427927B5971C90B0BFCEDB9191FBFA5",To:"aleksandrignashov42@gmail.com",From:"aleksandrignashov42@gmail.com",Subject:"Інформація про кліента",Body:"Інформація від кліента: ім'я ".concat(r.name,", пошта: ").concat(r.email,", телефон: ").concat(r.phone,", примітки від кліента: ").concat(""===s.value?"немає":s.value)}).then((function(e){"OK"===e?(n.style.display="none",t("Ми з вами зв'яжемося найближчим часом")):(n.style.display="none",t("Щось пішло не так! Ми скоро це виправимо."))}))}),2e3)}))}},595:t=>{var e=document.querySelector(".modal__btn"),n=(document.querySelector(".modal"),document.querySelector(".loader-modal")),i=document.querySelectorAll("input");t.exports=function(){function t(t){var e=document.querySelector(".msg-for-user-modal");e.style.display="flex",e.innerHTML+="".concat(t," <br><br>"),setTimeout((function(){e.style.display="none",e.innerHTML=""}),4e3)}e.addEventListener("click",(function(e){e.preventDefault(),n.style.display="block";var s,a,o={};i.forEach((function(t){var e=t.name,n=t.value;o[e]=n})),console.log(o["email-modal"],o["phone-modal"]),""===o["name-modal"]||""===o["email-modal"]||""===o["phone-modal"]||!1==(a=o["email-modal"],console.log(a),!!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)||(t("Введіть правільну пошту"),!1))||!1==(s=o["phone-modal"],console.log(s),!(!1===s||!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(s))||(t("Введіть правильний номер"),!1))?(t("Заповніть усі поля корректно"),n.style.display="none"):setTimeout((function(){Email.send({Host:"smtp.elasticemail.com",Username:"aleksandrignashov42@gmail.com",Password:"DB964427927B5971C90B0BFCEDB9191FBFA5",To:"aleksandrignashov42@gmail.com",From:"aleksandrignashov42@gmail.com",Subject:"Інформація про кліента",Body:"Інформація від кліента: ім'я ".concat(o["name-modal"],", пошта: ").concat(o["email-modal"],", телефон: ").concat(o["phone-modal"])}).then((function(e){"OK"===e?(n.style.display="none",t("Ми з вами зв'яжемося найближчим часом")):(n.style.display="none",t("Щось пішло не так! Ми скоро це виправимо."))}))}),2e3)}))}},871:(t,e,n)=>{n(782),t.exports=function(){var t=document.querySelectorAll("[data-modal]"),e=document.querySelector(".modal");function n(){e.classList.add("show"),e.classList.remove("hide"),document.body.style.overflow="hidden",clearInterval(s)}function i(){e.classList.add("hide"),e.classList.remove("show"),document.body.style.overflow=""}t.forEach((function(t){t.addEventListener("click",n)})),e.addEventListener("click",(function(t){t.target!==e&&""!=t.target.getAttribute("data-close")||i()})),document.addEventListener("keydown",(function(t){"Escape"===t.code&&e.classList.contains("show")&&i()}));var s=setTimeout(n,5e3);window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(n(),window.removeEventListener("scroll",t))}))}},522:(t,e,n)=>{n(270);var i=new Date("Sep 28 2022 15:09:00");function s(){var t=new Date,e=i-t,n=Math.floor(e/1e3/60/60/24),s=Math.floor(e/1e3/60/60)%24,a=Math.floor(e/1e3/60)%60,o=Math.floor(e/1e3)%60;(0===e||e<300)&&i.setDate(i.getDate()+6),document.getElementById("d").innerText=n,document.getElementById("h").innerText=s,document.getElementById("m").innerText=a,document.getElementById("s").innerText=o}s(),setInterval(s,1e3),t.exports=s},145:(t,e,n)=>{n(745);var i=document.querySelectorAll(".next"),s=document.querySelectorAll(".prev"),a=document.querySelectorAll(".reviews__slider");t.exports=function(){var t=1;function e(e){var n,i=document.getElementsByClassName("rewievs"),s=document.getElementsByClassName("reviews__slider-item");for(e>i.length&&(t=1),e<1&&(t=i.length),n=0;n<i.length;n++)i[n].style.display="none";for(n=0;n<s.length;n++)i[t-1].style.display="block"}e(t),i.forEach((function(n){n.addEventListener("click",(function(){e(t+=1)}))})),s.forEach((function(n){n.addEventListener("click",(function(){e(t-=1)}))})),a.forEach((function(n){n.addEventListener("click",(function(n){e(t=n.target.id)}))}));var n=document.querySelectorAll(".rewievs");n.forEach((function(t){t.addEventListener("touchstart",c,!1)})),n.forEach((function(t){t.addEventListener("touchmove",l,!1)}));var o=null,r=null;function c(t){var e=t.touches[0];o=e.clientX,r=e.clientY}function l(n){if(!o||!r)return!1;var i=n.touches[0].clientX,s=n.touches[0].clientY,a=i-o,c=s-r;Math.abs(a)>Math.abs(c)&&e(a>0?t-=1:t+=1),o=null,r=null}}},691:(t,e,n)=>{n(616),t.exports=function(){AOS.init({disable:"phone",startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:90,delay:1.5,duration:800,easing:"ease-in-out",once:!0,mirror:!1,anchorPlacement:"top-bottom"})}},323:(t,e,n)=>{n(951);var s=document.querySelector(".next-gallery"),a=document.querySelector(".prev-gallery"),o=document.querySelectorAll(".gallery__slider"),r=document.querySelectorAll(".project-gallery-card");t.exports=function(){var t=1;function e(){r.forEach((function(t){t.addEventListener("touchstart",u,!1)})),r.forEach((function(t){t.addEventListener("touchmove",d,!1)}))}function n(e){var n,i=document.getElementsByClassName("project-gallery-card"),s=document.getElementsByClassName("gallery__slider-item");for(e>i.length&&(t=1),e<1&&(t=i.length),n=0;n<i.length;n++)i[n].style.display="none";for(n=0;n<s.length;n++)s[n].className=s[n].className.replace("active","");i[t-1].style.display="block",s[t-1].className+=" active"}s.addEventListener("click",(function(){n(t+=1)})),a.addEventListener("click",(function(){n(t-=1)})),window.innerWidth<800&&(n(t),e()),window.addEventListener("resize",(function(){window.innerWidth<800?(n(t),e()):(!function(){var t=document.getElementsByClassName("project-gallery-card");for(i=0;i<t.length;i++)t[i].style.display="block"}(),r.forEach((function(t){t.removeEventListener("touchstart",d,!1)})),r.forEach((function(t){t.removeEventListener("touchmove",d,!1)})))})),o.forEach((function(e){e.addEventListener("click",(function(e){n(t=e.target.id)}))}));var c=null,l=null;function u(t){var e=t.touches[0];c=e.clientX,l=e.clientY}function d(e){if(!c||!l)return!1;var i=e.touches[0].clientX,s=e.touches[0].clientY,a=i-c,o=s-l;Math.abs(a)>Math.abs(o)&&n(a>0?t-=1:t+=1),c=null,l=null}}},629:(t,e,n)=>{n(417),n(877),n(322),n(71),n(402),n(11),n(555),n(951),n(745),t.exports=function(){var t=document.querySelector(".tabs-variants"),e=(document.querySelector("#comercial"),document.querySelector("#residential")),n=document.querySelector("#industrial"),i=(document.querySelector(".comercial"),document.querySelector(".residential")),s=document.querySelector(".industrial");function a(t){document.querySelector(t).classList.remove("extractor-tabs")}t.addEventListener("click",(function(t){console.log(t.target.className),"residential__tab-identify"!==t.target.id&&"residential-image-btn"!==t.target.className&&"residential-text-btn"!==t.target.className||(i.classList.add("extractor-tabs"),a(".industrial"),n.style.display="none",e.style.display="flex"),"industrial__tab-identify"!==t.target.id&&"industrial-image-btn"!==t.target.className&&"industrial-text-btn"!==t.target.className||(s.classList.add("extractor-tabs"),a(".residential"),e.style.display="none",n.style.display="flex")}))}},103:(t,e,n)=>{"use strict";n.r(e)},98:(t,e,n)=>{"use strict";n.r(e)},745:(t,e,n)=>{"use strict";n.r(e)},322:(t,e,n)=>{"use strict";n.r(e)},11:(t,e,n)=>{"use strict";n.r(e)},379:(t,e,n)=>{"use strict";n.r(e)},877:(t,e,n)=>{"use strict";n.r(e)},417:(t,e,n)=>{"use strict";n.r(e)},71:(t,e,n)=>{"use strict";n.r(e)},782:(t,e,n)=>{"use strict";n.r(e)},270:(t,e,n)=>{"use strict";n.r(e)},402:(t,e,n)=>{"use strict";n.r(e)},951:(t,e,n)=>{"use strict";n.r(e)},555:(t,e,n)=>{"use strict";n.r(e)},616:(t,e,n)=>{"use strict";n.r(e)}},h={};function m(t){var e=h[t];if(void 0!==e)return e.exports;var n=h[t]={exports:{}};return d[t](n,n.exports,m),n.exports}m.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t=m(629),e=m(122),n=m(522),s=m(871),a=m(145),o=m(546),r=m(383),c=m(595),l=m(323),u=m(337),m(691)(),n(),s(),c(),r(),o(),t(),e(),a(),l(),u()})();
(()=>{var e={122:(e,t,r)=>{r(98),e.exports=function(){var e=document.querySelector(".toggle-button"),t=document.querySelector(".mobile-nav"),r=document.querySelector(".mobile-nav__close"),n=document.querySelector(".mobile-nav__backdrop");e.addEventListener("click",(function(){t.style.display="flex",n.style.display="block"})),r.addEventListener("click",(function(){t.classList.add("hide-back"),setTimeout((function(){t.classList.remove("hide-back"),t.style.display="none",n.style.display="none"}),1e3)}))}},718:e=>{function t(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){s=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw a}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}e.exports=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var a=r,c=function(){function e(t){n(this,e),this.product=t}return o(e,[{key:"render",value:function(){var e=document.createElement("li");return e.className="product-item",e.innerHTML='\n                  <div class="product-item__div">\n                  <h2>'.concat(this.product.title,'</h2>\n                      <img src="').concat(this.product.imageUrl,'" alt="').concat(this.product.title,'">\n                      <div class="product-item__content">\n                      <p>').concat(this.product.descrition,"</p>\n                      <button>Дізнатись більше</button>\n                      </div>\n                  </div>\n                  "),e}}]),e}(),s=function(){function e(){n(this,e)}return o(e,[{key:"render",value:function(){var e=document.querySelector(".assortment__all"),r=document.createElement("ul");r.className="product-list";var n,i=t(a);try{for(i.s();!(n=i.n()).done;){var o=n.value,s=new c(o).render();r.append(s)}}catch(e){i.e(e)}finally{i.f()}e.append(r)}}]),e}(),u=new s;u.render()}},769:(e,t,r)=>{function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var o=r(718),a=r(122);r(577),r(877),r(98),r(417),r(11),e.exports=function(){var e=i((function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.title=t,this.imageUrl=r,this.descrition=n}));o(new e("Поліпропіленове завантаження 2Н ТКР","../src/assets/img_categories/water-purification-and-treatment/1.jpg","Завантаження 2Н ТКР із профілей пресованого поліпропілену для реакторів з нерухомим слоєм із високою та низькою концентрацією"),new e("Завантаження 2H KVP-623 з вертикальними водостоками","../src/assets/img_categories/water-purification-and-treatment/2.png","Завантаження з вертикальною структурою каналів відзначається надзвичайною міцністю. Вертикальні канали дозволяють зменшити відкладення на поверхні блока"),new e("Сітчасте завантаження 2H NET-150","../src/assets/img_categories/water-purification-and-treatment/3.jpg","Використання завантаження 2Н NET-150 дозволяє значно підвищити продуктивність зануреного нерухомого шару, а також стабілізувати анаеробні та аеробні процеси в комунальних і промислових стічних водах"),new e("Вільноплаваюче поліпропіленове завантаження BCN","../src/assets/img_categories/water-purification-and-treatment/4.jpg","Вільноплаваюче завантаження із зовнішнім активним шаром є ефективним способом очищення води від аміаку, амонію і нітритів (процеси нітрифікації / денітрифікації)"),new e("Коалісцентний фільтр 2Н FAР","../src/assets/img_categories/water-purification-and-treatment/5.jpg","Завантаження для сепараторів та коалісцентних фільтрів для сепарації жирів 2H FAP має універсальну структуру каналів із спеціальною поверхнею завдяки якій емульсії, масла і жири відділяються з високою ефективністю"),new e("Ламельні тонкошарові модулі 2H TUBEdek для очистки питної води та стічних вод","../src/assets/img_categories/water-purification-and-treatment/6.png","2H TUBEdek виготовляється з каналами різної форми, висоти і нахилу для забезпечення оптимального рішення"),new e("Завантаження 2H KLP-638","../src/assets/img_categories/water-purification-and-treatment/7.jpg","Особливість 2H KLP-638 – це можливість пристосування завантаження до форми резервуара"))},a()},98:(e,t,r)=>{"use strict";r.r(t)},577:(e,t,r)=>{"use strict";r.r(t)},11:(e,t,r)=>{"use strict";r.r(t)},877:(e,t,r)=>{"use strict";r.r(t)},417:(e,t,r)=>{"use strict";r.r(t)}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(769)()})();
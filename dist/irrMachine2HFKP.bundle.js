/*! For license information please see irrMachine2HFKP.bundle.js.LICENSE.txt */
(()=>{var __webpack_modules__={"./src/components/burger_menu.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval("__webpack_require__(/*! ../scss/burger-menu.scss */ \"./src/scss/burger-menu.scss\");\n\nfunction burgerMenu() {\n  var burgerBtn = document.querySelector('.toggle-button');\n  var mobileNav = document.querySelector('.mobile-nav');\n  var closedMobileNav = document.querySelector('.mobile-nav__close');\n  var burgerBackdrop = document.querySelector('.mobile-nav__backdrop');\n  burgerBtn.addEventListener('click', function () {\n    mobileNav.style.display = 'flex';\n    burgerBackdrop.style.display = 'block';\n  });\n  closedMobileNav.addEventListener('click', function () {\n    mobileNav.classList.add('hide-back');\n    setTimeout(function () {\n      mobileNav.classList.remove('hide-back');\n      mobileNav.style.display = 'none';\n      burgerBackdrop.style.display = 'none';\n    }, 1000);\n  });\n}\n\nmodule.exports = burgerMenu;\n\n//# sourceURL=webpack://2h.plast/./src/components/burger_menu.js?")},"./src/components/categories/cards-descr.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{eval('var burgerMenu = __webpack_require__(/*! ../burger_menu */ "./src/components/burger_menu.js");\n\n__webpack_require__(/*! ../../scss/categories-cards-pages.scss */ "./src/scss/categories-cards-pages.scss");\n\n__webpack_require__(/*! ../../scss/header.scss */ "./src/scss/header.scss");\n\n__webpack_require__(/*! ../../scss/burger-menu.scss */ "./src/scss/burger-menu.scss");\n\n__webpack_require__(/*! ../../scss/index.scss */ "./src/scss/index.scss");\n\n__webpack_require__(/*! ../../scss/footer.scss */ "./src/scss/footer.scss");\n\n__webpack_require__(/*! ../../scss/cards-descr.scss */ "./src/scss/cards-descr.scss");\n\nburgerMenu();\n\n//# sourceURL=webpack://2h.plast/./src/components/categories/cards-descr.js?')},"./src/scss/burger-menu.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://2h.plast/./src/scss/burger-menu.scss?")},"./src/scss/cards-descr.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://2h.plast/./src/scss/cards-descr.scss?")},"./src/scss/categories-cards-pages.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://2h.plast/./src/scss/categories-cards-pages.scss?")},"./src/scss/footer.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://2h.plast/./src/scss/footer.scss?")},"./src/scss/header.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://2h.plast/./src/scss/header.scss?")},"./src/scss/index.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://2h.plast/./src/scss/index.scss?")}},__webpack_module_cache__={};function __webpack_require__(e){var s=__webpack_module_cache__[e];if(void 0!==s)return s.exports;var _=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](_,_.exports,__webpack_require__),_.exports}__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/components/categories/cards-descr.js")})();
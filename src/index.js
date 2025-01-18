let component = require('./components/tabs');

let burgerMenu = require('./components/burger_menu');

// let timer = require('./components/modal-window/timer');

// let modal = require('./components/modal-window/modal');

let reviewSlider = require('./components/reviewSlider');

let autoScroll = require('./components/auto-scroll');

let mailer = require('./components/mailer-forms');

let modalMailer = require('./components/modal-window/modal-mailer');

let sliderGalery = require('./components/slider-galery');

let headerSlider = require('./components/header-slider');

let scrollMagic = require('./components/scroll-magic');

scrollMagic();
// timer();
// modal();
modalMailer();
mailer();
autoScroll();
component();
burgerMenu();
reviewSlider();
sliderGalery();
headerSlider();
let component = require('./components/tabs');
let burgerMenu = require('./components/burger_menu');
let timer = require('./components/modal-window/timer');
let modal = require('./components/modal-window/modal');
let slider = require('./components/slider');
let autoScroll = require('./components/auto-scroll');
let mailer = require('./components/mailer-forms');
let modalMailer = require('./components/modal-window/modal-mailer');
let sliderGalery = require('./components/slider-galery');
let headerSlider = require('./components/header-slider');


modalMailer();
mailer();
autoScroll();
component();
burgerMenu();
timer();
modal();
slider();
sliderGalery();
headerSlider();

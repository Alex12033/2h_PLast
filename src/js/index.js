let component = require('Components/tabs');
let burgerMenu = require('Components/burger_menu');
let timer = require('Components/modal-window/timer');
let modal = require('Components/modal-window/modal');
let slider = require('Components/slider');
let sliderGalery = require('Components/slider-galery');
let autoScroll = require('Components/auto-scroll');
let mailer = require('Components/mailer-forms');
let modalMailer = require('Components/modal-window/modal-mailer');

modalMailer();
mailer();
autoScroll();
component();
burgerMenu();
timer();
modal();
slider();
sliderGalery();
let component = require('./components/tabs');
let burgerMenu = require('./components/burger_menu');
let timer = require('./components/modal-window/timer');
let modal = require('./components/modal-window/modal');
let slider = require('./components/slider');
let autoScroll = require('./components/auto-scroll');

autoScroll();
component();
burgerMenu();
timer();
modal();
slider();

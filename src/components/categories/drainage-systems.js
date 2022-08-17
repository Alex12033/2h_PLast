let fncProductList = require('./product-list');
let burgerMenu = require('../burger_menu');
require('../../scss/drainage-systems.scss');
require('../../scss/header.scss');
require('../../scss/burger-menu.scss');
require('../../scss/index.scss');
require('../../scss/footer.scss')

function fncDrainageSystems() {
  class Product {
    constructor(title, image, descr) {
      this.title = title;
      this.imageUrl = image;
      this.descrition = descr;
    }
  }

  fncProductList(
    new Product(
      'Дренажні блоки GEOdek/WBOX',
      '../src/assets/img_categories/drainage-systems/1.png',
      '2Н WBOX – це поліпропіленові завантаження  для ретенційних і дренажних резервуарів'
    )
  );
}

module.exports = fncDrainageSystems;
burgerMenu();

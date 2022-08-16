let fncProductList = require('./product-list');
let burgerMenu = require('../burger_menu');
require('../../scss/drainage-systems.scss');
require('../../scss/header.scss');
require('../../scss/burger-menu.scss');
require('../../scss/index.scss');

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
      'Наповнення дренажного дренажу - AquaBox WDR',
      '../src/assets/img_categories/drainage-systems/1.jpg',
      'Засипка використовується для аеробного очищення стічних вод'
    )
  );
}

module.exports = fncDrainageSystems;
burgerMenu();

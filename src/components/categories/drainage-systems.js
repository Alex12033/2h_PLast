let fncProductList = require('./product-list');
require('../../scss/drainage-systems.scss');

function fncDrainageSystems() {
  class Product {
    constructor(title, image, descr) {
      this.title = title;
      this.imageUrl = image;
      this.descrition = descr;
    }
  }
  
  fncProductList(new Product(
    'Наповнення дренажного дренажу - AquaBox WDR',
    '../src/assets/img_categories/drainage-systems/1.jpg',
    'Засыпка используется для аэробной очистки сточных вод'));
}

module.exports = fncDrainageSystems;
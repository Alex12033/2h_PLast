let fncProductList = require('./product-list');
let burgerMenu = require('../burger_menu');
require('../../scss/categories-cards-pages.scss');
require('../../scss/header.scss');
require('../../scss/burger-menu.scss');
require('../../scss/index.scss');
require('../../scss/footer.scss');

function fncDrainageSystems() {
  class Product {
    constructor(title, image, descr, path) {
      this.title = title;
      this.imageUrl = image;
      this.descrition = descr;
      this.path = path;
    }
  }

  fncProductList(
    new Product(
      'Дренажні блоки GEOdek/WBOX',
      '../src/assets/img_categories/drainage-systems/1.png',
      '2Н WBOX – це поліпропіленові завантаження  для ретенційних і дренажних резервуарів',
      './blocksWBOX.html'
    ),
    new Product(
      'Блочне завантаження 2Н ТКР-312',
      '../src/assets/img_categories/water-purification-and-treatment/1.png',
      'Завантаження 2Н ТКР із профілей пресованого поліпропілену для рибного господарства та біологічної очистки води',
      './block2HTKR.html'
    ),
    new Product(
        'Сітчасте завантаження 2H NET-150',
        '../src/assets/img_categories/industrial-water-cooling/3.png',
        'Використання завантаження 2Н NET-150 дозволяє значно підвищити продуктивність зануреного нерухомого шару, а також стабілізувати анаеробні та аеробні процеси в комунальних і промислових стічних водах.',
        './download2HNET.html'
      ),
    new Product(
      'Вільноплаваюче поліпропіленове завантаження BCN',
      '../src/assets/img_categories/water-purification-and-treatment/4.png',
      'Вільноплаваюче завантаження із зовнішнім активним шаром є ефективним способом очищення води від аміаку, амонію і нітритів (процеси нітрифікації / денітрифікації)',
      './freeFloatingBCN.html'
    )
  );
}

module.exports = fncDrainageSystems;
burgerMenu();

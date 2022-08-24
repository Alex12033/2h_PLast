let fncProductList = require('./product-list');
let burgerMenu = require('../burger_menu');
require('../../scss/categories-cards-pages.scss');
require('../../scss/header.scss');
require('../../scss/burger-menu.scss');
require('../../scss/index.scss');
require('../../scss/footer.scss');

function fncWaterPurification() {
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
      'Поліпропіленове завантаження 2Н ТКР',
      '../src/assets/img_categories/water-purification-and-treatment/1.png',
      'Завантаження 2Н ТКР із профілей пресованого поліпропілену для реакторів з нерухомим слоєм із високою та низькою концентрацією',
      './polypropyLoading2HTKR.html'
    ),
    new Product(
      'Завантаження 2H KVP-623 з вертикальними водостоками',
      '../src/assets/img_categories/water-purification-and-treatment/2.png',
      'Завантаження з вертикальною структурою каналів відзначається надзвичайною міцністю. Вертикальні канали дозволяють зменшити відкладення на поверхні блока',
      './loadVerticalChutes.html'
    ),
    new Product(
      'Сітчасте завантаження 2H NET-150',
      '../src/assets/img_categories/water-purification-and-treatment/3.png',
      'Використання завантаження 2Н NET-150 дозволяє значно підвищити продуктивність зануреного нерухомого шару, а також стабілізувати анаеробні та аеробні процеси в комунальних і промислових стічних водах',
      './netDownload2HNET.html'
    ),
    new Product(
      'Вільноплаваюче поліпропіленове завантаження BCN',
      '../src/assets/img_categories/water-purification-and-treatment/4.png',
      'Вільноплаваюче завантаження із зовнішнім активним шаром є ефективним способом очищення води від аміаку, амонію і нітритів (процеси нітрифікації / денітрифікації)',
      './freeFloating.html'
    ),
    new Product(
      'Коалісцентний фільтр 2Н FAР',
      '../src/assets/img_categories/water-purification-and-treatment/5.png',
      'Завантаження для сепараторів та коалісцентних фільтрів для сепарації жирів 2H FAP має універсальну структуру каналів із спеціальною поверхнею завдяки якій емульсії, масла і жири відділяються з високою ефективністю',
      './coalescentFilter.html'
    ),
    new Product(
      'Ламельні тонкошарові модулі 2H TUBEdek для очистки питної води та стічних вод',
      '../src/assets/img_categories/water-purification-and-treatment/6.png',
      '2H TUBEdek виготовляється з каналами різної форми, висоти і нахилу для забезпечення оптимального рішення',
      './lamellarModules.html'
    ),
    new Product(
      'Завантаження 2H KLP-638',
      '../src/assets/img_categories/water-purification-and-treatment/7.png',
      'Особливість 2H KLP-638 – це можливість пристосування завантаження до форми резервуара',
      './download2GKLP.html'
    ),
  );
}

module.exports = fncWaterPurification;
burgerMenu();
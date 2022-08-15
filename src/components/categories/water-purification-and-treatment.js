let fncProductList = require('./product-list');
require('../../scss/water-purification-and-treatment.scss');
require('../../scss/header.scss');

function fncWaterPurification() {
  class Product {
    constructor(title, image, descr) {
      this.title = title;
      this.imageUrl = image;
      this.descrition = descr;
    }
  }

  fncProductList(
    new Product(
      'Киплячі шари - Aqua ZFR',
      '../src/assets/img_categories/water-purification-and-treatment/1.jpg',
      'Арматура з великою активною поверхнею та невеликими зовнішніми розмірами.'
    ),
    new Product(
      'Крос-канальне засипання біологічного родовища - Аква ВКП',
      '../src/assets/img_categories/water-purification-and-treatment/2.jpg',
      'Наповнювач із зварної поліпропіленової фольги з поперечною структурою'
    ),
    new Product(
      'Наповнювач для поділу рідин та нафтопродуктів - Aqua WSC',
      '../src/assets/img_categories/water-purification-and-treatment/3.jpg',
      'Наповнювач використовується для осадження та коагуляції, а також масообмінних процесів'
    ),
    new Product(
      'Сітчастий наповнювач - Aqua WSP 150',
      '../src/assets/img_categories/water-purification-and-treatment/4.jpg',
      'Набивання, що використовується в реакторах з краплинним і занурювальним шаром, у протиточних або поперечних скруберах'
    ),
    new Product(
      'Багатопотікові відстійники - Aquadek ALP 638',
      '../src/assets/img_categories/water-purification-and-treatment/5.jpg',
      'Підвищують ефективність процесів осадження'
    ),
    new Product(
      'Багатопотокові відстійники - Аквадек 41.50, 41.84',
      '../src/assets/img_categories/water-purification-and-treatment/6.png',
      'Багатопотокові картриджі характеризуються постійною поверхнею осадження, що залежить від кута нахилу модуля.'
    )
  );
}

module.exports = fncWaterPurification;

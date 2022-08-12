let fncProductList = require('./product-list');
require('../../scss/industrial-water-cooling.scss');

function fncIndustrialWaterCooling() {
  class Product {
    constructor(title, image, descr) {
      this.title = title;
      this.imageUrl = image;
      this.descrition = descr;
    }
  }
  
  fncProductList(new Product(
    'Зрошувач прямоканальний ЗПС',
    '../src/assets/img_categories/industrial-water-cooling/1.jpg',
    'ЗПС 19 - зрошувач прямоканальний'
  ),
  new Product(
    'Капеловловлювач',
    '../src/assets/img_categories/industrial-water-cooling/2.jpg',
    'БЕК 130- блочний краплевловлювач'
  ),
  new Product(
    'Розпилювальні форсунки',
    '../src/assets/img_categories/industrial-water-cooling/3.jpg',
    'Мають спіральну конструкцію насадки як повного конуса.'
  ),
  new Product(
    'Зрошувач сітчастий - Aqua ZSP 150',
    '../src/assets/img_categories/industrial-water-cooling/4.jpg',
    'Сітчастий спринклер використовується у сильно забрудненій воді'
  ),
  new Product(
    'Жалюзі на вхідному вікні - ZOW 065',
    '../src/assets/img_categories/industrial-water-cooling/5.jpg',
    'Жалюзі на вході повітря покращують потік повітря в холодильній камері'
  ),
  new Product(
    'Опорні решітки',
    '../src/assets/img_categories/industrial-water-cooling/6.jpg',
    'Матеріал, з якого виготовлені решітки, – пластик, армований скловолокном.'
  ),
  new Product(
    'Зрошувач перехресно-канальний - ЗКП',
    '../src/assets/img_categories/industrial-water-cooling/7.jpg',
    'ZKP 12- зрошувач з поперечним потоком'
  ),);
}

module.exports = fncIndustrialWaterCooling;
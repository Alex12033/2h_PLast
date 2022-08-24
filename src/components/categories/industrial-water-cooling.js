let fncProductList = require('./product-list');
let burgerMenu = require('../burger_menu');

function fncIndustrialWaterCooling() {
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
      'Зрошувач 2H FKP',
      require('Images/img_categories/industrial-water-cooling/1.png'),
      'Зрошувач 2H FKP – високоякісний блочний зрошувач з перехресними каналами зі спаяної поліпропіленової (РР) плівки',
      './irrMachine2HFKP.html'
    ),
    new Product(
      'Зрошувач 2H FСP',
        require('Images/img_categories/industrial-water-cooling/2.png'),
      'Поліпропіленовий (РР) зрошувач 2H FCP-619 з прямоканальними водостоками знижує температуру технологічної води в градирнях баштового типу',
      './irrMachine2HFCP.html'
    ),
    new Product(
      'Сітчастий зрошувач 2H NET-150',
      require('Images/img_categories/industrial-water-cooling/3.png'),
      'Поліпропіленовий зрошувач 2H NET – високоякісний сітчастий зрошувач, який завдяки своїй будові забезпечує оптимальний 3-мірний потік',
      './meshSprinkler2HNET.html'
    ),
    new Product(
      'Краплевловлювач ТЕР-130',
      require('Images/img_categories/industrial-water-cooling/4.png'),
      'Жоден інший краплевловлювач не зрівняється з краплевловлювачем ТЕР 130 таким високим рівнем ефективності сепарації та мінімальним перепадом тиску',
      './dripCatcherTER.html'
    ),
    new Product(
      'Поліпропіленовий краплевловлювач ТAР-155',
      require('Images/img_categories/industrial-water-cooling/5.png'),
      'Знижує витрати енергії в вентиляторних градирнях. Низький опір повітря, що протікає через блок краплевловлювача забезпечує меншу потребу в потужності вентиляторів',
      './polypropyleneDropCatcher.html'
    ),
    new Product(
      'Жалюзі впуску повітря 2H LEP 065',
      require('Images/img_categories/industrial-water-cooling/6.png'),
      'Поліпропіленове завантаження 2H LEР 065 – жалюзі зі спаяної поліпропіленової плівки покращують потік повітря в градирню. Вони не тільки стримують не бажані елементи (листя і т. д.),  а й запобігають розбризкуванню води',
      './airIntakeLouvers.html'
    ),
    new Product(
      'Зрошувальні форсунки 2H SPN',
      require('Images/img_categories/industrial-water-cooling/7.png'),
      'Розподіл води має велике значення для продуктивності роботи градирні. Тому ми впровадили у виробництво новий тип сопел у формі конусів. Форсунки призначаються для вертикальної експлуатації, тому рідина з високою точністю розділяється на краплі',
      './irrigationNozzles.html'
    )
  );
}

module.exports = fncIndustrialWaterCooling;
burgerMenu();
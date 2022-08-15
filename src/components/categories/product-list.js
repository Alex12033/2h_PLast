function fncProductList(...list) {
  let products = list;
  class ProductItem {
    constructor(product) {
      this.product = product;
    }

    render() {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
                  <div class="product-item__div">
                  <h2>${this.product.title}</h2>
                      <img src="${this.product.imageUrl}" alt="${this.product.title}">
                      <div class="product-item__content">
                      <p>${this.product.descrition}</p>
                      <button>Дізнатись більше</button>
                      </div>
                  </div>
                  `;
      return prodEl;
    }
  }

  class ProductList {
    constructor() {}

    render() {
      const renderHook = document.querySelector('.assortment__all');
      const prodList = document.createElement('ul');
      prodList.className = 'product-list';
      for (const prod of products) {
        const productItem = new ProductItem(prod);
        const prodEl = productItem.render();
        prodList.append(prodEl);
      }
      renderHook.append(prodList);
    }
  }

  const productList = new ProductList();
  productList.render();
}

module.exports = fncProductList;

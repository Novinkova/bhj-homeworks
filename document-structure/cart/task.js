const productQuantityControl = Array.from(document.querySelectorAll('.product__quantity-control'));
const cartProduct = document.getElementsByClassName('cart__products');
const productAdd = Array.from(document.querySelectorAll('.product__add'));
const cartProducts = document.getElementsByClassName('cart__product');

productQuantityControl.forEach(element => {
  element.addEventListener('click', (event) => {
    let target = event.target;
    let count = target.closest('.product__quantity-controls').querySelector('.product__quantity-value');

    if (target.classList.contains('product__quantity-control_dec') && (count.textContent > 1)) {
      count.textContent--;
    } else if (target.classList.contains('product__quantity-control_inc')) {
      count.textContent++;
    }
  });
});

productAdd.forEach(element => {
  element.addEventListener('click', (event) => {
    let target = event.target;
    let productImage = target.closest('.product').querySelector('.product__image').src;
    let value = target.closest('.product').querySelector('.product__quantity-value').textContent;
    let productId = target.closest('.product').dataset.id;

    const html = `<div class="cart__product" data-id="${productId}">
    <img class="cart__product-image" src="${productImage}">
    <div class="cart__product-count">${value}</div>
    </div>`;

    let check = Array.from(cartProducts).find(item => item.dataset.id === productId);

    if (check != undefined) {
      let number = check.querySelector('.cart__product-count').textContent;
      check.querySelector('.cart__product-count').textContent = (+number) + (+value);
    } else cartProduct[0].insertAdjacentHTML("beforeEnd", html);
  });
});
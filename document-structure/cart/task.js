const catalog = document.querySelectorAll('.product');
const cart = document.querySelector('.cart__products');

catalog.forEach(product => {
    let quantity = product.querySelector('.product__quantity-value');

    product.querySelector('.product__quantity-control_dec').addEventListener('click', () => {
        if(quantity.textContent > 1) {
            quantity.textContent = Number(quantity.textContent) - 1;
        }
    })

    product.querySelector('.product__quantity-control_inc').addEventListener('click', () => {
        quantity.textContent = Number(quantity.textContent) + 1;
    })
})

catalog.forEach(product => {
    product.querySelector('.product__add').addEventListener('click', () => {
        let needToAdd = true;
        let productId = product.getAttribute('data-id');
        let quantityToAdd = Number(product.querySelector('.product__quantity-value').textContent);

        for(let i = 0; i < cart.children.length; i++) {
            if(cart.children[i].getAttribute('data-id') === productId) {
                quantityInCart = cart.children[i].querySelector('.cart__product-count');
                quantityInCart.textContent = Number(quantityInCart.textContent) + quantityToAdd;
                needToAdd = false;
                break;
            }
        }

        if(needToAdd) {
            let newProduct = document.createElement('div');
            let productImg = product.querySelector('img').getAttribute('src');
            newProduct.classList.add('cart__product');
            newProduct.dataset.id = productId;
            newProduct.innerHTML = `<img class="cart__product-image" src="${productImg}"><div class="cart__product-count">${quantityToAdd}</div>`;
            cart.appendChild(newProduct);
        }
    })
})
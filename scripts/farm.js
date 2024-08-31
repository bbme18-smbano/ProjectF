import { cart, addToCart } from './cart.js';
import { header, products, nav } from './products.js';
import { formatCurrency } from './utilities/calculate_cash.js';

let headerHTML = '';
let productsHTML = '';
let navHTML = '';

header.forEach((header) => {
    headerHTML += `
  
        <div class="header-logo">
            <p class="logoTitle"><a href="index.html">${header.name} <i class="fa fa-shopping-cart"></i></a></p>
        </div>
      
    <div class="header-mid">
        Your Online Store
      </div>

        <div class="header-right">
            <a class="header-fa" href="checkout.html"> <i class="fa fa-shopping-cart cart-plus"></i>
            <div class="cart-quantity js-cart-quantity cart-plus">0</div> </a>
        </div>
        </div>
    `;
})


document.querySelector('header').innerHTML = headerHTML;

products.forEach((product) => {
    productsHTML += `

    
<div class="product-card">
                
        <img class="product-image" src="${product.image}" alt="">
            <h3 class="product-name">${product.name}</h3>
                <p class="product-price">MK${formatCurrency(product.dollar)}</p>
    <div class="view-details">
        <button class="btn1 add-to-cart js-add-to-cart"
                        data-product-id="${product.id}"><i
                                    class="fa fa-shopping-cart"></i></button>
        <button class="btn2"><a href="view-details.html">View Details</a></button>
     </div>

</div>
    `;
})


nav.forEach((nav) => {
    navHTML += `
    <a href="${nav.link}" class="nav-link">
            <i class="fa fa-${nav.icon} nav-icon"></i>
            <span class="nav-text">${nav.name}</span>
        </a>
    `;
    
})

document.querySelector('nav').innerHTML = navHTML;

document.querySelector('.js-products-grid').innerHTML = productsHTML;

function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addToCart(productId);
            updateCartQuantity();
        });
    });

const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none'
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
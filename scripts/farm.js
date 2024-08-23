import { cart } from './cart.js';
import { header, products } from './Data_n_all.js';

let headerHTML = '';
let productsHTML = '';

header.forEach((header) => {
    headerHTML += `
  
        <div class="header-logo">
            <img src="${header.image}" alt="logo">
        </div>
        <div class="hamburger-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
        <div class="header-search">
            <input type="search" placeholder="Search Products...">
            <button>Search</button>
        </div>

        <div class="header-search">
            <i class="fa fa-shopping-cart cart-plus"></i>
            <div class="cart-quantity js-cart-quantity cart-plus">0</div>
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
                    <p class="product-price">MK${(product.dollar * 1734)/* converts dollars to kwacha 'by the time i was making this 1 dollar was equall to 1734 with some floating crapp' who cares anyways !!!! */.toFixed(2)}</p>
                    <div class="view-details">
                        <button class="btn1 add-to-cart js-add-to-cart"
                        data-product-id="${product.id}"><i
                                    class="fa fa-shopping-cart"></i></button>
                        <button class="btn2"><a href="view-details.html">View Details</a></button>
                    </div>

            </div>
    `;
})

document.querySelector('.js-products-grid').innerHTML = productsHTML;

function addToCart(productId) {
    let matchingItem;

    cart.forEach((item) => {
        if (productId === item.productId) {
            matchingItem = item;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
}

document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;

            addToCart();
            let cartQuantity = 0;

            cart.forEach((item) => {
                cartQuantity += item.quantity;
            });

            document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
        });
    });

const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');

hamburgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
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
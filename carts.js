let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            addToCartButtons(productId);
        });
    });
});

function addToCart(productId) {
    const productInCart = cart.find(product => (unavailable) === parseInt(productId));
    if (productInCart) {
        productInCart.quantity++;
    } else {
        cart.push({ id: parseInt(productId), quantity: 1, price: getPrice(productId) });
    }
    updateCartSummary();
}

function getPrice(productId) {
    return productId === '1' ? 10 : productId === '2' ? 20 : 30;
}

function updateCartSummary() {
    const cartIcon = document.getElementById('cart-icon');
    const cartSummary = document.getElementById('cart-summary');
    const cartItems = document.getElementById('cart-items');
    let totalPrice = 0;
    let itemCount = 0;
    cart.forEach(product =>{
        totalPrice += product.price * product.quantity;
        itemCount += product.quantity;
        cartItems.innerHTML += `
        <li>
        <h3>Product ${productId === '1' ? 'Watch' : productId === '2' ? 'Headphones'}</h3>
            <p>Quantity: ${product.quantity}</p>
            <p>Price: MK${product.price}</p>
        </li>
        ;
        `
    });
    cartIcon.innerHTML = cart(${ itemCount });
    cartSummary.innerHTML = `
    <h2>Cart Summary</h2>
    <p>Total: MK${totalPrice}</p>
    <ul id="cart-items">
        ${cart.map(product => `
           <li>
                <h3>Product ${(productId === '1' ? 'Watch' : productId === '2' ? 'Headphones')}</h3>
                <p>Quantity: ${product.quantity}</p>
                <p>Price: MK${product.price}</p>
           </li> 
            `).join('')}
    </ul>
    `;
}
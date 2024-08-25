export const cart = [{
    productId: '2024-0106-2022',
    quantity: 2
},{
    productId: '2024-0106-2023',
    quantity: 1
}];

export function addToCart(productId) {
    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
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
export function getProduct(productId) {
    let matchingProduct;

    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
    }
    });

    return matchingProduct;
}

export const header = [{
    image: 'images/Dambwe-STORE.svg',
    name: 'StoreDambwe'
}];

export const products = [{
    id: '2024-0106-2022',
    image: 'images/hanged-t-shirts.jpg',
    name: 'T-shirt Hanged',
    dollar: 19
}, {
    id: '2024-0106-2023',
    image: 'images/rolled-t-shirts.jpg',
    name: 'Rolled T-shirts',
    dollar: 25
}, {
    id: '2024-0106-2024',
    image: 'images/stacked-t-shirts.jpg',
    name: 'Stacked T-shirts',
    dollar: 95
}, {
    id: '2024-0106-2025',
    image: 'images/white-t-shirt.png',
    name: 'White T-shirts',
    dollar: 10
}, {
    id: '2024-0106-2026',
    image: 'images/pear.jpg',
    name: 'Pears',
    dollar: 8
}, {
    id: '2024-0106-2027',
    image: 'images/StockCake-Assorted-Fashionable-Hats_1724052966.jpg',
    name: 'Fashionable Hats',
    dollar: 5
}, {
    id: '2024-0106-2028',
    image: 'images/StockCake-Colorful-sneakers-lineup_1724052868.jpg',
    name: 'Baby Sneakers',
    dollar: 3
}, {
    id: '2024-0106-2029',
    image: 'images/StockCake-New-canvas-sneakers_1724052896.jpg',
    name: 'Canvas Sneakers',
    dollar: 2
}, {
    id: '2024-0106-2030',
    image: 'images/StockCake-Stylish-Athletic-Sneakers_1724052882.jpg',
    name: 'Athletic Sneakers',
    dollar: 5.4
}, {
    id: '2024-0106-2031',
    image: 'images/books-20240711-WA0003.jpg',
    name: 'Books',
    dollar: 1
},{
    id: '2024-0106-2031',
    image: 'images/egg-tray-768x768.webp',
    name: 'Eggs',
    dollar: 0.15   
}];

export const nav = [{
    icon: 'home',
    name: 'HOME',
    link: 'index.html'
}, {
    icon: 'shop',
    name: 'STORE',
    link: 'products.html'
}, {
    icon: 'search',
    name: 'SEARCH',
    link: ''
}, {
    icon: 'bell',
    name: 'NOTIFICATIONS',
    link: ''
}, {
    icon: 'shopping-cart',
    name: 'CART',
    link: 'checkout.html'
}];
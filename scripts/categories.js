const header = [{
    image: 'images/Dambwe-STORE.svg',
    name: 'StoreDambwe'
}];

const categories = [{
    image: 'images/IMG-20240711-WA0005.jpg',
    name: 'Shoes and Sneakers',
    description: 'The home of top quality shoes, sneakers and slides original from top well known brands world wide'
},{
    image: 'images/IMG-20240711-WA0006.jpg',
    name: 'Farm Foods',
    description: 'Get your fresh from the farm greens at an affordable price'
},{
    image: 'images/IMG-20240711-WA0004.jpg',
    name: 'Clothes & Merchindise',
    description: 'Get your top qulity local and international brands and Merch at an in town price in our Store'
}];

let headerHTML = '';
let categoriesHTML = '';

header.forEach((header) => {
    headerHTML += `
  
        <div class="header-logo">
           <h1 class="logoTitle"><a href="index.html">${header.name}<i class="fa fa-shopping-cart"></i></a></h1>
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

categories.forEach((categories) => {
    categoriesHTML += `
  
         <div class="category-card">

                <img class="category-image" src="${categories.image}" alt="">
                <h3 class="category-name">${categories.name}</h3>
                <p class="category-description">${categories.description}</p>
                <div class="view-category">
                    <button class="btn2"><a href="products.html">View Category</a></button>
                </div>

            </div>
    `;
})

document.querySelector('header').innerHTML = headerHTML;

document.querySelector('.js-categories-grid').innerHTML = categoriesHTML;
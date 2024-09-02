const categories = [{
    image: 'images/biscuitssnacks-1.jpg',
    name: 'Snacks',
    description: 'From the cheapiest of your crunchy desires to the rmantic memories with chockoletes and biscuits.'
},{
    image: 'images/bacola-banner-01.jpg',
    name: 'Farm Corner and Vegies',
    description: 'Get your fresh from the farm greens at an affordable price'
},{
    image: 'images/stacked-t-shirts.jpg',
    name: 'Clothes & Merchindise | Coming Soon',
    description: 'Get your top qulity local and international brands and Merch at an in town price in our Store'
}];

let categoriesHTML = '';

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

document.querySelector('.js-categories-grid').innerHTML = categoriesHTML;

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
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
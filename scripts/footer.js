function loadFooter() {
    const footerId = document.getElementById('footer');

    fetch('footer.html').then(Response => Response.text()).then(data => {
        footerId.innerHTML = data;
    })

    .catch(error => {
        console.error('There was an Error Loading the Footer');
    });
}

document.addEventListener('DOMContentLoaded', loadFooter);
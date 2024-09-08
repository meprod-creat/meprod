// script.js
document.addEventListener('DOMContentLoaded', function() {
    const affParam = '?aff=533';
    const productLinks = document.querySelectorAll('a[href^="https://crystalquest.com/products/"]');

    productLinks.forEach(link => {
        let href = link.getAttribute('href');
        if (href && !href.includes(affParam)) {
            // Ajouter le paramètre d'affiliation à la fin de l'URL
            link.setAttribute('href', href + affParam);
        }
    });
});

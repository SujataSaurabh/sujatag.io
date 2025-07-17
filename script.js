// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Load the default content (Home)
    loadContent('home');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const section = link.getAttribute('data-section');
            loadContent(section);
        });
    });

    function loadContent(section) {
        fetch(`${section}.html`)
            .then(response => response.text())
            .then(data => {
                content.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading content:', error);
                content.innerHTML = '<p>Error loading content. Please try again later.</p>';
            });
    }
});
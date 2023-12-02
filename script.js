document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('header');
    const sections = container.querySelectorAll('section');

    function changeArticle() {
        sections.forEach(element => {
            element.classList.toggle('d-none');
        });        
    }

    setInterval(changeArticle, 15000)
});
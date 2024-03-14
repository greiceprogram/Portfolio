document.querySelectorAll('a.scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const sectionID = this.getAttribute('href');

        document.querySelector(sectionID).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
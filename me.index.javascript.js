window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in-on-scroll');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            element.classList.add('visible');
        }
    });
});

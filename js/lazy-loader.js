
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img');

    let observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const image = entry.target;
                const newURL = image.getAttribute('data-src');
                image.src = newURL;
                observer.unobserve(image);
            })
        },
        {
            threshold: [1]
        }
    )

    images.forEach(image => {
        observer.observe(image)
    })
}
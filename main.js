document.querySelectorAll('.header-nav a').forEach(a => a.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
    });
}));

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#344e41';
    } else {
        header.style.backgroundColor = 'white';
    }
});

const someTextItems = document.querySelectorAll('.some-text-section div');

const handleTextIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    })
}


const textObserver = new IntersectionObserver(handleTextIntersection, {
    threshold: 0.1
})

someTextItems.forEach(item => {
    textObserver.observe(item);
})

const allImages = document.querySelectorAll('img');

const handleImageIntersection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    })
}

const imageObserver = new IntersectionObserver(handleImageIntersection, {
    threshold: 0.1
})

allImages.forEach(item => {
    imageObserver.observe(item);
})

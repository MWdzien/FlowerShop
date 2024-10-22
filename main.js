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




document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    let hasErrors = false;

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.replaceAll(" ", "");
    let message = document.getElementById('message').value.trim();

    if (name.length < 2 || name.length > 60){
        document.getElementById('nameError').textContent = "Name has to be between 2 and 60 characters long!";
        hasErrors = true;
    } else {
        document.getElementById('nameError').textContent = "";
        hasErrors = false;
    }

    if ((/^[\w-]\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))){
        document.getElementById('emailError').textContent = "Email address is invalid!";
        hasErrors = true;
    } else {
        document.getElementById('emailError').textContent = "";
        hasErrors = false;
    }

    if(message.length < 1){
        document.getElementById('messageError').textContent = "Message is required!";
        hasErrors = true;
    } else {
        document.getElementById('messageError').textContent = "";
        hasErrors = false;
    }

    if (hasErrors){
        document.getElementById('errorSummary').textContent = "hasErrors";
    } else {
        this.submit();
    }
})






























/*
function submit(e){
    e.preventDefault();

    let hasErrors = false;

    let name = document.getElementById('name').value.replaceAll(" ", "");
    let email = document.getElementById('email').value.replaceAll(" ", "");
    let message = document.getElementById('message').value;

    if (name.length < 2 || name.length > 60) {
        document.getElementById('nameError').textContent = "Name must be between 2 and 60 characters long!";
        hasErrors = true;
    }

    if (!email.test('[\\w]+@[\\w]+\\.[\\w]+')){
        document.getElementById('emailError').textContent = "Email is invalid";
        hasErrors = true;
    }


    if (hasErrors) {

    }
}
*/





















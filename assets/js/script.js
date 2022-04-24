function scrollReve(){
    ScrollReveal({ reset: true });

    ScrollReveal().reveal('.intro-bg', { delay: 800 });
    ScrollReveal().reveal('.tecnologias-bg', { delay: 900 });
    ScrollReveal().reveal('.grid-bg', { delay: 900 });
    ScrollReveal().reveal('.contato-bg', { delay: 900 });
}

scrollReve()

function active(){
    const introImg = document.querySelector('.intro-img img')
        introImg.classList.add('active')

    const circle = document.querySelector('.circle')
    const container = document.querySelector('.container')
    const header = document.querySelector('.header')

    circle.addEventListener('click', function(){
        circle.classList.toggle('active')
        container.classList.toggle('active')
        header.classList.toggle('active')
    })
}
    active()

    const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}   btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
    
    
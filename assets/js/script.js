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
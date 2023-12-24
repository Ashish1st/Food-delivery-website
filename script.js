const hamBurger = document.getElementById('hamBurger');
const navBar = document.getElementById('nav')
const hamLine = document.getElementsByClassName('line')


hamBurger.addEventListener( 'click' , () => {
    hamLine[0].classList.toggle('rotate');
    hamLine[1].classList.toggle('secondRotate');
    hamLine[2].classList.toggle('display');
    navBar.classList.toggle('active');
})





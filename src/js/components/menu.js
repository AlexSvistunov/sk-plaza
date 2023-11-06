const headerMenu = document.querySelector('.header__menu');
const burger = document.querySelectorAll('.burger');
const pageBody = document.querySelector('.page__body');
// const footerBurger = document.querySelector('.footer__burger');
burger.forEach(burger => {
  burger.addEventListener('click', function() {
    headerMenu.classList.toggle('active');
    // footerBurger.classList.toggle('burger--active');
    pageBody.classList.toggle('lock');
  })

});



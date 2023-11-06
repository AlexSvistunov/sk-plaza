const headerMenu = document.querySelector('.header__menu');
const burger = document.querySelector('.burger');
const pageBody = document.querySelector('.page__body');
// const footerBurger = document.querySelector('.footer__burger');
const footer = document.querySelector('.footer');
const swipers = document.querySelectorAll('.swiper')

const links = document.querySelectorAll('a[data-scroll]');
links.forEach(link => {
  link.addEventListener('click', () => {
    headerMenu.classList.remove('menu--active');
    burger.classList.remove('burger--active');
    pageBody.classList.remove('dis-scroll');

  });
});

burger.addEventListener('click', () => {
  footer.classList.toggle('footer-z');
  swipers.forEach(el => {
    el.classList.toggle('swiper-z')
  });
});






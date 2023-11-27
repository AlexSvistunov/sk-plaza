const headerMenu = document.querySelector('.header__menu');
const burgers = document.querySelectorAll('.burger');
const pageBody = document.querySelector('.page__body');
const footerBurger = document.querySelector('.footer__burger');
// const footer = document.querySelector('.footer');
const swipers = document.querySelectorAll('.swiper')

const links = document.querySelectorAll('a[data-scroll]');
links.forEach(link => {
  link.addEventListener('click', () => {
    headerMenu.classList.remove('menu--active');
    burgers.forEach(burger => {
      burger.classList.remove('burger--active')
    })
    pageBody.classList.remove('dis-scroll');

  });
});

burgers.forEach(burger => {
  burger.addEventListener('click', () => {
    swipers.forEach(el => {
      el.classList.toggle('swiper-z')
    });
  });
})






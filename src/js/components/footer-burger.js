import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

const burger = document.querySelector('.burger');
const footerBurger = document.querySelector('.footer__burger');
const menu = document.querySelector('.header__menu');

footerBurger.addEventListener('click', () => {
  menu.classList.add('menu--active');
  burger.classList.add('burger--active');

  if (menu?.classList.contains('menu--active')) {
    footerBurger?.setAttribute('aria-expanded', 'true');
    footerBurger?.setAttribute('aria-label', 'Закрыть меню');
    disableScroll();
  } else {
    footerBurger?.setAttribute('aria-expanded', 'false');
    footerBurger?.setAttribute('aria-label', 'Открыть меню');
    enableScroll();
  }
});

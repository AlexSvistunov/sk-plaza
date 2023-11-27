import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

export function handleModalState() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    // if(modal.classList.contains('active')) {
    //   disableScroll();
    // }

  });

}

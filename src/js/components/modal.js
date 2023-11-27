const getConsult = document.querySelectorAll('#getConsult');
const modalCall = document?.querySelector('.modal--call');
const signUp = document.querySelectorAll('#signUp');
const modalReview = document.querySelector('.modal--review');
const modalFillForm = document.querySelector('.modal--fillform');
import { handleModalState } from "./modal-scroll";

getConsult.forEach(el => {
  el.addEventListener('click', function(){
    modalCall.classList.add('active');

  });
})

modalCall?.querySelector('.modal__btn').addEventListener('click', function(){
  modalCall.classList.remove('active');

});

signUp.forEach(el => {
  el.addEventListener('click', function(){
    modalReview.classList.add('active');



  });
})

modalReview?.querySelector('.modal__btn').addEventListener('click', function(){
  modalReview.classList.remove('active');



});

modalReview?.querySelector('.modal-form__btn').addEventListener('click', function(e){
  e.preventDefault();
  modalReview.classList.remove('active');
  modalFillForm.classList.add('active');




});

modalFillForm?.querySelector('.modal__btn').addEventListener('click', function(){
  modalFillForm.classList.remove('active');


});



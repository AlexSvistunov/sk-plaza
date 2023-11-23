const getConsult = document.querySelector('.menu__btn');
const modalCall = document.querySelector('.modal--call');
const signUp = document.querySelector('.hero__btn');
const modalReview = document.querySelector('.modal--review');
const modalFillForm = document.querySelector('.modal--fillform');
getConsult.addEventListener('click', function(){
  modalCall.classList.add('active');

});

modalCall.querySelector('.modal__btn').addEventListener('click', function(){
  modalCall.classList.remove('active');
});

signUp.addEventListener('click', function(){
  modalReview.classList.add('active');

});

modalReview.querySelector('.modal__btn').addEventListener('click', function(){
  modalReview.classList.remove('active');
});

modalReview.querySelector('.modal-form__btn').addEventListener('click', function(e){
  e.preventDefault();
  modalReview.classList.remove('active');
  modalFillForm.classList.add('active');

});

modalFillForm.querySelector('.modal__btn').addEventListener('click', function(){
  modalFillForm.classList.remove('active');
});



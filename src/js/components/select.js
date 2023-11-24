const dropdown = document.querySelectorAll('.dropdown');


dropdown.forEach(el => {

  const dropdownBtn = el.querySelector('.dropdown__btn');
  const dropdownList = el.querySelector('.dropdown__list');
  const dropdownElements = el.querySelectorAll('.dropdown__item');
  const dropdownField = el.querySelector('.dropdown__field');

  dropdownBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    dropdownList.classList.toggle('dropdown__list--visible');
    dropdownBtn.classList.toggle('rotate');


  });

  dropdownElements.forEach(el => {
    el.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdownBtn.innerText = el.innerText;
      closeDropDownList();
      dropdownField.value = this.dataset.value;
    });
  });


  function closeDropDownList() {
    dropdownList.classList.remove('dropdown__list--visible');
  }

  document.addEventListener('click', function(e) {
    if(e.target !== dropdownBtn && e.currentTarget !== dropdownList) {
      closeDropDownList();

    }


  });


  document.addEventListener('keydown', function(e) {
    if(e.key == "Escape") {
      closeDropDownList();
    }
  });


  //есть нюансы: фокус, скролл + его кастомизация + анимация появления, при открытии следующего закрывать предыдущий




});


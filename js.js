var hamburger = document.querySelector(".hamb");
  var dropdownContent = document.querySelector(".dropdown-content");

  // Функция для обработки нажатия на иконку 
  function toggleDropdown() {
    dropdownContent.classList.toggle("active");
  }

  // Назначение обработчика события нажатия на иконку 
  hamburger.addEventListener("click", toggleDropdown);
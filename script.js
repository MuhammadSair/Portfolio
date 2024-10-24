document.addEventListener('DOMContentLoaded', function () {
  const hamburgerButton = document.getElementById('hamburger-button');
  const closeButton = document.getElementById('close-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOptions = document.querySelectorAll('.menu-option');

  hamburgerButton.addEventListener('click', function () {
    console.log('click');
    
    mobileMenu.classList.add('show');
  });

  closeButton.addEventListener('click', function () {
    mobileMenu.classList.remove('show');
  });

  menuOptions.forEach(function (option) {
    option.addEventListener('click', function () {
      mobileMenu.classList.remove('show');
      const targetId = option.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
});

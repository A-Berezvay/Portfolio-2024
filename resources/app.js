/* 
CREATING THE MENU BUTTON FOR TABLET AND MOBILE DEVICES
*/

const menuButton = document.getElementById('menu-button');
const menuCloseButton = document.getElementById('close-button');
const navLinks = document.querySelector('header nav ul');

menuButton.addEventListener('click', function() {
    navLinks.classList.add('show-menu');
    menuCloseButton.style.display = 'block';
});

menuCloseButton.addEventListener('click', function() {
    navLinks.classList.remove('show-menu');
});



  
  
  
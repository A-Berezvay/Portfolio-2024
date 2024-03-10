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

// LOADER ANIMATION

window.addEventListener('load', () => {
    console.log('Page is loading')
    const loader = document.querySelector('.loader');

    loader.classList.add('loader-hidden');

    loader.addEventListener('transitioned', () => {
        document.body.removeChild('loader');
    })
});

// TYPING EFFECT ANIMATION

const text = document.querySelector('.second-text');

const textLoad = () => {
    setTimeout(() => {
        text.textContent = 'Albert';
    }, 0);
    setTimeout(() => {
        text.textContent = 'a developer';
    }, 4000);
    setTimeout(() => {
        text.textContent = 'a UX enthusiast';
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);
  
  
/* 
CREATING THE MENU BUTTON FOR TABLET AND MOBILE DEVICES
*/

const menuButton = document.getElementById('menu-button');
const menuCloseButton = document.getElementById('close-button');
const navLinks = document.querySelector('header nav ul');

menuButton.addEventListener('click', function() {
    console.log('Menu button clicked')
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
        text.textContent = 'a UX designer';
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);

// SCROLLING ANIMATION

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

  
  
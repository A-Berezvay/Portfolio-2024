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

// CALCULATOR 

let display = document.getElementById('calc-display');

function addToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

  
// TO-DO LIST

document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.querySelector('#todo-list');
    const todoInput = document.querySelector('#todo-input');
    const addButton = document.querySelector('#add-button');

    // Load todos from local storage
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    // Function to render todos
    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach(function(todo, index) {
            const todoItem = document.createElement('li');
            todoItem.innerHTML = `
                <span>${todo}</span>
                <button class="delete-button" data-index="${index}">Delete</button>
            `;
            todoList.appendChild(todoItem);
        });
    }

    // Add todo
    addButton.addEventListener('click', function() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            todos.push(todoText);
            localStorage.setItem('todos', JSON.stringify(todos));
            renderTodos();
            todoInput.value = '';
        }
    });

    // Delete todo
    todoList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-button')) {
            const index = event.target.dataset.index;
            todos.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(todos));
            renderTodos();
        }
    });

    // Initial render
    renderTodos();
});
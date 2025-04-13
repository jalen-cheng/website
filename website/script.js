// =======================
// ORIGINAL + MODAL ADDITIONS
// =======================
const body = document.body;

const btnTheme = document.querySelector('.fa-moon');
const btnHamburger = document.querySelector('.fa-bars');

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

const getBodyTheme = localStorage.getItem('portfolio-theme');
const getBtnTheme = localStorage.getItem('portfolio-btn-theme');

addThemeClass(getBodyTheme, getBtnTheme);

const isLight = () => body.classList.contains('light');

const setTheme = (bodyClass, btnClass) => {
  body.classList.remove(localStorage.getItem('portfolio-theme'));
  btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'));

  addThemeClass(bodyClass, btnClass);

  localStorage.setItem('portfolio-theme', bodyClass);
  localStorage.setItem('portfolio-btn-theme', btnClass);
};

const toggleTheme = () => {
  isLight() ? setTheme('dark', 'fa-sun') : setTheme('light', 'fa-moon');
};

btnTheme.addEventListener('click', toggleTheme);

const displayList = () => {
  const navUl = document.querySelector('.nav__list');

  if (btnHamburger.classList.contains('fa-bars')) {
    btnHamburger.classList.remove('fa-bars');
    btnHamburger.classList.add('fa-times');
    navUl.classList.add('display-nav-list');
  } else {
    btnHamburger.classList.remove('fa-times');
    btnHamburger.classList.add('fa-bars');
    navUl.classList.remove('display-nav-list');
  }
};

btnHamburger.addEventListener('click', displayList);

const scrollUp = () => {
  const btnScrollTop = document.querySelector('.scroll-top');

  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = 'block';
  } else {
    btnScrollTop.style.display = 'none';
  }
};

document.addEventListener('scroll', scrollUp);

// Typewriter effect
var nameElement = document.getElementById('name');
if (nameElement) {
  var typewriter = new Typewriter(nameElement, {
    loop: true
  });

  typewriter
    .typeString('A developer.')
    .pauseFor(1500)
    .deleteChars(10)
    .typeString('learner.')
    .pauseFor(1500)
    .deleteChars(8)
    .typeString('problem solver.')
    .pauseFor(1500)
    .deleteChars(16)
    .typeString('n athlete.')
    .pauseFor(1500)
    .start();
}

// =======================
// FADE-IN/OUT LOGIC (UPDATED)
// =======================
const hepfade = document.getElementById('hep');

// Check scroll position for fade effects
function checkScroll() {
  if (!hepfade) return;

  // Scroll position to trigger fade effect
  if (window.scrollY > 150) {
    // Apply fade-in if not already added
    if (!hepfade.classList.contains('fade-in')) {
      hepfade.classList.add('fade-in');
      hepfade.classList.remove('fade-out');
    }
  } else {
    // Apply fade-out if not already added
    if (!hepfade.classList.contains('fade-out')) {
      hepfade.classList.add('fade-out');
      hepfade.classList.remove('fade-in');
    }
  }
}

document.addEventListener('DOMContentLoaded', checkScroll);
window.addEventListener('scroll', checkScroll);

// =======================
// MODAL LOGIC (NEW)
// =======================

// Opens a modal by ID
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
  }
}

// Closes a modal by ID
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}

// Close the modal if the user clicks anywhere outside the modal content
window.onclick = function (event) {
  const modals = document.getElementsByClassName('modal');
  for (let i = 0; i < modals.length; i++) {
    if (event.target === modals[i]) {
      modals[i].style.display = 'none';
    }
  }
};

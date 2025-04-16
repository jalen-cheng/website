// Main theme and navigation functionality
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

// Updated scroll functionality - always works regardless of page height
const scrollUp = () => {
  const btnScrollTop = document.querySelector('.scroll-top');
  
  // Show scroll button after scrolling down 300px
  if (window.scrollY > 300) {
    btnScrollTop.classList.add('show');
  } else {
    btnScrollTop.classList.remove('show');
  }
};

// Add scroll event listener 
window.addEventListener('scroll', scrollUp, { passive: true });

// Initialize scroll button visibility on page load
document.addEventListener('DOMContentLoaded', scrollUp);

// Typewriter effect (keep as is)
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

// ==========================================
// IMPROVED SECTION FADE-IN USING INTERSECTION OBSERVER
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the 'fade-in' class
  const fadeElements = document.querySelectorAll('.fade-in');
  
  // Create Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If element is in viewport
      if (entry.isIntersecting) {
        // Add 'show' class to make it visible
        entry.target.classList.add('show');
        // Stop observing the element after it's shown
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null, // viewport
    threshold: 0.1, // 10% of the element must be visible
    rootMargin: '0px 0px -50px 0px' // triggers slightly before element enters viewport
  });
  
  // Start observing each fade element
  fadeElements.forEach(element => {
    observer.observe(element);
  });

  // FIXED: Handle homepage special sections
  const hepSection = document.getElementById('hep');
  if (hepSection) {
    // Make sure hep section is always visible
    hepSection.classList.add('show');
    
    // Also make sure all the child elements inside hep are visible
    const hepItems = hepSection.querySelectorAll('.hep');
    hepItems.forEach(item => {
      item.classList.add('show');
    });
  }
  
  // FIXED: Make sure all headers are consistent
  const headerLogo = document.querySelector('.header h3');
  if (headerLogo) {
    headerLogo.style.fontSize = '1.5rem';
  }
  
  // FIXED: Ensure navigation items have consistent size
  const navItems = document.querySelectorAll('.nav__list-item a');
  navItems.forEach(item => {
    item.style.fontSize = '1rem';
  });
  
  // FIXED: Ensure footer has consistent text size
  const footerLink = document.querySelector('.footer__link');
  if (footerLink) {
    footerLink.style.fontSize = '0.9rem';
  }
});

// ==========================================
// MODAL FUNCTIONALITY
// ==========================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'block';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}

// Close modal on outside click
window.onclick = function (event) {
  const modals = document.getElementsByClassName('modal');
  for (let i = 0; i < modals.length; i++) {
    if (event.target === modals[i]) {
      modals[i].style.display = 'none';
    }
  }
};
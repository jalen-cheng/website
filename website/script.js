/**
 * ==================================================
 * THEME FUNCTIONALITY
 * Light/dark mode management with localStorage persistence
 * ==================================================
 */
const body = document.body;
const btnTheme = document.querySelector('.fa-moon') || document.querySelector('.fa-sun');
const btnHamburger = document.querySelector('.fa-bars');

// Theme-based favicon selector
const updateFavicon = (theme) => {
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon) {
    favicon.href = theme === 'light' ? 'attachments/favlight.png' : 'attachments/favdark.png';
  }
};

// Theme initialization from localStorage or default
const getBodyTheme = localStorage.getItem('portfolio-theme') || 'light';
const getBtnTheme = localStorage.getItem('portfolio-btn-theme') || 'fa-sun';

// Apply theme on page load
document.body.classList.remove('light', 'dark');
document.body.classList.add(getBodyTheme);
updateFavicon(getBodyTheme);

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

// Initialize with stored or default theme
addThemeClass(getBodyTheme, getBtnTheme);

const isLight = () => body.classList.contains('light');

const setTheme = (bodyClass, btnClass) => {
  body.classList.remove('light', 'dark');
  btnTheme.classList.remove('fa-sun', 'fa-moon');

  addThemeClass(bodyClass, btnClass);
  updateFavicon(bodyClass);

  localStorage.setItem('portfolio-theme', bodyClass);
  localStorage.setItem('portfolio-btn-theme', btnClass);
};

const toggleTheme = () => {
  isLight() ? setTheme('dark', 'fa-moon') : setTheme('light', 'fa-sun');
};

btnTheme.addEventListener('click', toggleTheme);

/**
 * ==================================================
 * NAVIGATION
 * Mobile menu toggle functionality
 * ==================================================
 */
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

/**
 * ==================================================
 * SCROLL FUNCTIONALITY
 * Show/hide scroll-to-top button based on scroll position
 * ==================================================
 */
const scrollUp = () => {
  const btnScrollTop = document.querySelector('.scroll-top');
  
  if (window.scrollY > 300) {
    btnScrollTop.classList.add('show');
  } else {
    btnScrollTop.classList.remove('show');
  }
};

window.addEventListener('scroll', scrollUp, { passive: true });
document.addEventListener('DOMContentLoaded', scrollUp);

/**
 * ==================================================
 * TYPEWRITER EFFECT
 * Animated text for homepage introduction
 * ==================================================
 */
var nameElement = document.getElementById('name');
if (nameElement) {
  var typewriter = new Typewriter(nameElement, {
    loop: true
  });

  typewriter
    .typeString('a developer.')
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

/**
 * ==================================================
 * ANIMATIONS AND VISUAL EFFECTS
 * Intersection Observer for element fade-in animations
 * ==================================================
 */
document.addEventListener('DOMContentLoaded', () => {
  // Determine current page for animation timing
  const isIndexPage = window.location.pathname === '/' || 
                     window.location.pathname === '/index.html' || 
                     window.location.pathname.endsWith('/index.html');
  
  // Apply slower animations on non-index pages
  if (!isIndexPage) {
    document.querySelectorAll('.fade-in').forEach(element => {
      element.classList.add('fade-in-slow');
    });
  }
  
  // Remove transition delays on hep grid items to ensure consistent timing with other fade-ins
  document.querySelectorAll('.hep__grid a .hep').forEach(element => {
    element.style.transitionDelay = '0s';
  });
  
  // Configure and apply intersection observer for animations
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  fadeElements.forEach(element => {
    observer.observe(element);
  });

  /**
   * UI CONSISTENCY ADJUSTMENTS
   * Ensure consistent sizing across elements
   */
  const headerLogo = document.querySelector('.header h3');
  if (headerLogo) {
    headerLogo.style.fontSize = '1.5rem';
  }
  
  const navItems = document.querySelectorAll('.nav__list-item a');
  navItems.forEach(item => {
    item.style.fontSize = '1rem';
  });
  
  const footerLink = document.querySelector('.footer__link');
  if (footerLink) {
    footerLink.style.fontSize = '0.9rem';
  }
});

/**
 * ==================================================
 * MODAL FUNCTIONALITY
 * Display and hide experience details modals
 * ==================================================
 */
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

// Close modal when clicking outside content area
window.onclick = function (event) {
  const modals = document.getElementsByClassName('modal');
  for (let i = 0; i < modals.length; i++) {
    if (event.target === modals[i]) {
      modals[i].style.display = 'none';
    }
  }
};

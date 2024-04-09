const navbar = document.getElementById('navbar');
const backButton = document.querySelector('.back_button');
let lastScrollTop = 0;

function handleScroll() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Show the back button by default
  if (scrollTop <= 0) {
    backButton.style.visibility = 'visible';
  }

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.classList.add('scrolled');
    backButton.style.visibility = 'hidden'; // Hide the back button
  } else {
    // Scrolling up
    navbar.classList.remove('scrolled');
    backButton.style.visibility = 'visible'; // Show the back button
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
}

window.addEventListener('scroll', handleScroll);

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
  }
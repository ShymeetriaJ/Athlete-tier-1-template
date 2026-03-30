// SMOOTH SCROLL

const recruitButton = document.querySelector('#hero a');

recruitButton.addEventListener('click', function(event) {
  event.preventDefault();

  const contactSection = document.querySelector('#contact');

  contactSection.scrollIntoView({
    behavior: 'smooth'
  });
});

// STAT BOX HOVER GLOW

const statBoxes = document.querySelectorAll('.stat-box');

statBoxes.forEach(function(box) {
  
  box.addEventListener('mouseenter', function() {
    box.style.borderColor = '#ffD700';
    box.style.transform = 'scale(1.08)';
    box.style.transition = 'all 0.3s ease';
     box.style.boxShadow = '0 0 20px 3px rgba(243, 235, 6, 0.6)';
  });

  box.addEventListener('mouseleave', function() {
    box.style.borderColor = '#FFD700';
    box.style.transform = 'scale(1)';
    box.style.transition = 'all 0.3s ease';
    box.style.boxShadow = 'none';
  });

});

// SCROLL FADE-IN ANIMATION

const sections = document.querySelectorAll('section');

sections.forEach(function(section) {
  section.style.opacity = '0';
  section.style.transform = 'translateY(60px)';
  section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

const observer = new IntersectionObserver(function(entries) {
  
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });

}, { threshold: 0.1 });

sections.forEach(function(section) {
  observer.observe(section);
});
// 4. NAVIGATION BAR

const navbar = document.querySelector('#navbar');
const navLinks = document.querySelectorAll('.nav-links a');

// Change nav background when scrolling
window.addEventListener('scroll', function() {

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

});

// Highlight active nav link based on section
window.addEventListener('scroll', function() {

  let currentSection = '';

  sections.forEach(function(section) {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(function(link) {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });

});

// HAMBURGER MENU

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
});

// Close menu when a nav link is clicked
navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
  });
});
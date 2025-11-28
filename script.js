// File JavaScript untuk interaktivitas tambahan (misalnya menu mobile, slider, dll.)
// Saat ini masih kosong. Anda bisa menambahkan kode di sini jika diperlukan.

document.addEventListener('DOMContentLoaded', () => {
    // console.log("Website Media Integrasi siap!");
});

// script.js - Enhanced Version

// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  lazyImages.forEach(img => imageObserver.observe(img));
});

// Form validation and enhancement
document.addEventListener('DOMContentLoaded', function() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('border-red-500');
        } else {
          field.classList.remove('border-red-500');
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        alert('Harap lengkapi semua field yang wajib diisi.');
      }
    });
  });
});

// Enhanced dropdown for mobile
document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  if (window.innerWidth < 768) {
    dropdowns.forEach(dropdown => {
      const trigger = dropdown.querySelector('.cursor-pointer');
      
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        const menu = dropdown.querySelector('.dropdown-menu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
      });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.style.display = 'none';
        });
      }
    });
  }
});

// Counter animation for statistics (if any)
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    element.textContent = Math.floor(start);
    
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    }
  }, 16);
}

// Initialize counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.dataset.target);
      animateCounter(entry.target, target);
      counterObserver.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.counter').forEach(counter => {
  counterObserver.observe(counter);
});


// ── Scroll events (Top button & Navbar) ──
const scrollBtn = document.getElementById('scrollTop');
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('show', window.scrollY > 400);
  
  if (window.scrollY > 150) {
    navbar.classList.add('scrolled');
  } else if (window.scrollY === 0) {
    navbar.classList.remove('scrolled');
  }
});

// ── Intersection Observer for fade-up animations ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Newsletter subscribe ──
function subscribeNewsletter() {
  const input = document.querySelector('.news-input');
  if (!input.value || !input.value.includes('@')) {
    input.style.outline = '2px solid #ff6b6b';
    setTimeout(() => input.style.outline = 'none', 2000);
    return;
  }
  const toast = new bootstrap.Toast(document.getElementById('liveToast'));
  toast.show();
  input.value = '';
}

// ── Instagram gallery click → open Instagram ──
document.querySelectorAll('.insta-item').forEach(item => {
  item.addEventListener('click', () => {
    window.open('https://www.instagram.com/biogam.shop/', '_blank');
  });
});

// ── Product Category Filters ──
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.product-item').forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.classList.remove('hidden');
        item.classList.add('visible');
      } else {
        item.classList.add('hidden');
        item.classList.remove('visible');
      }
    });
  });
});

// ── Smooth active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

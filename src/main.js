import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,
  once: true,
});

// Counter Animation Function
function animateCounter(counter, duration = 2000) {
  let start = 0;
  const target = +counter.getAttribute("data-target");
  const increment = target / (duration / 16); // ~60fps

  function updateCounter() {
    start += increment;
    if (start < target) {
      counter.innerText = Math.ceil(start);
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = target;
    }
  }

  updateCounter();
}

// Intersection Observer (trigger jab element visible ho)
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target, 2000); // 3 sec animation
      observer.unobserve(entry.target); // ek hi baar chale
    }
  });
}, { threshold: 0.6 });

counters.forEach(counter => {
  observer.observe(counter);
});


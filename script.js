const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const glow = document.querySelector('.cursor-glow');

window.addEventListener('scroll', () =>
  header.classList.toggle('scrolled', window.scrollY > 20),
);
menuButton.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach((link) =>
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }),
);

document.addEventListener('pointermove', (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const animatedWord = document.querySelector('.hero-animated-word');
if (
  animatedWord &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
) {
  const words = JSON.parse(animatedWord.dataset.words || '[]');
  if (words.length) {
    let currentIndex = 0;
    const placeholder = '_____';
    animatedWord.textContent = placeholder;

    const showNextWord = () => {
      animatedWord.classList.add('is-changing');
      window.setTimeout(() => {
        animatedWord.textContent = words[currentIndex];
        currentIndex = (currentIndex + 1) % words.length;
        animatedWord.classList.remove('is-changing');
      }, 180);
    };

    window.setTimeout(() => {
      showNextWord();
      window.setInterval(showNextWord, 2600);
    }, 1500);
  }
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
document
  .querySelectorAll('.reveal')
  .forEach((element) => revealObserver.observe(element));

const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const suffix = target >= 100 ? '+' : '+';
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 45));
      const timer = setInterval(() => {
        current = Math.min(target, current + step);
        el.textContent = `${current}${suffix}`;
        if (current >= target) clearInterval(timer);
      }, 28);
      counterObserver.unobserve(el);
    });
  },
  { threshold: 0.7 },
);
counters.forEach((counter) => counterObserver.observe(counter));

const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');
filterButtons.forEach((button) =>
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    projects.forEach((project) => {
      const categories = project.dataset.category.split(' ');
      project.classList.toggle(
        'hidden',
        filter !== 'all' && !categories.includes(filter),
      );
    });
  }),
);

const tiltCard = document.querySelector('.tilt-card');
if (tiltCard && matchMedia('(pointer:fine)').matches) {
  tiltCard.addEventListener('pointermove', (event) => {
    const rect = tiltCard.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    tiltCard.style.transform = `rotateY(${x * 7}deg) rotateX(${y * -7}deg)`;
  });
  tiltCard.addEventListener(
    'pointerleave',
    () => (tiltCard.style.transform = 'rotateY(0) rotateX(0)'),
  );
}

document.getElementById('year').textContent = new Date().getFullYear();

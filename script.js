// Generate spark particles
const sparksEl = document.getElementById('sparks');
for (let i = 0; i < 30; i++) {
  const s = document.createElement('div');
  s.className = 'spark';
  s.style.left = Math.random() * 100 + '%';
  s.style.bottom = '0';
  s.style.animationDuration = (4 + Math.random() * 8) + 's';
  s.style.animationDelay = (Math.random() * 10) + 's';
  s.style.width = s.style.height = (1 + Math.random() * 2.5) + 'px';
  const greens = ['#00e676','#69f0ae','#b2ff59','#c8ffd4'];
  s.style.background = greens[Math.floor(Math.random() * greens.length)];
  sparksEl.appendChild(s);
}

// Animate stats with counter
function animateCounter(el, target, suffix='') {
  const isNeg = target < 0;
  const abs = Math.abs(target);
  let start = 0;
  const dur = 1800;
  const step = ts => {
    if (!start) start = ts;
    const prog = Math.min((ts - start) / dur, 1);
    const ease = 1 - Math.pow(1 - prog, 3);
    const val = Math.round(ease * abs);
    el.textContent = (isNeg ? '-' : '') + val + suffix;
    if (prog < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// Intersection observer for stats
const statBigs = document.querySelectorAll('.stat-big');
const origVals = Array.from(statBigs).map(el => el.textContent);

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      const txt = el.textContent;
      if (txt === '300%') animateCounter(el, 300, '%');
      else if (txt === '-80%') animateCounter(el, -80, '%');
      else if (txt === '98%') animateCounter(el, 98, '%');
      obs.unobserve(el);
    }
  });
}, {threshold: 0.5});

statBigs.forEach(el => obs.observe(el));

// Card hover sounds (visual feedback)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)';
  });
});

/* ═══════════════════════════════════════════
   MAYA ASSESSORIA OBSTÉTRICA — main.js
   ═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAV: escurece ao rolar ── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  /* ── MENU MOBILE ── */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');

  hamburger.addEventListener('click',  () => mobileMenu.classList.add('open'));
  mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  /* ── INTERSECTION OBSERVER: reveal ao scroll ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    .forEach(el => observer.observe(el));

  /* ── FAQ ACCORDION ── */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      /* fecha todos */
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-answer').style.maxHeight = '0';
      });

      /* abre o clicado se estava fechado */
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ── HERO CANVAS ANIMATION ── */
  initHeroCanvas();

});

/* ═══════════════════════════════════════════
   HERO CANVAS — Orbs orgânicos flutuantes
   Paleta off-white/sage/terra — clean & alive
   ═══════════════════════════════════════════ */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  /* Paleta refinada */
  const palette = [
    { r: 61,  g: 92,  b: 53  }, /* sage escuro   */
    { r: 90,  g: 125, b: 82  }, /* sage médio     */
    { r: 157, g: 186, b: 164 }, /* sage pálido    */
    { r: 184, g: 112, b: 85  }, /* terra          */
    { r: 206, g: 143, b: 119 }, /* terra claro    */
    { r: 232, g: 204, b: 189 }, /* blush          */
    { r: 213, g: 201, b: 176 }, /* cream deep     */
  ];

  let orbs  = [];
  let width = 0, height = 0;
  let mouse = { x: -9999, y: -9999 };
  let raf;

  /* ── resize ── */
  function resize() {
    width  = canvas.width  = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }

  /* ── factory ── */
  function createOrb(fromBottom) {
    const c = palette[Math.floor(Math.random() * palette.length)];
    return {
      x:          Math.random() * width,
      y:          fromBottom ? height + 60 + Math.random() * 100 : Math.random() * height,
      baseR:      70 + Math.random() * 180,
      vx:         (Math.random() - 0.5) * 0.15,
      vy:         -(0.06 + Math.random() * 0.12),
      phase:      Math.random() * Math.PI * 2,
      phaseSpeed: 0.003 + Math.random() * 0.005,
      alpha:      0.025 + Math.random() * 0.04,
      cr: c.r, cg: c.g, cb: c.b,
    };
  }

  function buildOrbs(n) {
    orbs = Array.from({ length: n }, () => createOrb(false));
  }

  /* ── draw loop ── */
  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < orbs.length; i++) {
      const o = orbs[i];

      o.phase += o.phaseSpeed;
      o.x     += o.vx + Math.sin(o.phase * 0.6) * 0.12;
      o.y     += o.vy;

      /* repulsão suave do mouse */
      const dx   = o.x - mouse.x;
      const dy   = o.y - mouse.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 220 && dist > 0) {
        const force = (220 - dist) / 220 * 0.5;
        o.x += (dx / dist) * force;
        o.y += (dy / dist) * force;
      }

      /* recicla quando sai pelo topo */
      if (o.y + o.baseR < -10) {
        orbs[i] = createOrb(true);
        continue;
      }

      /* raio pulsante */
      const liveR  = o.baseR + Math.sin(o.phase) * 14;
      const liveA  = o.alpha * (0.75 + Math.sin(o.phase * 1.3) * 0.25);
      const driftX = Math.sin(o.phase * 0.8) * 10;

      const grad = ctx.createRadialGradient(
        o.x + driftX, o.y, 0,
        o.x + driftX, o.y, liveR
      );
      grad.addColorStop(0,    `rgba(${o.cr},${o.cg},${o.cb},${liveA})`);
      grad.addColorStop(0.45, `rgba(${o.cr},${o.cg},${o.cb},${liveA * 0.45})`);
      grad.addColorStop(1,    `rgba(${o.cr},${o.cg},${o.cb},0)`);

      ctx.beginPath();
      ctx.arc(o.x + driftX, o.y, liveR, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }

    raf = requestAnimationFrame(draw);
  }

  /* ── eventos ── */
  const hero = canvas.closest('.hero');

  hero.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  hero.addEventListener('mouseleave', () => {
    mouse.x = -9999; mouse.y = -9999;
  });

  /* toque mobile */
  hero.addEventListener('touchmove', e => {
    const rect  = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    mouse.x = touch.clientX - rect.left;
    mouse.y = touch.clientY - rect.top;
  }, { passive: true });

  window.addEventListener('resize', () => {
    resize();
    buildOrbs(20);
  });

  /* ── init ── */
  resize();
  buildOrbs(20);
  draw();
}

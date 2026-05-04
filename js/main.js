/**
 * main.js
 * Ayesha Zaka — Social Media Marketing Strategist Website
 *
 * Handles:
 *   - Custom cursor (dot + lagging ring, magnetic buttons)
 *   - Scroll progress bar
 *   - Navbar blur-on-scroll
 *   - Hamburger / mobile nav overlay
 *   - Animated metric counters (count-up on scroll)
 *   - Scroll-reveal (intersection observer fallback)
 *   - Footer year auto-update
 *   - Lead magnet form (client-side UX only)
 */

'use strict';

/* ─── 1. Custom Cursor ─────────────────────────────────────── */
(function initCursor() {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');

  if (!dot || !ring) return;
  if (window.matchMedia('(hover: none)').matches) return; // touch device

  // Signal CSS that the custom cursor is active — hides the default cursor
  document.body.classList.add('custom-cursor-active');

  let ringX = 0, ringY = 0;
  let mouseX = 0, mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Dot follows instantly
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });

  // Ring lags behind with lerp
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;

    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';

    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover states on interactive elements
  const hoverTargets = document.querySelectorAll('a, button, .magnetic, input, textarea');
  hoverTargets.forEach((el) => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
  });
}());

/* ─── 2. Magnetic Button Effect ───────────────────────────── */
(function initMagnetic() {
  const magnets = document.querySelectorAll('.magnetic');

  magnets.forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect   = btn.getBoundingClientRect();
      const cx     = rect.left + rect.width  / 2;
      const cy     = rect.top  + rect.height / 2;
      const dx     = (e.clientX - cx) * 0.35;
      const dy     = (e.clientY - cy) * 0.35;
      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}());

/* ─── 3. Scroll Progress Bar ───────────────────────────────── */
(function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;

  function updateBar() {
    const scrollTop  = document.documentElement.scrollTop;
    const scrollMax  = document.documentElement.scrollHeight - window.innerHeight;
    const pct        = scrollMax > 0 ? (scrollTop / scrollMax) * 100 : 0;
    bar.style.width  = pct + '%';
  }

  window.addEventListener('scroll', updateBar, { passive: true });
  updateBar();
}());

/* ─── 4. Navbar Blur-on-Scroll ─────────────────────────────── */
(function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  function updateNav() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
}());

/* ─── 5. Hamburger / Mobile Nav ────────────────────────────── */
(function initHamburger() {
  const btn   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;

  function toggleMenu(open) {
    btn.classList.toggle('active', open);
    links.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  btn.addEventListener('click', () => {
    const isOpen = links.classList.contains('open');
    toggleMenu(!isOpen);
  });

  // Close on nav link click
  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('open')) {
      toggleMenu(false);
    }
  });
}());

/* ─── 6. Animated Metric Counters ──────────────────────────── */
(function initCounters() {
  const metrics = document.querySelectorAll('.metric[data-target]');
  if (!metrics.length) return;

  function countUp(el) {
    const target   = parseInt(el.dataset.target, 10);
    const duration = 1600; // ms
    const start    = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(ease * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    }

    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        countUp(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  metrics.forEach((m) => observer.observe(m));
}());

/* ─── 7. Scroll-Reveal (IntersectionObserver fallback) ─────── */
(function initReveal() {
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach((el) => observer.observe(el));
}());

/* ─── 8. Active Nav Link (scroll spy) ──────────────────────── */
(function initScrollSpy() {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-link[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('active', active);
        });
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' });

  sections.forEach((s) => observer.observe(s));
}());

/* ─── 9. Lead Magnet Form ──────────────────────────────────── */
(function initLeadForm() {
  const form = document.getElementById('leadForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameEl  = form.querySelector('[name="name"]');
    const emailEl = form.querySelector('[name="email"]');
    const name    = nameEl ? nameEl.value.trim() : '';
    const email   = emailEl ? emailEl.value.trim() : '';

    if (!name) {
      nameEl && nameEl.focus();
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      emailEl && emailEl.focus();
      return;
    }

    // Replace form with success message
    form.innerHTML = `
      <div class="lead-success" role="status" aria-live="polite">
        <span style="font-size:2rem">🎉</span>
        <p style="font-size:1.1rem;font-weight:700;margin-top:12px">Checklist on its way, ${name}!</p>
        <p style="color:var(--text-secondary);margin-top:8px;font-size:0.9rem">
          Check your inbox at <strong>${email}</strong> — it'll arrive within a few minutes.
        </p>
      </div>
    `;
  });
}());

/* ─── 10. Footer Year ──────────────────────────────────────── */
(function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}());

/**
 * gsap-init.js
 * Ayesha Zaka — Social Media Marketing Strategist Website
 *
 * All GSAP + ScrollTrigger animations.
 * Requires gsap.min.js and ScrollTrigger.min.js loaded before this file.
 *
 * Animations:
 *   - Hero section entrance (staggered)
 *   - Section titles + content reveals (ScrollTrigger)
 *   - Work card parallax
 *   - Service card stagger
 *   - Testimonial cards stagger
 *   - Course section entrance
 *   - Lead magnet entrance
 *   - Navbar logo entrance
 */

'use strict';

(function initGSAP() {
  // Guard: GSAP must be present
  if (typeof gsap === 'undefined') {
    console.warn('gsap-init.js: GSAP not found. Animations skipped.');
    return;
  }

  // Register ScrollTrigger plugin
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* ─── Helper: create ScrollTrigger default config ─────────── */
  function st(trigger, extraOpts) {
    return Object.assign({
      trigger,
      start:   'top 82%',
      end:     'bottom 20%',
      toggleActions: 'play none none none',
    }, extraOpts || {});
  }

  /* ═══════════════════════════════════════════════════════════
     1. HERO — staggered entrance on page load
  ═══════════════════════════════════════════════════════════ */
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTl
    .from('.hero-eyebrow', { duration: 0.6, opacity: 0, y: 20 })
    .from('.hero-title',   { duration: 0.8, opacity: 0, y: 32 },    '-=0.3')
    .from('.hero-sub',     { duration: 0.7, opacity: 0, y: 24 },    '-=0.4')
    .from('.hero-ctas',    { duration: 0.6, opacity: 0, y: 20 },    '-=0.3')
    .from('.hero-stats .stat', {
      duration: 0.5,
      opacity: 0,
      y: 16,
      stagger: 0.12,
    }, '-=0.2')
    .from('.hero-img-wrap', { duration: 1, opacity: 0, x: 40, ease: 'power2.out' }, '-=0.8')
    .from('.hero-scroll-hint', { duration: 0.6, opacity: 0, y: 10 }, '-=0.2');

  /* ═══════════════════════════════════════════════════════════
     2. NAVBAR logo entrance
  ═══════════════════════════════════════════════════════════ */
  gsap.from('.nav-logo', { duration: 0.7, opacity: 0, x: -20, ease: 'power2.out', delay: 0.2 });
  gsap.from('.nav-links > *', {
    duration: 0.5,
    opacity: 0,
    y: -12,
    stagger: 0.08,
    ease: 'power2.out',
    delay: 0.4,
  });

  /* ═══════════════════════════════════════════════════════════
     3. ABOUT SECTION
  ═══════════════════════════════════════════════════════════ */
  gsap.from('#about .section-label', {
    scrollTrigger: st('#about'),
    duration: 0.6,
    opacity: 0,
    x: -20,
  });

  gsap.from('#about .section-title', {
    scrollTrigger: st('#about .section-title'),
    duration: 0.8,
    opacity: 0,
    y: 28,
    ease: 'power3.out',
  });

  gsap.from('#about .about-bio', {
    scrollTrigger: st('#about .about-bio'),
    duration: 0.7,
    opacity: 0,
    y: 20,
    stagger: 0.15,
  });

  gsap.from('.pillar', {
    scrollTrigger: st('.about-pillars'),
    duration: 0.6,
    opacity: 0,
    y: 28,
    stagger: 0.15,
    ease: 'power2.out',
  });

  /* ═══════════════════════════════════════════════════════════
     4. WORK / CASE STUDIES
  ═══════════════════════════════════════════════════════════ */
  gsap.from('#work .section-header', {
    scrollTrigger: st('#work'),
    duration: 0.8,
    opacity: 0,
    y: 30,
  });

  gsap.from('.work-card', {
    scrollTrigger: st('.work-grid'),
    duration: 0.7,
    opacity: 0,
    y: 48,
    stagger: 0.15,
    ease: 'power3.out',
  });

  /* ═══════════════════════════════════════════════════════════
     5. SERVICES
  ═══════════════════════════════════════════════════════════ */
  gsap.from('#services .section-header', {
    scrollTrigger: st('#services'),
    duration: 0.8,
    opacity: 0,
    y: 30,
  });

  gsap.from('.service-card', {
    scrollTrigger: st('.services-grid'),
    duration: 0.6,
    opacity: 0,
    y: 40,
    stagger: 0.1,
    ease: 'power2.out',
  });

  /* ═══════════════════════════════════════════════════════════
     6. COURSE
  ═══════════════════════════════════════════════════════════ */
  gsap.from('#course .course-content > *', {
    scrollTrigger: st('#course'),
    duration: 0.65,
    opacity: 0,
    x: -30,
    stagger: 0.12,
    ease: 'power3.out',
  });

  gsap.from('#course .course-image', {
    scrollTrigger: st('#course .course-image'),
    duration: 0.9,
    opacity: 0,
    x: 40,
    ease: 'power2.out',
  });

  /* ═══════════════════════════════════════════════════════════
     7. TESTIMONIALS
  ═══════════════════════════════════════════════════════════ */
  gsap.from('#testimonials .section-header', {
    scrollTrigger: st('#testimonials'),
    duration: 0.8,
    opacity: 0,
    y: 30,
  });

  gsap.from('.testimonial-card', {
    scrollTrigger: st('.testimonials-grid'),
    duration: 0.65,
    opacity: 0,
    y: 40,
    stagger: 0.15,
    ease: 'power2.out',
  });

  /* ═══════════════════════════════════════════════════════════
     8. LEAD MAGNET
  ═══════════════════════════════════════════════════════════ */
  gsap.from('#lead-magnet .lead-inner > *', {
    scrollTrigger: st('#lead-magnet'),
    duration: 0.65,
    opacity: 0,
    y: 28,
    stagger: 0.12,
    ease: 'power3.out',
  });

  /* ═══════════════════════════════════════════════════════════
     9. FOOTER
  ═══════════════════════════════════════════════════════════ */
  gsap.from('.footer-inner > *', {
    scrollTrigger: st('#footer'),
    duration: 0.6,
    opacity: 0,
    y: 24,
    stagger: 0.1,
    ease: 'power2.out',
  });

  /* ═══════════════════════════════════════════════════════════
     10. PARALLAX — hero background glow on scroll
  ═══════════════════════════════════════════════════════════ */
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.to('#hero::before', {
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end:   'bottom top',
        scrub: true,
      },
      y: -80,
      ease: 'none',
    });
  }

}());

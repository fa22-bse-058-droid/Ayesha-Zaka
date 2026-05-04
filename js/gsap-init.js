/**
 * gsap-init.js
 * Ayesha Zaka — Social Media Marketing Strategist Website
 *
 * Scroll-triggered animations for labels, headlines, cards, and images.
 */

'use strict';

(function initGSAP() {
  if (typeof gsap === 'undefined') {
    console.warn('gsap-init.js: GSAP not found. Animations skipped.');
    return;
  }

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  const baseTrigger = {
    start: 'top 85%',
    toggleActions: 'play none none none',
  };

  function animateElements(elements, vars) {
    elements.forEach((el) => {
      gsap.from(el, Object.assign({
        scrollTrigger: Object.assign({ trigger: el }, baseTrigger),
        duration: 0.6,
        ease: 'power2.out',
      }, vars));
    });
  }

  animateElements(
    gsap.utils.toArray('.section-label, .hero-eyebrow, .course-label, .lead-label'),
    { y: 20, opacity: 0 }
  );

  animateElements(
    gsap.utils.toArray('.section-title, .hero-title, .about-title, .course-title, .lead-title'),
    { y: 30, opacity: 0 }
  );

  const cardSelector = '.work-card, .service-card, .testimonial-card, .pillar, .course-card, .lead-checklist';
  gsap.utils.toArray('section').forEach((section) => {
    const cards = section.querySelectorAll(cardSelector);
    if (!cards.length) return;

    gsap.from(cards, {
      scrollTrigger: Object.assign({ trigger: section }, baseTrigger),
      y: 40,
      opacity: 0,
      stagger: 0.15,
      ease: 'power2.out',
    });
  });

  animateElements(
    gsap.utils.toArray('section img'),
    { scale: 0.95, opacity: 0, duration: 0.7 }
  );
}());

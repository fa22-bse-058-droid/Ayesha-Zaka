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

  const labelSelector = '.section-label, .hero-eyebrow, .course-label, .lead-label';
  const headlineSelector = '.section-title, .hero-title, .about-title, .course-title, .lead-title';
  const cardSelector = '.work-card, .service-card, .testimonial-card, .pillar, .course-card, .lead-checklist';

  gsap.utils.toArray('.scroll-section').forEach((section) => {
    const labels = section.querySelectorAll(labelSelector);
    if (labels.length) {
      gsap.from(labels, {
        scrollTrigger: Object.assign({ trigger: section }, baseTrigger),
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      });
    }

    const headlines = section.querySelectorAll(headlineSelector);
    if (headlines.length) {
      gsap.from(headlines, {
        scrollTrigger: Object.assign({ trigger: section }, baseTrigger),
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
      });
    }

    const cards = section.querySelectorAll(cardSelector);
    if (cards.length) {
      gsap.from(cards, {
        scrollTrigger: Object.assign({ trigger: section }, baseTrigger),
        y: 40,
        opacity: 0,
        stagger: 0.15,
        ease: 'power2.out',
      });
    }

    const images = section.querySelectorAll('img');
    if (images.length) {
      gsap.from(images, {
        scrollTrigger: Object.assign({ trigger: section }, baseTrigger),
        scale: 0.95,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power2.out',
      });
    }
  });
}());

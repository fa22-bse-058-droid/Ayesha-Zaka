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

  if (typeof ScrollTrigger !== 'undefined') {
    const heroSection = document.getElementById('hero');
    const heroBg = document.querySelector('.hero-bg');
    if (heroSection && heroBg) {
      gsap.to(heroBg, {
        y: () => -(heroSection.offsetHeight * 0.3),
        ease: 'none',
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    const aboutSection = document.getElementById('about');
    const aboutImage = document.querySelector('#about .about-image');
    if (aboutSection && aboutImage) {
      gsap.to(aboutImage, {
        y: () => -(aboutSection.offsetHeight * 0.5),
        ease: 'none',
        scrollTrigger: {
          trigger: aboutSection,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    gsap.utils.toArray('#work .work-card').forEach((card, index) => {
      gsap.to(card, {
        y: -20 - (index * 4),
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }
}());

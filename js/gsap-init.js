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
  const cardSelector = '.work-row, .services-stats, .course-card, .lead-checklist';

  const heroBlob = document.querySelector('.hero-blob');
  if (heroBlob) {
    gsap.to(heroBlob, {
      scale: 1.08,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });
  }

  const heroParticles = document.querySelectorAll('.hero-particles .particle');
  if (heroParticles.length) {
    heroParticles.forEach((particle) => {
      gsap.to(particle, {
        y: gsap.utils.random(-20, 20),
        duration: gsap.utils.random(6, 12),
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: gsap.utils.random(0, 1.5),
      });
    });
  }

  gsap.utils.toArray('#about, #work, #services, #course, #testimonials, #lead-magnet').forEach((section) => {
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

    const bentoCards = section.querySelectorAll('.bento-card');
    if (bentoCards.length) {
      gsap.from(bentoCards, {
        scrollTrigger: Object.assign({ trigger: section }, baseTrigger),
        y: 40,
        opacity: 0,
        stagger: 0.12,
        ease: 'power2.out',
      });
    }

    const serviceLeft = section.querySelectorAll('.service-left');
    if (serviceLeft.length) {
      gsap.from(serviceLeft, {
        scrollTrigger: Object.assign({ trigger: section }, baseTrigger),
        x: -30,
        opacity: 0,
        stagger: 0.12,
        ease: 'power2.out',
      });
    }

    const serviceRight = section.querySelectorAll('.service-right');
    if (serviceRight.length) {
      gsap.from(serviceRight, {
        scrollTrigger: Object.assign({ trigger: section }, baseTrigger),
        x: 30,
        opacity: 0,
        stagger: 0.12,
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

    gsap.utils.toArray('#work .work-row').forEach((row, index) => {
      gsap.to(row, {
        y: -20 - (index * 4),
        ease: 'none',
        scrollTrigger: {
          trigger: row,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  }

  const courseCard = document.querySelector('.course-card');
  if (courseCard) {
    gsap.to(courseCard, {
      y: -8,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });
  }
}());

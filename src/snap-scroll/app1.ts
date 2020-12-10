import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: 'restart pause resume pause',
});

gsap.to('.orange p', {
  scrollTrigger: '.orange',
  duration: 1,
  scale: 2,
  rotation: 360,
});

gsap.from('.red p', {
  scrollTrigger: {
    trigger: '.red',
  },
  duration: 1,
  y: '5vh',
  opacity: 0,
  scale: 0.5,
  delay: 1,
  ease: 'power4.in',
});

gsap.to('.yoyo p', {
  scrollTrigger: '.yoyo',
  scale: 2,
  repeat: 2,
  yoyo: true,
  ease: 'power2',
});

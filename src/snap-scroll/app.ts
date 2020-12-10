import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const leftEl = document.querySelector('.left');
const rightEl = document.querySelector('.right');
const buttonEl = document.querySelector('.button');

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.content1',
    pin: true,
    start: '-10% top',
    end: '180% bottom',
    scrub: false, // 1
    markers: true,
    pinSpacing: 'margin',
  },
});

timeline
  .from(leftEl, {
    x: '-6em',
    opacity: 0,
    ease: 'power4.inOut',
  })
  .from(rightEl, {
    x: '100%',
    opacity: 0,
    ease: 'rough',
  })
  .fromTo(
    buttonEl,
    {
      opacity: 0,
      rotate: '720deg',
      scale: 0.5,
    },
    {
      opacity: 1,
      rotate: 0,
      scale: 1,
    }
  );

buttonEl.addEventListener('click', () => {
  timeline.timeScale(3);
  timeline.reverse();
});

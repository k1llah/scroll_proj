import "./style.css";//
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
 gsap.registerPlugin(ScrollTrigger);
 let horizontalScrollBlock = document.querySelector(".horizontalScroll") as HTMLDivElement
 let horizontalScroll2 = document.querySelector('.horizontalScroll_2') as HTMLDivElement
 let elements = gsap.utils.toArray(".horizontalScroll") 
 let elements2 = gsap.utils.toArray(".horizontalScroll_2")

 const horizontalScroll = gsap.timeline({
	xPercent: -100,
	ease: 'none',
   scrollTrigger: {
     trigger: horizontalScrollBlock,
     start: "top top",
     end: () => "+=" + horizontalScrollBlock.offsetWidth,
     scrub: 1, 
     pin: true, 
   },
 });
 elements.forEach((element, index) => {
  horizontalScroll.to(element, { xPercent: -(index + 1) * 115 }, 0);
});
const horizontalScrollSecond = gsap.timeline({
	xPercent: -50,
	ease: 'none',
   scrollTrigger: {
     trigger: horizontalScroll2,
     start: "top top",
     end: () => "+=" + horizontalScroll2.offsetWidth,
     scrub: 1, 
     pin: true, 
   },
 });
 elements2.forEach((element, index) => {
  horizontalScrollSecond.to(element, { xPercent: -(index + 1) * 115 }, 0); 
});

 

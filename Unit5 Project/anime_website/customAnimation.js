$(document).ready(function() {
	//alert("hi");
	ready();
});

function ready() {
/*let greenBlock = anime({
	  targets: 'div.animate',
	  // Properties 
	  translateX: 100,
	  borderRadius: 50,
	  // Property Parameters
	  duration: 2000,
	  easing: 'linear',
	  // Animation Parameters
	  direction: 'alternate',
	  loop: true
});  */

/*let title = anime({
  targets: '.letter',
  opacity: 1,
  translateY: 50, 
  rotate: {
    value: 360,
    duration: 2000,
    easing: 'easeInExpo'
  }, 
  scale: anime.stagger([0.7, 1], {from: 'center'}), 
  delay: anime.stagger(100, {start: 1000}), 
  translateX: [-10, 30]
});*/


let eye = anime({
   targets: '.eye',
   opacity: [0, 1],
   duration: 2000,
   easing: 'linear'
 });

let blueRect = anime({
  targets: ['.blue-rect-top'],
  translateY: [-4000, 0],
  //delay: (el, i) => 2200 + (i * 75),
  duration: 1000,
  easing: 'easeOutExpo',
  offset: 0
	
});

let redRectBot = anime({
  targets: ['.red-rect-bottom'],
  
  translateX: [-4000, 0],
  translateY: [-4000, 0],
  easing: 'linear'
});


let redRectTop = anime({
  targets: ['.red-rect-top'],  
  translateX: [-2000, 0],
  duration: 800,
  easing: 'linear'
});


}
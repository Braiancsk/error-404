
const fundo = document.querySelector('.fundo');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const menu = document.querySelector('.menu');
const headline = document.querySelector('.headline');


const tl = new TimelineMax();

tl.fromTo(fundo, 1.5,{height:"0%"},{height:"100%", ease:Power2.easeInOut})
.fromTo(fundo, 1.8,{width:"100%"},{width:"80%", ease:Power2.easeInOut})
.fromTo(slider, 1.2,{x:"-100%"},{x:"0%",ease:Power2.easeInOut},"-=1.8")
.fromTo(logo,0.5,{opacity:0, x:40},{opacity:1, x:0},"-=0.5")
.fromTo(menu,0.5,{opacity:0, x:40},{opacity:1, x:0},"-=0.5")
.fromTo(headline,0.5,{opacity:0, x:40},{opacity:1, x:0},"-=0.5")

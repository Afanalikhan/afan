/* LOADER */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{
document.getElementById("loader").style.display="none";
},500);

},2500);

});

/* TYPING EFFECT */

const words=[
"Programmer",
"Founder",
"CS50 Graduate",
"Web Developer",
"AI Enthusiast",
"Community Leader"
];

let wordIndex=0;
let charIndex=0;
let typing=document.getElementById("typing");

function type(){

if(charIndex<words[wordIndex].length){

typing.textContent += words[wordIndex].charAt(charIndex);

charIndex++;

setTimeout(type,100);

}else{

setTimeout(erase,1500);

}

}

function erase(){

if(charIndex>0){

typing.textContent=
words[wordIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(erase,50);

}else{

wordIndex++;

if(wordIndex>=words.length){
wordIndex=0;
}

setTimeout(type,300);

}

}

document.addEventListener("DOMContentLoaded",()=>{

type();

});

/* MOBILE MENU */

const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

if(navLinks.style.display==="flex"){

navLinks.style.display="none";

}else{

navLinks.style.display="flex";

navLinks.style.flexDirection="column";

navLinks.style.position="absolute";

navLinks.style.top="80px";

navLinks.style.right="20px";

navLinks.style.background="#0f172a";

navLinks.style.padding="20px";

navLinks.style.borderRadius="20px";

}

});

/* SCROLL ANIMATION */

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(
".stat-card,.about-card,.skill-card,.project-card,.contact-card,.timeline-item"
).forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition="all .8s ease";

observer.observe(card);

});

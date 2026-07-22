// ======================
// BETÖLTŐ
// ======================

window.addEventListener("load",()=>{

    const loader = document.getElementById("loader");

    setTimeout(()=>{

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },500);

    },1200);

});




// ======================
// GÉPELŐ ANIMÁCIÓ
// ======================


const text = "A legjobb gaming élmények egy helyen 🎮";

const typing = document.getElementById("typing");

let i = 0;


function typeEffect(){

    if(i < text.length){

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeEffect,70);

    }

}


typeEffect();







// ======================
// STATISZTIKA SZÁMLÁLÓ
// ======================


const counters = document.querySelectorAll(".counter");


counters.forEach(counter=>{


let start = 0;

const target = Number(counter.dataset.target);



function count(){


if(start < target){


start += Math.ceil(target/100);


if(start > target){

start = target;

}


counter.innerHTML = start.toLocaleString();


setTimeout(count,25);


}


}


count();


});







// ======================
// SCROLL ANIMÁCIÓ
// ======================


const elements = document.querySelectorAll(

".video-card, .short-card, .stat-box, .timeline div"

);



elements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="0.6s";


});




function reveal(){


elements.forEach(el=>{


let top = el.getBoundingClientRect().top;


if(top < window.innerHeight - 80){


el.style.opacity="1";

el.style.transform="translateY(0)";


}



});


}



window.addEventListener("scroll",reveal);

reveal();








// ======================
// MOBIL MENÜ
// ======================


const menu = document.querySelector(".menu");

const nav = document.querySelector("nav");


menu.addEventListener("click",()=>{


if(nav.style.display==="flex"){

nav.style.display="none";


}else{

nav.style.display="flex";

nav.style.flexDirection="column";


}


});







// ======================
// EGÉR FÉNY EFFEKT
// ======================


const circle = document.querySelector(".hero-circle");



document.addEventListener("mousemove",(e)=>{


let x = e.clientX / 40;

let y = e.clientY / 40;



circle.style.transform =
`translate(${x}px,${y}px)`;


});







// ======================
// VIDEÓ KÁRTYA KATTINTÁS EFFEKT
// ======================


const cards = document.querySelectorAll(".video-card,.short-card");


cards.forEach(card=>{


card.addEventListener("mouseenter",()=>{


card.style.zIndex="5";


});


card.addEventListener("mouseleave",()=>{


card.style.zIndex="1";


});


});

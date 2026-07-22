// BETÖLTŐ ANIMÁCIÓ

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    setTimeout(()=>{

        loader.style.display="none";

    },1500);

});





// GÉPELŐ ANIMÁCIÓ


const text="A legjobb gaming élmények egy helyen 🎮";

let index=0;

const typing=document.getElementById("typing");


function typeWriter(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,80);

    }

}


typeWriter();








// FELIRATKOZÓ SZÁMLÁLÓ


const counters=document.querySelectorAll(".counter");


counters.forEach(counter=>{


counter.innerText="0";


const updateCounter=()=>{


const target=+counter.getAttribute("data-target");


const current=+counter.innerText;


const increment=target/100;



if(current < target){


counter.innerText=Math.ceil(current+increment);


setTimeout(updateCounter,20);


}else{


counter.innerText=target.toLocaleString();


}



};


updateCounter();


});








// MINI JÁTÉK


let score=0;


const button=document.getElementById("gameButton");

const scoreText=document.getElementById("score");



button.addEventListener("click",()=>{


score++;


scoreText.innerHTML="Pont: "+score;



button.style.transform="scale(1.2)";


setTimeout(()=>{

button.style.transform="scale(1)";

},150);



});








// MOBIL MENÜ


const menu=document.querySelector(".menu");

const nav=document.querySelector("nav");



menu.addEventListener("click",()=>{


if(nav.style.display==="block"){

nav.style.display="none";


}else{


nav.style.display="block";


}



});








// KÁRTYA ANIMÁCIÓ


const cards=document.querySelectorAll(".video-card,.stat-box,.short-card");



window.addEventListener("scroll",()=>{


cards.forEach(card=>{


let position=card.getBoundingClientRect().top;


let screen=window.innerHeight;


if(position < screen-100){


card.style.opacity="1";

card.style.transform="translateY(0)";


}



});


});







// EGÉR MOZGÁS EFFEKT


document.addEventListener("mousemove",(e)=>{


const circle=document.querySelector(".hero-circle");


let x=e.clientX/50;

let y=e.clientY/50;


circle.style.transform=
`translate(${x}px,${y}px)`;


});

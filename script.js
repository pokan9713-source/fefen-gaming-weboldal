// =========================
// FEFE X GAMING SCRIPT
// =========================


// BETÖLTÉS

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});





// GÉPELŐ EFFEKT


const text = "Gaming videók • Reakciók • Shorts 🔥";

let index = 0;


const heroText = document.querySelector(".hero p");



if(heroText){

    heroText.innerHTML="";


    function typing(){

        if(index < text.length){

            heroText.innerHTML += text.charAt(index);

            index++;

            setTimeout(typing,70);

        }

    }


    typing();

}







// KÁRTYA ANIMÁCIÓ


const cards = document.querySelectorAll(".card");



function showCards(){


cards.forEach(card=>{


const position = card.getBoundingClientRect().top;


if(position < window.innerHeight - 100){


card.style.opacity="1";

card.style.transform="translateY(0)";


}


});


}




cards.forEach(card=>{


card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition="0.6s";


});



window.addEventListener("scroll",showCards);

showCards();








// LOGÓ MOZGÁS


const logo=document.querySelector(".logo img");


if(logo){


logo.addEventListener("mouseenter",()=>{


logo.style.transform="scale(1.15)";


});


logo.addEventListener("mouseleave",()=>{


logo.style.transform="scale(1)";


});


}







// KIS FÉNY EFFEKT EGÉRREL


document.addEventListener("mousemove",(e)=>{


let x=e.clientX / 50;

let y=e.clientY / 50;



document.body.style.backgroundPosition=
`${x}px ${y}px`;


});






// MOBIL MENÜ


const menuButton=document.querySelector(".menu");

const nav=document.querySelector("nav");



if(menuButton){


menuButton.addEventListener("click",()=>{


if(nav.style.display==="flex"){


nav.style.display="none";


}else{


nav.style.display="flex";

nav.style.flexDirection="column";


}


});


}

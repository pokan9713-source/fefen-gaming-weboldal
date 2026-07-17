// FefeN Gaming V3 - Script


// Oldal betöltési effekt

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});




// Görgetésnél kártya animáció

const cards = document.querySelectorAll(
".video-card, .news div, .goals div, .stats div"
);


const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.transform="translateY(0)";
entry.target.style.opacity="1";

}


});


},{
threshold:0.2
});



cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition="0.6s";


observer.observe(card);


});






// Feliratkozó számláló animáció

const numbers = document.querySelectorAll(".stats h2");


numbers.forEach(number=>{


let target = number.innerText;

if(target.includes("+")){


let value = parseInt(target);

let count = 0;


let timer=setInterval(()=>{


count += Math.ceil(value/40);


if(count >= value){

count=value;

clearInterval(timer);

}


number.innerText=count+"+";


},40);


}


});






// Üdvözlő üzenet

console.log(
"🎮 Üdv a FefeN Gaming hivatalos oldalán!"
);

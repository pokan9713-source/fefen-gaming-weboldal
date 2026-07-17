// FefeX Gaming 3.0 Script


// Betöltési animáció

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.display = "none";

    }, 2500);

});




// Kártyák animáció görgetésnél


const elements = document.querySelectorAll(
".card, .video-card, .game-card, .stat-box, .timeline-item"
);



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}


});


});



elements.forEach(element=>{


element.style.opacity="0";

element.style.transform="translateY(40px)";

element.style.transition="0.7s";


observer.observe(element);


});







// Feliratkozó számláló animáció


const counter = document.querySelector(".stat-box h2");


if(counter){


let number = 0;

let target = 260;



let timer = setInterval(()=>{


number += 5;


counter.innerHTML = number + "+";



if(number >= target){

clearInterval(timer);

counter.innerHTML = target + "+";

}


},30);


}







// Gomb üzenetek


const gameButtons=document.querySelectorAll(".game-card button");


gameButtons.forEach(button=>{


button.addEventListener("click",()=>{


alert(
"🎮 FefeX Arcade fejlesztés alatt! Hamarosan játszható lesz."
);


});


});






// Konzol üzenet


console.log(
"🎮 FefeX Gaming 3.0 betöltve!"
);

// FefeX Gaming JavaScript


// Betöltési képernyő

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader").style.display="none";

    },2500);

});




// Egyszerű admin mentés

const buttons = document.querySelectorAll("button");


buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        alert("✅ Mentés sikeres! FefeX Gaming frissítve.");

    });

});




// Megjelenési animáció görgetéskor


const cards=document.querySelectorAll(".card");


const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });


});



cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition="0.6s";


    observer.observe(card);

});





// Konzol üzenet

console.log(
"🎮 FefeX Gaming weboldal betöltve!"
);

// FefeN Gaming Weboldal JavaScript 🚀

// Oldal betöltési animáció
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


// Görgetés animáció
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const height = window.innerHeight;

        if (top < height - 100) {
            section.classList.add("show");
        }
    });
});


// YouTube gomb animáció
const buttons = document.querySelectorAll("a, button");

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.08)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});


// Feliratkozó számláló animáció
let subscribers = 260;

const counter = document.querySelector("#subscriber-count");

if(counter){
    let number = 0;

    let animation = setInterval(() => {
        number++;

        counter.innerHTML = number + " feliratkozó";

        if(number >= subscribers){
            clearInterval(animation);
        }

    },5);
}


// Menü görgetés
document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});


// Üdvözlő üzenet
console.log("🎮 FefeN Gaming weboldal betöltve!");
console.log("🔥 Készült JavaScript segítségével");

// FefeX Gaming - script.js

// Év automatikus frissítése a láblécben
const ev = document.getElementById("ev");

if (ev) {
    ev.textContent = new Date().getFullYear();
}


// Menü animáció mobilhoz
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}


// Görgetés animáció
const elemek = document.querySelectorAll(".animacio");

function megjelenites() {
    elemek.forEach(elem => {
        const hely = elem.getBoundingClientRect().top;
        const ablak = window.innerHeight;

        if (hely < ablak - 100) {
            elem.classList.add("mutat");
        }
    });
}

window.addEventListener("scroll", megjelenites);
megjelenites();


// Feliratkozó számláló (kézzel állítható)
let feliratkozok = 306;

const szamlalo = document.getElementById("feliratkozok");

if (szamlalo) {
    szamlalo.textContent = feliratkozok + " feliratkozó";
}


// Gomb kattintás effekt
const gombok = document.querySelectorAll("button, .gomb");

gombok.forEach(gomb => {
    gomb.addEventListener("click", () => {
        gomb.style.transform = "scale(0.95)";

        setTimeout(() => {
            gomb.style.transform = "scale(1)";
        }, 150);
    });
});


// Üdvözlő üzenet a konzolban
console.log("🎮 FefeX Gaming weboldal betöltve!");

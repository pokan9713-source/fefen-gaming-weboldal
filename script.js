const subs = document.getElementById("subs");
const target = 306;
let current = 0;

const counter = setInterval(() => {
  current += 3;

  if (current >= target) {
    current = target;
    clearInterval(counter);
  }

  subs.textContent = current;
}, 15);

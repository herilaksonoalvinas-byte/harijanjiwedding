const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
// subtle pulse on load
const wa = document.querySelector(".wa-float");

setTimeout(() => {
  wa.style.animation = "pulse 1.5s ease";
}, 2000);


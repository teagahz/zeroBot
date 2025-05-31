// script.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 ZeroBot Website pronto!");

  // Exemplo: animações simples ao rolar (futuramente podemos usar libs como AOS.js)
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visivel");
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.classList.add("oculto");
    observer.observe(section);
  });
});

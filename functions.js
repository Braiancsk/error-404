const hamburguer = document.querySelector(".menu-mobile");
const navLinks = document.querySelector(".nav-links");
const hamburguer = document.querySelector(".nav-links li");

hamburguer.addEventListener("click", () => {
	navLinks.classList.toggle("open");
})
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu");
    const navMenu = document.querySelector("nav ul");

    // Toggle navigation menu on hamburger click
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        menuButton.classList.toggle("show");
    });

    // Footer dynamic content
    const yearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");

    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;
});
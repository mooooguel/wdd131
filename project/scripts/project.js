const currentYearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;


const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu");
    const navMenu = document.querySelector("nav ul");

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        menuButton.classList.toggle("show");
    });

    const yearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");

    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;
});


const projectImages = [

]

const projectList = document.getElementById("project-list");
const favoritesList = document.getElementById("favorites-list");

const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function renderFavorites() {
    favoritesList.innerHTML = "";
    favorites.forEach(project => {
        const favoriteItem = `
      <li>
        ${project.name}
        <button class="remove-btn" data-id="${project.id}">Remove</button>
      </li>
    `;
        favoritesList.innerHTML += favoriteItem;
    });
    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", handleRemoveFavorite);
    });
}

function handleAddFavorite(event) {
    const projectElement = event.target.parentElement;
    const projectId = projectElement.dataset.id;
    const projectName = projectElement.textContent.replace("Add to Favorites", "").trim();

    const isFavorite = favorites.some(project => project.id === projectId);
    if (isFavorite) {
        alert(`${projectName} is already in your favorites!`);
        return;
    }

    favorites.push({ id: projectId, name: projectName });
    localStorage.setItem("favorites", JSON.stringify(favorites));


    renderFavorites();
}

function handleRemoveFavorite(event) {
    const projectId = event.target.dataset.id;

    const updatedFavorites = favorites.filter(project => project.id !== projectId);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    favorites.splice(0, favorites.length, ...updatedFavorites);
    renderFavorites();
}

document.querySelectorAll(".favorite-btn").forEach(button => {
    button.addEventListener("click", handleAddFavorite);
});

renderFavorites();
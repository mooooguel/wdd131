// Select DOM elements
const projectList = document.getElementById("project-list");
const favoritesList = document.getElementById("favorites-list");

// Load favorites from localStorage or initialize with an empty array
const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Function to render the favorites list
function renderFavorites() {
  // Clear existing favorites
  favoritesList.innerHTML = "";

  // Use template literals to build the list
  favorites.forEach(project => {
    const favoriteItem = `
      <li>
        ${project.name}
        <button class="remove-btn" data-id="${project.id}">Remove</button>
      </li>
    `;
    favoritesList.innerHTML += favoriteItem;
  });

  // Attach event listeners to "Remove" buttons
  document.querySelectorAll(".remove-btn").forEach(button => {
    button.addEventListener("click", handleRemoveFavorite);
  });
}

// Function to handle adding a favorite
function handleAddFavorite(event) {
  const projectElement = event.target.parentElement;
  const projectId = projectElement.dataset.id;
  const projectName = projectElement.textContent.replace("Add to Favorites", "").trim();

  // Check if project is already in favorites
  const isFavorite = favorites.some(project => project.id === projectId);
  if (isFavorite) {
    alert(`${projectName} is already in your favorites!`);
    return;
  }

  // Add project to favorites
  favorites.push({ id: projectId, name: projectName });
  localStorage.setItem("favorites", JSON.stringify(favorites));

  // Re-render favorites
  renderFavorites();
}

// Function to handle removing a favorite
function handleRemoveFavorite(event) {
  const projectId = event.target.dataset.id;

  // Remove the project from favorites
  const updatedFavorites = favorites.filter(project => project.id !== projectId);
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

  // Update the favorites array and re-render
  favorites.splice(0, favorites.length, ...updatedFavorites);
  renderFavorites();
}

// Attach event listeners to "Add to Favorites" buttons
document.querySelectorAll(".favorite-btn").forEach(button => {
  button.addEventListener("click", handleAddFavorite);
});

// Initial render of favorites
renderFavorites();
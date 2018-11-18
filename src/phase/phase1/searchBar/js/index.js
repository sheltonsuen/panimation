document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.getElementsByClassName("animation--search-icon")[0];
    const searchField = document.getElementsByClassName("animation--search-field")[0];

    searchIcon.addEventListener('click', () => {
        searchField.classList.remove('animation--search-field');
        searchField.classList.add('animation--search-field_expanded');
    });
  });
  
// Variables búsqueda
const searchInput = document.querySelector(".js_searchInput");
const searchBtn = document.querySelector(".js_searchBtn");
const resetBtn = document.querySelector(".js_resetBtn");

// Lista de bebidas (búsqueda y favoritos)
const searchResults = document.querySelector(".js_searchResults");
const faveList = document.querySelector(".js_faveList");

// Array con los resultados del fetch
let drinks = [];

// Array con los favoritos
let faveDrinks = [];



// Local Storage
const favsLocalStorage = JSON.parse(localStorage.getItem("fave drinks"));

if (favsLocalStorage !== null) {
    faveDrinks = favsLocalStorage;
}

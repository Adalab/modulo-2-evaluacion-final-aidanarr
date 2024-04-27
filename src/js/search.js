

// Función para pintar las bebidas en el html. Si no hay imagen, ponemos un placeholder.

function renderDrinks(array) {
    let drinksLi = "";
    if (array.strDrinkThumb !== null){
        drinksLi = `<li class="js_li" id="${array.idDrink}">
        <p>${array.strDrink}</p>
        <img src="${array.strDrinkThumb}">
      </li>`
    } else {
        drinksLi = `<li class="js_li" id="${array.idDrink}">
        <p>${array.strDrink}</p>
        <img src="/images/placeholder.jpg">
      </li>`
    }

    return drinksLi
}

// Función para coger el array que hemos traído con el fetch y recorrerlo con un bucle ejecutando renderDrinks.

function drinksArray(array) {
    searchResults.innerHTML = "";
    for (let drink of array) {
        searchResults.innerHTML += renderDrinks(drink);
    }

    // Variable que recoge todos los hijos de la ul (los li)
    const searchResultsChildren = searchResults.childNodes;

    // Bucle que añade un event listener a cada uno de esos li. El event listener nos ejecuta la función para añadir a favoritos
    for (const li of searchResultsChildren) {
        li.addEventListener("click", handleClickAddFav);
    }
    
}

// Función que nos devuelve el value del input

function handleClickSearch(event) {
    event.preventDefault();
    valueInput = searchInput.value;
    getDrinks(valueInput);
}

// Función para resetear el innerHTML

function handleClickReset(event) {
    event.preventDefault();
    searchResults.innerHTML = "";
}

// Función con el fetch

function getDrinks(value) {

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + value.toLowerCase())
          .then((response) => response.json())
          .then((data) => {
            drinks = data.drinks;
            drinksArray(drinks);
          });

}

// Event listeners botones búsqueda y reset

searchBtn.addEventListener("click", handleClickSearch);

resetBtn.addEventListener("click", handleClickReset);

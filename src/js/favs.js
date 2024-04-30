
// Función con el html de la lista de favoritos

function renderFavs(array) {
    return `<li id="${array.idDrink}">
    <p class="li-title">${array.strDrink}</p>
    <div class="delete js_deleteBtn" id="${array.idDrink}" >x</div>
    <img src="${array.strDrinkThumb}">
    </li>`
}

// Función con el bucle para pintar la lista de favoritos

function favsArray() {
    faveList.innerHTML = "";
    for (let drink of faveDrinks) {
        faveList.innerHTML += renderFavs(drink);
    }
    // Ejecutamos también la función para recoger de nuevo todos los botones x
    deleteBtnArray();
}

function handleClickDelete(event) {
    let targetId = event.currentTarget.id;
    // Borramos el elemento del array favs que coincida con el id de la x
    const clickedDrinkIndex = faveDrinks.findIndex((drink) => drink.idDrink === targetId);
    faveDrinks.splice(clickedDrinkIndex, 1);

    // Volvemos a pintar los favs y las bebidas en el html
    favsArray()
    drinksArray(drinks);

    // Actualizamos el Local Storage de favoritos
    localStorage.setItem("fave drinks", JSON.stringify(faveDrinks));
}

// Función para seleccionar todas las x y añadirle el event listener

function deleteBtnArray() {
    let deleteBtn = document.querySelectorAll(".js_deleteBtn");
    for (let btn of deleteBtn) {
        btn.addEventListener("click", handleClickDelete);
    }
}

//Función para añadir a favoritos

function handleClickAddFav(event) {
    let targetId = event.currentTarget.id;
    
    //Recogemos el id del elemento li clicado, buscamos el elemento en el array drinks que contenga ese id
    const clickedDrink = drinks.find((drink) => drink.idDrink === targetId);
    
    // Verificamos que no esté ya en favoritos. Buscamos si en el array de favoritos hay algún elemento cuyo id coincida con el id de la bebida clicada
    const clickedDrinkIndex = faveDrinks.findIndex((drink) => drink.idDrink === targetId);

    // Si no está en el array de favoritos, el index será -1 y nos lo meterá dentro
    if (clickedDrinkIndex === -1) {
        faveDrinks.push(clickedDrink);
    } else {
        // Si ya está en el array, en ese caso lo borra
        faveDrinks.splice(clickedDrinkIndex, 1);
    }

    // Pintamos en el html la lista de favoritos
    faveList.innerHTML = "";
    
    for (let drink of faveDrinks) {
        faveList.innerHTML += renderFavs(drink);
    }

    // Volvemos a pintar la lista de bebidas buscadas en el html

    drinksArray(drinks);
    favsArray();

    // Guardamos los favoritos en Local Storage

    localStorage.setItem("fave drinks", JSON.stringify(faveDrinks));

    
}

// Ejecutamos la función favsArray por defecto para que nos pinte las bebidas favoritas de Local Storage (si las hay)
favsArray();

// Función para limpiar todos los favoritos con el botón de borrar favs
function handleDeleteFavs(event) {
    event.preventDefault();
    faveDrinks = [];
    localStorage.clear();
    faveList.innerHTML = "";
    valueInput = ""; 
    drinksArray(drinks);
}

deleteFavs.addEventListener("click", handleDeleteFavs);




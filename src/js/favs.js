
// Función para pintar la lista de favoritos

function renderFavs(array) {
    return `<li id="${array.idDrink}">
    <p>${array.strDrink}</p>
    <img src="${array.strDrinkThumb}">
    </li>`
}

// Función que recoge el id del elemento li clickado, busca el elemento en el array drinks que contenga ese id y lo añade al array de favoritos

function handleClickAddFav(event) {
    let targetId = event.currentTarget.id;
    
    const clickedDrink = drinks.find((drink) => drink.idDrink === targetId);
    faveDrinks.push(clickedDrink);

    faveList.innerHTML = "";
    for (let drink of faveDrinks) {
        faveList.innerHTML += renderFavs(drink);
    }
}




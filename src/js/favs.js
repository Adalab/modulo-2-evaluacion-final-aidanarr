
// Función para pintar la lista de favoritos

function renderFavs(array) {
    return `<li id="${array.idDrink}">
    <p>${array.strDrink}</p>
    <img src="${array.strDrinkThumb}">
    </li>`
}

// Función para añadir a favoritos

function handleClickAddFav(event) {
    let targetId = event.currentTarget.id;
    
    //Recogemos el id del elemento li clicado, buscamos el elemento en el array drinks que contenga ese id y lo añadimos al array de favoritos
    const clickedDrink = drinks.find((drink) => drink.idDrink === targetId);
    
    // Verificamos que no esté ya en favoritos. Buscamos si en el array de favoritos hay algún elemento cuyo id coincida con el id de la bebida clicada
    const clickedDrinkIndex = faveDrinks.findIndex((drink) => drink.idDrink === targetId);

    // Si no está en el array de favoritos, el index será -1 y nos lo meterá dentro
    if (clickedDrinkIndex === -1) {
        faveDrinks.push(clickedDrink);
    } else {
        // Si ya está en el array, en ese caso lo borra (la constante clickedDrinkIndex nos indica su posición en el array, el 1 indica los elementos que se borran)
        faveDrinks.splice(clickedDrinkIndex, 1);
    }

    // Pintamos en el html la lista de favoritos
    faveList.innerHTML = "";
    for (let drink of faveDrinks) {
        faveList.innerHTML += renderFavs(drink);
    }

    // Volvemos a pintar la lista de bebidas buscadas en el html
    drinksArray(drinks);

}





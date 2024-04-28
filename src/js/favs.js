
// Función para pintar la lista de favoritos


function renderFavs(array) {
    return `<li id="${array.idDrink}">
    <p>${array.strDrink}</p>
    <img src="${array.strDrinkThumb}">
    </li>`
}

// Pintamos en el html la lista de favoritos
function favsArray() {
    faveList.innerHTML = "";
    if (favsLocalStorage !== null) {
        for (let drink of favsLocalStorage) {
            faveList.innerHTML += renderFavs(drink);
        }
    } else {
        for (let drink of faveDrinks) {
            faveList.innerHTML += renderFavs(drink);
        }
    } 
}

function clickedDrinkIndexLocal(targetId) {
    if (favsLocalStorage !== null) {
        const clickedDrinkIndexLocal = favsLocalStorage.findIndex((drink) => drink.idDrink === targetId);
        return clickedDrinkIndexLocal;
    }
}

//Función para añadir a favoritos

function handleClickAddFav(event) {
    let targetId = event.currentTarget.id;
    
    // if (favsLocalStorage !== null) {
    //     for (let drink of favsLocalStorage) {
    //         faveList.innerHTML += renderFavs(drink);
    //     }
    // } else {
    //     for (let drink of faveDrinks) {
    //         faveList.innerHTML += renderFavs(drink);
    //     }
    // }
    //Recogemos el id del elemento li clicado, buscamos el elemento en el array drinks que contenga ese id y lo añadimos al array de favoritos
    const clickedDrink = drinks.find((drink) => drink.idDrink === targetId);
    
    // Verificamos que no esté ya en favoritos. Buscamos si en el array de favoritos hay algún elemento cuyo id coincida con el id de la bebida clicada
    const clickedDrinkIndex = faveDrinks.findIndex((drink) => drink.idDrink === targetId);
    
// MODIFICA DESDE AQUÍ

    // Si no está en el array de favoritos, el index será -1 y nos lo meterá dentro
    if (clickedDrinkIndex === -1) {
        faveDrinks.push(clickedDrink);
    } else {
        // Si ya está en el array, en ese caso lo borra (la constante clickedDrinkIndex nos indica su posición en el array, el 1 indica los elementos que se borran)
        faveDrinks.splice(clickedDrinkIndex, 1);
    }


    // Pintamos en el html la lista de favoritos
    faveList.innerHTML = "";
    
    if (favsLocalStorage !== null) {
        if (clickedDrinkIndexLocal(targetId) !== -1) {
            favsLocalStorage.splice(clickedDrinkIndexLocal(targetId), 1);
        } else {
            favsLocalStorage.push(clickedDrink);
        }
        for (let drink of favsLocalStorage) {
            faveList.innerHTML += renderFavs(drink);
        }
    } else {
        for (let drink of faveDrinks) {
            faveList.innerHTML += renderFavs(drink);
        }
    }

// HASTA AQUÍ

    // Volvemos a pintar la lista de bebidas buscadas en el html
    drinksArray(drinks);

    // Guardamos los favoritos en Local Storage
    localStorage.setItem("fave drinks", JSON.stringify(faveDrinks));
}

// Ejecutamos la función favsArray para que nos pinte por defecto las bebidas favoritas de Local Storage (si las hay)
favsArray();






// function handleClickAddFav(event) {
//     let targetId = event.currentTarget.id;
    
//     if (favsLocalStorage !== null) {
//         for (let drink of favsLocalStorage) {
//             faveList.innerHTML += renderFavs(drink);
//         }
//     } else {
//         for (let drink of faveDrinks) {
//             faveList.innerHTML += renderFavs(drink);
//         }
//     }
//     //Recogemos el id del elemento li clicado, buscamos el elemento en el array drinks que contenga ese id y lo añadimos al array de favoritos
//     const clickedDrink = drinks.find((drink) => drink.idDrink === targetId);
    
//     // Verificamos que no esté ya en favoritos. Buscamos si en el array de favoritos hay algún elemento cuyo id coincida con el id de la bebida clicada
//     const clickedDrinkIndex = faveDrinks.findIndex((drink) => drink.idDrink === targetId);

//     // Si no está en el array de favoritos, el index será -1 y nos lo meterá dentro
//     if (clickedDrinkIndex === -1) {
//         faveDrinks.push(clickedDrink);
//     } else {
//         // Si ya está en el array, en ese caso lo borra (la constante clickedDrinkIndex nos indica su posición en el array, el 1 indica los elementos que se borran)
//         faveDrinks.splice(clickedDrinkIndex, 1);
//     }

//     // // Pintamos en el html la lista de favoritos
//     faveList.innerHTML = "";
//     for (let drink of faveDrinks) {
//         faveList.innerHTML += renderFavs(drink);
//     }
    
//     if (favsLocalStorage !== null) {
//         for (let drink of favsLocalStorage) {
//             faveList.innerHTML += renderFavs(drink);
//         }
//     } else {
//         for (let drink of faveDrinks) {
//             faveList.innerHTML += renderFavs(drink);
//         }
//     }

//     // Volvemos a pintar la lista de bebidas buscadas en el html
//     drinksArray(drinks);

//     // Guardamos los favoritos en Local Storage
//     localStorage.setItem("fave drinks", JSON.stringify(faveDrinks));
// }






    // // Si no está en el array de favoritos, el index será -1 y nos lo meterá dentro
    // if (clickedDrinkIndex === -1) {
    //     faveDrinks.push(clickedDrink);
    // } else {
    //     // Si ya está en el array, en ese caso lo borra (la constante clickedDrinkIndex nos indica su posición en el array, el 1 indica los elementos que se borran)
    //     faveDrinks.splice(clickedDrinkIndex, 1);
    // }


    // // Pintamos en el html la lista de favoritos
    // faveList.innerHTML = "";
    
    // if (favsLocalStorage !== null) {
    //     for (let drink of favsLocalStorage) {
    //         faveList.innerHTML += renderFavs(drink);
    //     }
    // } else {
    //     for (let drink of faveDrinks) {
    //         faveList.innerHTML += renderFavs(drink);
    //     }
    // }
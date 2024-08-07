const IMAGE_URL = "https://placehold.co/200";

const USER = {
id: 1,
username: "User Name",
description: "me gustan los gatitos",
age: "27",
fav_music:{
    bands: ["Rammstein","Intepool","Tool","Black Sabbath"],
},
};


//Selectores
const card = document.getElementById("card-container");
const cardImgContainer = document.getElementById ("card-img-container");

// Crear ELEMENTO img
const imageElement = document.createElement("img");
imageElement.src = IMAGE_URL;
imageElement.alt = "User profile photo";

//Creamos elemento título -> card
const cardTitleElement = document.createElement("h3");
cardTitleElement.classList.add("card-title");
const cardAgeElement = document.createElement("p");
const cardDescElement = document.createElement("p");
const cardFavMusic = document.createElement("ul");

//Poblar
cardTitleElement.textContent = USER.username;
cardAgeElement.textContent = USER.age;
cardDescElement.textContent = USER.description;

//Poblar cardFavMusic
cardFavMusic.textContent = USER.fav_music.bands.forEach ((band) => {
    const bandElement = document.createElement("li");
    bandElement.textContent = band;
    cardFavMusic
})

//Renderizar = mostrarlos en pantalla
cardImgContainer.appendChild(imageElement);
card.append(cardTitleElement, cardAgeElement, cardDescElement);
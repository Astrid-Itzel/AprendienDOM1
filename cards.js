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

const USER2 = {
    id: 2,
    username: "User Lastname",
    description: "lorem lorem lorem",
    age: "23",
    fav_music:{
        bands: ["Band 1","Band 2","Band 3","Band 4"],
    },
    };

    const USER3 = {
        id: 3,
        username: "User Name 2",
        description: "lorem ipsum",
        age: "46",
        fav_music:{
            bands: ["Band 1","Band 2","Band 3","Band 4"],
        },
        };
    
//Crear la primera tarjeta
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
USER.fav_music.bands.forEach(band => {
    const bandElement = document.createElement("li");
    bandElement.textContent = band;
    cardFavMusic.appendChild(bandElement);
});


//Renderizar = mostrarlos en pantalla
cardImgContainer.appendChild(imageElement);
card.append(cardTitleElement, cardAgeElement, cardDescElement, cardFavMusic);


////////////////////


    
    //Selectores
    const card2 = document.getElementById("card-container2");
    const cardImgContainer2 = document.getElementById ("card-img-container2");
    
    // Crear ELEMENTO img
    const imageElement2 = document.createElement("img");
    imageElement2.src = IMAGE_URL;
    imageElement2.alt = "User profile photo";
    
    //Creamos elemento título -> card
    const cardTitleElement2 = document.createElement("h3");
    cardTitleElement.classList.add("card-title");
    const cardAgeElement2 = document.createElement("p");
    const cardDescElement2 = document.createElement("p");
    const cardFavMusic2 = document.createElement("ul");
    
    //Poblar
    cardTitleElement2.textContent = USER2.username;
    cardAgeElement2.textContent = USER2.age;
    cardDescElement2.textContent = USER2.description;
    
    //Poblar cardFavMusic
    USER2.fav_music.bands.forEach(band => {
        const bandElement = document.createElement("li");
        bandElement.textContent = band;
        cardFavMusic2.appendChild(bandElement);
    });
    
    
    //Renderizar = mostrarlos en pantalla
    cardImgContainer2.appendChild(imageElement2);
    card2.append(cardTitleElement2, cardAgeElement2, cardDescElement2, cardFavMusic2);

    /////////////////////////////

       
    //Selectores
    const card3 = document.getElementById("card-container3");
    const cardImgContainer3 = document.getElementById ("card-img-container3");
    
    // Crear ELEMENTO img
    const imageElement3 = document.createElement("img");
    imageElement3.src = IMAGE_URL;
    imageElement3.alt = "User profile photo";
    
    //Creamos elemento título -> card
    const cardTitleElement3 = document.createElement("h3");
    cardTitleElement.classList.add("card-title");
    const cardAgeElement3 = document.createElement("p");
    const cardDescElement3 = document.createElement("p");
    const cardFavMusic3 = document.createElement("ul");
    
    //Poblar
    cardTitleElement3.textContent = USER2.username;
    cardAgeElement3.textContent = USER2.age;
    cardDescElement3.textContent = USER2.description;
    
    //Poblar cardFavMusic
    USER3.fav_music.bands.forEach(band => {
        const bandElement = document.createElement("li");
        bandElement.textContent = band;
        cardFavMusic3.appendChild(bandElement);
    });
    
    
    //Renderizar = mostrarlos en pantalla
    cardImgContainer3.appendChild(imageElement3);
    card3.append(cardTitleElement3, cardAgeElement3, cardDescElement3, cardFavMusic3);
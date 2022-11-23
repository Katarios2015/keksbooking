import { Boockings } from "./data.js";


const cardTemplatePopup = document.querySelector("#card")
    .content
    .querySelector(".popup");
const mapCanvas = document.querySelector("#map-canvas");
const cardFragment = document.createDocumentFragment();

Boockings.forEach(({ offer, author }) => {
    const cardClone = cardTemplatePopup.cloneNode(true);
    cardClone.querySelector(".popup__title").textContent = offer.title;
    cardClone.querySelector(".popup__text--address").textContent = offer.address;
    cardClone.querySelector(".popup__text--price").textContent = offer.price + " ₽";
    cardClone.querySelector(".popup__text--capacity").textContent =
    offer.room + " комнаты" + " " + " для" + " " + offer.guest + " гостей";

    cardClone.querySelector(".popup__text--time").textContent =
    "Заезд после" + " " + offer.checkin + " " + "выезд до" + " " + offer.checkout;

    cardClone.querySelector(".popup__features").textContent = offer.features;
    cardClone.querySelector(".popup__description").textContent = offer.description;
    cardClone.querySelector(".popup__photo").src = offer.photo;
    cardClone.querySelector(".popup__avatar").src = author.avatar;


    if (offer.type === "flat") {
        cardClone.querySelector(".popup__type").textContent = "Квартира";
    }
    if (offer.type === "bungalow") {
        cardClone.querySelector(".popup__type").textContent = "Бунгало";
    }
    if (offer.type === "house") {
        cardClone.querySelector(".popup__type").textContent = "Дом";
    }
    if (offer.type === "palace") {
        cardClone.querySelector(".popup__type").textContent = "Дворец";
    }
    cardFragment.appendChild(cardClone);
});

mapCanvas.appendChild(cardFragment);

import {map} from "./activate-page.js";

const cardTemplatePopup = document.querySelector("#card")
    .content
    .querySelector(".popup");

const createCard = (offer, author) => {

    const cardClone = cardTemplatePopup.cloneNode(true);
    if(offer.title === "") {
        cardClone.querySelector(".popup__title").classList.add("hidden");
    } else {
        cardClone.querySelector(".popup__title").classList.remove("hidden");
        cardClone.querySelector(".popup__title").textContent = offer.title;
    }

    if(offer.address === "") {
        cardClone.querySelector(".popup__text--address").classList.add("hidden");
    } else {
        cardClone.querySelector(".popup__text--address").classList.remove("hidden");
        cardClone.querySelector(".popup__text--address").textContent = offer.address;
    }
    if(offer.price === "") {
        cardClone.querySelector(".popup__text--price").classList.add("hidden");
    } else {
        cardClone.querySelector(".popup__text--price").classList.remove("hidden");
        cardClone.querySelector(".popup__text--price").textContent = offer.price + " ₽";
    }
    if(offer.rooms === "" && offer.guests==="") {
        cardClone.querySelector(".popup__text--capacity").classList.add("hidden");
    } else {
        cardClone.querySelector(".popup__text--capacity").classList.remove("hidden");
        cardClone.querySelector(".popup__text--capacity").textContent =
    offer.rooms + " комнаты" + " " + " для" + " " + offer.guests + " гостей";
    }
    if(offer.checkin === "" && offer.checkout==="") {
        cardClone.querySelector(".popup__text--time").classList.add("hidden");
    } else {
        cardClone.querySelector(".popup__text--time").classList.remove("hidden");
        cardClone.querySelector(".popup__text--time").textContent =
    "Заезд после" + " " + offer.checkin + " " + "выезд до" + " " + offer.checkout;

    }

    if(offer.features === [""]) {
        cardClone.querySelector(".popup__features").classList.add("hidden");
    } else {
        cardClone.querySelector(".popup__features").classList.remove("hidden");
        cardClone.querySelector(".popup__features").textContent = offer.features;
    }

    if(offer.description ==="") {
        cardClone.querySelector(".popup__description").classList.add("hidden");
    } else {
        cardClone.querySelector(".popup__description").classList.remove("hidden");
        cardClone.querySelector(".popup__description").textContent = offer.description;
    }

    if(offer.photo === "") {
        cardClone.querySelector(".popup__photo").classList.add("hidden");
    } else {
        cardClone.querySelector(".popup__photo").classList.remove("hidden");
        cardClone.querySelector(".popup__photo").src = offer.photo;
    }

    if(author.avatar === "") {
        cardClone.querySelector(".popup__avatar").classList.add("hidden");
    } else {
        cardClone.querySelector(".popup__avatar").classList.remove("hidden");
        cardClone.querySelector(".popup__avatar").src = author.avatar;
    }

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

    return cardClone;

};

// eslint-disable-next-line no-undef
let markers = L.layerGroup();


const renderFlatList = (Boockings) => {
    Boockings.forEach(({location, offer, author}) => {
        const {lat, lng} = location;
        // eslint-disable-next-line no-undef
        const markerIcon = L.icon({
            iconUrl: "./leaflet/img/pin.svg",
            iconSize: [40, 40],
            iconAnchor: [20, 40],
        });
        // eslint-disable-next-line no-undef
        const marker = L.marker(
            {
                lat,
                lng,
            },
            {
                icon: markerIcon,
            },
        );

        markers.addLayer(marker);
        marker.bindPopup(
            createCard(offer, author),
        );

        /*markers.addTo(map);*/

    });
};

export{markers, createCard};

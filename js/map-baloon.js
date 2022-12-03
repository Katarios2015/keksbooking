/*import { Boockings } from "./data.js";*/

const adForm = document.querySelector(".ad-form");
adForm.classList.add("ad-form--disabled");

const mapFiltersForm = document.querySelector(".map__filters");
mapFiltersForm.classList.add("map__filters--disabled");

const inputUploadAvatar = adForm.querySelector("#avatar");
const mapfeatureFieldset = mapFiltersForm.querySelector(".map__features");
const InputAddress = adForm.querySelector("#address");
InputAddress.setAttribute("readonly",true);
const mapCanvas = document.querySelector("#map-canvas");

const fieldsets = Array.from(adForm.querySelectorAll(".ad-form__element"));
const mapFilters = Array.from(mapFiltersForm.querySelectorAll(".map__filter"));

const makeDisable = (unit) => {
    if (Array.isArray(unit)){
        unit.forEach((element)=>{
            element.disabled = "disabled";
        });
    }  unit.disabled = "disabled";
};
makeDisable(fieldsets);
makeDisable(mapFilters);
makeDisable(mapfeatureFieldset);
makeDisable(inputUploadAvatar);

const removeDisable = (unit) => {
    if (Array.isArray(unit)){
        unit.forEach((element)=>{
            element.disabled = "";
        });
    }  unit.disabled = "";
};



// eslint-disable-next-line no-undef
const map = L.map(mapCanvas)
    .on("load", () => {
        const coordCenter = {
            lat: 35.681729,
            lng: 139.753927,
        };
        InputAddress.value =  parseFloat(coordCenter.lat.toFixed(5)) + ", " + parseFloat(coordCenter.lng.toFixed(5));
        adForm.classList.remove("ad-form--disabled");
        mapFiltersForm.classList.remove("map__filters--disabled");
        removeDisable(fieldsets);
        removeDisable(mapFilters);
        removeDisable(mapfeatureFieldset);
        removeDisable(inputUploadAvatar);
    })
    .setView({
        lat: 35.681729,
        lng: 139.753927,
    }, 10);

// eslint-disable-next-line no-undef
L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
    },
).addTo(map);

// eslint-disable-next-line no-undef
const mainMarkerIcon = L.icon({
    iconUrl: "./leaflet/img/main-pin.svg",
    iconSize: [52, 52],
    iconAnchor: [26, 52],
});

// eslint-disable-next-line no-undef
const mainMarker = L.marker(
    {
        lat: 35.681729,
        lng: 139.753927,
    },
    {
        draggable: true,
        icon: mainMarkerIcon,
    },
);

mainMarker.addTo(map);
mainMarker.on("moveend", (evt) => {
    const coord = evt.target.getLatLng();
    InputAddress.value =  parseFloat(coord.lat.toFixed(5)) + ", " + parseFloat(coord.lng.toFixed(5));
});

const cardTemplatePopup = document.querySelector("#card")
    .content
    .querySelector(".popup");

const createCard = (offer, author) => {

    const cardClone = cardTemplatePopup.cloneNode(true);


    if(offer.title==="") {
        cardClone.querySelector(".popup__title").classList.add("hidden");
    } else {
        cardClone.querySelector(".popup__title").classList.remove("hidden");
        cardClone.querySelector(".popup__title").textContent = offer.title;
    }

    if(offer.address==="") {
        cardClone.querySelector(".popup__text--address").classList.add("hidden");
    } else {
        cardClone.querySelector(".popup__text--address").classList.remove("hidden");
        cardClone.querySelector(".popup__text--address").textContent = offer.address;
    }
    if(offer.price==="") {
        cardClone.querySelector(".popup__text--price").classList.add("hidden");
    } else {
        cardClone.querySelector(".popup__text--price").classList.remove("hidden");
        cardClone.querySelector(".popup__text--price").textContent = offer.price + " ₽";
    }
    if(offer.room==="" && offer.guests==="") {
        cardClone.querySelector(".popup__text--capacity").classList.add("hidden");
    } else {
        cardClone.querySelector(".popup__text--capacity").classList.remove("hidden");
        cardClone.querySelector(".popup__text--capacity").textContent =
    offer.rooms + " комнаты" + " " + " для" + " " + offer.guests + " гостей";
    }
    if(offer.checkin==="" && offer.checkout==="") {
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

    if(offer.description==="") {
        cardClone.querySelector(".popup__description").classList.add("hidden");
    } else {
        cardClone.querySelector(".popup__description").classList.remove("hidden");
        cardClone.querySelector(".popup__description").textContent = offer.description;
    }

    if(offer.photo==="") {
        cardClone.querySelector(".popup__photo").classList.add("hidden");
    } else {
        cardClone.querySelector(".popup__photo").classList.remove("hidden");
        cardClone.querySelector(".popup__photo").src = offer.photo;
    }

    if(author.avatar==="") {
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

        marker.addTo(map);
        marker.bindPopup(
            createCard(offer, author),
        );
    });
};




export{adForm};
export{renderFlatList};


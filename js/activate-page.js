import {makeDisable, removeDisable} from "./util.js";

const adForm = document.querySelector(".ad-form");
adForm.classList.add("ad-form--disabled");

const mapFiltersForm = document.querySelector(".map__filters");
mapFiltersForm.classList.add("map__filters--disabled");

const inputUploadAvatar = adForm.querySelector("#avatar");
const mapfeatureFieldset = mapFiltersForm.querySelector(".map__features");
const InputAddress = adForm.querySelector("#address");
InputAddress.setAttribute("readonly", true);
const mapCanvas = document.querySelector("#map-canvas");

const fieldsets = Array.from(adForm.querySelectorAll(".ad-form__element"));
const mapFilters = Array.from(mapFiltersForm.querySelectorAll(".map__filter"));

const coordCenter = {
    lat: 35.681729,
    lng: 139.753927,
};



makeDisable(fieldsets);
makeDisable(mapFilters);
makeDisable(mapfeatureFieldset);
makeDisable(inputUploadAvatar);


// eslint-disable-next-line no-undef
const map = L.map(mapCanvas)
    .on("load", () => {
        coordCenter ;
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

export{adForm, map, InputAddress, coordCenter, mainMarker, mapFiltersForm};

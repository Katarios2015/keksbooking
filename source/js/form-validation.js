import {isEscEvent} from "./util.js";
import {adForm, InputAddress, coordCenter, mainMarker, mapFiltersForm} from "./activate-page.js";

// eslint-disable-next-line no-undef
const latLng = L.latLng(coordCenter);

const successMassage = document.querySelector("#success")
    .content
    .querySelector(".success");

const successFragment = document.createDocumentFragment();
const successClone = successMassage.cloneNode(true);

successFragment.appendChild(successClone);

const failMassage = document.querySelector("#error")
    .content
    .querySelector(".error");

const failFragment = document.createDocumentFragment();
const failClone = failMassage.cloneNode(true);

failFragment.appendChild(failClone);

const btnError = failClone.querySelector(".error__button");
const btnReset = adForm.querySelector(".ad-form__reset");
const coordMarker = mainMarker.getLatLng();
const tagBody = document.querySelector("body");

btnReset.addEventListener ("click", (evt) => {
    evt.preventDefault();
    adForm.reset();
    mapFiltersForm.reset();
    mainMarker.setLatLng(latLng);
    InputAddress.value =  parseFloat(coordMarker.lat.toFixed(5)) + ", " + parseFloat(coordMarker.lng.toFixed(5));

});

adForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    fetch(
        "https://23.javascript.pages.academy/keksobooking",
        {
            method: "POST",
            body: formData,
        },
    )   .then((response) => response.json())
        .then(() => {
            tagBody.appendChild(successFragment);
            successClone.classList.remove("hidden");
            document.addEventListener("keydown", (evt) => {
                if (isEscEvent(evt)) {
                    evt.preventDefault();
                    successClone.classList.add("hidden");
                }
            });
            document.addEventListener("click", () => {
                successClone.classList.add("hidden");
            });
            evt.target.reset();
            mapFiltersForm.reset();
            mainMarker.setLatLng(latLng);
            InputAddress.value =  parseFloat(coordMarker.lat.toFixed(5)) + ", " + parseFloat(coordMarker.lng.toFixed(5));
        })
        .catch(() => {
            tagBody.appendChild(failFragment);
            failClone.classList.remove("hidden");
            document.addEventListener("keydown", (evt) => {
                if (isEscEvent(evt)) {
                    evt.preventDefault();
                    failClone.classList.add("hidden");
                }
            });
            document.addEventListener("click", () => {
                failClone.classList.add("hidden");
            });
            btnError.addEventListener("click", () => {
                failClone.classList.add("hidden");
            });
        });
});



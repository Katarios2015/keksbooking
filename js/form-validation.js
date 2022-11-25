import {adForm} from "./map-baloon.js";
import {rentPrice} from "./auto-change-input.js";

const formTitle = adForm.querySelector("#title");
const roomNumber = adForm.querySelector("#room_number");
const capacity = adForm.querySelector("#capacity");

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_LENGTH = 1000000;


formTitle.addEventListener ("input", () => {
    const valueLength = formTitle.value.length;
    if (valueLength < MIN_TITLE_LENGTH) {
        formTitle.setCustomValidity("Минимальная длина — 30 символов, " + "ещё " + (MIN_TITLE_LENGTH - valueLength));
    }
    else if (valueLength > MAX_TITLE_LENGTH) {
        formTitle.setCustomValidity("Максимальная длина — 100 символов");
    } else if (formTitle.validity.valueMissing) {
        formTitle.setCustomValidity("Обязательное поле");
    } else {
        formTitle.setCustomValidity(""); //сброс сообщения, если ошибок больше нет
    }
    formTitle.reportValidity();//отслеживать каждый ввод с клавиатуры
});

rentPrice.addEventListener ("input", () => {
    const valuePriceNumber = rentPrice.value;
    if (valuePriceNumber > MAX_PRICE_LENGTH) {
        rentPrice.setCustomValidity("Максимальное значение — 1 000 000");
    } else if (rentPrice.validity.valueMissing) {
        rentPrice.setCustomValidity("Обязательное поле");
    } else {
        rentPrice.setCustomValidity(""); //сброс сообщения, если ошибок больше нет
    }
    rentPrice.reportValidity();//отслеживать каждый ввод с клавиатуры
});

const checkRoomsNumber = () => {
    if(roomNumber.value === "1") {
        if(capacity.value !==roomNumber.value) {
            capacity.setCustomValidity("Максимальное количество гостей - 1 гость");
        }else {
            capacity.setCustomValidity(""); //сброс сообщения, если ошибок больше нет
        }
    }
    if(roomNumber.value === "2") {
        if(capacity.value==="3"|| capacity.value==="0") {
            capacity.setCustomValidity("количество гостей - 2 гостя или 1 гость");
        }else {
            capacity.setCustomValidity(""); //сброс сообщения, если ошибок больше нет
        }
    }
    if(roomNumber.value === "3") {
        if(capacity.value==="0") {
            capacity.setCustomValidity("Выберите количество гостей: 1,2 или 3 гостя");
        }else {
            capacity.setCustomValidity(""); //сброс сообщения, если ошибок больше нет
        }
    }
    if(roomNumber.value === "100") {
        if(capacity.value!=="0") {
            capacity.setCustomValidity("Не для гостей");
        }else {
            capacity.setCustomValidity(""); //сброс сообщения, если ошибок больше нет
        }
    }
    capacity.reportValidity();
};
checkRoomsNumber();

capacity.addEventListener ("change", () => checkRoomsNumber());


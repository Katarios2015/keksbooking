import {renderFlatList} from "./map-baloon.js";
import {showAlert} from "./util.js";

const BALOONS_COUNT = 10;


const checkStatus = (response) => {
    if (response.ok) {
        return response;
    }

    const {statusText, status} = response;
    throw new Error(`${status} — ${statusText}`+ ", перезагрузите страницу");
};


fetch ("https://23.javascript.pages.academy/keksobooking/data")
    .then(checkStatus)
    .then((response) => response.json())
    .then((boockings) => {
        renderFlatList(boockings.slice(0, BALOONS_COUNT));

    })
    .catch((error) => {showAlert(error);});


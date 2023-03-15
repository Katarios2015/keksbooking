import {showAlert} from "./util.js";

const BALOONS_COUNT = 10;

const checkStatus = (response) => {
    if (response.ok) {
        return response;
    }

    const {statusText, status} = response;
    throw new Error(`${status} — ${statusText}`+ ", перезагрузите страницу");
};

const getData = (onSuccess) => {
    fetch ("https://23.javascript.pages.academy/keksobooking/data")
        .then(checkStatus)
        .then((response) => response.json())
        .then((boockings) => {
            onSuccess(boockings);
        })
        .catch((error) => {showAlert(error);});
};

export{getData, BALOONS_COUNT};

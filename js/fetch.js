import {renderFlatList} from "./map-baloon.js";

const BALOONS_COUNT = 10;

fetch ("https://23.javascript.pages.academy/keksobooking/data")
    .then((response) => response.json())
    .then((boockings) => {
        renderFlatList(boockings.slice(0, BALOONS_COUNT));

    });

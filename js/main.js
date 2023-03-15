// eslint-disable-next-line no-unused-vars
/* global _:readonly */
import "./util.js";
import "./data.js";
import "./auto-change-input.js";
import "./map-baloon.js";
import "./form-validation.js";
import "./form-validation-before-submit.js";
import  {renderSimilarBookingList, houseTypeChange, housePriceChange, houseRoomsChange,
    houseGuestsChange, wifiChange, dishChange, parkingChange, washerChange, elevatorChange, condotionerChange}
    from "./map-filters.js";

import {getData} from "./fetch.js";
import "./upload-photo.js";

const RERENDER_DELAY = 500;

getData((bookings) => {
    renderSimilarBookingList(bookings);
    houseTypeChange(_.debounce(
        () => renderSimilarBookingList(bookings),
        RERENDER_DELAY,
    ));
    housePriceChange(_.debounce(
        () => renderSimilarBookingList(bookings),
        RERENDER_DELAY,
    ));
    houseRoomsChange(_.debounce(
        () => renderSimilarBookingList(bookings),
        RERENDER_DELAY,
    ));
    houseGuestsChange(_.debounce(
        () => renderSimilarBookingList(bookings),
        RERENDER_DELAY,
    ));
    wifiChange(_.debounce(
        () => renderSimilarBookingList(bookings),
        RERENDER_DELAY,
    ));
    dishChange(_.debounce(
        () => renderSimilarBookingList(bookings),
        RERENDER_DELAY,
    ));
    parkingChange(_.debounce(
        () => renderSimilarBookingList(bookings),
        RERENDER_DELAY,
    ));
    washerChange(_.debounce(
        () => renderSimilarBookingList(bookings),
        RERENDER_DELAY,
    ));
    elevatorChange(_.debounce(
        () => renderSimilarBookingList(bookings),
        RERENDER_DELAY,
    ));
    condotionerChange(_.debounce(
        () => renderSimilarBookingList(bookings),
        RERENDER_DELAY,
    ));
});


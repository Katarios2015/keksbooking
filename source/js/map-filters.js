/* eslint-disable indent */
import {mapFiltersForm, map} from "./activate-page.js";
import {BALOONS_COUNT} from "./fetch.js";
import {markers, createCard} from "./map-baloon.js";


const DEFAULT = "any";
const houseType = mapFiltersForm.querySelector("#housing-type");
const housePrice = mapFiltersForm.querySelector("#housing-price");
const houseRooms = mapFiltersForm.querySelector("#housing-rooms");
const houseGuests = mapFiltersForm.querySelector("#housing-guests");

/*const houseFeatures = mapFiltersForm.querySelectorAll("[name='features']");*/

const featureWifi = mapFiltersForm.querySelector("#filter-wifi");
const featureDishwasher = mapFiltersForm.querySelector("#filter-dishwasher");
const featureParking = mapFiltersForm.querySelector("#filter-parking");
const featureWasher = mapFiltersForm.querySelector("#filter-washer");
const featureElevator = mapFiltersForm.querySelector("#filter-elevator");
const featureConditioner = mapFiltersForm.querySelector("#filter-conditioner");


const houseFeaturesCheckWifi = (item) => {
  let featuresMass = item.offer.features;
  if(featuresMass) {
    for (let i = 0; i <= featuresMass.length; i++) {
      if((featuresMass[i] === featureWifi.value) || (featureWifi.checked === false)) {
        return true;
      } if (featuresMass[i] === undefined) {
        return false;
      }
    }
  }
  else {
    return false;
  }
};


const houseFeaturesCheckDish = (item) => {
  let featuresMass = item.offer.features;
  if(featuresMass) {
      for (let i = 0; i <= featuresMass.length; i++) {
    if((featuresMass[i] === featureDishwasher.value) || (featureDishwasher.checked === false)) {
      return true;
      } if (featuresMass[i] === undefined) {
              return false;
          }
      }
  }
  else {
      return false;
  }
};

const houseFeaturesCheckParking = (item) => {
  let featuresMass = item.offer.features;
  if(featuresMass) {
    for (let i = 0; i <= featuresMass.length; i++) {
      if((featuresMass[i] === featureParking.value) || (featureParking.checked === false)) {
        return true;
      } if (featuresMass[i] === undefined) {
        return false;
      }
    }
  }
  else {
    return false;
  }
};


const houseFeaturesCheckWasher = (item) => {
  let featuresMass = item.offer.features;
  if(featuresMass) {
      for (let i = 0; i <= featuresMass.length; i++) {
    if((featuresMass[i] === featureWasher.value) || (featureWasher.checked === false)) {
      return true;
      } if (featuresMass[i] === undefined) {
              return false;
          }
      }
  }
  else {
      return false;
  }
};

const houseFeaturesCheckElevator = (item) => {
  let featuresMass = item.offer.features;
  if(featuresMass) {
    for (let i = 0; i <= featuresMass.length; i++) {
      if((featuresMass[i] === featureElevator.value) || (featureElevator.checked === false)) {
        return true;
      } if (featuresMass[i] === undefined) {
        return false;
      }
    }
  }
  else {
    return false;
  }
};


const houseFeaturesCheckConditioner = (item) => {
  let featuresMass = item.offer.features;
  if(featuresMass) {
      for (let i = 0; i <= featuresMass.length; i++) {
    if((featuresMass[i] === featureConditioner.value) || (featureConditioner.checked === false)) {
      return true;
      } if (featuresMass[i] === undefined) {
              return false;
          }
      }
  }
  else {
      return false;
  }
};


const getSameHouse = (item) => {

    if ((item.offer.type === houseType.value) || (houseType.value === DEFAULT)) {
        /*console.log(String(item.offer.features));*/
        return true;
    }

};

const getSameRooms = (item) => {
    if ((item.offer.rooms === (Number(houseRooms.value))) || (houseRooms.value === DEFAULT)) {
        return true;
    }
};

const getSameGuests = (item) => {
    if ((item.offer.guests === (Number(houseGuests.value))) || (houseGuests.value === DEFAULT)) {
        return true;
    }
};

const getSamePrice = (item) => {
    if((housePrice.value === "middle") || (housePrice.value === DEFAULT)) {
        if ((item.offer.price >= 10000 && item.offer.price <= 50000)) {
            return true;
        }
    } else if((housePrice.value === "low") || (housePrice.value === DEFAULT)) {
        if ((item.offer.price <= 10000)) {
            return true;
        }
    } else if ((housePrice.value === "high") || (housePrice.value === DEFAULT)) {
        if ((item.offer.price >= 50000)){
            return true;
        }
    }
};



const renderSimilarBookingList = (similarBookings) => {
    similarBookings
        .slice()
        .filter(item => getSameHouse(item) && getSameRooms(item)
        && getSameGuests(item)
        && getSamePrice(item)
        && houseFeaturesCheckWifi(item)
        && houseFeaturesCheckDish(item)
        && houseFeaturesCheckConditioner(item)
        && houseFeaturesCheckElevator(item)
        && houseFeaturesCheckWasher(item)
        && houseFeaturesCheckParking(item)
        )
        .slice(0, BALOONS_COUNT)
        .forEach(({location, offer, author}) => {
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

            markers.addTo(map);
        });
    console.log(similarBookings);
};

const houseTypeChange = (cb) => {
    houseType.addEventListener("change", function ()  {
        markers.closePopup();
        markers.clearLayers();
        cb();
    });
};

const housePriceChange = (cb) => {
    housePrice.addEventListener("change", function ()  {
        markers.closePopup();
        markers.clearLayers();
        cb();
    });
};

const houseRoomsChange = (cb) => {
    houseRooms.addEventListener("change", function ()  {
        markers.closePopup();
        markers.clearLayers();
        cb();
    });
};

const houseGuestsChange = (cb) => {
    houseGuests.addEventListener("change", function ()  {
        markers.closePopup();
        markers.clearLayers();
        cb();
    });
};


const wifiChange = (cb) => {
  featureWifi.addEventListener("change", function ()  {
          markers.closePopup();
          markers.clearLayers();
          cb();
      });
  };

  const dishChange = (cb) => {
    featureDishwasher.addEventListener("change", function ()  {
            markers.closePopup();
            markers.clearLayers();
            cb();
        });
    };

    const parkingChange = (cb) => {
      featureParking.addEventListener("change", function ()  {
              markers.closePopup();
              markers.clearLayers();
              cb();
          });
      };

      const washerChange = (cb) => {
        featureWasher.addEventListener("change", function ()  {
                markers.closePopup();
                markers.clearLayers();
                cb();
            });
        };

        const elevatorChange = (cb) => {
          featureElevator.addEventListener("change", function ()  {
                  markers.closePopup();
                  markers.clearLayers();
                  cb();
              });
          };

          const condotionerChange = (cb) => {
            featureConditioner.addEventListener("change", function ()  {
                    markers.closePopup();
                    markers.clearLayers();
                    cb();
                });
            };




export {renderSimilarBookingList, houseTypeChange, housePriceChange, houseRoomsChange, houseGuestsChange, wifiChange, dishChange,
  parkingChange, washerChange, elevatorChange, condotionerChange};




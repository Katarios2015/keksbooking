/*const getRandomNumber = (min, max) => {
    if (min < 0 || max < 0) {
        return -1;
    }
    if (max <= min) {
        [min, max] = [max, min];
    }
    let num = Math.floor(min + Math.random() * (max - min + 1));
    return num;
};

const getRandomFloatNumber = (min, max, afterComma) => {
    if (min < 0 || max < 0) {
        return -1;
    }

    if (max <= min) {
        [min, max] = [max, min];
    }

    let num = Number((min + Math.random()*(max - min + 1)).toFixed(afterComma));

    return num;
};*/
function getRandomArrayElement(elements) {
    // eslint-disable-next-line no-undef
    return elements[_.random(0, elements.length - 1)];
}


let accumlator = 0;


const getRandomArray = (someArray) => {
    // eslint-disable-next-line no-undef
    const randArrayLength = _.random(0, someArray.length-1);
    let newMass = [];

    for(let i = 0; i<= randArrayLength; i++) {
        accumlator =+ i;
        newMass[i] = someArray[accumlator];
    }
    return newMass;
};

const showAlert = (message) => {
    const alertContainer = document.createElement("div");
    alertContainer.style.zIndex = 100;
    alertContainer.style.position = "absolute";
    alertContainer.style.left = 0;
    alertContainer.style.top = 0;
    alertContainer.style.right = 0;
    alertContainer.style.padding = "10px 3px";
    alertContainer.style.fontSize = "30px";
    alertContainer.style.textAlign = "center";
    alertContainer.style.backgroundColor = "#D2691E";

    alertContainer.textContent = message;

    document.body.append(alertContainer);
};

const isEscEvent = (evt) => {
    return evt.key === "Escape" || evt.key === "Esc";
};

const makeDisable = (unit) => {
    if (Array.isArray(unit)) {
        unit.forEach((element)=> {
            element.disabled = "disabled";
        });
    }  unit.disabled = "disabled";
};

const removeDisable = (unit) => {
    if (Array.isArray(unit)){
        unit.forEach((element)=>{
            element.disabled = "";
        });
    }  unit.disabled = "";
};

export{getRandomArrayElement, getRandomArray, showAlert, isEscEvent, makeDisable, removeDisable};

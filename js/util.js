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

export{getRandomArrayElement, getRandomArray};

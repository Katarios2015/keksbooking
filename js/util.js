const getRandomNumber = (min, max) => {
    if (min < 0 || max < 0) {
        return -1;
    }
    if (max <= min) {
        [min, max] = [max, min];
    }
    let num = Math.floor(min + Math.random() * (max - min + 1));
    return num;
};

console.log(getRandomNumber(10,10,2));

const getRandomFloatNumber = (min, max, afterComma) => {
    if (min < 0 || max < 0) {
        return -1;
    }

    if (max <= min) {
        [min, max] = [max, min];
    }

    let num = Number((min + Math.random()*(max - min + 1)).toFixed(afterComma));

    return num;
};

console.log(getRandomFloatNumber(10,10,2));

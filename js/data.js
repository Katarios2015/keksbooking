import {getRandomArrayElement, getRandomArray} from "./util.js";
/*генерация объектов из массивов*/
const OBJ_COUNT = 1;
const TITLES = [
    "Квартира",
    "Замок",
    "Комната",
    "Коттедж",
    "Угол",
    "Стена",
    "Комната",
    "Коттедж",
    "Ванная",
    "Туалет"
];

const TYPES = [
    "palace",
    "flat",
    "house",
    "bungalow"
];

const DESCRIPTIONS = [
    "Крассивые аппарты",
    "Отличный вид",
    "Не берите с собой котов",
    "Берите с собой собак",
    "Для посетителей с деьтьми",
    "Есть все что нужно туристам, влюбленным и женатым",
    "Вам Понравится",
    "Крассивые ХАромы",
    "",
    "увидите сами"
];

const PHOTOS = [
    "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
    "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
    "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
];

const ROOMS =  new Array(OBJ_COUNT).fill(null).map(() => {
    // eslint-disable-next-line no-undef
    return _.random(1, 5);
});

/*console.log("rooms: " + ROOMS);*/

const GUESTS = new Array(OBJ_COUNT).fill(null).map(() => {
    // eslint-disable-next-line no-undef
    return _.random(1, 5);
});

const CHECKINS = ["12:00", "13:00", "14:00"];
const CHECKOUT = ["12:00", "13:00", "14:00"];

const FEATURESMASS = [
    "wifi",
    "dishwasher",
    "parking",
    "washer",
    "elevator",
    "conditioner"
];

const PRICES = new Array(OBJ_COUNT).fill(null).map(() => {
    // eslint-disable-next-line no-undef
    return _.random(2000, 10000);
});


let avatarNumber = 0;
const createAuthors = () => {

    for(let i = 1; i <= OBJ_COUNT; i++) {
        avatarNumber +=i;
        return `img/avatars/user0${avatarNumber}.png`;
    }

};

const createLocations = () => {
    // eslint-disable-next-line no-undef
    const randomX = _.random(35.65000, 35.70000);
    // eslint-disable-next-line no-undef
    const randomY = _.random(139.70000, 139.80000);
    return {
        x: randomX,
        y: randomY
    };
};

const LOCATIONS = new Array(OBJ_COUNT).fill(null).map(() => createLocations());


const stringLocations = LOCATIONS.map((el) => {
    let coord = el.x +"," + el.y;
    return coord;
});



const createBookingObject = () => {
    return {
        author: {avatar: createAuthors()},
        offer: {
            title: getRandomArrayElement(TITLES),
            address: getRandomArrayElement(stringLocations),
            price: getRandomArrayElement(PRICES),
            type: getRandomArrayElement(TYPES),
            room: getRandomArrayElement(ROOMS),
            guest: getRandomArrayElement(GUESTS),
            checkin: getRandomArrayElement(CHECKINS),
            checkout: getRandomArrayElement(CHECKOUT),
            features: getRandomArray(FEATURESMASS),
            description: getRandomArrayElement(DESCRIPTIONS),
            photo: getRandomArray(PHOTOS)
        },
        location: {
            // eslint-disable-next-line no-undef
            x: _.random(35.65000, 35.70000),
            // eslint-disable-next-line no-undef
            y: _.random(139.70000, 139.80000)
        }
    };

};


const Boockings = new Array(OBJ_COUNT).fill(null).map(() => createBookingObject());
console.log(Boockings);
export {Boockings};

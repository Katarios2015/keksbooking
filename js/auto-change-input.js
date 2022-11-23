const MAXPRICE = 1000000;
const rentType = document.querySelector("#type");
const rentPrice = document.querySelector("#price");

const rentCheckout = document.querySelector("#timein");
const rentCheckin = document.querySelector("#timeout");

rentPrice.max = MAXPRICE;
rentPrice.step = 100;

rentPrice.addEventListener("input", function() {
    if(rentPrice.value > MAXPRICE) {
        rentPrice.value = rentPrice.max;
    }
});


rentType.addEventListener("change", function () {
    if (this.value==="bungalow") {
        rentPrice.min = 0;
        rentPrice.placeholder = "0";
    }if (this.value==="flat") {
        rentPrice.min = 1000;
        rentPrice.placeholder = "1000";
    }
    if(this.value === "house"){
        rentPrice.min = 5000;
        rentPrice.placeholder = "5000";
    } if(this.value === "palace"){
        rentPrice.min = 10000;
        rentPrice.placeholder = "10000";
    } if(this.value === "hotel"){
        rentPrice.min = 3000;
        rentPrice.placeholder = "3000";
    }
});

rentCheckout.addEventListener("change", function () {
    rentCheckin.value = this.value;
});


rentCheckin.addEventListener("change", function () {
    rentCheckout.value = this.value;
});

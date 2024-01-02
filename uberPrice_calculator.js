class UberPriceCalculator {
    constructor(baseFare, costPerKilometer) {
        this.baseFare = baseFare;
        this.costPerKilometer = costPerKilometer;
    }

    //Method to caluculate the uber price
    calculateFare(distance){
        return (this.baseFare + (distance * this.costPerKilometer));
    }
}

const uberPrice = new UberPriceCalculator(100,20);
const distance = 5;

const fare = uberPrice.calculateFare(distance);
console.log(`Uber Fare: ${fare.toFixed(2)}`);

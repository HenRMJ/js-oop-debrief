class Vehicle {
    constructor(terrain, running, capacity) {
        this.terrain = terrain;
        this.running = running;
        this.capacity = capacity;
    }

    turnOnOff () {
        this.running = !this.running;
    }
}

class Cargo extends Vehicle {
    constructor(terrain, running, capacity, payload) {
        super(terrain, running, capacity);
        this.payload = payload;
    }
}

class Sale extends Vehicle {
    constructor(terrain, running, capacity, price) {
        super(terrain, running, capacity);
        this.price = price;
    }

    Sold() {
        this.price = 0;
    }
}

let canoe = new Sale("water", false, 2, 100);

canoe.Sold();

console.log(canoe);
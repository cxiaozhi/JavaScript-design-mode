class Car {
    public name = "宝马";
    private static _instance: Car | null = null;
    private constructor() {}
    static getInstance() {
        if (!this._instance) {
            this._instance = new Car();
        }
        return this._instance;
    }
}

const bmw = Car.getInstance();
console.log(bmw);

class House {
    public name = "别墅";
    private static _instance: House = new House();
    private constructor() {}
    static get instance() {
        return House._instance;
    }
}

const villa = House.instance;
console.log(villa);

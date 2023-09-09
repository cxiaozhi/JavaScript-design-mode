let Car = function () {};
// 为什么叫抽象类 因为这些方法没有具体定义 必须要重写才能使用 不然就抛出错误
Car.prototype = {
    getPrice: function () {
        throw new Error("抽象方法不能调用");
    },
    getSpeed: function () {
        throw new Error("抽象方法不能调用");
    },
};

// 抽象工厂方法
let VehicleFactory = function (subType, superType) {
    if (typeof VehicleFactory[superType] === "function") {
        function F() {}
        F.prototype = new VehicleFactory[superType]();
        subType.constructor = subType;
        subType.prototype = new F();
    } else {
        throw new Error("未创建该抽象类");
    }
};

VehicleFactory.Car = function () {
    this.type = "car";
};

VehicleFactory.Car.prototype = {
    getPrice: function () {
        throw new Error("抽象方法不能调用");
    },
    getSpeed: function () {
        throw new Error("抽象方法不能调用");
    },
};

let BMW = function (price, speed) {
    this.price = price;
    this.speed = speed;
};
VehicleFactory(BMW, "Car");
BMW.prototype.getPrice = function () {
    return this.price;
};
const bm = new BMW(10, "美元");
console.log(bm.type);

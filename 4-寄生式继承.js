/**
 * 寄生式继承
 */

function inheritObject(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function inheritPrototype(SubClass, SuperClass) {
    let p = inheritObject(SuperClass.prototype);
    p.constructor = SubClass;
    SubClass.prototype = p;
}

function SuperClass(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperClass.prototype.getName = function () {
    console.log(this.name);
};

function SubClass(name, time) {
    SuperClass.call(this, name);
    this.time = time;
}

// 寄生式继承父类原型
inheritPrototype(SubClass, SuperClass);

SubClass.prototype.getName = function () {
    console.log(this.name);
};

let instance1 = new SubClass("js class", 2014);
let instance2 = new SubClass("css class", 2013);

instance1.getName();
instance2.getName();

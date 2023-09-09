function SuperClass(name) {
    this.name = name;
    this.books = ["html", "css", "JavaScript"];
}

SuperClass.prototype.getName = function () {
    console.log(this.name);
};

function SubClass(name, time) {
    SuperClass.call(this, name);
    this.time = time;
}

SubClass.prototype = new SuperClass();

SubClass.prototype.getTime = function () {
    console.log(this.time);
};

const child = new SubClass("js book", 2014);
const child2 = new SubClass("css book", 2014);

child.getName();
child.getTime();
child.books.push("设计模式");
console.log(child.books);
console.log(child2.books);

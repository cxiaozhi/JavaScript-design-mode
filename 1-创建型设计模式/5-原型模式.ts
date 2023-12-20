/**
 * 抽象原型对象
 * 具体原型角色
 */

interface MPrototype {
    clone(): MPrototype;
}

class Dog implements MPrototype {
    public name: string;
    public birthYear: number;
    public sex: string;
    public presentYear: number;
    constructor() {
        this.name = "lili";
        this.birthYear = 2015;
        this.sex = "男";
        this.presentYear = 2018;
    }
    public getDiscription(): string {
        return `狗狗叫${this.name},性别${this.sex},${this.presentYear}年${
            this.presentYear - this.birthYear
        }岁了`;
    }
    public clone(): Dog {
        console.log(this);
        return Object.create(this);
    }
}

const dog = new Dog();
const dog1 = dog.clone();

dog1.presentYear = 2022;
dog.name = "jiji";
console.log(dog.getDiscription());
console.log(dog1.getDiscription());

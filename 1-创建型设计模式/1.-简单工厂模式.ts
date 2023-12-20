/**
 * 一个工厂类生产产品
 * 一个抽象产品类 作为父类
 * 多个具体产品类
 */

abstract class BMW {
    abstract run(): void;
}

class BMW730 extends BMW {
    run(): void {
        console.log("BMW730 启动~~");
    }
}

class BMW840 extends BMW {
    run(): void {
        console.log("BMW840 启动~~");
    }
}

class BMWFactory {
    public static produceBMW(model: "730" | "840"): BMW {
        if (model == "730") {
            return new BMW730();
        } else {
            return new BMW840();
        }
    }
}

const bmw730 = BMWFactory.produceBMW("730");
const bmw840 = BMWFactory.produceBMW("840");
bmw730.run();
bmw840.run();

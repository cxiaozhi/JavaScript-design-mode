// 实现接口角色
interface Implementor {
    doSomething(): void;
    doAnything(): void;
}

// 具体实现角色

class ConcreteImplementor1 implements Implementor {
    doSomething(): void {
        throw new Error("Method not implemented.");
    }
    doAnything(): void {
        throw new Error("Method not implemented.");
    }
}

class ConcreteImplementor2 implements Implementor {
    doSomething(): void {
        throw new Error("Method not implemented.");
    }
    doAnything(): void {
        throw new Error("Method not implemented.");
    }
}

// 抽象类
abstract class Abstraction {
    private imp: Implementor;
    constructor(imp: Implementor) {
        this.imp = imp;
    }

    // 自身的行为和属性
    public request(): void {
        this.imp.doSomething();
    }
}

// 具体抽象化角色
class RefinedAbstraction extends Abstraction {
    constructor(imp: Implementor) {
        super(imp);
    }

    public request(): void {
        super.request();
    }
}

// 调用
// 定义一个实现化角色
const imp: Implementor = new ConcreteImplementor1();

// 定义一个抽象化角色
const abs: Abstraction = new RefinedAbstraction(imp);

// 执行上下文
abs.request();

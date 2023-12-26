abstract class AbstractElement {
    // 定义业务逻辑
    public abstract doSomething(): void;
    // 允许谁来访问
    public abstract accept(visitor: Visitor): void;
}

class ConcreteElement1 extends AbstractElement {
    public doSomething(): void {}
    public accept(visitor: Visitor): void {
        visitor.visit1(this);
    }
}

class ConcreteElement2 extends AbstractElement {
    public doSomething(): void {}
    public accept(visitor: Visitor): void {
        visitor.visit2(this);
    }
}

abstract class Visitor {
    public abstract visit1(element1: ConcreteElement1): void;

    public abstract visit2(element2: ConcreteElement2): void;
}

class ConcreteVitor extends Visitor {
    public visit1(element1: ConcreteElement1): void {
        element1.doSomething();
    }
    public visit2(element2: ConcreteElement2): void {
        element2.doSomething();
    }
}

// 数据结构 管理很多元素
class ObjectStructure {
    private listSet: Set<AbstractElement>;
    constructor() {
        this.listSet = new Set();
    }

    public attach(element: AbstractElement): void {
        this.listSet.add(element);
    }

    public detach(element: AbstractElement): void {
        this.listSet.delete(element);
    }

    public display(visitor: Visitor): void {
        for (let element of this.listSet.values()) {
            element.accept(visitor);
        }
    }
}

function main() {
    const objectStructure: ObjectStructure = new ObjectStructure();

    objectStructure.attach(new ConcreteElement1());
    objectStructure.attach(new ConcreteElement2());
    const visitor: Visitor = new ConcreteVitor();
    objectStructure.display(visitor);
}

main();

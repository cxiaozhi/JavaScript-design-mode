/**
 * 产品角色 一个具体的产品对象
 * 抽象建造者
 * 具体建造者
 * 指挥者
 */

// 抽象建造者
abstract class Builder {
    public abstract builder_1(): void;
    public abstract builder_2(): void;
    public abstract builder_3(): void;
    public abstract buildProduct(): Product;
}

// 具体建造者
class ConcreateBuilder extends Builder {
    private product: Product;
    constructor(product: Product) {
        super();
        this.product = product;
    }

    public builder_1(): void {}
    public builder_2(): void {}
    public builder_3(): void {}

    public buildProduct(): Product {
        return this.product;
    }
}

// 产品角色
class Product {
    public doSomething(): void {}
}

// 指挥者
class Director {
    private _builder: Builder;

    constructor(builder: Builder) {
        this._builder = builder;
    }

    set builder(builder: Builder) {
        this._builder = builder;
    }

    // 将处理建造的流程交给指挥者
    public constructorProduct() {
        this._builder.builder_1();
        this._builder.builder_2();
        this._builder.builder_3();
        return this._builder.buildProduct();
    }
}

// 使用
const builder: Builder = new ConcreateBuilder(new Product());
const director: Director = new Director(builder);
const product: Product = director.constructorProduct();

/**
 * 一个抽象工厂类
 * 多个具体工厂类
 * 一个抽象产品类
 * 多个具体产品类
 */

interface Product {
    fun1(): void;
    fun2(): void;
}

class ConcreteProduct implements Product {
    fun1(): void {
        throw new Error("Method not implemented.");
    }
    fun2(): void {
        throw new Error("Method not implemented.");
    }
}

abstract class Creator {
    public abstract createProduct(type: number): Product;
}
class ConcreteCreator extends Creator {
    public createProduct(type: number): Product {
        throw new Error("Method not implemented.");
    }
}

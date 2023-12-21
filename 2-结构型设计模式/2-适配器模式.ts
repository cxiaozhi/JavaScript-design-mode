// 类适配器
// 目标对象
interface Target {
    request(): void;
}

// 被适配者
class Adaptee {
    constructor() {}
    // 这是源角色 有自己的业务逻辑
    public specificRequest(): void {}
}

// 适配器
class Adapter extends Adaptee implements Target {
    constructor() {
        super();
    }

    public request(): void {
        super.specificRequest();
    }
}

const target: Target = new Adapter();

target.request();

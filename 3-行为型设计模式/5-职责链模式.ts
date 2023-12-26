// 职责链模式
abstract class Handler {
    // 下一个处理者
    public successor?: Handler;

    public name: string;
    constructor(name: string) {
        this.name = name;
    }

    public abstract handleRequest(request: MyRequest): void;

    public setNext(successor: Handler): void {
        this.successor = successor;
    }
}

class MyRequest {
    private _level: number;
    constructor(level: number) {
        this._level = level;
    }

    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = this.level;
    }
}
class ConcreteHandler1 extends Handler {
    public handleRequest(request: MyRequest): void {
        if (request.level <= 1) {
            console.log("被一级处理");
        } else {
            this.successor && this.successor.handleRequest(request);
        }
    }
    constructor(name: string) {
        super(name);
    }
}

class ConcreteHandler2 extends Handler {
    public handleRequest(request: MyRequest): void {
        if (request.level > 1) {
            console.log("被2级处理");
        } else {
            this.successor && this.successor.handleRequest(request);
        }
    }
    constructor(name: string) {
        super(name);
    }
}

function main() {
    const request: MyRequest = new MyRequest(5);
    const handler1: Handler = new ConcreteHandler1("lili");
    const handler2: Handler = new ConcreteHandler2("linlim");
    handler1.setNext(handler2);
    console.log(handler1.successor);

    handler2.setNext(handler1);
    console.log(handler2.successor);

    handler1.handleRequest(request);
}

main();

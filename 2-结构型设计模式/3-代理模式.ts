// 静态代理
interface Subject {
    doOperation(): void;
}

class RealSubject implements Subject {
    doOperation(): void {}
}

class MyProxy implements Subject {
    private tartget: Subject;
    constructor(realSubject: Subject) {
        this.tartget = realSubject;
    }

    public doOperation(): void {
        this.tartget.doOperation();
    }
}

function main() {
    const realSubject: Subject = new RealSubject();
    const myProxy: Subject = new MyProxy(realSubject);
    myProxy.doOperation();
}

main();

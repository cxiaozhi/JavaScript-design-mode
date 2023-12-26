abstract class Colleague {
    public abstract onEvent(eventType: string): void;
}

abstract class Mediator {
    protected _colleagueA?: ConcreteColleagueA;
    protected _colleagueB?: ConcreteColleagueB;
    set colleagueA(colleagueA: ConcreteColleagueA) {
        this._colleagueA = colleagueA;
    }

    set colleagueB(colleagueB: ConcreteColleagueB) {
        this._colleagueB = colleagueB;
    }

    public abstract doEvent(eventType: string): void;
}
class ConcreteColleagueA extends Colleague {
    private mediator: Mediator;
    constructor(mediator: Mediator) {
        super();
        this.mediator = mediator;
    }
    public onEvent(eventType: string): void {
        this.mediator.doEvent(eventType);
    }

    public doSomething(): void {
        console.log("运行了");
    }
}
class ConcreteColleagueB extends Colleague {
    private mediator: Mediator;
    constructor(mediator: Mediator) {
        super();
        this.mediator = mediator;
    }

    public onEvent(eventType: string): void {
        this.mediator.doEvent(eventType);
    }

    public doSomething(): void {
        console.log("B运行");
    }
}

class ConcreteMediator extends Mediator {
    public doColleagueAEvent(): void {
        super.colleagueA && super.colleagueA.doSomething();
        super.colleagueB && super.colleagueB.doSomething();
        console.log("执行A---》B");
    }

    public doColleagueBEvent(): void {
        super.colleagueB && super.colleagueB.doSomething();
        super.colleagueA && super.colleagueA.doSomething();
        console.log("执行B---》A");
    }
    public doEvent(eventType: string): void {
        switch (eventType) {
            case "A":
                this.doColleagueAEvent();
                break;
            case "B":
                this.doColleagueBEvent();
                break;
            default:
                break;
        }
    }
}

function main() {
    const mediator: Mediator = new ConcreteMediator();
    const myColleagueA: ConcreteColleagueA = new ConcreteColleagueA(mediator);
    const myColleagueB: ConcreteColleagueB = new ConcreteColleagueB(mediator);
    mediator.colleagueA = myColleagueA;
    mediator.colleagueB = myColleagueB;
    myColleagueA.onEvent("A");
    myColleagueB.onEvent("B");
}
main();

abstract class State {
    public abstract handle1(): void;
    public abstract handle2(): void;
}

class Context {
    public State1: State = new ConcreteState1(this);
    public State2: State = new ConcreteState2(this);
    public currentState: State;
    constructor() {
        this.currentState = this.State1;
    }

    public doOperation1() {
        this.currentState?.handle2();
    }

    public doOperation2() {
        this.currentState?.handle1();
    }
}

class ConcreteState1 extends State {
    public handle1(): void {
        this.context.currentState = this.context.State2;
        console.log("state1--->state2");
    }

    public handle2(): void {
        throw new Error("Method not implemented.");
    }
    private context: Context;
    constructor(context: Context) {
        super();
        this.context = context;
    }
}

class ConcreteState2 extends State {
    public handle1(): void {
        this.context.currentState = this.context.State1;
        console.log("state2--->state1");
    }
    public handle2(): void {
        throw new Error("Method not implemented.");
    }
    private context: Context;
    constructor(context: Context) {
        super();
    }
}

function main() {
    const context: Context = new Context();
    context.doOperation1();
    context.doOperation2();
}

main();

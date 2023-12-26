class Originator {
    private _state: string = "";
    constructor() {}
    get state() {
        return this._state;
    }

    set state(value) {
        this._state = value;
    }

    // 创建一个备忘录
    public createMemento(): Memento {
        return new Memento(this._state);
    }

    // 恢复一个备忘录
    public recoverMemento(memento: Memento) {
        this.state = memento.state;
    }
}

class Memento {
    private _state: string;
    constructor(state: string) {
        this._state = state;
    }
    get state(): string {
        return this._state;
    }
}

class Caretaker {
    // 保存一次状态用此 保存多次用数组
    private memento?: Memento;
    public getMemento(): Memento | undefined {
        return this.memento;
    }

    public setMemento(memento: Memento) {
        this.memento = memento;
    }
}

function main() {
    const originator: Originator = new Originator();
    const caretaker: Caretaker = new Caretaker();

    const memento: Memento = originator.createMemento();

    caretaker.setMemento(memento);
}

main();

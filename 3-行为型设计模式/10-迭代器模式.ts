interface AbstractInterator {
    next(): any;
    hasNext(): boolean;
    remove(): boolean;
}

class ConcreteIterator implements AbstractInterator {
    private list: any[];
    public cursor: number = 0;
    constructor(array: any[]) {
        this.list = array;
    }
    next() {
        return this.hasNext() ? this.list[this.cursor++] : null;
    }
    hasNext(): boolean {
        return this.cursor < this.list.length;
    }
    remove(): boolean {
        this.list.splice(this.cursor--, 1);
        return true;
    }
}

interface Aggregate {
    add(value: any): void;
    remove(value: any): void;
    createIntertor(): AbstractInterator;
}

class ConcreteAggregate implements Aggregate {
    private list: any[];
    constructor() {
        this.list = [];
    }

    add(value: any): void {
        this.list.push(value);
    }

    remove(value: any): void {
        const index = this.list.findIndex((listValue) => {
            return value === listValue;
        });
        this.list.splice(index, 1);
    }

    createIntertor(): AbstractInterator {
        return new ConcreteIterator(this.list);
    }
}

function main() {
    const aggregate: Aggregate = new ConcreteAggregate();
    aggregate.add("111");
    aggregate.add("111222");
    const interator: AbstractInterator = aggregate.createIntertor();

    while (interator.hasNext()) {
        console.log(interator.next());
    }
}

main();

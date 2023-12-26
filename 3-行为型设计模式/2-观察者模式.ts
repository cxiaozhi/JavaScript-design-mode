// 观察者模式

interface Observer {
    update(): void;
}
interface AbstractSubject {
    registerObserver(observer: Observer): void;
    remove(observer: Observer): void;
    notifyObservers(): void;
}

class ConcreteSubject implements AbstractSubject {
    private observers: Array<Observer>;
    constructor() {
        this.observers = [];
    }
    remove(observer: Observer): void {
        const observerIndex = this.observers.findIndex((value) => {
            return value == observer;
        });

        observerIndex >= 0 && this.observers.splice(observerIndex, 1);
    }
    notifyObservers(): void {
        this.observers.forEach((observer) => observer.update());
    }

    public registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }
}

class ConcreteObserver1 implements Observer {
    public update(): void {
        console.log("111");
    }
}

class ConcreteObserver2 implements Observer {
    public update(): void {
        console.log("222");
    }
}

function main() {
    const subject: AbstractSubject = new ConcreteSubject();
    const observer1: Observer = new ConcreteObserver1();
    const observer2: Observer = new ConcreteObserver2();

    subject.registerObserver(observer1);
    subject.registerObserver(observer2);
    subject.notifyObservers();
}

main();

// 发布订阅模式
//订阅
interface Subscribe {
    update(...value: any[]): void;
}

// 发布
interface Publish {
    registerObserver(eventType: string, subscribe: Subscribe): void;

    remove(eventType: string, subscribe?: Subscribe): void;
    notifyObservers(eventType: string): void;
}

interface SubscribesObject {
    [key: string]: Array<Subscribe>;
}

class ConcretePublish implements Publish {
    private subcribes: SubscribesObject;
    constructor() {
        this.subcribes = {};
    }

    registerObserver(eventType: string, subscribe: Subscribe): void {
        if (!this.subcribes[eventType]) {
            this.subcribes[eventType] = [];
        }

        this.subcribes[eventType].push(subscribe);
    }

    remove(eventType: string, subscribe?: Subscribe | undefined): void {
        const subcribeArray = this.subcribes[eventType];
        if (subcribeArray) {
            if (!subscribe) {
                delete this.subcribes[eventType];
            } else {
                for (let i = 0; i < subcribeArray.length; i++) {
                    if (subscribe === subcribeArray[i]) {
                        subcribeArray.splice(i, 1);
                    }
                }
            }
        }
    }

    notifyObservers(eventType: string, ...args: any[]): void {
        const subcribes = this.subcribes[eventType];
        if (subcribes) {
            subcribes.forEach((subscribe) => subscribe.update(...args));
        }
    }
}

class ConcreteSubscribe1 implements Subscribe {
    update(...value: any[]): void {
        console.log("2222");
    }
}

class ConcreteSubscribe2 implements Subscribe {
    update(...value: any[]): void {
        console.log("2222");
    }
}

function main1() {
    const publish = new ConcretePublish();
    const subscribe1 = new ConcreteSubscribe1();
    const subscribe2 = new ConcreteSubscribe2();
    publish.registerObserver("1", subscribe1);
    publish.registerObserver("2", subscribe2);
    publish.notifyObservers("2", "2222");
}

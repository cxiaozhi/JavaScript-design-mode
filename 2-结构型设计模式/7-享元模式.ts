namespace flyweight {
    abstract class Flyweight {
        public abstract doOperation(extrinsicState: string): void;
    }

    class ConcreterFlyweight extends Flyweight {
        private intrinsicState: string;

        constructor(intrinsicState: string) {
            super();
            this.intrinsicState = intrinsicState;
        }

        public doOperation(extrinsicState: string): void {
            console.log(this.intrinsicState);
        }
    }

    interface flyweightObject {
        [key: string]: Flyweight;
    }

    class FlyweightFactory {
        private flyweights: flyweightObject;
        constructor() {
            this.flyweights = {};
        }

        public getFlyweight(intrinsisState: string): Flyweight {
            if (!this.flyweights[intrinsisState]) {
                const flyweight: Flyweight = new ConcreterFlyweight(
                    intrinsisState
                );
                this.flyweights[intrinsisState] = flyweight;
            }

            return this.flyweights[intrinsisState];
        }
    }

    function main() {
        const factory: FlyweightFactory = new FlyweightFactory();

        const flyweight1: Flyweight = factory.getFlyweight("aa");
        const flyweight2: Flyweight = factory.getFlyweight("aa");

        flyweight1.doOperation("x");
        flyweight2.doOperation("y");
    }
    main();
}

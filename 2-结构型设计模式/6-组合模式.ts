namespace combination {
    abstract class Component {
        protected name: string;

        constructor(name: string) {
            this.name = name;
        }

        public abstract doOperarion(): void;

        public add(component: Component): void {}

        public remove(component: Component): void {}

        public getChildren(): Array<Component> {
            return [];
        }
    }

    class Comoisite extends Component {
        private componnetList: Array<any> = [];

        constructor(name: string) {
            super(name);
            this.componnetList = [];
        }

        public doOperarion(): void {
            console.log();
        }

        public add(component: Component): void {
            this.componnetList.push(component);
        }

        public remove(component: Component): void {
            const componnetIndex = this.componnetList.findIndex(
                (value: Component, index: number) => {
                    return value == component;
                }
            );

            this.componnetList.splice(componnetIndex, 1);
        }

        public getChildren(): Array<Component> {
            return this.componnetList;
        }
    }

    class Leaf extends Component {
        constructor(name: string) {
            super(name);
        }

        public doOperarion(): void {
            console.log();
        }
    }

    function main() {
        const root: Component = new Comoisite("root");
    }
    main();
}

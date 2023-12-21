namespace facede {
    class SubSystemA {
        public doOpertionA(): void {}
    }
    class SubSystemB {
        public doOpertionB(): void {}
    }

    class Facede {
        private subSystemA: SubSystemA;
        private subSystemB: SubSystemB;

        constructor() {
            this.subSystemA = new SubSystemA();
            this.subSystemB = new SubSystemB();
        }

        public doOperation(): void {
            this.subSystemA.doOpertionA();
            this.subSystemB.doOpertionB();
        }
    }

    function main() {
        const facede: Facede = new Facede();

        facede.doOperation();
    }

    main();
}

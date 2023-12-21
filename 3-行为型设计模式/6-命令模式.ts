namespace command {
    interface Command {
        execute(): void;
        undo(): void;
    }

    // 空命令
    class NoCommand implements Command {
        execute(): void {}
        undo(): void {}
    }

    class Receiver {
        public actionOn(): void {
            console.log("我是命令接收者，开启了某动作");
        }

        public actionOff(): void {
            console.log("我是命令接收者，关闭了某动作");
        }
    }

    // 命令调用者
    class Invoker {
        private onCommands: Array<Command>;
        private offCommands: Array<Command>;
        private undoCommand: Command;
        private slotNum: number = 7;
        constructor() {
            this.undoCommand = new NoCommand();
            this.onCommands = [];
            this.offCommands = [];
            for (let i = 0; i < this.slotNum; i++) {
                this.onCommands[i] = new NoCommand();
                this.offCommands[i] = new NoCommand();
            }
        }

        public setCommand(
            index: number,
            onCommand: Command,
            offCommand: Command
        ): void {
            this.onCommands[index] = onCommand;
            this.offCommands[index] = onCommand;
        }

        // 开启
        public on(index: number): void {
            this.onCommands[index].execute();
            this.undoCommand = this.onCommands[index];
        }

        // 关闭
        public off(index: number): void {
            this.offCommands[index].execute();
            this.undoCommand = this.offCommands[index];
        }

        // 撤销
        public undo(): void {
            this.undoCommand.undo();
        }
    }
    // 开启命令
    class ConcreteCommandOn implements Command {
        private receiver: Receiver;
        constructor(receiver: Receiver) {
            this.receiver = receiver;
        }
        undo(): void {
            this.receiver.actionOff();
        }

        public execute(): void {
            this.receiver.actionOn();
        }
    }

    // 关闭命令
    class ConcreteCommandOff implements Command {
        private receiver: Receiver;
        constructor(receiver: Receiver) {
            this.receiver = receiver;
        }
        // 执行命令的方法
        public execute(): void {
            this.receiver.actionOff();
        }
        // 撤销命令的方法
        public undo(): void {
            this.receiver.actionOn();
        }
    }

    function main() {
        // 创建接受者
        const receiver: Receiver = new Receiver();

        // 创建命令
        const commandOn: Command = new ConcreteCommandOn(receiver);
        const commandOff: Command = new ConcreteCommandOff(receiver);

        // 创建调用者

        const invoker: Invoker = new Invoker();
        invoker.setCommand(0, commandOn, commandOff);
        invoker.on(0);
        invoker.off(0);
        invoker.undo();
    }

    main();
}

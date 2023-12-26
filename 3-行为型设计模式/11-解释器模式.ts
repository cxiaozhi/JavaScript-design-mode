abstract class Expression {
    public abstract interpreter(str: string): boolean;
}

class TerminalExpression extends Expression {
    private literal: string;
    constructor(str: string) {
        super();
        this.literal = str;
    }

    public interpreter(str: string): boolean {
        for (let charVal of str) {
            if (charVal === this.literal) {
                return true;
            }
        }
        return false;
    }
}

class AndExpression extends Expression {
    private expression1: Expression;
    private expression2: Expression;
    constructor(expression1: Expression, expression2: Expression) {
        super();

        this.expression1 = expression1;
        this.expression2 = expression2;
    }

    public interpreter(str: string): boolean {
        return (
            this.expression1.interpreter(str) &&
            this.expression2.interpreter(str)
        );
    }
}

class OrExpression extends Expression {
    private expression1: Expression;
    private expression2: Expression;
    constructor(expression1: Expression, expression2: Expression) {
        super();
        this.expression1 = expression1;
        this.expression2 = expression2;
    }
    public interpreter(str: string): boolean {
        return (
            this.expression1.interpreter(str) ||
            this.expression2.interpreter(str)
        );
    }
}

function buildInterpreterTree() {
    const terminal1: Expression = new TerminalExpression("A");
    const terminal2: Expression = new TerminalExpression("B");
    const terminal3: Expression = new TerminalExpression("C");
    const terminal4: Expression = new TerminalExpression("D");

    const alternation1: Expression = new AndExpression(terminal2, terminal3);

    const alternation2: Expression = new OrExpression(terminal1, alternation1);
    return new AndExpression(terminal4, alternation2);
}

function main() {
    const define: Expression = buildInterpreterTree();

    const contex1: string = "D A";
    const contex2: string = "D B C";
    console.log(define.interpreter(contex1));
}

main();

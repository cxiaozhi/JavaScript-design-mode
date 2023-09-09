const Conf = (function () {
    let conf = {
        MAX_NUM: 100,
    };
    return {
        get: function (name) {
            return conf[name] ? conf[name] : null;
        },
    };
})();

let LazySingle = (function () {
    let _instance = null;
    function Single() {
        return {
            publicMethod: function () {},
            publicProperty: "1.0",
        };
    }
    // 获取单例对象接口
    return function () {
        if (!_instance) {
            _instance = Single();
        }
        return _instance;
    };
})();

class Test {
    static _instance = null;
    constructor(name, work) {
        if (!Test._instance) {
            Test._instance = this;
            this.work = work;
            this.name = name;
        }
        return Test._instance;
    }
}

const test1 = new Test("张飞", "打野");
const test2 = new Test("赵云", "上单");
console.log(test1);
console.log(test2);
console.log(test1 === test2);

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
console.log(Conf.get("MAX_NUM"));

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

const instance = LazySingle();
class Test {
    constructor(name, work) {
        let _instance = null;
        if (!_instance) {
            this.name = name;
            this.work = work;
        } else {
            return _instance;
        }
    }
}

const test1 = new Test("张飞", "打野");
const test2 = new Test("赵云", "上单");
console.log(test1);
console.log(test2);

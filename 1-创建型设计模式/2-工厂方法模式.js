// 安全模式创建的工厂类
let Factory = function (type, content) {
    if (this instanceof Factory) {
        let s = new this[type](content);
        return s;
    } else {
        return new Factory(type, content);
    }
};

// 工厂原型中设置创建所有类型数据对象的基类
Factory.prototype = {
    Java: function () {},
    JavaScript: function () {},
    UI: function () {},
};

// 单继承 属性复制
let extend = function (target, source) {
    for (let key in source) {
        target[key] = source[key];
    }
    return target;
};

// 多继承
function mix(...arg) {
    let i = 0,
        len = arg.length,
        argment;
    for (; i < len; i++) {
        argment = arg[i];
        for (let key in argment) {
            this[key] = argment[key];
        }
    }
}
Object.prototype.mix = mix;
let book = {
    name: "JavaScript 设计模式",
    auth: "爱丽丝",
};
let colors = {
    black: "黑色",
};
let texture = {
    metal: "钣金",
};
book.mix(colors, texture);
console.log(book);

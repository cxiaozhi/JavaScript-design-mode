/**
 * 简单工厂
 */

function createPop(type, text) {
    // 创建一个对象 并对对象拓展属性和方法
    let obj = new Object();
    obj.content = text;
    obj.show = function () {
        console.log(text);
    };
    if (type == "alert") {
        // 警示框
        obj.alert = function () {
            console.log(text);
        };
    }

    if (type == "prompt") {
        // 提示
    }

    if (type == "confirm") {
        // 确认
    }

    return obj;
}

let userNameAlert = createPop("alert", "用户名只能是18个字母");
let start = new Date().getTime();
userNameAlert.alert();
let end = new Date().getTime();
console.log("耗时：%s毫秒", end - start);

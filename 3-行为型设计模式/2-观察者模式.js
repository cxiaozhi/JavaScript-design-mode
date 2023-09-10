// 观察者
let Observer = (function () {
    let __message = {};
    return {
        regist: function (type, fn) {
            if (typeof __message[type] === "undefined") {
                __message[type] = [fn];
            } else {
                __message[type].push(fn);
            }
            return this;
        },
        fire: function (type, args) {
            if (!__message[type]) {
                return;
            }
            let events = {
                    type,
                    args: args || {},
                },
                i = 0,
                len = __message[type].length;
            for (; i < len; i++) {
                __message[type][i].call(this, events);
            }
            return this;
        },
        remove: function (type, fn) {
            if (__message[type] instanceof Array) {
                let i = __message[type].length - 1;
                for (; i >= 0; i--) {
                    __message[type][i] === fn && __message[type].splice(i, 1);
                }
            }
        },
        getMessage: function () {
            return __message;
        },
    };
})();

function $(id) {
    return document.getElementById(id);
}

(function () {
    function addMsgItem(e) {
        let text = e.args.text,
            ul = $("msg"),
            li = document.createElement("li"),
            span = document.createElement("span");
        li.innerHTML = text;
        span.innerHTML = "删除";
        span.onclick = function () {
            ul.removeChild(li);
            Observer.fire("removeConmentMesage", {num: -1});
        };
        li.appendChild(span);
        ul.appendChild(li);
    }
    Observer.regist("addCommentMessage", addMsgItem);
})();
Observer.fire("addCommentMessage", {text: "你好"});
console.log(Observer.getMessage());

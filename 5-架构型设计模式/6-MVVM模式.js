~(function () {
    // 在闭包中获取全局变量
    let window = this || (0, eval)("this");
    let FONTSIZE = (function () {
        return parseInt(
            getComputedStyle(document.documentElement, null).getPropertyValue(
                "font-size"
            )
        );
    })();
    // 视图模型对象
    let VM = (function () {
        let Method = {
            // 进度条组件创建方法
            progressbar: function (dom, data) {
                let progress = document.createElement("div"),
                    param = data.data;
                progress.style.width = param.position || 100 + "%";
                dom.className += "ui-progressbar";
                dom.appendChild(progress);
            },
            // 滑动条组件创建方法
            slider: function (dom, data) {
                let bar = document.createElement("div"),
                    progress = document.createElement("div"),
                    totleText = null,
                    progressText = null,
                    param = data.data,
                    width = dom.clientWidth,
                    left = dom.offsetLeft,
                    realWidth = ((param.position || 100) * width) / 100;
                dom.innerHTML = "";
                bar.style.backgroundColor = "red";
                bar.style.height = "20px";
                bar.style.width = "200px";

                if (param.totle) {
                    text = document.createElement("n");
                    progressText = document.createElement("em");
                    text.innerHTML = param.totle;
                    dom.appendChild(text);
                    dom.appendChild(progressText);
                }
                setStyle(realWidth);
                dom.className += "ui-sloder";
                dom.appendChild(progress);
                dom.appendChild(bar);
                function setStyle(w) {
                    progress.style.width = w + "px";
                    bar.style.left = w - FONTSIZE / 2 + "px";
                    if (progressText) {
                        progressText.style.left =
                            w - (FONTSIZE / 2) * 2.4 + "px";
                        progressText.innerHTML =
                            parseFloat((w / width) * 100).toFixed(2) + "%";
                    }
                }
                bar.onmousedown = function (event) {
                    document.onmousemove = function () {
                        console.log("执行力");
                        let e = event;
                        let w = e.clientX - left;
                        setStyle(w < width ? (w > 0 ? w : 0) : width);
                    };
                    document.onselectstart = function () {
                        return false;
                    };
                };
                document.onmouseup = function () {
                    document.onmousemove = null;
                    document.onselectstart = null;
                };
            },
        };

        function getBindData(dom) {
            let data = dom.getAttribute("data-bind");
            return !!data && new Function("return ({ " + data + " })")();
        }
        return function () {
            let doms = document.body.getElementsByTagName("*"),
                ctx = null;
            for (let i = 0; i < doms.length; i++) {
                ctx = getBindData(doms[i]);
                console.log(ctx);
                ctx.type && Method[ctx.type] && Method[ctx.type](doms[i], ctx);
            }
        };
    })();

    window.VM = VM;
})();
let demo1 = {
        position: 60,
        totle: 200,
    },
    demo2 = {
        position: 20,
    },
    demo3 = {position: 50};
window.onload = function () {
    VM();
};

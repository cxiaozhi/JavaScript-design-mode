// 图片轮播类
let LoopImages = function (imgArr, container) {
    this.imagesArray = imgArr;
    this.container = container;
};
LoopImages.prototype = {
    createImage: function () {},
    changeImage: function () {},
};
let superer = new LoopImages();

// 上下滑动切换类
let SlideLoopImg = function (imgArr, container) {
    LoopImages.call(this, imgArr, container);
    // 重写继承的切换下一张图片方法
    this.changeImage = function () {
        console.log("SlodeLoopImg function");
    };
};
SlideLoopImg.prototype.getName = function () {
    console.log("我是子类");
};

let slideImg = new SlideLoopImg(
    ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
    "Slide"
);
superer.getName();

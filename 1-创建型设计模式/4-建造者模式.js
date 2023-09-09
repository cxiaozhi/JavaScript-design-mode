// 创建一位人类
let Human = function (params) {
    // 技能
    this.skill = (params && params.skill) || "保密";
    // 兴趣爱好
    this.hobby = (params && params.hobby) || "保密";
};

// 类人原型方法
Human.prototype = {
    getSkill: function () {
        return this.skill;
    },
    getHobby: function () {
        return this.hobby;
    },
};

// 实例化姓名类
function Named(name) {
    let that = this;
    (function (name, that) {
        that.wholeName = name;

        if (name.indexOf(" ") > -1) {
            that.FirstName = name.slice(0, name.indexOf(" "));
            that.secondName = name.slice(name.indexOf(" "));
        }
    })(name, that);
}

// 实例化职位类
function Work(work) {
    let that = this;
    (function (work, that) {
        switch (work) {
            case "code":
                that.work = "工程师";
                that.workDescript = "每天沉醉于编程";
                break;
            case "UI":
            case "UE":
                that.work = "设计师";
                that.workDescript = "设计更似一种艺术";
                break;
            case "teach":
                that.work = "教师";
                that.workDescript = "分享也是一种快乐";
                break;
            default:
                that.work = work;
                that.workDescript = "对不起，我们还不清楚您所选择职位相关描述";
        }
    })(work, that);
}

Work.prototype.changeWork = function (work) {
    this.work = work;
};

Work.prototype.changeDescript = function (setence) {
    this.workDescript = setence;
};

/**
 * 应聘者建造者
 * 参数 name
 * 参数 work
 */

let Person = function (name, work) {
    // 创建应聘者缓存对象
    let _person = new Human();
    // 创建应聘者姓名解析对象
    _person.name = new Named(name);
    _person.work = new Work(work);
    return _person;
};

let person1 = new Person("张飞 翼德", "code");
console.log(person1.skill);
console.log(person1.name.secondName);
console.log(person1.work.work);
console.log(person1.work.workDescript);

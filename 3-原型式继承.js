function inheritObject(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

let book = {
    name: "js book",
    alikeBooks: ["css book", "html book"],
};

let newBook = inheritObject(book);
newBook.name = "ajax book";
newBook.alikeBooks = "js book";
let otherBook = inheritObject(book);
console.log(book.name);
console.log(newBook);

console.log(newBook.__proto__);

// console.log(newBook.alikeBooks);
// console.log(otherBook.alikeBooks);

// js里的赋值操作 和 修改操作 是两种完全不同的行为


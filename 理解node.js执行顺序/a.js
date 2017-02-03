console.log("a模块被加载");
var c = require("./c");
console.log(c);
var m = 1;
var n = 2;
console.log(m + n);
module.exports.a = 100;
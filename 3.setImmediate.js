setImmediate(function(){
    console.log("setImmediate被执行");
});
for(var i = 0; i < 100000000; i++) {
    console.log("abc");
}

// process.stdout.write("hello world");

process.stdin.on("data",function(chunk){
    process.stdout.write("您输入的内容：" + chunk);
});
var fs = require("fs");
fs.writeFile("./a.txt","Hello个world",function(err){
    if(err)throw err;
    console.log("写入成功");
})
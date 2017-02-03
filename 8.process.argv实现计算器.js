// console.log(process.argv);
var calc = {
    add:function(a,b){
        return parseFloat(a) + parseFloat(b);
    },
    sub:function(a,b){
        return parseFloat(a) - parseFloat(b);
    },
    mul:function(a,b){
        return parseFloat(a) * parseFloat(b);
    },
    div:function(a,b){
        return parseFloat(a) - parseFloat(b);
    }
};
if(process.argv.length < 5){
    throw "参数个数不够";
}
var a = process.argv[2];
var b = process.argv[3];
var operation = process.argv[4];
switch(operation){
    case "+":
        console.log(calc.add(a,b));
        break;
    case "-":
        console.log(calc.sub(a,b));
        break;
    case "*":
        console.log(calc.mul(a,b));
        break;
    case "/":
        console.log(calc.div(a,b));
        break;
}
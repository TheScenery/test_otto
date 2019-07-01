console.log("Hello otto!");
console.log("For test run this file in otto, Calc 1 + 1 filrstly!");
var a = 1 + 1;
console.log("The value of a is " + a);

function CalcEngine() {
    this.result = 0;
}

CalcEngine.prototype.add = function(a, b) {
    this.result = a + b;
}

CalcEngine.prototype.getResult = function() {
    return this.result;
}

var Calc = new CalcEngine();

function Otto_Add(a, b) {
    Calc.add(a, b);
}

function Otto_GetResult() {
    return Calc.getResult();
}
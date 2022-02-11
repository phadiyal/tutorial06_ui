var defultFunc = function (num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    console.log(num1 + num2);
};
var restFunc = function (s1) {
    var s2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        s2[_i - 1] = arguments[_i];
    }
    console.log("Rest Paramerter");
    console.log(s1);
    console.log(s2);
};
var optionalFunc = function (lName) {
    if (typeof lName !== 'undefined') {
        console.log(lName);
    }
    console.log("undefined!!!");
};
defultFunc(3);
restFunc("hello", 12, 13);
restFunc("hello", "hi", 12, 3);
optionalFunc('hi');

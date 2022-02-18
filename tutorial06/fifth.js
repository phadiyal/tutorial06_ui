var clock = /** @class */ (function () {
    function clock(h, m, s) {
        this.m = 30;
        this.h = 4;
        this.s = 30;
        this.m = m,
            this.h = h,
            this.s = s;
    }
    clock.prototype.ins = function (h, m, s) {
        ++s;
        console.log("new time :" + h + " " + m + " " + s);
    };
    clock.prototype.display = function (h, m, s) {
        console.log(" Current time is :" + h + " " + m + " " + s);
    };
    clock.prototype.getHour = function () {
        return this.h;
    };
    clock.prototype.getMint = function () {
        return this.m;
    };
    clock.prototype.getSecound = function () {
        return this.s;
    };
    return clock;
}());
var obj = new clock(5, 60, 5);
obj.display(5, 30, 57);
obj.ins(5, 30, 57);
console.log("Hour :", obj.getHour());
console.log("Minit :", obj.getMint());
console.log("Secound :", obj.getSecound());

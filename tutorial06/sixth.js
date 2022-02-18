var _this = this;
var employee = {
    code: "e01",
    name: "aaa",
    desi: "ggg",
    basicpay: 1000,
    calculate: function () {
        var hra, da, netsalary;
        hra: 0.1 * _this.basicpay;
        da: 0.45 * _this.basicpay;
        netsalary: _this.basicpay + hra + da;
        console.log(netsalary);
    }
};
console.log("employee name :", employee.name);
console.log("employee code : ", employee.code);
console.log("employee designation :", employee.desi);
console.log("employee final salary :", employee.calculate());

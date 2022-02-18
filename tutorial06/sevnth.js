var person = {
    code: "12345",
    name: "ABC",
    des: "Emp",
    pay: 12000,
    HRA: 0.1 * person.pay,
    DA: 0.45 * person.pay,
    cal: function () {
        console.log(person.code);
    }
};
person.cal();

interface memployee{
    code:any,
    name:string,
    des:string,
    pay:number,
    HRA:number,
    DA:number,
    cal:()=>void
}

var person: memployee = {
    code: "12345",
    name: "ABC",
    des: "Emp",
    pay: 12000,
    HRA: 0.1 * person.pay,
    DA: 0.45 * person.pay,
    cal: () => {
        console.log(person.code)
    }
}
person.cal()
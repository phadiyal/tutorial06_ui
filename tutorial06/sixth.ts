interface iemployee{
  code :any,
  name:string,
  desi :string,
  basicpay:Number,
  calculate:()=>void
}

var employee :iemployee={
    code:"e01",
    name:"aaa",
    desi:"ggg",
    basicpay:1000,
    
    
    calculate:()=>{
       let hra: any, da: any , netsalary:number
        hra :0.1*this.basicpay
        da:0.45*this.basicpay
        netsalary: basicpay+hra+da

        console.log(netsalary)
    }
    
}
console.log("employee name :",employee.name)
console.log("employee code : ",employee.code)
console.log("employee designation :",employee.desi)
console.log("employee final salary :",employee.calculate())
interface iStudent{
    name: string
    city :string
    branch : string,
    display :()=>string
}
var student:iStudent={
    name:"abc",
    city :"xyz",
    branch :"ce",
    display:():string =>{
    
    return " studet data";
    }

}

console.log(student.display())
console.log("name :",student.name)
console.log("city :",student.city)
console.log("branch :",student.branch)
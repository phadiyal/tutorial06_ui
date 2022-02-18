// single level inheritance which not extends any class 
interface person{
    name: string,
    age :number
}
//multilevel inheritance which extands person class
interface student extends person {
    branch : string,
    enroll : number
}
// student interface impliments functionalty of person class
var stu :student={
    name:"abc",
    age:20,
    branch :"ce",
    enroll:12345
}
 
console.log("name :",stu.name)
console.log("age :", stu.age)
console.log("branch :",stu.branch)
console.log("enroll :", stu.enroll)
// defult function
var defultFunc=(num1, num2 =0)=>{
console.log(num1+num2)
}
//rest function
var restFunc=( s1:string,...s2:any)=>{
 console.log("Rest Paramerter")
 console.log(s1)
 console.log(s2)
}
//optional functionn
var optionalFunc=(name:string,lName ?: string)=> {
    
    if(typeof lName!=='undefined'){
        console.log(lName);
    }
    //console.log("undefined!!!");
}
defultFunc(3)
restFunc("hello", 12, 13)
restFunc("hello","hi",12,3)
optionalFunc('hi')
optionalFunc("hello","huziiii")
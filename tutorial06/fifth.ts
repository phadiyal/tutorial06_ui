class clock {
    m:number=30
    h:number=4
    s:number=30
    constructor(h:number,m:number,s:number){
        this.m=m,
        this.h=h,
        this.s=s
    }
    ins(h:number,m:number,s:number):void{
        ++s;
        console.log("new time :"+h+" "+m+" "+s)

    }
    display(h,m,s):void{
        console.log(" Current time is :" +h+ " "+ m+ " "+s)
    }
    getHour():any{
        return this.h;
    }
    getMint():any{
        return this.m;
    }
    getSecound():any{
        return this.s;
    }
}
var obj = new clock(5,60,5)
obj.display(5,30,57)
obj.ins(5,30,57)
console.log("Hour :",obj.getHour())
console.log("Minit :",obj.getMint())
console.log("Secound :",obj.getSecound())
class Student{
    firstName
    lastName
    date

    getFullName(){
        return this.firstName+" "+this.lastName
    }

    getInitials(){
        return `${this.firstName.slice(0,1)}. ${this.lastName.slice(0,1)}.`
    }

    constructor(fn,ln){
        this.firstName=fn
        this.lastName=ln
        this.date=new Date()
    }
}
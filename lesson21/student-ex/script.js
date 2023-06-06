class Student{
    student

    constructor(stu){
        this.student=stu
    }

    showStu(){
        console.log(this.student)
    }

    getFullName(){
        return `${this.student.firstName} ${this.student.lastName}`
    }

    getAge(){
        const thisYear=new Date().getFullYear()
        const birthYear=new Date(this.student.birthday).getFullYear()
        return thisYear-birthYear
    }

    getAverageGrade(){
        let sum=0
        for (let x of this.student.grades){
            sum+=x
        }
        const average=sum/this.student.grades.length

        return average
    }

    getTestAmount(){
        return this.student.grades.length
    }
}


const s=new Student({
    firstName:"יוסי",
    lastName:"אדלר",
    phone:"059-6508892",
    birthday:"2004-04-14",
    city:"חיפה",
    grades:[90,8,100,95,100,100,100]
});
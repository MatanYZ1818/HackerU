class StudentClass {
    private student:any;

    constructor(student:StudentInt){
        this.student=student
    }

    getFullName(){
        return `${this.student.firstName} ${this.student.firstName}`
    }

    getAge(){
        const rest = +new Date() - +new Date(this.student.birthday);
        return Math.floor(rest / 1000 / 60 / 60 / 24 / 365 * 10) / 10;
    }

    getAvgGrade(){
        let sum:number=0
        this.student.grades.forEach((grade: number) => {
            sum+=grade
        });
        return sum/this.student.grade.length
    }
}

interface StudentInt{
    id:number;
    firstName:string;
    lastName:string;
    birthday:string;
    grades:number[];
    isActive:boolean;
}

const item=new StudentClass({
    id:0,
    grades:[100,4,130,34,124,11,144],
    firstName:"kobi",
    lastName:"faraj",
    birthday:"15/03/2000",
    isActive:false
})

console.log(item.getAge())
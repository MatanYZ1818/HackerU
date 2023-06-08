"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentClass = void 0;
var StudentClass = /** @class */ (function () {
    function StudentClass(student) {
        this.student = student;
    }
    StudentClass.prototype.getFullName = function () {
        return "".concat(this.student.firstName, " ").concat(this.student.firstName);
    };
    StudentClass.prototype.getAge = function () {
        var rest = +new Date() - +new Date(this.student.birthday);
        return Math.floor(rest / 1000 / 60 / 60 / 24 / 365 * 10) / 10;
    };
    StudentClass.prototype.getAvgGrade = function () {
        var sum = 0;
        this.student.grades.forEach(function (grade) {
            sum += grade;
        });
        return sum / this.student.grade.length;
    };
    return StudentClass;
}());
exports.StudentClass = StudentClass;
var item = new StudentClass({
    id: 0,
    grades: [100, 4, 130, 34, 124, 11, 144],
    firstName: "kobi",
    lastName: "faraj",
    birthday: "15/03/2000",
    isActive: false
});
console.log(item);

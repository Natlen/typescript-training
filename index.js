"use strict";
export const __esModule = true;
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.toString = function () { return "id: " + this.id + " | name: " + this.name; };
    return Student;
}());
var nativ = new Student(1, "Nativ");
console.log(nativ);
var h1 = document.createElement("h1");
h1.textContent = nativ.toString();
document.body.appendChild(h1);

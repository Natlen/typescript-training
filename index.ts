import { IStudent } from './modules/student';
class Student implements IStudent {
    id : number;
    name : string;
    constructor(id : number, name : string) { this.id = id; this.name = name; }
    toString() : string { return `id: ${this.id} | name: ${this.name}`}
}
const nativ = new Student(1, "Nativ");
console.log(nativ);
const h1 = document.createElement("h1");
h1.textContent = nativ.toString();
document.body.appendChild(h1);
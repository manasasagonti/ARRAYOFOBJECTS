let studentRecords = [{ name: 'John', id: 123, marks: 98 },
{ name: 'Baba', id: 101, marks: 23 },
{ name: 'yaga', id: 200, marks: 45 },
{ name: 'Wick', id: 115, marks: 75 }]

//question 1
let ans = []
ans = studentRecords.map((e) => e.name.toUpperCase())
console.log(ans);


// question2
let a = studentRecords.filter(check);
function check(result) {
    if (result.marks > 50) {
        return result;
    }
}
console.log(a);


//question 3
var sum = 0;
let b = studentRecords.filter(checks);
function checks(result) {
    if (result.marks > 50 && result.id > 120) {
        return result;
    }
}
console.log(b);

//question 4
for (let i of b) {
    sum = sum + i.marks;
}
console.log("sum of filtered marks:" + sum);

//question 5
let names = studentRecords.filter(check1);
function check1(mark) {
    if (mark.marks > 50) {
        return mark;
    }
}
console.log("filtered students are", names.map((names) => { return names.name }))

// question6
s = 0
let student = studentRecords.filter(check2);
function check2(mark) {
    if (mark.id > 120) {
        return mark.marks;
    }
}
for (let i of student) {
    s = s + i.marks;
}
console.log("sum of marks of the students with id > 120 : ",s);

// question7

var students = studentRecords.map((x) => x.marks > 50 ? x.marks : x.marks + 15);
let filtered = students.filter((x) => x > 50);
let sums = filtered.reduce((sums, x) => sums + x);
console.log("students with marks greater than 50 after a grace of 15 marks :",sums);

//question 8

function studentDetails(Name, Class, Roll) {
    this.name = Name,
        this.class = Class,
        this.rollNo = Roll;
}
let studentobjectArray = [];
let student1 = new studentDetails("ani", "CSE", 10);
let student2 = new studentDetails("ammu", "CSE", 10);
let student3 = new studentDetails("murali", "CSE", 143);
let student4 = new studentDetails("prasanna", "CE", 18);
let student5 = new studentDetails("tulsi", "CSE", 30);
let student6 = new studentDetails("srinivas", "CSE", 65);
studentobjectArray.push(student1, student2, student3, student4, student5, student6);
console.log(studentobjectArray);
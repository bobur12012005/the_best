let students = [
    {
        name: "baxtzod",
        age: 15,
        isMarried: false,
        hair_color: "blue"
    },
    {
        name: "islom",
        age: 15,
        isMarried: true,
        hair_color: "red"
    },
    {
        name: "safir",
        age: 15,
        isMarried: false,
        hair_color: "lisiy"
    },
    {
        name: "abdumanon",
        age: 13,
        isMarried: false,
        hair_color: "black"
    },
    {
        name: "xojimurod",
        age: 16,
        isMarried: true,
        hair_color: "pink"
    },
    {
        name: "aziza soliyeva",
        age: 15,
        isMarried: true,
        hair_color: "green"
    },
    {
        name: "aziza",
        age: 15,
        isMarried: false,
        hair_color: "skyblue"
    },
    {
        name: "ismoil",
        age: 12,
        isMarried: true,
        hair_color: "brown"
    },
    {
        name: "artyom",
        age: 14,
        isMarried: false,
        hair_color: "purple"
    },
    {
        name: "abdukhafiz",
        age: 17,
        isMarried: false,
        hair_color: "white"
    },
    {
        name: "bobur",
        age: 18,
        isMarried: true,
        hair_color: "brown"
    },
    {
        name: "shoxa",
        age: 17,
        isMarried: false,
        hair_color: "black"
    },
    {
        name: "alSafir",
        age: 15,
        isMarried: true,
        hair_color: "orange"
    },
]


let sorted = students.sort((a, b) => a.age - b.age);
console.log(...sorted);


let single = [];
let double = [];
students.filter(student => {
  if (student.isMarried === true) {
    double.push(student.name);
  } else {
    single.push(student.name);
  }
});
console.log("SINGLE STUDENTS: " + single);
console.log("DOUBLE STUDENTS: " + double);


let old = students[0];
students.filter((student) => {
  if (student.age > old.age) {
    old = student;
}
});
console.log("The oldest student: " + old.name, old.age);


let young = students[0];
students.filter((student) => {
  if (student.age < young.age) {
    young = student;
}
});
console.log("The youngest student: " + young.name, young.age);
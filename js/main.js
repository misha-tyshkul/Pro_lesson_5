const students = ["Валера", "Ира", "Вова", "Миша", "Коля", "Настя", "Лиза", "Света", "Андрей", "Влад"];
console.log(students);

// №1
students.push("Ира");
students.push("Боря");

// №2
students.unshift("Таня");
students.unshift("Лёша");

// №3
students.pop();

// №4
students.shift();

// №5
const nameStudent = prompt("Имя студента");

console.log(students.includes(nameStudent));

// №6
const newList = students.slice(3, 7);

// №7
const newStudents = ["Селена", "Брюс", "Марсель", "Ричард", "Джон"];
const allStudents = students.concat(newStudents);

console.log(allStudents);

// №8
allStudents.splice(3, 1);

// №9
allStudents.splice(6, 1, "Иван");

// №10
console.log(allStudents.join(" - "));

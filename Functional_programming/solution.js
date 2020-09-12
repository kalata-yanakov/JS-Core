const students = [
  {
    studentNumber: 1,
    firstName: 'Ivan',
    lastName: 'Ivanov',
  },
  {
    studentNumber: 2,
    firstName: 'Georgi',
    lastName: 'Georgiev',
  },
  {
    studentNumber: 3,
    firstName: 'Petar',
    lastName: 'Petrov',
  },
];

const gradebook = [
  {
    studentNumber: 2,
    grades: [2, 4, 4],
  },
  {
    studentNumber: 3,
    grades: [6, 6, 6],
  },
  {
    studentNumber: 1,
    grades: [5, 6, 4],
  },
];

// Implement a getAverageStudentGrade function. It should take a gradebook as an input parameter,
// calculate the average of all the grades in the gradebook and return it.

const getAverageStudentGrade = (gradebook) => {
  const grades = gradebook.map(({ grades }) => grades).flat();
  const averageGrade = grades.reduce((arr, acc) => arr + acc, 0) / grades.length;
  return averageGrade;
};
console.log(getAverageStudentGrade(gradebook));


// Implement a getStudentGrades function. It should take a students array and a gradebook as 
// input parameters and return inner function. The inner function should 
// take a student's firstName and lastName and return its grades.

const getStudentGrades = (students, gradebook) => {
  return (firstName, lastName) => {
    const result = students.filter(
      (student) =>
        student.firstName === firstName && student.lastName === lastName
    );
    const newResult = gradebook.filter(
      (el) => el.studentNumber === result[0].studentNumber
    );

    return newResult[0].grades;
  };
};
const test = getStudentGrades(students, gradebook);
console.log(test('Ivan', 'Ivanov'));


// Implement a getFullStudentsData function. It should take a students array and a gradebook as input parameters
//  and return a new array of objects with the full 
//  data stored about each student (studentNumber, firstName, lastName and grades).

const getFullStudentsData = (students, gradebook) => {
  return students.map((student) => ({
    ...student,
    grades: gradebook
      .filter((g) => g.studentNumber === student.studentNumber)
      .map(({ grades }) => grades)
      .flat(),
  }));
};

console.log(getFullStudentsData(students, gradebook));

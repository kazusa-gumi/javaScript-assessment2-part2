// Define student class
class Student {
    constructor(studentID, firstName, lastName, qualification) {
        this.studentID = studentID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.qualification = qualification;
    }
}

// Create an array of student information
let students = [
    new Student(9, 'Alice', 'Brown', 'Bachelors'),
    new Student(2, 'Bob', 'Green', 'Masters'),
    new Student(5, 'Charlie', 'Black', 'PhD'),
    new Student(7, 'David', 'White', 'Masters'),
    new Student(10, 'Eva', 'Gray', 'Bachelors'),
    new Student(1, 'Frank', 'Blue', 'PhD'),
    new Student(3, 'Grace', 'Red', 'Masters'),
    new Student(4, 'Henry', 'Pink', 'Bachelors'),
    new Student(8, 'Ivy', 'Yellow', 'Masters'),
    new Student(6, 'Jason', 'Purple', 'PhD')
];

// Output array to console
console.log(students);
// sort function
const sortedIdStudents = students.sort((a, b) => a.studentID - b.studentID);

//Output sorted array to console
console.log(sortedIdStudents);

// sequential search
function sequentialSearch(students, searchId) {
    for(let i = 0; i < students.length; i++) {
        if (students[i].studentID === searchId) {
            return students[i];
        }
    }
    return null;
}

//Specify a student ID that exists
let searchId = 5; 

// Output results to console
let result = sequentialSearch(students, searchId);
console.log(result ? result : 'No student found with ID ' + searchId);

// Specify a nonexistent student ID
searchId = 99; 

// Output results to console
result = sequentialSearch(students, searchId);
console.log(result ? result : 'No student found with ID ' + searchId);
// name: student.list.js
// description: Manages student information using classes to add, display, search,
// and sort students in a list, which symbiotically interacts with the UI.
// author: Kazusa Naoi
// date: 20/11/2023
// Defines a Student class with properties for student ID, first name, last name, and qualification
class Student {
    constructor(studentID, firstName, lastName, qualification) {
        this.studentID = studentID; 
        this.firstName = firstName;
        this.lastName = lastName;
        this.qualification = qualification; // Academic qualification e.g. Bachelors, Masters, PhD
    }
}
// Defines a StudentList class to manage an array of Student objects
class StudentList {
    constructor(students) {
        this.students = students; // Initializes with an array of Student objects
    }
    // Sorts the student array in ascending order by student IDs
    sortAscendingByID() {
        this.students.sort((a, b) => a.studentID - b.studentID);
        this.refresh(); // Refresh the student display list after sorting
    }
    // Sorts the student array in descending order by student IDs
    sortDescendingByID() {
        this.students.sort((a, b) => b.studentID - a.studentID);
        this.refresh(); // Refresh the student display list after sorting
    }
    // Adds a new Student object to the array and updates the display
    add(studentID, firstName, lastName, qualification) {
        const newStudent = new Student(studentID, firstName, lastName, qualification);
        this.students.push(newStudent);
        this.refresh(); // Refresh the display to include the new student
    }
    // Rebuilds the table display of students each time the list is refreshed
    refresh() {
        const listBody = document.getElementById('listBody');
        listBody.innerHTML = ''; // Clear any existing content in the table body
        // Create and insert a new row for each student in the array
        this.students.forEach((student) => {
            const row = listBody.insertRow();
            row.insertCell(0).innerText = student.studentID;
            row.insertCell(1).innerText = student.firstName;
            row.insertCell(2).innerText = student.lastName;
            row.insertCell(3).innerText = student.qualification;
        });
    }
    // Searches for a student by studentID and updates the result display
    search(studentID) {
        const resultView = document.getElementById('resultView');
        studentID = studentID; 
        const result = this.students.find(student => student.studentID === studentID);
        resultView.innerHTML = ''; // Clear any previous search results
        if (result) {
            // Display the matching student's information
            const info = `ID: ${result.studentID}, Name: ${result.firstName} ${result.lastName}, Qualification: ${result.qualification}`;
            resultView.innerText = info;
            resultView.style.color = 'black'; // Set text color for visual distinction
        } else {
            // Indicate if no matching student was found
            resultView.innerText = '0 result';
            resultView.style.color = 'red'; // Set error text color for visual distinction
        }
    }
}
// Initial array of students
let initialStudents = [
    new Student('9', 'Alice', 'Brown', 'Bachelors'),
    new Student('2', 'Bob', 'Green', 'Masters'),
    new Student('5', 'Charlie', 'Black', 'PhD'),
    new Student('7', 'David', 'White', 'Masters'),
    new Student('10', 'Eva', 'Gray', 'Bachelors'),
    new Student('1', 'Frank', 'Blue', 'PhD'),
    new Student('3', 'Grace', 'Red', 'Masters'),
    new Student('4', 'Henry', 'Pink', 'Bachelors'),
    new Student('8', 'Ivy', 'Yellow', 'Masters'),
    new Student('6', 'Jason', 'Purple', 'PhD')
];


// Create a StudentList instance with initial student data
const studentList = new StudentList(initialStudents);
studentList.sortAscendingByID(); // Sort the list in ascending order upon initialization
// Call refresh to display the initial student list on page load
document.addEventListener('DOMContentLoaded', () => {
    studentList.refresh();
});



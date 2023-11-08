// name: app.js
// description: This script sets up a student management system. It enables adding students, displaying all students, and searching for a student by ID. The information is stored in the local storage and it persists even after the browser is closed.
// author: Kazusa Naoi
// date 08/11/2023 

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

// Constructor function for Student objects
function Student(studentID, firstName, lastName, qualification) {
    this.studentID = studentID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.qualification = qualification;
}

// Initialize student array
let studentArray = [];

// When initializing or refreshing student array
function initializeOrRefresh() {
    let storedArray = localStorage.getItem('studentArray');
    if (storedArray) {
        studentArray = JSON.parse(storedArray);
    } else {
        studentArray = students;
        localStorage.setItem('studentArray', JSON.stringify(studentArray));
    }
    updateListView();
}

function addStudent() {
    // Retrieve values from form inputs
    let studentIDField = document.getElementById('studentID');
    let firstNameField = document.getElementById('firstName');
    let lastNameField = document.getElementById('lastName');
    let qualificationField = document.getElementById('qualification');

    // Create new Student object with input values
    let newStudent = new Student(studentIDField.value, firstNameField.value, lastNameField.value, qualificationField.value);
    // Add this student to array
    studentArray.push(newStudent);
    // Save the current state of the studentArray
    localStorage.setItem('studentArray', JSON.stringify(studentArray));
    // Update list view
    updateListView();

    // Clear form fields after submitting
    studentIDField.value = "";
    firstNameField.value = "";
    lastNameField.value = "";
    qualificationField.value = "";
}

// Function to display student list in table view
function updateListView() {
    let listBody = document.getElementById('listBody');
    listBody.innerHTML = ''; // Clear current list view
    for (let i = 0; i < studentArray.length; i++) {
        let student = studentArray[i];
        // Create new table row for each student
        let row = listBody.insertRow();
        row.insertCell(0).innerText = i + 1; // Index
        row.insertCell(1).innerText = student.studentID;
        row.insertCell(2).innerText = student.firstName;
        row.insertCell(3).innerText = student.lastName;
        row.insertCell(4).innerText = student.qualification;
    }
}

// Function to search students by ID and display result
function findStudentByID() {
    let searchID = document.getElementById('searchID').value;
    let result = studentArray.find(student => student.studentID == searchID);
    let resultView = document.getElementById('resultView');
    resultView.innerHTML = '';
    if (result) {
        resultView.innerText = `Found: ID: ${result.studentID}, Name: ${result.firstName} ${result.lastName}, Qualification: ${result.qualification}`;
    } else {
        resultView.innerText = 'No result found';
    }
}

// Event listeners for buttons
document.getElementById('submitButton').addEventListener('click', addStudent);
document.getElementById('refreshButton').addEventListener('click', initializeOrRefresh);
document.getElementById('searchButton').addEventListener('click', findStudentByID);

// Initial setup
initializeOrRefresh();
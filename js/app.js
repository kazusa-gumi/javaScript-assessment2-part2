// name: app.js
// description: This script sets up a student management system. It facilitates
// the addition of students, display of all students, and searching for students by ID.
// Persisted data is stored in the local storage and remains available after the browser is closed.
// author: Kazusa Naoi
// date: 20/11/2023

// Event listener for when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set up an event listener for the 'Submit' button click
    document.getElementById('submitButton').addEventListener('click', () => {
        // Retrieve values from form inputs
        const studentID = document.getElementById('studentID').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const qualification = document.getElementById('qualification').value;

        // Add new student to the list
        studentList.add(studentID, firstName, lastName, qualification);

        // Clear form fields after submitting
        document.getElementById('studentID').value = '';
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('qualification').value = '';
    });

    // Refresh the displayed student list
    studentList.refresh();
});

// Explicitly call refresh on loading to ensure the list is loaded and displayed
studentList.refresh();

// Set up an event listener for the 'Search' button click
document.getElementById('searchButton').addEventListener('click', () => {
    const searchID = document.getElementById('searchID').value; // Get search id from input
    studentList.search(searchID); // Search for student by id
    document.getElementById('searchID').value = ''; // Clear search input field
});

// Set up an event listener for 'Refresh' button click to clear search results
document.getElementById('refreshSearchButton').addEventListener('click', () => {
    document.getElementById('resultView').innerText = ''; // Clear the search result display
    document.getElementById('searchID').value = ''; // Clear search input field
});

// Set up an event listener for 'Sort Ascending' button click
document.getElementById('sortAscButton').addEventListener('click', () => {
    studentList.sortAscendingByID(); // Sort student list in ascending order by ID
});

// Set up an event listener for 'Sort Descending' button click
document.getElementById('sortDescButton').addEventListener('click', () => {
    studentList.sortDescendingByID(); // Sort student list in descending order by ID
});

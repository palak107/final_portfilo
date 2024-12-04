


var tabLinks = document.getElementsByClassName('skills');  // Get all elements with the class 'skills'
var tabContents = document.getElementsByClassName('table-content');  // Get all elements with the class 'table-content'



function opentab(event, tabname) {
    // Remove active class from all tab links
    for (var tabLink of tabLinks) {
        tabLink.classList.remove('activelink');
    }

    // Remove active class from all content sections to hide them
    for (var tabContent of tabContents) {
        tabContent.classList.remove('active');
    }

    // Add the active class to the clicked tab's content to show it
    var selectedTab = document.getElementById(tabname);
    selectedTab.classList.add('active');  // Show the selected content

    // Add the active-link class to the clicked tab (for underline effect)
    event.currentTarget.classList.add('activelink');
}




document.getElementById('form').addEventListener('submit', function(event) {
    var valid = true; // Flag to check form validity
    
    // Get the form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;

    // Validate telephone number
    if (!telephone) {
        alert("Telephone number is required.");
        valid = false;  // Mark form as invalid
    }
    
    // Validate name
    if (!name) {
        alert("Name is required.");
        valid = false;  // Mark form as invalid
    } else if (!validateName(name)) {
        alert("Name should only contain letters and spaces.");
        valid = false;  // Mark form as invalid
    }

    // Validate email
    if (!email) {
        alert("Email is required.");
        valid = false;  // Mark form as invalid
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        valid = false;  // Mark form as invalid
    }

    // If the form is not valid, prevent submission
    if (!valid) {
        event.preventDefault(); // Prevent form submission
    }
});

// Name validation function (only letters and spaces allowed)
function validateName(name) {
    const nameRegex = /^[A-Za-z\s]+$/;  // Only letters and spaces
    return nameRegex.test(name);  // Return true if valid
}

// Email validation function (basic format check)
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;  // Simple email format check
    return emailRegex.test(email);  // Return true if valid
}

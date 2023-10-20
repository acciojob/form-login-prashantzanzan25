function getFormvalue() {
    // Get the form element by its ID
    var form = document.getElementById("forml");

    // Get the values of the first name and last name input fields
    var firstName = form.elements["fname"].value;
    var lastName = form.elements["lname"].value;

    // Display the values in an alert
    alert("First Name: " + firstName + "\nLast Name: " + lastName);

    // Prevent the form from submitting and refreshing the page
    return false;
}
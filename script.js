function getFormValue() {
    // Get the form element
    var form = document.getElementById('form1');

    // Get the values of the first and last name input fields
    var firstName = form.elements['fname'].value;
    var lastName = form.elements['lname'].value;

    // Display the values in an alert
    alert('First Name: ' + firstName + '\nLast Name: ' + lastName);

    // Prevent the form from actually submitting
    return false;
}

function getFormvalue() {
    // Get the form element by its ID
    var form = document.getElementById('myForm');

    // Get the values of the First and Last name input fields
    var firstName = form.elements['firstName'].value;
    var lastName = form.elements['lastName'].value;

    // Display the values in an alert
    alert('First Name: ' + firstName + '\nLast Name: ' + lastName);
}

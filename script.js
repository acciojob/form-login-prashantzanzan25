function getFormvalue() {
    // Get the form element by its ID
    var form = document.getElementById('form1'');

    // Get the values of the First and Last name input fields
    var firstName = form.elements['fname'].value;
    var lastName = form.elements['lname'].value;

    // Display the values in an alert
    alert('First Name: ' + firstName + '\nLast Name: ' + lastName);
}

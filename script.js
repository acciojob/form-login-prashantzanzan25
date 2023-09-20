function getFormvalue() {
    // Get the values of the First and Last name
    const firstName = document.getElementsByName("firstname")[0].value;
    const lastName = document.getElementsByName("lastname")[0].value;

    // Display the values in an alert
    alert("First Name: " + firstName + "\nLast Name: " + lastName);
}

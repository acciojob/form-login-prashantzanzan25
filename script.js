function getFormvalue() {
    // Get the values of the First and Last name
    const firstName = document.getElementsByName("ftname")[0].value;
    const lastName = document.getElementsByName("ltname")[0].value;

    // Display the values in an alert
    alert("First Name: " + firstName + "\nLast Name: " + lastName);
}

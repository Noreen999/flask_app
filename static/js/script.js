// Simulated registered users for testing
const registeredUsers = [
    { email: "noreen@gmail.com", password: "12345" }
];

// Navigate between pages
function navigateTo(page) {
    window.location.href = page;
}

// Login function
function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    var msg = document.getElementById('msg');

    // Check if email and password are provided
    if (email === "" || password === "") {
        msg.innerHTML = "Please enter email and password.";
        return;
    }


    // Check if user is registered
    const user = registeredUsers.find(user => user.email === email && user.password === password);

    if (user) {
        // Redirect to dfoam.html if registered
        window.location.href = "dfoam.html"; 
    } else {
        // Show message to register if not registered
        msg.innerHTML = "Not registered.";
    }
}

// Simulated registered users array
const registeredusers = [];

// Register function
function register(event) {
    event.preventDefault();  // Prevent form from submitting normally

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (name && email && password) {
        // Simulate saving the user data
        registeredUsers.push({ name, email, password });  // Add new user to array
        alert("Registration successful!");

        // Redirect to the Flask route for the form page
        window.location.href = "/data-form";  // Ensure the correct path
    } else {
        alert("Please fill in all fields.");
    }
}











// Data form submission function
function submitForm() {
    var serviceType = document.getElementById('serviceType').value;  // Getting service type value
    var description = document.getElementById('description').value;  // Getting description value

    // Simulated form submission (replace with actual backend logic)
    console.log("Service Type: " + serviceType + ", Description: " + description);
    alert("Form submitted successfully!");
}

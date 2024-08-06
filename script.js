// JavaScript code to handle form submission
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("article");
    const emailInput = form.querySelector("input[type='email']");
    const messageInput = form.querySelector("textarea");
    const submitButton = form.querySelector("button[type='submit']");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Validate email and message
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();
        
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        if (message.length < 1) {
            alert("Please enter your message.");
            return;
        }
        
        // Simulate sending the message (you can implement actual sending logic here)
        alert(Thank you, ${email}! Your message has been sent successfully.);
        
        // Clear the form fields after submission
        emailInput.value = '';
        messageInput.value = '';
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
        return re.test(String(email).toLowerCase());
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("article");
    const emailInput = form.querySelector("input[type='email']");
    const messageInput = form.querySelector("textarea");
    const submitButton = form.querySelector("button[type='submit']");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
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
        alert(Thank you, ${email}! Your message has been sent successfully.);
        emailInput.value = '';
        messageInput.value = '';
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return re.test(String(email).toLowerCase());
    }
});

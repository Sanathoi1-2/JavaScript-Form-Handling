document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let output = document.getElementById("output");

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return;
    }

    if (!email.includes("@")) {
        alert("Enter a valid email address.");
        return;
    }

    console.log("Form Submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    output.innerHTML = `
        <h3>Submitted Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    document.getElementById("contactForm").reset();
});
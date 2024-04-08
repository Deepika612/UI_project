userCredentials = {
    u1: "p1",
    u2: "p2",
    u3: "p3",
    u4: "p4",
    u5: "p5"
};

loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    if (userCredentials[username] == password) {
        window.location.href = "Dataentry.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
document.addEventListener("MDO", function() {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const formData = new FormData(registerForm);
      fetch("php/register.php", {
        method: "POST",
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        if (data === "New record created successfully") {
          window.location.href = "login.html";
        } else {
          alert("Registration failed");
        }
      });
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const formData = new FormData(loginForm);
      fetch("php/login.php", {
        method: "POST",
        body: formData
      })
      .then(response => response.text())
      .then(data => {
        if (data === "User exists") {
          window.location.href = "user_panel.html";
        } else {
          alert("Login failed");
        }
      });
    });
  }
});
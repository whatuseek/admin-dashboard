document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some((u) => u.username === username);
  
    if (userExists) {
      alert("User already exists!");
      return;
    }
  
    existingUsers.push({ username, password });
    localStorage.setItem("users", JSON.stringify(existingUsers));
    alert("Registration successful!");
    window.location.href = "login.html"; // Redirect to login page
  });
  
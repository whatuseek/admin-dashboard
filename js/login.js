document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Validate login details (mock example)
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(
      (u) => u.username === username && u.password === password
    );
  
    if (user) {
      alert("Login successful!");
      window.location.href = "trending.html"; // Redirect to trending page
    } else {
      alert("Invalid username or password!");
    }
  });
  
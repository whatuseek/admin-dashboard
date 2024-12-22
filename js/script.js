const handleFormSubmit = (formId, successMessage, redirectPage) => {
    const form = document.querySelector(`#${formId}`);
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = form.querySelector("input[type='text']").value.trim();
        const password = form.querySelector("input[type='password']").value.trim();
        if (!username || !password) {
          alert("Please fill in both fields!");
          return;
        }
        alert(`${successMessage}, ${username}!`);
        window.location.href = redirectPage;
      });
    }
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    handleFormSubmit("registerForm", "Registration Successful", "login.html");
    handleFormSubmit("loginForm", "Login Successful", "landing.html");
  });
  
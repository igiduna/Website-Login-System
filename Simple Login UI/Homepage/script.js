document.addEventListener("DOMContentLoaded", function () {
  const registerBtn = document.getElementById("register-button2");
  const loginBtn = document.getElementById("login-button2");

  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  const loginHeader = document.getElementById("loginHeader");
  const registerHeader = document.getElementById("registerHeader");

  if (registerBtn) {
    registerBtn.addEventListener("click", function (e) {
      e.preventDefault();
      loginForm.style.display = "none";
      loginHeader.style.display = "none";
      registerForm.style.display = "block";
      registerHeader.style.display = "block";
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", function (e) {
      e.preventDefault();
      registerForm.style.display = "none";
      registerHeader.style.display = "none";
      loginForm.style.display = "block";
      loginHeader.style.display = "block";
    });
  }
});

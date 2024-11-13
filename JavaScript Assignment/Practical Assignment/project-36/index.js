function togglePassword() {
  const passwordInput = document.getElementById("passwordInput");
  const toggleBtn = document.querySelector(".toggle-btn");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.textContent = "HIDE";
  } else {
    passwordInput.type = "password";
    toggleBtn.textContent = "SHOW";
  }
}

function checkPasswordStrength() {
  const passwordInput = document.getElementById("passwordInput");
  const strengthText = document.getElementById("strengthText");
  const bar1 = document.getElementById("bar1");
  const bar2 = document.getElementById("bar2");
  const bar3 = document.getElementById("bar3");
  const password = passwordInput.value;

  let strength = 0;

  // Check password strength
  if (password.length >= 4) strength++;
  if (/[A-Z]/.test(password) && /[0-9]/.test(password)) strength++;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

  // Reset bar colors
  bar1.className = "";
  bar2.className = "";
  bar3.className = "";

  if (strength === 1) {
    bar1.classList.add("strength-weak");
    strengthText.textContent = "Your password is weak";
    strengthText.style.color = "#ff4d4d";
  } else if (strength === 2) {
    bar1.classList.add("strength-medium");
    bar2.classList.add("strength-medium");
    strengthText.textContent = "Your password is medium";
    strengthText.style.color = "#ffbf00";
  } else if (strength === 3) {
    bar1.classList.add("strength-strong");
    bar2.classList.add("strength-strong");
    bar3.classList.add("strength-strong");
    strengthText.textContent = "Your password is strong";
    strengthText.style.color = "#28a745";
  } else {
    strengthText.textContent = "";
  }
}

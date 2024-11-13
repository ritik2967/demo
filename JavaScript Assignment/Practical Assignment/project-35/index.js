function validateEmail() {
  const emailInput = document.getElementById("emailInput");
  const icons = document.getElementById("icon");

  icons.className = "fa-regular fa-envelope";
  // Regular expression for basic email validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (emailInput.value.trim() === "") {
    icons.style.color = "#bbb";
  } else if (emailPattern.test(emailInput.value)) {
    icons.className = "fa-solid fa-check";
    icons.style.color = "green";
  } else {
    icons.style.color = "red";
  }
}

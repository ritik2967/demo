// validation funcation

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  let valid = true;
  formData.forEach((value, name) => {
    if (value.trim() === "") {
      document.getElementById(name).style.border = "1px solid red";
      document.getElementById(`${name}-message`).style.display = "block";
      valid = false;
    } else {
      document.getElementById(`${name}-message`).style.display = "none";
      document.getElementById(name).style.border = "1px solid #DDDDDD";
    }
  });

  if (!formData.get("gender")) {
    document.getElementById("gender").style.border = "1px solid red";
    document.getElementById(`gender-message`).style.display = "block";
    valid = false;
  } else {
    document.getElementById(`gender-message`).style.display = "none";
    document.getElementById("gender").style.border = "1px solid #DDDDDD";
  }

  if (valid) {
    alert("Form Submit successfully !");
    document.getElementById("validationForm").reset();
  }
}

// Attach the event listener to the form
document
  .getElementById("validationForm")
  .addEventListener("submit", handleSubmit);

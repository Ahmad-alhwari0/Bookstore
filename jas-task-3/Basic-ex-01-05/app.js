const username = document.querySelector("#username");
const Password = document.querySelector("#Password");
const confirmPassword = document.querySelector("#confirmPassword");
const registerform = document.querySelector("#registerform");
const registerBtn = document.querySelector("#registerBtn");
const successMessage =document.querySelector("#successMessage")

function checkFormValidity() {
  const usernameValue = username.value;
  const PasswordValue = Password.value;
  const confirmPasswordValue = confirmPassword.value;
 

  if (
    usernameValue === "" ||
    PasswordValue === "" ||
    confirmPasswordValue === "" ||
    PasswordValue !== confirmPasswordValue
  ) {
    registerBtn.disabled = true;
   
  } else {
    registerBtn.disabled = false;
  }
}

username.addEventListener("input", checkFormValidity);
Password.addEventListener("input", checkFormValidity);
confirmPassword.addEventListener("input", checkFormValidity);

registerform.addEventListener("submit", function (event) {
  event.preventDefault();
  document.querySelectorAll(".error-message").forEach((msg) => msg.remove());
  

  const usernameValue = username.value;
  const PasswordValue = Password.value;
  const confirmPasswordValue = confirmPassword.value;
  let isValid=true;

  if (usernameValue === "") {
    const errorMsg = document.createElement("span");
    errorMsg.textContent = "This field is required";
    errorMsg.classList.add("error-message");
    username.parentElement.appendChild(errorMsg);
    isValid=false;
  }
  if (PasswordValue === "") {
    const errorMsg = document.createElement("span");
    errorMsg.textContent = "This field is required";
    errorMsg.classList.add("error-message");
    Password.parentElement.appendChild(errorMsg);
    isValid=false;

  }

  if (confirmPasswordValue === "") {
    const errorMsg = document.createElement("span");
    errorMsg.textContent = "This field is required";
    errorMsg.classList.add("error-message");
    confirmPassword.parentElement.appendChild(errorMsg);
    isValid=false;

  }

  if (PasswordValue !== confirmPasswordValue) {
    const errorMsg = document.createElement("span");
    errorMsg.textContent = "Passwords do not match";
    errorMsg.classList.add("error-message");
    confirmPassword.parentElement.appendChild(errorMsg);
    isValid=false;

  }
  if(isValid){
    successMessage.textContent="Registration successful"
  }
});



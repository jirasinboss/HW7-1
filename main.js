const loginForm = document.querySelector(".login-form");
const checkOption = document.querySelector(".check-option");
const checkPass = document.querySelector(".check-pass");
const checkUser = document.querySelector(".check-user");
const sucCess = document.querySelector(".success");
const user = document.querySelector(".user");
const pass = document.querySelector(".pass");
const ro = document.querySelector(".ro");

const validateInput = (inputObj) => {
  const cleanedUsername = inputObj.username.replace(/\s/g, "").trim();
  const cleanedPassword = inputObj.password.replace(/\s/g, "").trim();
  const role = inputObj.role;

  const isNotEmpty = (value) => value.trim() !== "";
  const isUsernameValid = (username) =>
    username.trim().length > 3 && !/^\d/.test(username);
  const isPasswordValid = (password) =>
    password.trim().length > 4 &&
    /\d/.test(password) &&
    /[a-zA-Z]/.test(password);

  const usernameEmpty = !isNotEmpty(cleanedUsername);
  const passwordEmpty = !isNotEmpty(cleanedPassword);
  const roleEmpty = !isNotEmpty(role);
  const usernameInvalid = !isUsernameValid(cleanedUsername);
  const passwordInvalid = !isPasswordValid(cleanedPassword);

  if (usernameEmpty || usernameInvalid) {
    checkUser.textContent = "ความยาว 4 ตัวอักษรขึ้นไป * ขึ้นต้นด้วยตัวอักษร ";
    checkUser.style.color = "red";
    loginForm.elements.username.style.borderColor = "red";
  } else {
    checkUser.textContent = "";
    loginForm.elements.username.style.borderColor = "";
  }

  if (passwordEmpty || passwordInvalid) {
    checkPass.textContent =
      "ความยาว 4 ตัวอักษรขึ้นไป * ต้องมีทั้งตัวเลขและตัวอักษร * ภาษาอังกฤษเท่านั้น";
    checkPass.style.color = "red";
    loginForm.elements.password.style.borderColor = "red";
  } else {
    checkPass.textContent = "";
    loginForm.elements.password.style.borderColor = "";
  }

  if (roleEmpty) {
    checkOption.textContent = "เลือกบทบาท";
    loginForm.elements.role.style.borderColor = "red";
  } else {
    checkOption.textContent = "";
    loginForm.elements.role.style.borderColor = "";
  }

  if (
    !usernameEmpty &&
    !usernameInvalid &&
    !passwordEmpty &&
    !passwordInvalid &&
    !roleEmpty
  ) {
    const successMessage = `Login successful\nUsername: ${cleanedUsername}\nPassword: ${cleanedPassword}\nRole: ${role}`;
    alert(successMessage);
    setTimeout(function () {
      window.location.href = "https://www.example.com";
    }, 1000);
  }
};

const handleLogin = (e) => {
  e.preventDefault();
  let inputObj = {};
  for (let el of loginForm.elements) {
    inputObj[el.id] = el.value;
  }
  validateInput(inputObj);
};

loginForm.addEventListener("submit", handleLogin);

"use strict";

let emailRegistration = document.querySelector("#email-reg");
let passwordRegistration = document.querySelector("#password-reg");
let buttonRegistration = document.querySelector("#btn-registration");
let errorEmailRegistration = document.querySelector("#email-empty");
let errorPasswordRegistration = document.querySelector("#password-empty");
let passwordValidLength = document.querySelector("#password-length");
let emailValid = document.querySelector("#email-valid");
let checkBoxRegistration = document.querySelector("#check-reg");
let checkBoxError = document.querySelector("#check-empty");
let errorEmailTitle = document.querySelector(".form__email-title");
let errorPassTitle = document.querySelector(".form__pass-title");
let errorEmailElement = document.querySelector("#form__email-element");
let errorPassElement = document.querySelector("#form__pass-element");
let errorCheckboxElement = document.querySelector(".form__checkbox-element");

let emailResult = "";
let passwordResult = "";
let checkBoxResult = false;
let user = {};
let emailValidUser,
  passwordValid,
  checkedValid = false;  

emailRegistration.addEventListener("input", (even) => {
  emailResult = even.target.value.trim();
});

passwordRegistration.addEventListener("input", (even) => {
  passwordResult = even.target.value.trim();
});

checkBoxRegistration.addEventListener("change", (even) => {
  checkBoxResult = even.target.checked;
});

buttonRegistration.addEventListener("click", (even) => {
  even.preventDefault();
  validRegistration();
  localDate();
});

const validRegistration = () => {
  //проверка на пустые строку email
  if (emailResult.length === 0) {
    errorEmailRegistration.style.display = "block";
    emailRegistration.style.borderColor = "red";
    emailValid.style.display = "none";
    emailValidUser = false;
    errorEmailTitle.style.color = "red";
    errorPassTitle.style.color = "red";
    errorEmailElement.style.color = "red";
    errorPassElement.style.color = 'red';
    errorCheckboxElement.style.color = "red";
  } else {
    errorEmailRegistration.style.display = "none";
    emailRegistration.style.borderColor = "#787878";
    errorEmailTitle.style.color = "#787878";
    errorPassTitle.style.color = "#787878";
    errorEmailElement.style.color = "#787878";
    errorPassElement.style.color = "#787878";
    errorCheckboxElement.style.color = "#787878";

    // проверка валидности email
    if (!validateEmail(emailResult)) {
      emailValid.style.display = "block";
      errorEmailTitle.style.color = "red";
      errorEmailElement.style.color = "red";
      emailRegistration.style.borderColor = "red";
      
    } else {
      emailValid.style.display = "none";
      user.email = emailResult;
      emailValidUser = true;
    }
  }

  //проверка на пустые строку password
  if (passwordResult.length === 0) {
    errorPasswordRegistration.style.display = "block";
    
    passwordRegistration.style.borderColor = "red";
    passwordValidLength.style.display = "none";
    passwordValid = false;
  } else {
    errorPasswordRegistration.style.display = "none";
    passwordRegistration.style.borderColor = "#787878";

    //проверка на длину пароля
    if (passwordResult.length < 8) {
      passwordValidLength.style.display = "block";
      errorPassTitle.style.color = "red";
      errorPassElement.style.color = 'red';
      passwordRegistration.style.borderColor = "red";
    } else {
      passwordValidLength.style.display = "none";
      user.password = passwordResult;
      passwordValid = true;
    }
  }

  if (!checkBoxResult) {
    checkBoxError.style.display = "block";
    errorCheckboxElement.style.color = "red";
    checkedValid = false;
    
  } else {
    checkBoxError.style.display = "none";
    checkedValid = true;
  }
};

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
};

// console.log(validateEmail(emailResult));

const localDate = () => {
  if (emailValidUser && passwordValid && checkedValid) {
    localStorage.user = JSON.stringify(user);
    console.log(localStorage.getItem('user'));
  }
};





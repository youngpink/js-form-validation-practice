function validateUserInput(){
  let validationResult = false;

  /***
   * Validation Rules
   * Username:
   *  - only allow word character (letter, number, underscore)
   *  - at least 8 characters
   *  - at most 32 characters
   * Email:
   *  - must be in the form of XXX@xxx.xx,
   *  - only allow word character (letter, number, underscore)
   *  - can not be empty
   * Phone:
   *  - acceptable forms:
   *   1. +XX XXX XXXX XXXX
   *   2. +(XX) XXX-XXXX-XXXX
   *   3. +XXXXXXXXXXXXX
   *   4. XXXXXXXXXXX
   *  - only allow following characters: +, ,-,[0-9]
   *  - can not be empty
   * Password:
   *  - at least contain one capital letter
   *  - at least contain one number
   *  - at least contain one special character
   *  - at least 12 characters
   *  - at most 128 characters
   * Password Confirmation:
   *  - must be the same as password
  ***/

  // Write your code here...
  let username = document.getElementsByName('username')[0].value;
  let email = document.getElementsByName('email')[0].value;
  let phone = document.getElementsByName('phone')[0].value;
  let password = document.getElementsByName('password')[0].value;
  let passwordConfirmation = document.getElementsByName('passwordConfirmation')[0].value;

  let usernameError = document.getElementById('usernameError');
  let emailError = document.getElementById('emailError');
  let phoneError = document.getElementById('phoneError');
  let passwordError = document.getElementById('passwordError');
  let passwordConfirmationError = document.getElementById('passwordConfirmationError');

  if(usernameVerify(username) && emailVerify(email) && phoneVerify(phone)
      && passwordVerify(password) && passwordConfirmVerify(passwordConfirmation, password)) {

      validationResult = true;

      usernameError.innerHTML = '';
      emailError.innerHTML = '';
      phoneError.innerHTML = '';
      passwordError.innerHTML = '';
      passwordConfirmationError.innerHTML = '';

  }else{

      usernameError.innerHTML = usernameVerify(username) ? '' : "请输入8～32位的用户名，用户名只能包含字母，数字，下划线";
      emailError.innerHTML = emailVerify(email) ? '' : "请输入正确的邮箱";
      phoneError.innerHTML = phoneVerify(phone) ? '' : "请输入正确的手机号";
      passwordError.innerHTML = passwordVerify(password) ? '' : "请输入正确的12～128位密码，且至少包含1个大写字母，1个数字，1个特殊字符";
      passwordConfirmationError.innerHTML = passwordConfirmVerify(passwordConfirmation, password) ? '' : "请确认输入的密码";
  }

  if (validationResult) {
    alert("validation passed, you're now allowed to submit.");
  }
}

function usernameVerify(value) {
    let reg = /^\w+$/;

    return (8 <= value.length && value.length <= 32 && reg.test(value));
}

function emailVerify(value){
    let reg = /^\w+@\w+\.\w+$/;

    return (value !=='' && reg.test(value));
}

function phoneVerify(value){
    let reg1 = /^\+[0-9]{2} [0-9]{3}( [0-9]{4}){2}$/;
    let reg2 = /^\+\([0-9]{2}\) [0-9]{3}(-{1}[0-9]{4}){2}$/;
    let reg3 = /^\+[0-9]{13}$/;
    let reg4 = /^[0-9]{11}$/;

    return (value !== '' && ( reg1.test(value) || reg2.test(value) || reg3.test(value) || reg4.test(value)));
}

function passwordVerify(value){
    let reg1 = /\W+/;
    let reg2 = /[A-Z]+/;
    let reg3 = /[0-9]+/;

    return (12 <= value.length && value.length <=128 && reg1.test(value) && reg2.test(value) && reg3.test(value));
}

function passwordConfirmVerify(value, passValue){

  return (value === passValue);
}



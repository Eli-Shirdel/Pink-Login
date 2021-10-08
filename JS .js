var $ = document;

var SignInForm = $.getElementById('SignInForm');

var signUpForm = $.getElementById('SignUpForm');



function signUpFunc(){
   SignUpForm.style.display="none";
   SignInForm.style.display="block";
}




function SignUpFunc(){
   SignInForm.style.display="none";
   SignUpForm.style.display="block";
}





var passWord = $.getElementById('passWord');

var passWordError = $.getElementById('passWordError');

var signIn = $.getElementById('signIn');

var signUp = $.getElementById('signUp');




function passwordCountFun(){
  if(passWord.value.length < 8){
      passWordError.innerHTML = "Weak";
      passWordError.style.color='red';
  }

  else if(passWord.value.length<12){
   passWordError.innerHTML = "Normal";
   passWordError.style.color='#ffd000';
  }

  else if(passWord.value.length>12){
   passWordError.innerHTML = "Strong";
   passWordError.style.color='#00ff00' ;
  }
}
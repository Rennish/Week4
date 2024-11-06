
function alertHurray(event){
  event.preventDefault(); 

  let alertbutton = document.querySelector("#special-button"); 

  alertbutton.innerHTML = "<b>Hooray</b>"; 
}
let buttonalert = document.querySelector("#special-button"); 

buttonalert.addEventListener("click", alertHurray); 



function displayPassword(event){
event.preventDefault(); 

let password = document.querySelector("#password-input"); 
alert(password.value); 
}
let submitpassword = document.querySelector("#password-form");
submitpassword.addEventListener("submit", displayPassword); 



function submitUserDetails(event){
  event.preventDefault(); 
  //alert("well");

  let emailinput = document.querySelector("#email-input"); 
  let usernameInput = document.querySelector("#username-input"); 

  emailValue = emailinput.value ; 
  usernameValue = usernameInput.value ;
  
  userDetails = `Your email is ${emailValue} and your username is ${usernameValue}`; 
  alert(userDetails); 
}
let submitDetails = document.querySelector("#signup-form"); 
submitDetails.addEventListener("submit", submitUserDetails); 
/*
// Challenge 1
// Log li with id special
let list = document.querySelector("#special") ; 
console.log(list);


// Challenge 2
// Log all li with class of country
let countries = document.querySelectorAll("li.country") ; 
console.log(countries);

// Challenge 3
// Add class special to the li with id special
list.classList.add('special');

// Challenge 4
// In your code, replace the content of the element with id special
// by your favorite country (other than Portugal of course)

list.innerHTML = " 🇰🇪 Kenya"; 


*/
// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`


function buttonalert (event){
  event.preventDefault(); 

  //alert("it is 18 degrees"); 

  let buttonvalue = document.querySelector("#button-show"); 
  buttonvalue.innerHTML = "18 degrees"; 
}
let buttonClick = document.querySelector("#button-show"); 

buttonClick.addEventListener("click", buttonalert); 
// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’

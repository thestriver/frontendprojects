const fname = document.getElementsByName("firstname")[0];
const lname = document.getElementsByName("lastname")[0];
const mail = document.getElementsByName("email")[0];
const pass = document.getElementsByName("password")[0];
const btn = document.getElementsByName("trial")[0];
const form = document.querySelector(".form");

btn.addEventListener('click', () => {alert('Hello World'); } );

function formValidation() {
     if(document.forms["myForm"]["firstname"].value == "") {
         alert("First Name can not be empty ");
         document.forms["myForm"]["firstname"].focus();
         return false;
     };
    
}

function validateForm() {
    var x = document.forms["myForm"]["firstname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
}

$(document).ready(function() {
    alert("Hello World!");
});
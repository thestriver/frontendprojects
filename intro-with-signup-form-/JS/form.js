var fname = document.getElementsByName("firstname")[0];
var lname = document.getElementsByName("lastname")[0];
var mail = document.getElementsByName("email")[0];
var pass = document.getElementsByName("password")[0];
var btn = document.getElementsByName("trial")[0];
var form = document.querySelector(".form");


function formValidation() {
     if(fname.value == "") {
         alert("First Name can not be empty ");
         //document.forms["myForm"]["firstname"].focus();
         return false;
     };
    
}

btn.addEventListener('click', function()  {
    if(fname.value == "") {
        console.log('empty');
    }
} );


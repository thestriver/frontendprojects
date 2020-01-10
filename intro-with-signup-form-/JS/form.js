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
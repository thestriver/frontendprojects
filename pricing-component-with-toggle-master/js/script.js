function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
}


function pricingCheck() {
    var checkBox = document.getElementById("checking");
    var basicp = document.getElementById("basicp");
    var profp = document.getElementById("profp");
    var masterp = document.getElementById("masterp");

    if(checkBox.checked == false ) {
        basicp.innerText = "$199.99"; 
        profp.innerText = "$249.99";
        masterp.innerText = "$349.99";
    } 
    else {
        basicp.innerText = "$19.99";
        profp.innerText = "$24.99";
        masterp.innerText = "34.99"
    }
}


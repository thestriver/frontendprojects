const button = document.getElementById('enter');
const input = document.getElementById('userinput');
var ul = document.querySelector("ul");
var li = document.querySelector("li"); //just the first li
var alli = document.querySelectorAll("li"); //all li tags
var done = document.getElementsByName("remove"); //all done buttons



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	btn.innerHTML = "Done";
	

	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);


	li.addEventListener('click', () => li.classList.toggle("done"));
	btn.onclick = () => event.target.parentNode.remove();

	ul.appendChild(li);
	input.value = "";
}


function addListAfterClick() {
	if(inputLength() > 0 ) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if(inputLength() > 0  && event.keyCode == 13) {
		createListElement();
	}
	
}


button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);

//toggle strike-through for each li element
alli.forEach(li => li.addEventListener('click', () => {
	li.classList.toggle("done");
}));


//click button which removes the element
done.forEach(item => item.addEventListener('click', function(event) {
	event.target.parentNode.remove();
}))




// done.forEach(item => item.addEventListener('click', (event) => {
// 	event.target.parentNode.remove();
// }))



// done.addEventListener('click', () => {ul.removeChild(li)})

// done.forEach(rem => rem.addEventListener('click', () => {ul.removeChild(li)}));
// done.forEach(rem => rem.addEventListener('click', () => {console.log("remove");});


// button.addEventListener('click', function() {
// 	if(input.value.length > 0 ) {
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));
// 		ul.appendChild(li);
// 		input.value = "";
// 	}
	
// })

// input.addEventListener('keypress', function(event) {
// 	if(input.value.length > 0  && event.keyCode == 13) {
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));
// 		ul.appendChild(li);
// 		input.value = "";
// 	}
	
// })
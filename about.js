function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert ('form has been successfully submitted')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const logo = document.querySelector('.logo');

function logoevent() {
	alert('congrats! you know my secret!')
}

logo.addEventListener('mouseover', logoevent)
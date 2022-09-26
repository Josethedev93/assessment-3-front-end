const colorBtn = document.querySelector('#color');
const placeBtn = document.querySelector('#place');
const ritualBtn = document.querySelector('#ritual');

function colorClick() {
    alert('My favorite color is Green!!')
}

function placeClick() {
    alert('My favorite place is Maine!!')
}

const ritualCLick = () => {
    return alert('My favorite ritual is the one to the Aztec Sun Gods!!');
}

colorBtn.addEventListener('click', colorClick);
placeBtn.addEventListener('click', placeClick);
ritualBtn.addEventListener('click', ritualCLick);

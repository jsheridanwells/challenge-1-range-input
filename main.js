//select elements
let number = document.getElementById('number');
let range = document.getElementById('range');

range.addEventListener('mouseup', function() {
	let rangeVal = this.value;
	number.value = rangeVal;
});

number.addEventListener('keyup', function() {
	let numVal = this.value;
	range.value = numVal;
})
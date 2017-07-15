let number = document.getElementById('number');
let range = document.getElementById('range');

range.addEventListener('mousemove', function() {
	number.value = this.value;
});

number.addEventListener('keyup', function() {
	range.value = this.value;
})
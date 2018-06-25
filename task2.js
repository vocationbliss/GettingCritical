var redBox = document.getElementById('box1');
var redButton = document.getElementById('button1');
var greenBox = document.getElementById('box2');
var greenButton = document.getElementById('button2');

redButton.addEventListener('click', function(){
	redBox.style.backgroundColor = 'red'
})
greenButton.addEventListener('click', function(){
	greenBox.style.backgroundColor = 'green'
})


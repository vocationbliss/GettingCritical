var redBox = document.getElementById("box1");
var onlyButton = document.getElementById("button");
var greenBox = document.getElementById("box2");
var onlyButton = document.getElementById("button");

onlyButton.addEventListener('click', function(){
	redBox.style.backgroundColor = 'red'
})
onlyButton.addEventListener('click', function(){
	greenBox.style.backgroundColor = 'green'
})

function primeOnFocus(where){
	var buttonElement = document.getElementById("is-prime-button");
	buttonElement.innerHTML = "isPrime?"
	buttonElement.style.backgroundColor = "#f39c12"; 

}

function primeOnClick(){
	var inputElement = document.getElementById("is-prime-num");
	var inputStr = inputElement.value;
	var inputNum = parseInt(inputStr);

	var answer;
	var color;
	
	if(isNaN(inputNum)){
		answer = "\u2620";
		color = "#e74c3c" //red
	}

	else if(isPrime(inputNum)){ 
		answer = "\u2611"
		color = "#1abc9c"; //green
	}

	else {
		answer = "\u2612"
		color = "#3498db"; //blue
	}

	var buttonElement = document.getElementById("is-prime-button");
	buttonElement.innerHTML = answer;
	buttonElement.style.backgroundColor = color;


}


function isPrime(x){
	if (x <= 1) return false;
	for (var i = 2; i < x; i++){
		if (x % i == 0) return false;
	}
	return true;
}
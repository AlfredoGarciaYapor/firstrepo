function myFunction() {
	var num = Math.floor(Math.random() * 3)
	if(num == 0){
		document.getElementById("demo").src = "JS/roca.jpg"
	}if else(num == 1){
		document.getElementById("demo").src = "JS/papel.jpg"
	}if else(num == 2){
		document.getElementById("demo").src = "JS/tijeras.jpg"
	}
  	
}
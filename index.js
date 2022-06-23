var op = window.prompt("Select Operator [ +  -  /  * ]")
var num1 = window.prompt("Enter the First Number")
var num2 = window.prompt("Enter the Second Number")

if (op == '+'){
	var result = Number(num1) + Number(num2)
	alert(num1 + op + num2 + ' = ' + result)
}

else if (op == '-'){
	var result = Number(num1) - Number(num2)
	alert(num1 + op + num2 + ' = ' + result)
}

else if (op == '/'){
	var result = Number(num1) / Number(num2)
	alert(num1 + op + num2 + ' = ' + result)
}

else if (op == '*'){
	var result = Number(num1) * Number(num2)
	alert(num1 + op + num2 + ' = ' + result)
}

else{
	alert('Enter Valid Operator!')
}
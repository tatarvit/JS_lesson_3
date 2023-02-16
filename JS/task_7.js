// Вводимо необхідні дані
//const firstChildName  = parseFloat(prompt('введіть a', '0'))
let month = 14

// Знаходимо результат виразів


if (month > 2 && month < 6) {
	console.log('весна')
}

else if (month > 5 && month < 9) {
	console.log('літо')
}

else if (month > 8 && month < 12) {
	console.log('осінь')
}

else if (month <= 12) {
	console.log('зима')
}

else {
	console.log('некоректні дані, ведіть число від 1 до 12')
}
// Вводимо необхідні дані
const min = 1; max = 6;
const a = Math.floor(Math.random() * (max - min) + min);
let b = parseInt(prompt('ви маєте дві спроби щоб вгадати число, введіть любе число від 1 до 5', ''))

// Знаходимо результат виразів

if (a > b) {
	b = parseInt(prompt('спробуй ще, введіть любе число від 1 до 5', ''))
}
else if (b > a) {
	b = parseInt(prompt('спробуй ще, введіть любе число від 1 до 5', ''))
}
else {
	console.log('Great! You are found the number')
}




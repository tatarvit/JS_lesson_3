// Вводимо необхідні дані
//const firstChildName  = parseFloat(prompt('введіть a', '0'))
let yearsOldge = 65

// Знаходимо результат виразів

if (yearsOldge <= 6) {
	console.log('дитина у садочку')
}

if (yearsOldge > 6 && yearsOldge <= 17) {
	console.log('школяр')
}

if (yearsOldge > 17 && yearsOldge <= 22) {
	console.log('студент')
}

if (yearsOldge > 22 && yearsOldge < 60) {
	console.log('працівник')
}

if (yearsOldge >= 60) {
	console.log('пенсіонер')
}


// Виводимо значення виразів

// document.write(`
// 		s1 = ${s1} <br>
// 		s2 = ${s2} <br>
// 		s3 = ${s3} <br>
// 		s4 = ${s4}
// 		`)

// Вводимо необхідні дані
//const firstChildName  = parseFloat(prompt('введіть a', '0'))
const productPrice = 16
const quantityMoney = 16


// Знаходимо результат виразів
//let lotteryTicket = Math.floor((quantityMoney - productPrice) / 4)

if (productPrice > quantityMoney) {
	console.log('unfortunately, you cannot purchase the product, there are not enough funds');
}
else if (quantityMoney > productPrice) {
	console.log('successful transaction, but you can buy lottery ticket for 4 dollars')
}
else {
	console.log('successful transaction')
}


// Виводимо значення виразів

// document.write(`
// 		s1 = ${s1} <br>
// 		s2 = ${s2} <br>
// 		s3 = ${s3} <br>
// 		s4 = ${s4}
// 		`)

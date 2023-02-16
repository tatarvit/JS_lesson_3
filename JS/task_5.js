let category = 'B'
let result

switch (category) {
	case 'A': result = 'мотоцикл'
		break;
	case 'B': result = 'легковий автомобіль'
		break;
	case 'C': result = 'вантажний автомобідь'
		break;
	default: result = 'некоректні дані'
		break;
}

console.log(result)
let weekday = 8
let result

switch (weekday) {
	case 1: result = 'понеділок'
		break;
	case 2: result = 'вівторок'
		break;
	case 3: result = 'середа'
		break;
	case 4: result = 'четверг'
		break;
	case 5: result = 'пятниця'
		break;
	case 6: result = 'субота'
		break;
	case 7: result = 'неділя'
		break;
	default: result = 'некоректні дані, введіть число від 1 до 7'
		break;
}

console.log(result)
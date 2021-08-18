
let firstName = null;
do {
	firstName = prompt('Укажите Ваше имя', 'Глеб');
} while (isFinite(firstName) || firstName === '')


let lastName = prompt('Укажите Вашу фамилию', 'Смык');

for (let i = 0; i < Infinity; i++) {
	if (isFinite(lastName) === false && lastName !== '') {
		break;
	} else {
		lastName = prompt('Укажите фамилию корректно', 'Смык');
	}
}

let fatherName = prompt('Укажите Ваше отчество', 'Иванович');

for (let i = 0; i < Infinity; i++) {
	if (isFinite(fatherName) === false && fatherName !== '') {
		break;
	} else {
		fatherName = prompt('Укажите отчество корректно', 'Смык');
	}
}

let age = prompt('Укажите Ваш возраст, лет', 26);

for (let i = 0; i < Infinity; i++) {
	if (isFinite(age) && age <= 100 && age > 0) {
		break;
	} else {
		age = prompt('Укажите возраст корректно', 26);
	}
}

let sex = confirm('Ваш пол мужской?');
let ageDay = age * 365;
let pens = null;

if (sex === true && age > 62) {
	sex = 'Мужской';
	pens = 'Да';
} else if (sex === true && age < 62) {
	sex = 'Мужской';
	pens = 'Нет';
} else if (sex === false && age > 57) {
	sex = 'Женский';
	pens = 'Да';
} else if (sex === false && age < 57) {
	sex = 'Женский';
	pens = 'Нет';
}

alert(`Ваше ФИО: ${firstName} ${lastName} ${fatherName}\nВаш возраст в годах: ${age}\nВаш возраст в днях: ${ageDay}\nЧерез 5 лет Вам будет: ${Number(age) + 5}\nВаш пол: ${sex}\nВы на пенсии: ${pens}`);
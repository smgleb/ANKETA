let firstName = null;
do {
	firstName = prompt('Укажите Ваше имя', 'Глеб');
} while (isFinite(firstName) || firstName === '')

let lastName = null;
do {
	lastName = prompt('Укажите Вашу фамилию', 'Смык');
} while (isFinite(lastName) || lastName === '')

let fatherName = null;
do {
	fatherName = prompt('Укажите Ваше отчество', 'Иванович');
} while (isFinite(fatherName) || fatherName === '')

let age = null;
do {
	age = prompt('Укажите Ваш возраст, лет', 26);
} while (isFinite(age) === false || age === '' || age < 0 || age >= 100)


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

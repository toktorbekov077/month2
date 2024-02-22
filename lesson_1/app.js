console.log('hello')
//переменные
var name = 'Ronaldo'
console.log(name)
//camelCase
var nameAndSurname = 'Shergazy Toktorbekov'
console.log(nameAndSurname)

//1тип данных
//string
var text = 'qwerty'
console.log(typeof text)
var date = '31.01.24'
console.log(date)
console.log(text.toUpperCase())
console.log(text.toLowerCase())
console.log(text.length)
console.log(text.repeat(34))
console.log('сегодняшняя дата -'+Date)//конкатенация

//2 number
var number = '56'
console.log(typeof number.toString())
console.log('средний возраст группы 35-01 -> ' +(23+18+18+15+17+19+18+24+22) / 9 )
var number1 = 7
var number2 = 2
console.log(number1** 3)
console.log(number1 % number2)

//3 boolean - true false
console.log(2 === 2)

//условные конструкции if,else..if,else
//логические операторы &&(и), ||(или)


var userSkills = prompt('введите ваш стаж')
if (userSkills <= 1){ //false
    alert('Ваш уровень - junior')
}else if(userSkills > 1 && userSkills <=5){ //true
    alert('Ваш уровень - Middle')
}else if(userSkills > 5){ //true
    alert('Ваш уровень - Senior')
}else {
    console.error('Произошло ошибка')
}

//регистрация
var userLogin = prompt ('введите логин')
var userPassword = prompt ('введите пароль')
var Login2 = prompt ('логин')
var Password2 = prompt ('пароль')
if(userLogin === Login2 && userPassword === Password2){
    alert('ваша авторизация прошла успешно')
}else{
    alert('произошла ошибка')
}
for (var i = 0; i<10; i++){
    console.log(i)
}

var people = [
    {name: 'Dastan', age: 16},
    {name: 'Aalam', age: 16},
    {name: 'Bob', age: 16},
    {name: 'Tim', age: 16},
]
console.log(people)

for (var i =0; i < people.length; i++){
    console.log(people[i].age)
}

var newPeople = people.map(person => person)
console.log(newPeople)

function greet (){
    console.log('hello')
}

greet()

var greet1 = () => {
    console.log('Heellooo')
}

greet1()


var greet = (func) => {
    func()
}
var out = () => {
    alert('hello')
}

greet(out)

var askUser = prompt('Кол-во пользователей')

for(var i = 0; i<askUser; i++){
    var nameOfUser = prompt(`Имя ${i + 1} первого пользователя: `)
    console.log(nameOfUser)
    var template = `
    <div class="cart">
        <h1>${nameOfUser}</h1>
    </div>
    `
    document.write(template)
}

var name = 'alex'
if (name.includes('a')){
    console.log(name)
}

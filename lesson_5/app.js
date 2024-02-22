// var filtering = (fruit) => {
//     return fruit.length > 5
// }
//
// var fruits = ['apple','cherry','pineapple']
// var filterfruits = fruits.filter(filtering)
// console.log(filterfruits)
//
// var users = [
//     {name: 'Adam', age:45},
//     {name: 'Jack', age:23},
//     {name: 'Lili', age:12},
//     {name: 'Coul', age:17},
//     {name: 'John', age:58},
//     {name: 'Willy', age:30},
// ]
//
// var userAge = users.filter((user) => user.age >= 18)
// var userName = users.filter((user) => user.name.includes('a') )
// console.log(userName)
// console.log(userAge)
//
// var soms = [3000,7000,10000]
// var dollars = soms.map((som) => som / 86)
// console.log(dollars)
// var fixDollars = dollars.map((dollars) => dollars.toFixed())
// console.log(fixDollars)
//
// //forEach
// var numbers = [2,3,4,5]
// numbers.forEach((number) => console.log(number **2))
//
// //find
// var searchUser = prompt('Кого ищете?').trim().toLowerCase()
// var users2 = [
//     {name: 'Adam', age:45},
//     {name: 'Jack', age:23},
//     {name: 'Lili', age:12},
//     {name: 'Coul', age:17},
//     {name: 'John', age:58},
//     {name: 'Willy', age:30},
// ]
// var findUser = users.find((item) => item.name.toLowerCase() === searchUser)
// console.log(findUser)

//some,every
var users3 = [
     {name: 'Adam', age:45},
     {name: 'Jack', age:23},
     {name: 'Lili', age:12},
     {name: 'Coul', age:17},
     {name: 'John', age:58},
     {name: 'Willy', age:30}
]
function addPrefix(user){
    return `Mr. ${user.name}`
}

var newArray = users3
    .filter((user) => user.age >18)
    .map(addPrefix)

console.log(newArray)

//es6+
let text = 'text'
const array = []
array.push(7)
console.log(array)

//rest
function getAllSum (...nums){
    //let sum = Array.from (arguments).reduce((a , b) => a+=b)
    let sum = nums.reduce((a , b) => a+=b)
    console.log(sum)
}
getAllSum(3,4,5,6,7,8,9,9)

function convertUSD(usd,...soms){
    console.log(usd, soms)
    return soms.map((som) => som / 87)
}

console.log(convertUSD(89,4000000,50000000))

//spread
const num1 = [1,2,3]
const num2 = [1,2,3]
const newNum = [...num1,...num2]
console.log(newNum)

function generateFibonacci(number){
    const fibonacci = [0,1]
    for (let i = 2; i < number; i++){
        fibonacci[i] = fibonacci [i -1] + fibonacci[i-2]
    }
    return console.log(fibonacci)
}
generateFibonacci(10)

function isPalindrom (str){
    const  string = str.toLowerCase()
    let stringWithoutSpaces = ''
    for (let i = 0 ; i < string.length; i++){
       if (string[i] !== ' '){
           stringWithoutSpaces += string [i]
       }
    }
    for (let i = 0 ; i < stringWithoutSpaces.length; i++){

    }
}
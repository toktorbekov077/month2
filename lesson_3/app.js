var children = [1994,2007,2021,2003,2010,2015,2014,2013,1998,2000,2018,2009,2013,2022.2007]
var currentYear = 2024
var gifts = 0
for (var child of children){
   var childAge = currentYear - child
   if (childAge >= 3 && childAge <= 11){
       gifts++
   }
}
console.log(`Gift total : ${gifts} of ${children.length}`)
print()
var cars = {
    BMW:'7 марта 1916 год',
    Mercedes_Benz:'28 июня 1926 год',
    Roll_Royce:'10февраля 2011 год ',
}
for (var car in cars){
    var date = car[car]
    //console.log(car)
    console.log(`${car} был основан ${date}`)
}
print()
for (var key of Object.keys(cars)){
    console.log(key)
}
console.log(Object.keys(cars))
console.log(Object.values(cars))
console.log(Object.entries(cars))

function print(){
    console.log('-'.repeat(50))
}
print()

//declaration
function sayHello(){
    console.log('Hello')
}
sayHello()

//expression
var strLog = function (string){
    console.log(string)
}
strLog('Frontend')

var doCalc = function (num1,num2){
    console.log(num1+num2)

}
doCalc(45,27)

//arrow
var getMax = (n1,n2) => {
   if (n1>n2){
       console.log(n1)
   }else {
       console.log(n2)
   }
}
getMax(10,7)

//тернатнные опператоры
var getMaxNum = (n1,n2) => console.log(n1>n2 ? n1:n2)
getMaxNum(2,8)

var sumArray = (array) => {
    for (var i=0 ; i< array.length ; i++){
       sum += array[i]
    }
   return console.log(sum)
}
sumArray([3,4,5,6,7,8,9,234567])

//методы массива
var fruits = ['banana','orange','apple']
//
fruits.push('cherry')
//
var addFruit = fruits.unshift('apple')
console.log(fruits)
//
var firsFruit = fruits.shift()
//
var deleteFruit = fruits.pop()
console.log(deleteFruit)
//
fruits.splice(2,1,'pineapple')
console.log(fruits)

var names = ['john','leo','jack','oliver','felix','bob','tim']
var blacklist = ['jack','oliver','bob']

for (var i = 0; i<names.length; i++){
    if (blacklist.includes(names[i])){
        console.warn(`${names[i]} in blacklist`)
        continue
    }
    console.log(`welcome, dear guest ${names[i]}`)
}
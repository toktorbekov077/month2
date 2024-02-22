
//NaN- not a number
console.log('texr'/ 56)

//
var usesINN = '200712200500310'
var firstNum = Number(usesINN[0])
if ((firstNum === 1 || firstNum === 2 || firstNum === 0) &&  usesINN.length === 14){
    console.log('ok')
}else {
    console.log('error')
}

//null, undefined
var name = null
let text;
console.log(typeof text)

//object
var courseGeeks ={
    title: 'Geeks',
    foundingDate:2018,
    address: {
        street: 'ibraimova 103',
        building: 'victory',
        floor: 2,
        number: null

    },
    music: undefined,
    it:true,
    f:{
        g:{
            j:{
                name:null
            }
        }
    }


}
console.log(courseGeeks.address.floor)

courseGeeks.course = 'Frontend'
delete courseGeeks.music
courseGeeks['floor']=4
console.log(courseGeeks)

//array
var array = [1,4,7]
console.log(typeof array)
console.log(array[3])
console.log(array.length -1)
var marix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(marix[2][1])

//цикл
for(var i = 0; i <= 10; i++){
    console.log(i)
}

var arrayNumbers = [123,345,234,22,56,67,56,55,89,90]
for(var i = 0; i< arrayNumbers.length; i++){
    var firstNumber = String(arrayNumbers[i])[0]
    if (firstNumber === '2' || firstNumber === '5'){
        console.log(arrayNumbers[i])
    }
}
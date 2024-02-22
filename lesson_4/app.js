var getElementPosition =(array, elem) =>{
    for (var i=0; i< array.length; i++){
        if (array[i] === elem){
            return console.log(i)

        }
    }
    return console.log('404')
}
getElementPosition([1,2,3,4,5], 5)

const array = [35,25,35]
function findMax (array){
    var max = array[0]
    for (var num of array){
        if (max <num){
            max = num
        }
    }
    return max
}

console.log(findMax(array))

function findCommentElements(arr1,arr2){
    var newArray = []

    for (var i=0; i < arr1.length; i++){
        var currentElement = arr1[i]
        var foundInSecondArray = false

        for (var j=0; j< arr2.length; j++){
            if (currentElement === arr2[j]){
                foundInSecondArray = true
                break
            }
        }
        if (foundInSecondArray){
            newArray.push(arr1[i])
        }
    }
    return newArray
}

console.log(findCommentElements([1,2,3,4,5] , [4,5,6,7,8] ))

//callback
var alertName = (funcName) =>{
    return funcName()
}

var windowName = ()=>{
    return alert('bfc')
}
alertName(windowName)

var button = document.querySelector('button')
button.addEventListener('click', () => console.log('click'))

console.log(document)
console.log(document.body.style.backgroundColor = 'blue')
var text = document.getElementsByClassName('text')
console.log(text)
text [1].style.color = 'red'
text[0].innerHTML = 'hello frontend'

var block = document.querySelector('.block')
console.log(block)

var btn = document.querySelector('.addBlock')
var wrapper = document.querySelector('.wrapper')
btn.addEventListener('click', () => {
    var newDiw = document.createElement('div')
    newDiw.setAttribute('class','block2')
    wrapper.append(newDiw)
})








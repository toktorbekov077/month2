// //default-params
// const array= [1,2,3,4]
// console.log(array)
// const newArray = array.join()
// console.log(newArray)
//
// function joinArray(array, separator) {
//     let result = ''
//     for(let i = 0; i< array.length; i++){
//         result += array[i] +(i === array.length-1 ? '': separator)
//     }
//     return console.log(result)
// }
//
// joinArray([1,2,3], '-')
//
// //контекст this
// let courseGeeks = {
//     tittle: 'Geeks',
//     foundingDate: 2018,
//     address: {
//         street: 'Ibraimova 103',
//         building: 'Victory',
//         floor: 2,
//         number: null
//     },
//     music: undefined,
//     it: true,
//     showInfo(){
//         console.log(Курсы программирования${courseGeeks.tittle})
//         console.log(Курсы программирования ${this.tittle})
//     },
//     showInfo2(){
//         function info(){
//             console.log(Курсы программирования ${this.tittle})
//         }
//         info()
//     }
// }
// // courseGeeks.showInfo()
// courseGeeks.showInfo2()
//


const dragAndDrop = () => {
    const card = document.querySelector('.list__card')
    const cells = document.querySelectorAll('.list__cell')

    const dragStart = function () {
        setTimeout(()=>{
            this.classList.add('hide')
        }, 0)
    }
    const dragEnd = function (){
        this.classList.remove('hide')
    }
    const dragOver = function (e){
        e.preventDefault()
    }



    const dragEnter = function (){
        this.classList.add('bgc')
    }

    const dragLeave = function (e){
        this.classList.remove('bgc')
        e.preventDefault()
    }

    const dragDrop = function () {
        this.append(card)
        this.classList.remove('bgc')

    }

    cells.forEach((i)=>{
        i.addEventListener('dragover', dragOver)
        i.addEventListener('dragenter', dragEnter)
        i.addEventListener('dragleave', dragLeave)
        i.addEventListener('drop', dragDrop)
    })

    card.addEventListener('dragstart', dragStart)
    card.addEventListener('dragend', dragEnd)
}
dragAndDrop()

//
const movies = [
    {title: 'Inception' , rating:5 , year: 2010, director: 'Christopher Nolan'},
    {title: 'The Dark Knight' , rating:8 , year: 1994, director: 'Frank Darabont '},
    {title: 'Twilight' , rating:5 , year: 2008, director: 'Christopher Nolan'},
    {title: 'Willy Wonka' , rating:5 , year: 2024, director: 'Christopher Nolan'}
]

function fotmatMovieInfo (movie) {
    return ` ${movie.title} (${movie.year} direct by ${movie.director})
    rating: ${movie.rating} additional info: ${movie.additionalInfo}`
}

const  newMoviesArray = movies
    .filter((movie) => movie.rating >= 6)
    .map(fotmatMovieInfo)
    .sort((a , b) => b.year - a.year)

newMoviesArray.forEach(() =>{
    console.log(movie)
})
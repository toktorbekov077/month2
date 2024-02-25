const fileInput = document.querySelector('#file')
const slider = document.querySelector('.slider')
const slidesContainer = document.querySelector('.slides')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')

let imgFiles = []
let currentSlide = 0

fileInput.onchange = (e) => {
    const files = Array.from(e.target.files)
    if (files.length === 0) return alert('Файл не выбран')

    imgFiles = imgFiles.concat(files)

    slidesContainer.innerHTML = ''

    imgFiles.forEach((file, index) => {
        const imgURL = URL.createObjectURL(file)
        const slide = document.createElement('div')
        slide.className = 'slide'
        slide.innerHTML = `<img src="${imgURL}" alt="Slide ${index + 1}">`
        slidesContainer.appendChild(slide)
    })
    showSlide(currentSlide)
}
function showSlide(index) {
    const slides = document.querySelectorAll('.slide')
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none'
    })
}
prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--
        showSlide(currentSlide)
    }
})
nextButton.addEventListener('click', () => {
    if (currentSlide < imgFiles.length - 1) {
        currentSlide++
        showSlide(currentSlide)
    }
})



function countVowels(str) {
    const srting = str.toLowerCase()
    const vowels = ['a' , 'e' , 'o']
    let count = 0
    for ( let i of str.toLowerCase()){
        if (vowels.includes(i)) {
            count++
        }
    }
    return count
}

const wolrd = 'helllloOOOO'
console.log(countVowels(wolrd))


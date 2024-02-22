var arrayNumbers = [34, 65, 67, 89,8,9,23,21,10,23,28]
for (var i = 0; i < arrayNumbers.length; i++)
{
    if ((arrayNumbers[i] % 2) === 0)
    {
        console.log(arrayNumbers[i])
    }
}

//object
var cinema = {
    movies: [
        {
            title: 'Movie 1',
            genre: 'Action',
            releaseDate: '2022-01-01',
            duration: 120,
            mainActors: ['Actor 1', 'Actor 2'],
            price: 15,
            dimension: '3D'
        },
        {
            title: 'Movie 2',
            genre: 'Comedy',
            releaseDate: '2021-12-15',
            duration: 90,
            mainActors: ['Actor 3', 'Actor 4'],
            price: 12,
            dimension: '2D'
        },

    ]
}
console.log(cinema.movies)

var userInput = parseInt(prompt("Введите число от 1 до 5:"));

if (userInput >= 1 && userInput <= 5) {
    console.log(convertToRoman(userInput));
} else {
    console.log("Неверный Ввод. Пожалуйста, введите число от 1 до 5.");
}
function convertToRoman(num) {
    let romanNumeral = "";
    switch(num) {
        case 1:
            romanNumeral = "1->I";
            break;
        case 2:
            romanNumeral = "2->II";
            break;
        case 3:
            romanNumeral = "3->III";
            break;
        case 4:
            romanNumeral = "4->IV";
            break;
        case 5:
            romanNumeral = "5->V";
            break;
                default:
            romanNumeral = "Неверный Ввод. Пожалуйста, введите число от 1 до 5.";
    }
    return romanNumeral;
}

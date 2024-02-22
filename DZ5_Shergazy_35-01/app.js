
function shortenName(firstname, name, surname) {
    return `${firstname} ${name.charAt(0)}.${surname.charAt(0)}.`;
}

console.log(shortenName("Бекова", "Айдана", "Бековна"));

function filterBooks(...books) {
    const booksWithU = books.filter(book => book.toLowerCase().includes('у'));
    booksWithU.forEach(book => console.log(book));

}
filterBooks("Унесенные ветром","Война и мир");

var user = [
    {name : 'Дастан', data:'05.02.2007'},
    {name : 'Самат', data:'08.05.2004'},
    {name : 'Улук', data:'23.10.2004'},
    {name : 'Номан', data:'21.11.2005'},
    {name : 'Мирсултан', data:'14.01.2007'},
]
user.forEach(user =>{
    console.log(`Пользователь ${user.name} родился ${user.data}`);
})
function isPalindrom (str){
    const  string = str.toLowerCase()
    let stringWithoutSpaces = ''
    for (let i = 0 ; i < string.length; i++){
        if (string[i] !== ' '){
            stringWithoutSpaces += string [i]
        }
    }
    for (let i = 0 ; i < stringWithoutSpaces.length; i++) {
        if (stringWithoutSpaces[i] !== stringWithoutSpaces[stringWithoutSpaces.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrom("мадам"));
console.log(isPalindrom("привет"));




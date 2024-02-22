function arif(...numbers) {
    const positiveNumbers = numbers.filter(number => number > 0);

    if (positiveNumbers.length === 0) {
        return ;
    }

    const sum = positiveNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sum / positiveNumbers.length;
}
const result = arif(2, -78, 45, 4, -7, -6, -10, 26, 30, 8);
console.log(result);

function sumNumber (numbers){
    var sumNumbers = 0;
    for (var i = 0; i < numbers.length; i++){
        if ((numbers[i] % 2) === 0){
            sumNumbers += numbers[i] ** 2;
        }
    }
    return sumNumbers
}
const numbers = [1, 2, 3, 4, 5, 6];
console.log(sumNumber(numbers));

function isPrime(number) {
    if (number <= 1) {
        console.log(false);
        return;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log(false);
            return;
        }
    }
    console.log(true);
}
isPrime(5);
isPrime(10);
isPrime(13);
function getZodiacSign(month, day) {
    if (
        (month === "январь" && day >= 20) || (month === "февраль" && day <= 18)
    ) {
        return "Водолей";
    } else if (
        (month === "февраль" && day >= 19) || (month === "март" && day <= 20)
    ) {
        return "Рыбы";
    } else if (
        (month === "март" && day >= 21) || (month === "апрель" && day <= 19)
    ) {
        return "Овен";
    } else if (
        (month === "апрель" && day >= 20) || (month === "май" && day <= 20)
    ) {
        return "Телец";
    } else if (
        (month === "май" && day >= 21) || (month === "июнь" && day <= 20)
    ) {
        return "Близнецы";
    } else if (
        (month === "июнь" && day >= 21) || (month === "июль" && day <= 22)
    ) {
        return "Рак";
    } else if (
        (month === "июль" && day >= 23) || (month === "август" && day <= 22)
    ) {
        return "Лев";
    } else if (
        (month === "август" && day >= 23) || (month === "сентябрь" && day <= 22)
    ) {
        return "Дева";
    } else if (
        (month === "сентябрь" && day >= 23) || (month === "октябрь" && day <= 22)
    ) {
        return "Весы";
    } else if (
        (month === "октябрь" && day >= 23) || (month === "ноябрь" && day <= 21)
    ) {
        return "Скорпион";
    } else if (
        (month === "ноябрь" && day >= 22) || (month === "декабрь" && day <= 21)
    ) {
        return "Стрелец";
    } else if (
        (month === "декабрь" && day >= 22) || (month === "январь" && day <= 19)
    ) {
        return "Козерог";
    } else {
        return "Некорректная дата";
    }
}

// Функция для проверки корректности ввода месяца и дня
function isValidDate(month, day) {
    const validMonths = [
        "январь", "февраль", "март", "апрель", "май", "июнь",
        "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"
    ];
    return validMonths.includes(month) && day >= 1 && day <= 31;
}

var inputMonth = prompt("Введите месяц рождения ").toLowerCase();
var inputDay = prompt("Введите день рождения:");


if (isValidDate(inputMonth, inputDay)) {
    var zodiacSign = getZodiacSign(inputMonth, inputDay);
    alert("Ваш знак зодиака: " + zodiacSign);
} else {
    alert("Некорректная дата. Пожалуйста, введите корректные значения.");
}



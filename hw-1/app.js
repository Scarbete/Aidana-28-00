const day = Number(prompt('Введите день своего рождения: '))
const month = Number(prompt('Введите месяц своего рождения: '))

let zodiac = ''

if (day > 31) {
    alert('Вы ввели большое число дня')
} else {
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        zodiac = 'Ваш знак зодиака - Водолей'
    }
    else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        zodiac = 'Ваш знак зодиака - Рыбы'
    }
    else if ((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
        zodiac = 'Ваш знак зодиака - Овен'
    }
    else if ((month === 4 && day >= 21) || (month === 5 && day <= 21)) {
        zodiac = 'Ваш знак зодиака - Телец'
    }
    else if ((month === 5 && day >= 22) || (month === 6 && day <= 21)) {
        zodiac = 'Ваш знак зодиака - Близнецы'
    }
    else if ((month === 6 && day >= 22) || (month === 7 && day <= 23)) {
        zodiac = 'Ваш знак зодиака - Рак'
    }
    else if ((month === 7 && day >= 24) || (month === 8 && day <= 23)) {
        zodiac = 'Ваш знак зодиака - Лев'
    }
    else if ((month === 8 && day >= 24) || (month === 9 && day <= 23)) {
        zodiac = 'Ваш знак зодиака - Дева'
    }
    else if ((month === 9 && day >= 24) || (month === 10 && day <= 23)) {
        zodiac = 'Ваш знак зодиака - Весы'
    }
    else if ((month === 10 && day >= 24) || (month === 11 && day <= 22)) {
        zodiac = 'Ваш знак зодиака - Скорпион'
    }
    else if ((month === 11 && day >= 23) || (month === 12 && day <= 21)) {
        zodiac = 'Ваш знак зодиака - Стрелец'
    }
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        zodiac = 'Ваш знак зодиака - Козерог'
    }
    else {
        zodiac = 'Ошибка: Неверные значения дня или месяца'
    }
}

alert(zodiac)
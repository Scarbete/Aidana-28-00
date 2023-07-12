// Задание - 1

const array = ['Bishkek', 'Los Angeles', 'Chicago', 'New York', 'Houston', 'Dallas', 'Philadelphia', 'Seattle']

const arrSix = []
for (let city of array) {
    if (city.length > 6) {
        arrSix.push(city)
    }
}
console.log(`Города в названиях которых больше 6 символов: 
    ${arrSix}`
)

const upFirst = []
for (let city of array) {
    if (city.includes('s') || city.includes('S')) {
        upFirst.push(city)
    }
}
console.log(`Города в названиях которых есть буква ( s ) или ( S ): 
    ${upFirst}`
)

// Задание - 2

const traffic = prompt('Введите название цвета свотофора')

const colors = {
    red: 'красный',
    yellow: 'желтый',
    green: 'зеленый'
}

switch (traffic) {
    case colors.red:
        alert('Стоп')
        break
    case colors.yellow:
        alert('Подождите')
        break
    case colors.green:
        alert('Идите')
        break
    default:
        alert('Вводите только цвета: красный, желтый, зеленый')
        break
}
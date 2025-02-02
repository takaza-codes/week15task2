const cities = ["Москва", "Санкт-Петербург", "Берлин", "Нью-Йорк", "Токио"];
const temps = [];

for (let city of cities) {
    let cityTemp = parseInt(prompt(`Введите температуру для г. ${city}`));

    if (isNaN(cityTemp) || cityTemp >= 50 || cityTemp <= -45) {
        prompt(`Неверное значение для г. ${city}!`);
    // ставила здесь break, но в целом не поняла, как остановить пользователя  
    // в этой точке, если он и со второго раза не вводит верное значение
    } else {
        temps.push(cityTemp);
    }
}


const list = document.querySelector('.list');

for (let i = 0; i < cities.length; i++) {
    const tempLine = document.createElement("p");
    list.appendChild(tempLine);
    tempLine.innerHTML = `Температура в г. ${cities[i]}: ${temps[i]}&deg C`;
}


const maxTemp = document.getElementById('max');
const maxValue = Math.max(...temps);
maxTemp.innerHTML = `Максимальная температура: ${maxValue}&deg C`;

const minTemp = document.getElementById('min');
const minValue = Math.min(...temps);
minTemp.innerHTML = `Минимальная температура: ${minValue}&deg C`;
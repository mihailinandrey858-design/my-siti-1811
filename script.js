// Задание №1. Проверка возраста

let age = 17;

if (age < 18) {
    console.log("Несовершеннолетний");
} else if (age <= 59) {
    console.log("Взрослый");
} else {
    console.log("Пенсионный возраст");
}


// Задание №2. Система оценивания

let points = 85;

if (points < 0 || points > 100) {
    console.log("Некорректное количество баллов");
} else if (points >= 90) {
    console.log("Отлично (5)");
} else if (points >= 75) {
    console.log("Хорошо (4)");
} else if (points >= 60) {
    console.log("Удовлетворительно (3)");
} else {
    console.log("Неудовлетворительно (2)");
}


// Задание №3. Авторизация пользователя

let login = "admin";
let password = "12345";

if (login === "admin" && password === "12345") {
    console.log("Добро пожаловать!");
} else if (login === "admin") {
    console.log("Неверный пароль");
} else {
    console.log("Пользователь не найден");
}


// Задание №4. Калькулятор

let number1 = 20;
let number2 = 5;
let operation = "+";

switch (operation) {
    case "+":
        console.log(number1 + number2);
        break;

    case "-":
        console.log(number1 - number2);
        break;

    case "*":
        console.log(number1 * number2);
        break;

    case "/":
        if (number2 === 0) {
            console.log("На ноль делить нельзя");
        } else {
            console.log(number1 / number2);
        }
        break;

    default:
        console.log("Неизвестная операция");
}


// Задание №5. Проверка доступа

let userAge = 20;
let isRegistered = true;
let isBlocked = false;

if (userAge >= 18 && isRegistered && !isBlocked) {
    console.log("Доступ разрешён");
} else {
    console.log("Доступ запрещён");
}
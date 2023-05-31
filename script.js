'use strict';
const figures = [["камень", "ножницы", "бумага"], ["rock", "scissors", "paper"]];
const gameText = [["Введите один из вариантов: камень, ножницы, бумага", "Please, enter your choice: rock, scissors, paper"],
["Вы хотите завершить игру?", "Do you want to leave the game?"]]
const gameRules = [
    {
        "камень": {
            "камень": 0,
            "ножницы": 1,
            "бумага": 0,
        },
        "ножницы": {
            "камень": 0,
            "ножницы": 0,
            "бумага": 1,
        },
        "бумага": {
            "камень": 1,
            "ножницы": 0,
            "бумага": 0,
        }
    },

    {
        "rock": {
            "rock": 0,
            "scissors": 1,
            "paper": 0,
        },
        "scissors": {
            "rock": 0,
            "scissors": 0,
            "paper": 1,
        },
        "paper": {
            "rock": 1,
            "scissors": 0,
            "paper": 0,
        }
    }

];

//установка языка (по умолчанию русский)
const langChoice = prompt("Введите язык игры/Please, choose your language", "RU");

//замена языка
const lang = langChoice.toUpperCase() === "EN" || langChoice.toUpperCase() === "ENG" ? 1 : 0;
console.log(`langChoice = ${langChoice}`);
console.log(`lang = ${lang}`);

let user = null;                     //вариант пользователя
let computer = null;                 //вариант пользователя
console.log(`user = ${user}`);
console.log(`computer = ${computer}`);

let compScore = 0;                          // счетчик баллов компьютера
let userScore = 0                           // счетчик баллов пользователя


//функция запроса варианта у пользователя
const userInput = () => {
    const userInput = prompt(gameText[0][lang]);

    const inputCheck = (userInput) => {
        let input = userInput.trim().toLowerCase(); //удаляем пробелы, приводим в нижний регистр
        let inputLength = input.length;             //вычисляем длину строки, введенной пользователем

        //если длина больше 0 (то есть пользователь ввел какие-то данные() то проверяем их
        if (inputLength > 0) {
            // *** КАК ИЗБЕЖАТЬ ЦИКЛА????
            for (let i = 0; i < 3; i++) {
                console.log(`figures[lang][i].startsWith(input)  - ${figures[lang][i].startsWith(input)}`);
                if (figures[lang][i].startsWith(input)) {
                    console.log(`!!!${figures[lang][i]}`);
                    return user = figures[lang][i]
                }
                // *** если введено неверное слово, то нужно возобновить цикл, а у меня  НЕ вызывается функция - userInput is not a function????
                else { userInput() }
            }
        }
        //если длина ввода пользователя 0, то выводим запрашиваем о завершении игры
        let confirm = prompt(gameText[1][lang]);

        //*** Как правильно обработать завершение игры? если пользователь ничего не введет (null) - выводим результат, а как обработать нажатие "отмены"?

    }

    return user = inputCheck(userInput);
}

//функция запроса варианта у компьютера
const computerInput = () => {
    const random = Math.floor(Math.random() * 9 + 1);
    if (random <= 3) {
        computer = figures[lang][0];
    } else if (random <= 6) {
        computer = figures[lang][1];
    } else {
        computer = figures[lang][2];
    }
    return computer;
}


user = userInput();
console.log(`input user = ${user}`);

computer = computerInput();
console.log(`input computer = ${computer}`);

userScore += gameRules[lang].user.computer // считаем баллы пользователя
compScore += gameRules[lang].computer.user // считаем баллы компьютера

console.log(`userScore = ${userScore}`);
console.log(`compScore = ${compScore}`);

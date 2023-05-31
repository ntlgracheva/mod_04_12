'use strict';
const figures = [["камень", "ножницы", "бумага"], ["rock", "scissors", "paper"]];
const gameText = [["Введите один из вариантов: камень, ножницы, бумага", "Please, enter your choice: rock, scissors, paper"]]
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

let user = "123";          //вариант пользователя
let computer = "";      //вариант компьютера   
console.log(`user = ${user}`);

//запрос варианта у пользователя
const userInput = () => {
    const userInput = prompt(gameText[0][lang]);

    const inputCheck = (userInput) => {
        let input = userInput.trim().toLowerCase(); //удаляем пробелы, приводим в нижний регистр
        let inputLength = input.length;             //вычисляем длину строки, введенной пользователем

        //если длина больше 0 (то есть пользователь ввел какие-то данные() то проверяем их, в ином случае, повторяем запрос
        if (inputLength > 0) {
            for (let i = 0; i < 3; i++) {
                if (figures[lang][i].indexOf(input) === 0) { return user = figures[lang][i] }
                else { userInput() }
            }
        }
        else { userInput() }
    }

    return user = inputCheck(userInput);
}

user = userInput();
console.log(`user = ${user}`);
'use strict';

(() => {

  const figures = [["камень", "ножницы", "бумага"], ["rock", "scissors", "paper"]];
  const gameText = [
    ["Введите один из вариантов: камень, ножницы, бумага", "Please, enter your choice: rock, scissors, paper"],
    ["Вы хотите завершить игру?", "Do you want to leave the game?"],
    ["Счет игры: ", "Game score "],
    ["пользователь=", "user="],
    ["компьютер=", "computer="],
    ["Вы выиграли!", "You won!"],
    ["Компьютер выиграл!", "Computer won!"],
    ["Ничья!", "Draw!"]];
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
  //console.log(`langChoice = ${langChoice}`);
  //console.log(`lang = ${lang}`);

  let user = null;                     //вариант пользователя
  let computer = null;                 //вариант пользователя
  //console.log(`user = ${user}`);
  //console.log(`computer = ${computer}`);

  let compScore = 0;                          // счетчик баллов компьютера
  let userScore = 0                           // счетчик баллов пользователя

  const gameStart = () => {

    //функция запроса варианта у пользователя
    const userInput = () => {
      let userText = prompt(gameText[0][lang]);
      //console.log(userText);
      return user = inputCheck(userText);
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

    //функция проверки ввода пользователем
    const inputCheck = (text) => {

      //если пользователь ввел "отмена" = null, то запрашиваем, уверен ли он 
      if (text === null) {
        let confirm = prompt(gameText[1][lang]);

        //если выход отменен, то продолжаем игру
        if (confirm === null) { return user = userInput(); }
        //если выход подтвержден, то выводом результат
        else { alert(gameText[2][lang] + `\n` + gameText[3][lang] + userScore + "/" + gameText[4][lang] + compScore) }
      }

      //если было введено какое-то значение
      let input = text.trim().toLowerCase();      //удаляем пробелы, приводим в нижний регистр
      let inputLength = input.length;             //вычисляем длину строки, введенной пользователем


      //если длина ввода пользователя 0, то повторяем запрос
      if (inputLength === 0) { return user = userInput() }

      //если длина больше 0 (то есть пользователь ввел какие-то данные() то проверяем их       
      if (inputLength > 0) {
        //находим соответствие по первым введенным буквам
        for (let i = 0; i < 3; i++) {

          if (figures[lang][i].startsWith(input)) {
            return user = figures[lang][i]
          }
        }
        //если соответствия нету, то нужно перезапросить ввод у пользователя
        return user = userInput();
      }

    }
    user = userInput();
    computer = computerInput();

    let pointUser = gameRules[lang][user][computer];
    let pointComp = gameRules[lang][computer][user];

    if (pointUser > pointComp) { alert(`${gameText[3][lang]}${user}\n${gameText[4][lang]}${computer}\n` + `\t` + gameText[5][lang]) }
    else if (pointUser < pointComp) { alert(`${gameText[3][lang]}${user}\n${gameText[4][lang]}${computer}\n` + `\t` + gameText[6][lang]) }
    else { alert(`${gameText[3][lang]}${user}\n${gameText[4][lang]}${computer}\n` + `\t` + gameText[7][lang]) }


    userScore += pointUser // считаем баллы пользователя
    compScore += pointComp // считаем баллы компьютера

    return gameStart();
  };


  window.RPS = gameStart;
})();


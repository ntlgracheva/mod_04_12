'use strict';
/*
(() => {

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

  //установка языка по умолчанию (русский)
  const langChoice = prompt("Введите язык игры/Please, choose your language", RU);

  //замена языка
  const lang = langChoice.toUpperCase() === "EN" || langChoice.toUpperCase() === "ENG" ? 1 : 0;


  const userInput = prompt(gameText[0][lang]);

  const inputControl = userInput => {
    let input = userInput.trim().toLowerCase;
  }




  window.RPS = game;
})();

const game = (language = "RU") => {

}*/
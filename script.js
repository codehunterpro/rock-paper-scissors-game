import { startConfetti, stopConfetti } from "./confetti.js";

const gameIcons = document.querySelector(".game-icon-user");
const icons = document.querySelectorAll("i");
const userMsg = document.querySelector(".heading-user");
const computerMsg = document.querySelector(".heading-computer");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const lizard = document.querySelector(".lizard");
const spock = document.querySelector(".spock");
const resetBtn = document.querySelector(".reset-btn");
const gameMsg = document.querySelector(".game-message");
const scoreUser = document.querySelector(".score-user");
const scoreComputer = document.querySelector(".score-computer");

const computerRock = document.querySelector(".computer-rock");
const computerPaper = document.querySelector(".computer-paper");
const computerScissors = document.querySelector(".computer-scissors");
const computerLizard = document.querySelector(".computer-lizard");
const computerSpock = document.querySelector(".computer-spock");

let computerChoice = "";
let playerScore = 0;
let computerScore = 0;

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "paper", defeats: ["rock", "spock"] },
  scissors: { name: "scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "lizard", defeats: ["paper", "spock"] },
  spock: { name: "spock", defeats: ["scissors", "rock"] },
};

function resetSelected() {
  stopConfetti();
  icons.forEach((i) => i.classList.remove("selected"));
}

function computerRandomChoice() {
  const computerChoiceNum = Math.random();
  if (computerChoiceNum < 0.2) {
    computerChoice = "rock";
  } else if (computerChoiceNum <= 0.4) {
    computerChoice = "paper";
  } else if (computerChoiceNum <= 0.6) {
    computerChoice = "scissors";
  } else if (computerChoiceNum <= 0.8) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
}

function computerSelectGame() {
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerMsg.textContent = "--- Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerMsg.textContent = "--- Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerMsg.textContent = "--- Scissors";
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerMsg.textContent = "--- Lizard";
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerMsg.textContent = "--- Spock";
      break;
    default:
      break;
  }
}

function playerScoreUpdate(yourChoise) {
  if (yourChoise === computerChoice) {
    gameMsg.textContent = `It's a tie`;
  } else {
    const choice = choices[yourChoise];
    if (choice.defeats.indexOf(computerChoice) > -1) {
      gameMsg.textContent = `You Won !`;
      playerScore++;
      scoreUser.textContent = `You-${playerScore}`;
      startConfetti();
    } else {
      gameMsg.textContent = `You Lost !`;
      computerScore++;
      scoreComputer.textContent = `Computer-${computerScore}`;
    }
  }
}

function checkResult(yourChoice) {
  resetSelected();
  computerRandomChoice();
  computerSelectGame();
  playerScoreUpdate(yourChoice);
}

function resetAll() {
  gameMsg.textContent = "";
  playerScore = 0;
  computerScore = 0;
  scoreUser.textContent = `You-${playerScore}`;
  scoreComputer.textContent = `Computer-${computerScore}`;
  userMsg.textContent = "";
  computerMsg.textContent = "";
  resetSelected();
}

window.resetAll = resetAll;

function selectGame(yourChoice) {
  checkResult(yourChoice);
  switch (yourChoice) {
    case "rock":
      rock.classList.add("selected");
      userMsg.textContent = "--- Rock";
      break;
    case "paper":
      paper.classList.add("selected");
      userMsg.textContent = "--- Paper";
      break;
    case "scissors":
      scissors.classList.add("selected");
      userMsg.textContent = "--- Scissors";
      break;
    case "lizard":
      lizard.classList.add("selected");
      userMsg.textContent = "--- Lizard";
      break;
    case "spock":
      spock.classList.add("selected");
      userMsg.textContent = "--- Spock";
      break;
    default:
      break;
  }
}

window.selectGame = selectGame;

let rules = document.querySelector(".rules");
let x = document.querySelector(".x");
let playArea = document.querySelector(".play-area");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let cmpScore = document.querySelector(".cmp-score");
let urScore = document.querySelector(".your-score");
let nextButton = document.querySelector(".nxt-btn");
let rockAbv = document.querySelector(".rock-abv");

let computerScore = parseInt(cmpScore.innerHTML);
let yourScore = parseInt(urScore.innerHTML);

let paperItem = document.querySelector(".item-paper");
let scissorItem = document.querySelector(".item-scissor");

let item1 = document.querySelector(".item-rock");

let midItemWin = document.querySelector(".mid-item-win");
let midItemLost = document.querySelector(".mid-item-lost");
let midItemTie = document.querySelector(".mid-item-tie");

let rockItem2 = document.querySelector(".item2-rock");
let paperItem2 = document.querySelector(".item2-paper");
let scissorItem2 = document.querySelector(".item2-scissor");

let uPicked = document.querySelector(".uPicked");
let cmPicked = document.querySelector(".cmPicked");

let p = document.querySelector(".item-p");
let q = document.querySelector(".item-q");

let p1 = document.querySelector(".item2-p");
let q1 = document.querySelector(".item2-q");

let l1 = document.querySelector(".line1");
let l2 = document.querySelector(".line2");
let l3 = document.querySelector(".line3");

const computerScoreKey = "COMPUTER_SCORE";
const yourScoreKey = "YOUR_SCORE";

if (localStorage.getItem(computerScoreKey) !== null) {
  computerScore = localStorage.getItem(computerScoreKey);
  cmpScore.innerHTML = parseInt(computerScore);
}

if (localStorage.getItem(yourScoreKey) !== null) {
  yourScore = localStorage.getItem(yourScoreKey);
  urScore.innerHTML = parseInt(yourScore);
}

const rockVal = 1;
const paperVal = 2;
const scissorVal = 3;

let randomNumber = 0;

let isRock = false;
let isPaper = false;
let isScissor = false;

let win = false;
let lost = false;
let tie = false;

function displayRules() {
  rules.classList.remove("r");
  x.classList.remove("r-x");
}

x.addEventListener("click", () => {
  x.classList.add("r-x");
  rules.classList.add("r");
});

rock.addEventListener("click", () => {
  playArea.classList.add("play-area-r");
  r.classList.remove("item-rock-r");
  item1.classList.add("add-before");
  uPicked.classList.remove("uPicked-r");
  l1.classList.add("line1-r");
  l2.classList.add("line2-r");
  l3.classList.add("line3-r");
  isRock = true;
  computerTurn();
});

paper.addEventListener("click", () => {
  playArea.classList.add("play-area-r");
  paperItem.classList.remove("item-paper-r");
  uPicked.classList.remove("uPicked-r");
  l1.classList.add("line1-r");
  l2.classList.add("line2-r");
  l3.classList.add("line3-r");
  isPaper = true;
  computerTurn();
});

scissor.addEventListener("click", () => {
  playArea.classList.add("play-area-r");
  scissorItem.classList.remove("item-scissor-r");
  uPicked.classList.remove("uPicked-r");
  l1.classList.add("line1-r");
  l2.classList.add("line2-r");
  l3.classList.add("line3-r");
  isScissor = true;
  computerTurn();
});

function computerTurn() {
  randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === rockVal) {
    rockItem2.classList.remove("item2-rock-r");
    cmPicked.classList.remove("cmPicked-r");
  } else if (randomNumber === paperVal) {
    paperItem2.classList.remove("item2-paper-r");
    cmPicked.classList.remove("cmPicked-r");
  } else {
    scissorItem2.classList.remove("item2-scissor-r");
    cmPicked.classList.remove("cmPicked-r");
  }
  createScore();
}

function createScore() {
  if (isRock) {
    if (randomNumber === 1) {
      midItemTie.classList.remove("mid-item-tie-r");
      tie = true;
    } else if (randomNumber === 2) {
      midItemLost.classList.remove("mid-item-lost-r");
      p1.classList.remove("item2-p-r");
      q1.classList.remove("item2-q-r");
      lost = true;
    } else {
      midItemWin.classList.remove("mid-item-win-r");
      p.classList.remove("item-p-r");
      q.classList.remove("item-q-r");
      win = true;
    }
  }

  if (isPaper) {
    if (randomNumber === 1) {
      midItemWin.classList.remove("mid-item-win-r"); // you
      p.classList.remove("item-p-r");
      q.classList.remove("item-q-r");
      win = true;
    } else if (randomNumber === 2) {
      midItemTie.classList.remove("mid-item-tie-r"); // tie
      tie = true;
    } else {
      midItemLost.classList.remove("mid-item-lost-r"); // computer win
      p1.classList.remove("item2-p-r");
      q1.classList.remove("item2-q-r");
      lost = true;
    }
  }

  if (isScissor) {
    if (randomNumber === 1) {
      midItemLost.classList.remove("mid-item-lost-r"); // computer win
      p1.classList.remove("item2-p-r");
      q1.classList.remove("item2-q-r");
      lost = true;
    } else if (randomNumber === 2) {
      midItemWin.classList.remove("mid-item-win-r"); // you win
      p.classList.remove("item-p-r");
      q.classList.remove("item-q-r");
      win = true;
    } else {
      midItemTie.classList.remove("mid-item-tie-r"); // tie
      tie = true;
    }
  }

  score();
}

function score() {
  if (win) {
    yourScore++;
    urScore.innerHTML = yourScore;
    localStorage.setItem(yourScoreKey, yourScore);
    nextButton.classList.remove("nxt-btn-r");
  }

  if (lost) {
    computerScore++;
    cmpScore.innerHTML = computerScore;
    localStorage.setItem(computerScoreKey, computerScore);
  }
}
function replay() {
  if (isRock) {
    item1.classList.add("item-rock-r");
  }

  if (isPaper) {
    paperItem.classList.add("item-paper-r");
  }

  if (isScissor) {
    scissorItem.classList.add("item-scissor-r");
  }

  if (lost) {
    midItemLost.classList.add("mid-item-lost-r"); // computer win
  }
  if (win) {
    midItemWin.classList.add("mid-item-win-r"); // you win
  }
  if (tie) {
    midItemTie.classList.add("mid-item-tie-r"); // tie
  }

  if (randomNumber === rockVal) {
    rockItem2.classList.add("item2-rock-r");
  }
  if (randomNumber === paperVal) {
    paperItem2.classList.add("item2-paper-r");
  }
  if (randomNumber === scissorVal) {
    scissorItem2.classList.add("item2-scissor-r");
  }

  isRock = false;
  isPaper = false;
  isScissor = false;

  win = false;
  lost = false;
  tie = false;

  l1.classList.remove("line1-r");
  l2.classList.remove("line2-r");
  l3.classList.remove("line3-r");

  p.classList.add("item-p-r");
  q.classList.add("item-q-r");

  p1.classList.add("item2-p-r");
  q1.classList.add("item2-q-r");

  uPicked.classList.add("uPicked-r");
  cmPicked.classList.add("cmPicked-r");

  nextButton.classList.add("nxt-btn-r");
  playArea.classList.remove("play-area-r");
}

function nextPage() {
  window.location.href = "index2.html";
}

function clearScore() {
  computerScore = 0;
  yourScore = 0;
  localStorage.setItem(computerScoreKey, computerScore);
  localStorage.setItem(yourScoreKey, yourScore);
  urScore.innerHTML = yourScore;
  cmpScore.innerHTML = computerScore;
}

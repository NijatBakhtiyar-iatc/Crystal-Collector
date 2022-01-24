function smallRan() {
  return Math.floor(Math.random() * (15 - 1) + 1);
}
function bigRan() {
  return Math.floor(Math.random() * (150 - 50) + 50);
}

let targetScore = $(".targetScore p span");
let yourScore = $(".yourScore span");
let blueCry = $(".blue");
let greenCry = $(".green");
let redCry = $(".red");
let yellowCry = $(".yellow");
let winHtml = $(".win span");
let lossHtml = $(".loss span");
let blueRan = smallRan();
let greenRan = smallRan();
let redRan = smallRan();
let yellowRan = smallRan();
let lossCount = 0;
let winCount = 0;
let sum = 0;

targetScore.html(bigRan());

function gameWin() {
  targetScore.html(bigRan());
  yourScore.html(0);
  sum = 0;
  blueRan = smallRan();
  greenRan = smallRan();
  redRan = smallRan();
  yellowRan = smallRan();
  winCount++;
  winHtml.html(winCount);
}

function gameLoss() {
  targetScore.html(bigRan());
  yourScore.html(0);
  sum = 0;
  blueRan = smallRan();
  greenRan = smallRan();
  redRan = smallRan();
  yellowRan = smallRan();
  lossCount++;
  lossHtml.html(lossCount);
}

blueCry.on("click", function () {
  sum = sum + blueRan;
  yourScore.html(sum);
  if (parseInt(yourScore.html()) > parseInt(targetScore.html())) {
    gameLoss();
  } else if (parseInt(yourScore.html()) == parseInt(targetScore.html())) {
    gameWin();
  }
});

greenCry.on("click", function () {
  sum = sum + greenRan;
  yourScore.html(sum);
  if (parseInt(yourScore.html()) > parseInt(targetScore.html())) {
    gameLoss();
  } else if (parseInt(yourScore.html()) == parseInt(targetScore.html())) {
    gameWin();
  }
});

redCry.on("click", function () {
  sum = sum + redRan;
  yourScore.html(sum);
  if (parseInt(yourScore.html()) > parseInt(targetScore.html())) {
    gameLoss();
  } else if (parseInt(yourScore.html()) == parseInt(targetScore.html())) {
    gameWin();
  }
});

yellowCry.on("click", function () {
  sum = sum + yellowRan;
  yourScore.html(sum);
  if (parseInt(yourScore.html()) > parseInt(targetScore.html())) {
    gameLoss();
  } else if (parseInt(yourScore.html()) == parseInt(targetScore.html())) {
    gameWin();
  }
});

// BACKEND LOGIC
function ScoreCard() {
  this.players = [];
}

function Player(totalScore, turnScore, playerId) {
  this.totalScore = totalScore;
  this.turnScore = turnScore;
  this.playerId = playerId;
}

// pushes player 
ScoreCard.prototype.addPlayer = function (player) {
  this.ScoreCard.push(player);
}

// ScoreCard.prototype.assignId = function(player) {
//   player.currentId = ScoreCard.currentId;
//   this.currentId += 1;
//   return this.currentId;
// }

ScoreCard.prototype.findPlayer = function () {
  for (i = 0; i < this.players.length; i++) {
    if (this.players[i]) {
      if (this.players[i].id == id) {
        return this.players[i];
      }
    }
  };
  return false;
}

var generateDiceRoll = function () {
  roll = Math.ceil((Math.random() * 6));
  return roll;
}


Player.prototype.roll = function () {
  var currentRoll = generateDiceRoll();
  if (currentRoll !== 1) {
    this.turnScore += currentRoll;
  } else {
    this.turnScore = 0;
  }
  return this.turnScore;
};
Player.prototype.hold = function() {
  if (this.totalScore >= 100) {
    alert("Winner!")
  } else {
    this.totalScore += this.turnScore;
  }
  return this.totalScore;
}

ScoreCard.prototype.reset = function () {
  player.totalScore = 0;
  player.turnScore = 0;
}

// FRONTEND LOGIC
var newGame = new ScoreCard(playerOne, playerTwo);

var playerOne = new Player(0, 0, 0);
var playerTwo = new Player(0, 0, 1);


// ScoreCard.assignId(playerOne);
console.log(playerOne);
console.log(playerTwo);

$(document).ready(function () {
  $("button#rollBtn").on("click", function () {
    event.preventDefault();
    var rollOne = playerOne.roll();
    $("#playerOneCurrent").text(rollOne);
  });

  $("button#holdBtn").on("click", function () {
    event.preventDefault();
    var holdOne = playerOne.hold();
    $("#playerOneTotal").text(holdOne);
  });

  $("button#resetBtn").on("click", function () {
    event.preventDefault();
    reset
  });
});

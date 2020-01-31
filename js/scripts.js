// BACKEND LOGIC
function ScoreCard() {
  this.players = [];
  this.currentPlayer = 1;
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

ScoreCard.prototype.findPlayer = function (id) {
  for (i = 0; i < this.players.length; i++) {
    if (this.players[i]) {
      if (this.players[i].id == id) {
        return this.players[i];
      }
    }
  };
  return false;
}

ScoreCard.prototype.switch = function () {
  if (this.currentPlayer === 0) {
    this.currentPlayer = 1;
  } else {
    this.currentPlayer = 0;
  }
}

ScoreCard.prototype.reset = function () {
  player.totalScore = 0;
  player.turnScore = 0;
}

function Player(totalScore, turnScore, playerId) {
  this.totalScore = totalScore;
  this.turnScore = turnScore;
  this.playerId = playerId;
  this.active = false;
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

Player.prototype.hold = function () {
  if (this.totalScore >= 100) {
    alert("Winner!")
  } else {
    this.totalScore += this.turnScore;
  }
  return this.totalScore;
}

var generateDiceRoll = function () {
  roll = Math.ceil((Math.random() * 6));
  return roll;
}

//  frontend logic
$(document).ready(function () {
  var newGame = new ScoreCard(playerOne, playerTwo);
  var playerOne = new Player(0, 0, 0);
  var playerTwo = new Player(0, 0, 1);
  $("button#rollBtn").click(function() {
    if (newGame.currentPlayer === 1) {
      var rollOne = playerOne.roll();     
      $("#playerOneCurrent").text(rollOne);
    } else {
      var rollTwo = playerTwo.roll();
      $("#playerTwoCurrent").text(rollTwo);
    }
  });

  $("button#holdBtn").click(function() {
    if (newGame.currentPlayer === 1) {
      var holdOne = playerOne.hold();
      $("#playerOneTotal").text(holdOne);
    } else {
      var holdTwo = playerTwo.hold();
      $("#playerTwoTotal").text(holdTwo);
    }
    newGame.switch();
  });

  $("button#resetBtn").click(function() {
    reset
  });
});

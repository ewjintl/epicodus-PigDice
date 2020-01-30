// BACKEND LOGIC
function ScoreCard() {
    this.players = [];
    this.currentId = 0;    
  }

function Player() {
  this.totalScore = 0;
  this.turnScore = 0;
  // this.currentId = 0;
  }
  
// pushes player 
ScoreCard.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players.push(player);
}

ScoreCard.prototype.assignId = function(player) {
  player.currentId = ScoreCard.currentId;
  this.currentId += 1;
  return this.currentId;
}
  
ScoreCard.prototype.findPlayer = function() {
  for (i=0; i< this.players.length; i++) {
    if (this.players[i]) {
      if (this.players[i].id == id) {
        return this.players[i];
      }
    }
  };
  return false;
}

var generateDiceRoll = function() {
  roll = Math.ceil((Math.random() * 6));
  return roll;  
}
  

Player.prototype.roll = function() {
  var currentRoll = generateDiceRoll();
  if (currentRoll !== 1) {
    this.turnScore += currentRoll;
  } else {
   this.turnScore = 0;
  }
  return this.turnScore;
};

ScoreCard.prototype.reset = function() {
  player.totalScore = 0;
  player.turnScore = 0;
}
  
// FRONTEND LOGIC
var newGame = new ScoreCard();

var playerOne = new Player();
var playerTwo = new Player(); 

// ScoreCard.assignId(playerOne);
console.log(playerOne);
console.log(playerTwo);

$(document).ready(function() {
  $("button#rollBtn").on("click", function() {
    event.preventDefault();
    $("#playerOneCurrent").text();
  
    $("button#holdBtn").on("click", function() {
    event.preventDefault();
    $("#playerOneTotal").text();

    $("button#resetBtn").on("click", function() {
    event.preventDefault();
    reset


});
});

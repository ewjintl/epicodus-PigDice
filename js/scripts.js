// BACKEND LOGIC
function ScoreCard() {
    this.players = [];
    this.currentId = 0;
    // this.currentPlayer = 1;    
}
ScoreCard.prototype.assignId = function(id) {
  this.currentId += 1;
  return this.currentId;
}
ScoreCard.prototype.determineTurn = function() {
  for (i=0; i< this.players.length; i++) {
    if (this.players[i]) {
      if (this.players[i].id == id) {
        return this.players[i];
      }
    }
  };
  return false;
}
ScoreCard.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players.push(player);
}
function Player(totalScore, turnScore) {
  this.totalScore = totalScore;
  this.turnScore = turnScore;
}

var generateDiceRoll = function() {
  roll = Math.ceil((Math.random() * 6)) += totalRoll;
  return roll;  
}


Player.prototype.roll = function() {
  var currentRoll = generateDiceRoll();
  if (currentRoll !== 1) {
    this.turnScore += currentRoll;
  } else {
   
  }
  return totalRoll;
};
  





// ScoreCard.prototype.roll = function() {
//   

// FRONTEND LOGIC
var newGame = new ScoreCard();

$(document).ready(function() {
  $("button#rollBtn").on("click", function() {
      event.preventDefault();
      ScoreCard.roll();
  
      $("#playerOneTotal").text(totalRoll);
      // $("#playerTwoTotal").text();
  });
});


// [player1 {totalScore: 0, turnScore: 0, id: 0}, player2 {totalScore: 0, turnScore: 0, id: 1}]
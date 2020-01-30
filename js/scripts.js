// Backend

function ScoreCard() {
    this.playerOne = 0;
    this.playerTwo = 0;
}
  
ScoreCard.prototype.roll = function() {
  currentRoll = Math.ceil((Math.random() * 6)) += totalRoll;  
  if (currentRoll == [1]) {
    totalRoll += 0;
  } else {
    total += currentRoll;
  }
  return totalRoll;
};

// function hold() {
// }

// Business logic

// UI

$(document).ready(function() {
  var newGame = new ScoreCard();

  $("button#rollBtn").on("click", function() {
      event.preventDefault();
      ScoreCard.roll();
    
      console.log(newGame.roll());
  
      $("#playerOneTotal").text(totalRoll);
      // $("#playerTwoTotal").text();
  });
});
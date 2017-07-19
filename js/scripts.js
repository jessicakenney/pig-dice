function Player (user) {
  this.number = user;
  this.rolls = [];
  this.turnTotal = 0;
  this.gameTotal = 0;
  this.turn = 1;
}

Player.prototype.diceRoller =function() {
  return Math.floor(Math.random() * 6) + 1;
}

//return turnTotal? to add to gameTotal?
Player.prototype.takeTurn = function(roll){
  this.rolls.push(roll);
  if(roll=== 1){
    this.turn = 0;
    return 0;
  }else {
    return getSum(this.rolls);
    //$("#turnTotal").text(getSum(player1.rolls));
  }
}

function getSum(numbers){
  var sum = 0;
  numbers.forEach(function(number) {
    sum += number;
  })
  return sum;
}

$(document).ready(function() {
  var hold = 0;
  var player1 = new Player ("1");
  var player2 = new Player ("2");



  $("#roll1").click(function() {
    var roll = player1.diceRoller();
    if (player1.turn) {
      $(".die1").text(roll);
      player1.turnTotal = player1.takeTurn(roll);
      $("#turnTotal").text(player1.turnTotal);
    }
  });
  $("#hold1").click(function() {
    hold = 1;
    alert("hold event: turn over");
});

});

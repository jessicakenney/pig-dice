function Player (user) {
  this.number = user;
  this.rolls = [];
  this.turnTotal = 0;
  this.gameTotal = 0;
  this.turn = 0;
}

Player.prototype.diceRoller =function() {
  return Math.floor(Math.random() * 6) + 1;
}

Player.prototype.testHold = function(){
  this.turn = 0;
  this.gameTotal += this.turnTotal;
  this.turnTotal = 0;
  return this.rolls =[];
}


Player.prototype.takeTurn = function(roll){
  this.rolls.push(roll);
  if(roll=== 1){
    this.turn = 0;
    this.rolls = [];
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
  var player1 = new Player ("1");
  var player2 = new Player ("2");
  player1.turn = 1;

  $("#roll1").click(function() {
    var roll = player1.diceRoller();
    if (player1.turn) {
      $(".die1").text(roll);
      player1.turnTotal = player1.takeTurn(roll);
      $("#turnTotal1").text(player1.turnTotal);
    }else{
      player2.turn = 1;
      player1.turnTotal = 0;
    }
  });
  $("#hold1").click(function() {
    player1.testHold();
    player2.turn = 1;
    $("#turnTotal1").text(player1.turnTotal);
    $("#gameTotal1").text(player1.gameTotal);

});
$("#roll2").click(function() {
  var roll = player2.diceRoller();
  if (player2.turn) {
    $(".die2").text(roll);
    player2.turnTotal = player2.takeTurn(roll);
    $("#turnTotal2").text(player2.turnTotal);
  }else{
    player1.turn = 1;
    player2.turnTotal = 0;
  }
});
$("#hold2").click(function() {
  player2.testHold()
  player1.turn = 1;
  $("#turnTotal2").text(player2.turnTotal);
  $("#gameTotal2").text(player2.gameTotal);
});

});

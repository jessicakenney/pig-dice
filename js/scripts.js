function Player (user) {
  this.number = user;
  this.rolls = [];
  this.turnTotal = 0;
  this.gameTotal = 0;
  this.turnOver = 0;
}

Player.prototype.diceRoller =function() {
  return Math.floor(Math.random() * 6) + 1;
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
  $("#roll1").click(function() {
    var player1 = new Player ("1");
    var roll = player1.diceRoller();
    player1.rolls.push(roll);
    $(".die1").text(roll);

    if(roll=== 1){
      player1.turnOver = 1;
      alert("Turn Over: 1 rolled")
      $("#turnTotal").text("0");
    }else{
      $("#turnTotal").text(getSum(player1.rolls));
    }
});
  $("#hold1").click(function() {
    hold = 1;
    alert("hold event: turn over")
});

});

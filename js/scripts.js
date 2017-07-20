function Game(name,player1,player2) {
  this.name = name;
  this.player1 = player1;
  this.player2 = player2;
}
function Player (user) {
  this.number = user;
  this.rolls = [];
  this.turnTotal = 0;
  this.gameTotal = 0;
  this.turn = 0;
}
Player.prototype.rollDice =function() {
  return Math.floor(Math.random() * 6) + 1;
}
Player.prototype.endTurn = function(){
  //this.turn = 0;//put into toggleturn
  this.gameTotal += this.turnTotal;
  this.turnTotal = 0;
  return this.rolls =[];
}
Player.prototype.rollAgain = function(roll){
  this.rolls.push(roll);
  return getSum(this.rolls);
}
Game.prototype.toggleTurns = function(){
  this.player1.turn = !this.player1.turn;
  this.player2.turn = !this.player2.turn;
  $("#roll1,#hold1").toggle();
  $("#roll2,#hold2").toggle();
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
  var pigGame = new Game ("Pig",player1,player2);

//player1 goes first
  pigGame.player1.turn = 1;
  pigGame.player2.turn = 0;
  $("#roll1,#hold1").show();
  $("#roll2,#hold2").hide();

  $("#roll1").click(function() {
    var roll = player1.rollDice();
    if (roll === 1){
      pigGame.toggleTurns();
      pigGame.player1.turnTotal = 0;
      pigGame.player1.endTurn();
      if (!pigGame.player1.turn) {$("#roll1").hide();}
      $(".die1").text(roll);
      $("#turnTotal1").text(pigGame.player1.turnTotal);
    } else if (pigGame.player1.turn) {
        if (pigGame.player1.turn) {$("#roll1").show();}
        pigGame.player1.turnTotal = pigGame.player1.rollAgain(roll);
        $(".die1").text(roll);
        $("#turnTotal1").text(pigGame.player1.turnTotal);
    }
  });
  $("#hold1").click(function() {
    pigGame.player1.endTurn();
    pigGame.toggleTurns();
    $("#turnTotal1").text(pigGame.player1.turnTotal);
    $("#gameTotal1").text(pigGame.player1.gameTotal);
  });

  $("#roll2").click(function() {
    var roll = pigGame.player2.rollDice();
    if (roll === 1){
      pigGame.player2.turnTotal = 0;
      pigGame.toggleTurns();
      pigGame.player2.endTurn();
      $(".die2").text(roll);
      $("#turnTotal2").text(pigGame.player2.turnTotal);
    } else if (pigGame.player2.turn) {
        pigGame.player2.turnTotal = pigGame.player2.rollAgain(roll);
        $(".die2").text(roll);
        $("#turnTotal2").text(pigGame.player2.turnTotal);
    }
  });
  $("#hold2").click(function() {
    pigGame.player2.endTurn();
    pigGame.toggleTurns();
    $("#turnTotal2").text(pigGame.player2.turnTotal);
    $("#gameTotal2").text(pigGame.player2.gameTotal);
  });

});

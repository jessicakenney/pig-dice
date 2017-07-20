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
  if(this.gameTotal>= 100){
    //using gameTotal==1 to flag game over in frontend
    return this.gameTotal = 1;
  }else{
    this.turnTotal = 0;
    return this.rolls =[];
  }
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
  pigGame.player1.turn = 1;
  pigGame.player2.turn = 0;
  $("#roll1,#hold1").show();
  $("#roll2,#hold2").hide();
  var inputtedNumberDice = 1;

$("#onedice").click(function() {
  inputtedNumberDice = 1;
});
$("#twodice").click(function() {
  inputtedNumberDice = 2;
});
//player1 goes first


  $("#roll1").click(function() {
    var rolls = []


    for (var i = 0; i < inputtedNumberDice; i++) {
      var quickroller = player1.rollDice();
      rolls.push(quickroller);
    }
    rolls.forEach(function(roll){
      if (roll === 1){
        pigGame.toggleTurns();
        pigGame.player1.turnTotal = 0;
        pigGame.player1.endTurn();
      }
      //the else condition should not be in foreach
      else if (pigGame.player1.turn) {
          if (pigGame.player1.turn) {$("#roll1").show();}
          pigGame.player1.turnTotal = pigGame.player1.rollAgain(roll);
      }
    });

    $(".die1").text(roll);
    $("#turnTotal1").text(pigGame.player1.turnTotal);
  });
  $("#hold1").click(function() {
    pigGame.player1.endTurn();
    pigGame.toggleTurns();
    $("#turnTotal1").text(pigGame.player1.turnTotal);
    if (player1.gameTotal === 1){
      $("#gameTotal1").text("Oink Oink");
      $("#pig").show();
    } else {
      $("#gameTotal1").text(pigGame.player1.gameTotal);
    }
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
    if (player2.gameTotal === 1){
      $("#gameTotal2").text("Oink Oink");
      $("#pig").show();
    } else {
      $("#gameTotal2").text(pigGame.player2.gameTotal);
    }
  });

});

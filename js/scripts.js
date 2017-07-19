function Player(number, turnTotal, gameTotal){
  this.number = number;
  this.turnTotal = 0;
  this.gameTotal = 0;
}

function diceRoller() {
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
  var rolls= [];
  var turnOver = 0;
  var hold = 0;
  $("#roll1").click(function() {

    var roll= diceRoller();
    rolls.push(roll);

    $(".die1").text(roll);
    if(roll=== 1){
      turnOver = 1;
      alert("Turn Over: 1 rolled")
      $("#turnTotal").text("0");
    }else{
      $("#turnTotal").text(getSum(rolls));
    }

});
  $("#hold1").click(function() {
    hold = 1;
    //$("#turnTotal").text(getSum(rolls));
    //alert("Working!");
});

});

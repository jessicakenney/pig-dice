function Player(number, turnTotal, gameTotal){
  this.number = number;
  this.turnTotal = 0;
  this.gameTotal = 0;
}

function diceRoller() {
  return Math.floor(Math.random() * 6) + 1;
}
function isOne(number){
  return number === 1;
}
function getSum(numbers){
  var sum = 0;
  numbers.forEach(function(number) {
    sum += number;
  });
  return sum;
}

$(document).ready(function() {
  var rolls= [];
  var turn = 1;
  var hold = 0;
  $("#roll1").click(function() {

    var roll= diceRoller();
    rolls.push(roll);

    $(".die1").text(roll);

    //alert(isOne(roll));
  $("#hold1").click(function() {
    alert(getSum(rolls));
    alert("Working!")
});



  });

});

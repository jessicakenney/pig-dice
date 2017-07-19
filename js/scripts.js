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
  $("#player1").click(function() {

    var roll= diceRoller();
    rolls.push(roll);

    alert(getSum(rolls));
    alert(rolls);

    $(".die1").text(roll);
    alert(isOne(roll));



  });

});

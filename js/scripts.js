function diceRoller() {
  return Math.floor(Math.random() * 6) + 1;
}
function isOne(number){
  return number === 1;
}


$(document).ready(function() {

  $("#player1").click(function() {

    var roll = diceRoller();
    $(".die1").text(roll);
    alert(isOne(roll));



  });

});

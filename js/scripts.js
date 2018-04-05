// Player O
var player = {
  player1: "X",
  player2: "O",
}









// function Space(space) {
//   this.spaceId = space;
// }
//
// function WinningCombo (index1, index2, index3) {
//   var horizontal1 = WinningCombo (space1, space2, space3);
//   var horizontal1 = WinningCombo (space1 && space2 && space3);
//   var horizontal2 = WinningCombo (space4 && space5 && space6);
//   var horizontal3 = WinningCombo (space7 && space8 && space9);
//   var verticle1 = WinningCombo (space1 && space4 && space7);
//   var verticle2 = WinningCombo (space2 && space5 && space8);
//   var verticle3 = WinningCombo (space3 && space6 && space9);
//   var diagnol1 = WinningCombo (space1 && space5 && space9);
//   var diagnol2 = WinningCombo (space3 && space5 && space7);
// }
//
//
// var horizontal1 = (space1 && space2 && space3);
// var horizontal2 = (space4 && space5 && space6);
// var horizontal3 = (space7 && space8 && space9);
// var verticle1 = (space1 && space4 && space7);
// var verticle2 = (space2 && space5 && space8);
// var verticle3 = (space3 && space6 && space9);
// var diagnol1 = (space1 && space5 && space9);
// var diagnol2 = (space3 && space5 && space7);







$(document).ready(function() {
  var currentPlayer = 'player1';
  $(".grid-item").click(function() {
    $(this).text(player[currentPlayer]);
      if (currentPlayer === 'player1') {
        currentPlayer = 'player2';
      } else {
        currentPlayer = 'player1';
      }



    $("#turn1").toggle();
    $("#turn2").toggle();
  });



});

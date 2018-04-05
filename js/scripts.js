// Player O
var player = {
  player1: "X",
  player2: "0",
}


// var space1;
// var space2;
// var space3;
// var space4;
// var space5;
// var space6;
// var space7;
// var space8;
// var space9;







function Space(space) {
  this.spaceId = space;
}

function WinningCombo (index1, index2, index3) {
  var horizontal1 = WinningCombo (space1, space2, space3);
}


// var horizontal1 = (space1 && space2 && space3);
// var horizontal2 = (space4 && space5 && space6);
// var horizontal3 = (space7 && space8 && space9);
// var verticle1 = (space1 && space4 && space7);
// var verticle2 = (space2 && space5 && space8);
// var verticle3 = (space3 && space6 && space9);
// var diagnol1 = (space1 && space5 && space9);
// var diagnol2 = (space3 && space5 && space7);





$(document).ready(function() {


  $(".grid-item").click(function() {
    $(this).append(player.player2);



  });

});

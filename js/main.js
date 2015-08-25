$(document).on('ready', function() {
  console.log('sanity check!');

var titleInput = $('.titleInput');
var genreInput = $('.genreInput');
var libraryInput = $('.libraryName');
//only show library options to start
$('.gameForm').hide();

//When you add a library, show the game form and create the library title
$('.libraryBtn').on("click", function(event) {
  event.preventDefault();
  //hide library
  $('.libraryForm').hide();
  $('.gameForm').show();

  //add title
  var titlePlacement = $('.libraryTitle');
  var libraryInput = $('.libraryInput').val();
  var librarySelection = $('.librarySelection').val();

  //if input box isnt empty, use that value and append to screen, append to option list
  if (libraryInput !== "") {
    titlePlacement.append("<h2 class='libTitle'>" + libraryInput + "</h2>");
    console.log('not empty input');
  }
  else if (librarySelection !== "Select Library") {
    console.log('selected from list');
    titlePlacement.append("<h2 class='libTitle'>" + librarySelection + "</h2>");
  }
  else {
    console.log("Please select a Library");
  }
});

$('.gameBtn').on("click", function(event) {
  event.preventDefault();
    var title = $('.titleInput').val();
    var genre = $('.genreInput').val();
    var game = new Game(title, genre);
    console.log(game);
    var addGame = game.render();
    $('.libraryGames').append(addGame);
});


});


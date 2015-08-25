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

  $('.libraryForm').hide();
  $('.gameForm').show();

  //add title
  var titlePlacement = $('.libraryTitle');
  var libraryList = $('.librarySelection');
  var librarySelection = libraryList.val();
  var libraryInput = $('.libraryInput').val();

  //if input box isnt empty, use that value and append to screen, append to option list
  if (libraryInput !== "") {
    titlePlacement.append("<h2 class='libTitle newItem'>" + libraryInput + "</h2>");
    libraryList.append("<option>" + libraryInput + "</option>");
  }
  else if (librarySelection !== "Select Library") {
    titlePlacement.append("<h2 class='libTitle newItem'>" + librarySelection + "</h2>");
  }
  else {
    console.log("Please select a Library");
  }
});

//when adding a new game, append it beneath the library Title
$('.gameBtn').on("click", function(event) {
  event.preventDefault();
  var title = $('.titleInput').val();
  var genre = $('.genreInput').val();
  var game = new Game(title, genre);
  console.log(game);
  var addGame = game.render();
  $('.libraryGames').append(addGame);
});

$('.returnBtn').on("click", function(event) {
  event.preventDefault();
  $('.libraryForm').show();
  $('.gameForm').hide();

});

});


$(document).on('ready', function() {
  console.log('sanity check!');

var titleInput = $('.titleInput');
var genreInput = $('.genreInput');
var libraryInput = $('.libraryName');

titleInput.hide();
genreInput.hide();

$('.submit').on("click", function(event) {
  event.preventDefault();
  //add library name;
  if (title.hide) {
    var library = $('select').val();
    var newLibrary = $('.newLibrary').val();
    var lib = new GameLibrary(library);
    titleInput.show();
    genreInput.show();
    libraryInput.hide();
  }
  else{
    var title = $('.titleInput').val();
    var genre = $('.genreInput').val();
    var game = new Game(title, genre);
    lib.addGame(game);
    lib.render();
  }
});

});


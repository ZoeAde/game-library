$(document).on('ready', function() {
  console.log('sanity check!');


var gameForm = $('<form>')
gameForm.append($('<div><select><option>Library 1</option><option>Library 2</option></select></div>'))
gameForm.append($('<div><input type="text" placeholder="Title" class="titleInput"></div>'))
gameForm.append($('<div><input type="text" placeholder="Genre" class="genreInput"></div>'))
gameForm.append($('<div><button type="text" class="submit">Submit</button></div>'))
gameForm.append($('</form>'));

$('body').append(gameForm);



$('.submit').on("click", function(event) {
  event.preventDefault();
  var library = $('select').val();
  var newLibrary = $('.newLibrary').val();
  var title = $('.titleInput').val();
  var genre = $('.genreInput').val();
  var game = new Game(title, genre)
  var lib = new GameLibrary(library)
  lib.addGame(game);
  lib.render();
});

});


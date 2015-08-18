$(document).on('ready', function() {
  console.log('sanity check!');

var gameParagraph;

// Create a Game() class with the following properties:
var Game = function(library, title, genre) {
  this.library = library;
  this.title = title;
  this.genre = genre;
}

// Create a render() method on the Game() prototype for adding instances of the Game() class to the DOM.
Game.prototype.render = function() {
  //put game items in format you want them to appear
  var gameItems = $('<ul>');
  gameItems.append('<li>' + this.title + '</li>');
  gameItems.append('<li>' + this.genre + '</li>');
  gameItems.append('</ul>');
  //append element to dom
  var gameParagraph = $('<p>');
  gameParagraph.append(gameItems);

  $('body').append(gameParagraph);
  return gameParagraph;

}

// Create a GameLibrary() class with the following properties:
var GameLibrary = function(title, games) {
  this.title = title;
  this.games = [];
}

// Create a render() method on the GameLibrary() prototype for adding instances of the GameLibrary() class to the DOM.
GameLibrary.prototype.render = function() {
  var libraryItems = $('<p>');
  libraryItems.append('<h3>' + this.title + '</h1>');
  libraryItems.append('<li>' + gameParagraph + '</li>');
  libraryItems.append('</p>');

  //append element to dom
  var libraryParagraph = $('<p>');
  libraryParagraph.append(libraryItems);

  $('body').append(libraryParagraph);
}


// Add a form to the HTML document for adding new games to the game library, making sure to re-populate all the games on the HTML document.

var gameForm = $('<form>')
gameForm.append($('<div><select><option>test</option></select></div>'))
gameForm.append($('<div><input type="text" placeholder="Title" class="titleInput"></div>'))
gameForm.append($('<div><input type="text" placeholder="Genre" class="genreInput"></div>'))
gameForm.append($('<div><button type="text" class="submit">Submit</button></div>'))
gameForm.append($('</form>'));

$('body').append(gameForm);


$('.submit').on("click", function(event) {
  event.preventDefault();
  //append library type, title, and genre to page
  var library = $('select').val();
  var title = $('.titleInput').val();
  var genre = $('.genreInput').val();
  var game = new Game(library, title, genre)
  game.render();
})

});

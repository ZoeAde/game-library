var Game = function(title, genre) {
  this.title = title;
  this.genre = genre;
}

var GameLibrary = function(title) {
  this.title = title;
  this.games = [];
}

GameLibrary.prototype.render = function() {
  var libraryItems = $('<div class=library>');
  libraryItems.append('<h3>' + this.title + '</h3>');
  for (var i = 0; i < this.games.length; i++) {
    libraryItems.append('<li>' + this.games[i].title + '</li>');
    libraryItems.append('<li>' + this.games[i].genre + '</li>');
  };
  libraryItems.append('</div>');

  $('body').append(libraryItems);
};

GameLibrary.prototype.addGame = function(newGame) {
  this.games.push(newGame);
}


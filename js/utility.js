var Game = function(title, genre) {
  this.title = title;
  this.genre = genre;
}

Game.prototype.render = function() {
  var gameItem = $('<div>')
  libraryItems.append('<li>' + this.games[i].title + '</li>');
  libraryItems.append('<li>' + this.games[i].genre + '</li>');
  libraryItems.append('<p></p>');
};

var GameLibrary = function(title) {
  this.title = title;
  this.games = [];
};

GameLibrary.prototype.nameLibrary = function(title) {

};

GameLibrary.prototype.render = function() {
  var libraryItems = $('.libraryTitle');
  libraryItems.append('<h3>' + this.title + '</h3>');
  for (var i = 0; i < this.games.length; i++) {
    libraryItems.append('<li>' + this.games[i].title + '</li>');
    libraryItems.append('<li>' + this.games[i].genre + '</li>');
    libraryItems.append('<p></p>');

  };

  $('body').append(libraryItems);
};

GameLibrary.prototype.addGame = function(newGame) {
  this.games.push(newGame);
};


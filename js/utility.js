var libraryGames = $('.libraryGames');

var Game = function(title, genre) {
  this.title = title;
  this.genre = genre;
};

Game.prototype.render = function() {
  libraryGames.append('<tr><td>' + this.title + '</td><td>' + this.genre + '</td><tr>');
};

var GameLibrary = function(title) {
  this.title = title;
  this.games = [];
};

GameLibrary.prototype.addGame = function(newGame) {
  this.games.push(newGame);
};


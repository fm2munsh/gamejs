var gamejs = require('gamejs');

var StartScene = function(director) {
    this.director = director;

    this.draw = function(surface) {
      surface.fill('#eee');
      var font = new gamejs.font.Font('20px monospace');
      surface.blit(font.render("Press any key to begin"), [40, 40]);
    };

    this.handle = function(event) {
      if(event.type === gamejs.event.KEY_DOWN) {
          var game = new GameScene(this.director);
          this.director.replaceScene(game);
      }
    };
  };

var GameScene = function(director) {
  this.director = director;

    this.draw = function(surface) {
      surface.fill('#eee');
      var font = new gamejs.font.Font('20px monospace');
      surface.blit(font.render("Game Scene"), [40, 40]);
    };

    this.handle = function(event) {
      if(event.type === gamejs.event.KEY_DOWN) {
        
      }
    };
  };

exports.StartScene = StartScene;
exports.GameScene = GameScene;
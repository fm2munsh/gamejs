/**
 * @fileoverview
 * Demonstrates pixel perfect collision detection utilizing image masks.
 *
 * A 'spear' is moved around with mouse or cursors keys - the text 'COLLISION'
 * appears if the spear pixel collides with the unit.
 *
 * gamejs.mask.fromSurface is used to create two pixel masks
 * that do the actual collision detection.
 *
 */
var gamejs = require('gamejs');
var Director = require('director').Director;
var StartScene = require('scenes').StartScene;
var GameScene = require('scenes').GameScene;

function main() {

   var display = gamejs.display.setMode([500, 350]);

   var director = new Director();
   var firstScene = new StartScene(director);
   director.start(firstScene);

   var font = new gamejs.font.Font('20px monospace');

   gamejs.onEvent(function(event) {
      director.handle(event);
   });

   gamejs.onTick(function(msDuration) {
      display.clear();
      director.update(msDuration);
      director.draw(display);
   });
};

gamejs.preload([

]);

gamejs.ready(main);

// inject all paper objects & functions globally
paper.install(window);

// initialize canvas ('canvas' is the id in the HTML)
paper.setup(canvas);

console.log(view);

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////     BACKGROUND    ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

const fond = new Raster({ source: "img/bg5.jpg" });
fond.position = new Point(view.size.width, view.size.height);
fond.scale(view.size.width, view.size.height);

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////     BACKGROUND PLAYER    //////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

const zoneStart = new Point(150, 450);
const zoneEnd = new Point(view.size.width - 150, view.size.height - 60);
const rectBackground = new Path.Rectangle(zoneStart, zoneEnd);
rectBackground.strokeColor = "blue";

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////     Player    ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

const player = new Raster({ source: "img/PNG/playerShip1_red.png" });
player.position = new Point(view.size.width / 2, view.size.height - 150);
player.scale(0.7);

const centerCircle = new Point(view.size.width / 2, view.size.height - 150);
const circle = new Path.Circle(centerCircle, 30);
circle.strokeColor = "blue";
circle.strokeWidth = 1;

const playerGroup = new Group();

playerGroup.addChild(player);
playerGroup.addChild(circle);

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////      LIVES     ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

const live1 = new Raster({ source: "img/PNG/UI/playerLife1_red.png" });
live1.position = new Point(150, view.size.height - 30);
live1.scale(1.2);
live1.visible = true;

const live2 = new Raster({ source: "img/PNG/UI/playerLife1_red.png" });
live2.position = new Point(200, view.size.height - 30);
live2.scale(1.2);
live2.visible = true;

const live3 = new Raster({ source: "img/PNG/UI/playerLife1_red.png" });
live3.position = new Point(250, view.size.height - 30);
live3.scale(1.2);
live3.visible = true;

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////     ENEMIES    ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

/**1 */
const enemy1 = new Raster({ source: "img/PNG/Enemies/enemyGreen3.png" });
enemy1.position = new Point(300, 100);
enemy1.scale(0.7);

/**2 */

const enemy2 = new Raster({ source: "img/PNG/Enemies/enemyGreen4.png" });
enemy2.position = new Point(450, 100);
enemy2.scale(0.7);

/**3 */

const enemy3 = new Raster({ source: "img/PNG/Enemies/enemyGreen5.png" });
enemy3.position = new Point(600, 100);
enemy3.scale(0.7);

/**4 */

const enemy4 = new Raster({ source: "img/PNG/Enemies/enemyGreen5.png" });
enemy4.position = new Point(800, 100);
enemy4.scale(0.7);

/**5 */

const enemy5 = new Raster({ source: "img/PNG/Enemies/enemyGreen5.png" });
enemy5.position = new Point(1000, 100);
enemy5.scale(0.7);

/**6 */

const enemy6 = new Raster({ source: "img/PNG/Enemies/enemyGreen3.png" });
enemy6.position = new Point(1150, 100);
enemy6.scale(0.7);

/**7 */

const enemy7 = new Raster({ source: "img/PNG/Enemies/enemyGreen4.png" });
enemy7.position = new Point(1300, 100);
enemy7.scale(0.7);

/**8 */

const enemy8 = new Raster({ source: "img/PNG/Enemies/enemyGreen1.png" });
enemy8.position = new Point(300, 200);
enemy8.scale(0.7);

/**9 */

const enemy9 = new Raster({ source: "img/PNG/Enemies/enemyGreen2.png" });
enemy9.position = new Point(450, 200);
enemy9.scale(0.7);

/**10*/

const enemy10 = new Raster({ source: "img/PNG/Enemies/enemyGreen1.png" });
enemy10.position = new Point(600, 200);
enemy10.scale(0.7);

/**11 */

const enemy11 = new Raster({ source: "img/PNG/Enemies/enemyGreen1.png" });
enemy11.position = new Point(800, 200);
enemy11.scale(0.7);

const centerEnemy11 = new Point(800, 200);
const circle11 = new Path.Circle(centerEnemy11, 30);
circle11.strokeColor = "red";
circle11.strokeWidth = 1;

const enemyGroup11 = new Group();
enemyGroup11.addChild(enemy11);
enemyGroup11.addChild(circle11);

/**12 */

const enemy12 = new Raster({ source: "img/PNG/Enemies/enemyGreen2.png" });
enemy12.position = new Point(1000, 200);
enemy12.scale(0.7);

/**13 */

const enemy13 = new Raster({ source: "img/PNG/Enemies/enemyGreen2.png" });
enemy13.position = new Point(1150, 200);
enemy13.scale(0.7);

/**14 */

const enemy14 = new Raster({ source: "img/PNG/Enemies/enemyGreen4.png" });
enemy14.position = new Point(1300, 200);
enemy14.scale(0.7);

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////     MESSAGE    ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

const gameOverM = new PointText(
  new Point(view.size.width / 2, view.size.height / 2)
);
gameOverM.justification = "center";
gameOverM.fillColor = "red";
gameOverM.fontSize = 200;
gameOverM.content = "Game Over";
gameOverM.visible = false;

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////     VARIABLES    ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

let isGameOver = false;
let direction = 5;
let lives = 3;

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////     FUNCTION    ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Player Move
 */

view.onKeyDown = function (event) {
  if (event.key == "up") {
    playerGroup.position.y -= 20;
  }
  if (event.key == "down") {
    playerGroup.position.y += 20;
  }
  if (event.key == "left") {
    playerGroup.position.x -= 20;
  }
  if (event.key == "right") {
    playerGroup.position.x += 20;
  }

  /**
   * Laser Player
   */
  if (event.key == "space") {
    const laser = new Raster({ source: "img/PNG/Lasers/laserBlue14.png" });
    laser.position = new Point(playerGroup.position.x, view.size.height - 150);
    laser.scale(0.7);

    const centerLaser = new Point(
      playerGroup.position.x,
      view.size.height - 150
    );
    const circleLaser = new Path.Circle(centerLaser, 10);
    circleLaser.strokeColor = "blue";
    circleLaser.strokeWidth = 1;

    const laserGroup = new Group();

    laserGroup.addChild(laser);
    laserGroup.addChild(circleLaser);

    view.onFrame = function () {
      laserGroup.position.y -= direction;
      //console.log(laserGroup.position.y);
    };
  }
  /*view.onFrame = function(){
    if (centerCircle.intersects(rectBackground)) {
    ;
  }*/
};

/**
 * Laser Enemy
 */
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gameOver() {
  isGameOver = true;
  gameOverM.visible = true;
}
const laserenemy = new Raster({ source: "img/PNG/Lasers/laserRed16.png" });
laserenemy.position = new Point(
  enemyGroup11.position.x,
  enemyGroup11.position.y
);
laserenemy.scale(0.7);

const centerLaserEn = new Point(laserenemy.position.x, enemyGroup11.position.y);
const circleLaserE = new Path.Circle(centerLaserEn, 10);
circleLaserE.strokeColor = "red";
circleLaserE.strokeWidth = 1;

const laserGroupEn = new Group();

laserGroupEn.addChild(laserenemy);
laserGroupEn.addChild(circleLaserE);

view.onFrame = function () {
  if (isGameOver) return;

  laserGroupEn.position.y += direction;

  if (laserGroupEn.position.y > view.size.height) {
    laserGroupEn.position = enemy11.position;
  }
  if (circleLaserE.intersects(circle)) {
    lives = lives - 1;
    console.log(lives);
  }
  if (lives == 0) {
    gameOver();
  }
};

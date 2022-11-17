// inject all paper objects & functions globally
paper.install(window);

// initialize canvas ('canvas' is the id in the HTML)
paper.setup(canvas);

console.log(view);

/*const startBackground = new Point(0, 0);
const endBackground = new Point(view.size.width, view.size.height);
const rectBackground = new Path.Rectangle(startBackground, endBackground);
rectBackground.fillColor = "antiquewhite";*/

///////////////////////////////////////////////

/*a--
view.onMouseMove = function (event) {
  const center = new Point(event.point.x, event.point.y);
  const radius = 10;
  const circle = new Path.Circle(center, radius);

  circle.fillColor = "blue";
};*/

///////////////////////////////////////////////

/*b-- 
const center = new Point(0, 0);
const radius = 50;
const circle = new Path.Circle(center, radius);
circle.fillColor = "blue";

view.onMouseMove = function (event) {
  circle.position.x = event.point.x;
  circle.position.y = event.point.y;
};*/

///////////////////////////////////////////////

/*c--
let prevX;
let prevY;
view.onMouseMove = function (event) {
  if (prevX && prevY) {
    const start = new Point(prevX, prevY);
    const end = new Point(event.point.x, event.point.y);
    const line = new Path.Line(start, end);
    line.strokeColor = "blue";
  }
  prevX = event.point.x;
  prevY = event.point.y;
};*/

///////////////////////////////////////////////

/*d--
const start = new Point(150, 150);
const end = new Point(250, 250);
const rect = new Path.Rectangle(start, end);

rect.fillColor = "orange";
rect.strokeColor = "black";

view.onMouseMove = function (event) {
  rect.position.x = event.point.x;
};*/

///////////////////////////////////////////////

/*
const start = new Point(view.size.width / 2, view.size.height / 2);
const radius = 150;
const circle = new Shape.Circle(start, radius);

circle.fillColor = "orange";

// generate a random integer between a min and a max
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

circle.onClick = function (event) {
  circle.radius = random(100, 400);
};*/

///////////////////////////////////////////////

/*
const start = new Point(view.size.width / 2, view.size.height / 2);
const radius = 150;
const circle = new Shape.Circle(start, radius);

circle.strokeColor = "black";
circle.fillColor = "orange";

// generate a random integer between a min and a max
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

circle.onClick = function (event) {
  const red = random(0, 255);
  const green = random(0, 255);
  const blue = random(0, 255);

  // circle.fillColor = "rgb(" + red + ", " + green + ", " + blue + ")"

  circle.fillColor = `rgb(${red}, ${green}, ${blue})`;
};*/

///////////////////////////////////////////////

// generate a random integer between a min and a max
/*function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createCircle() {
  const x = random(0, view.size.width);
  const y = random(0, view.size.height);

  const start = new Point(x, y);
  const radius = 10;
  const circle = new Shape.Circle(start, radius);

  circle.fillColor = "blue";
}

setInterval(createCircle, 500);*/

///////////////////////////////////////////////

// generate a random integer between a min and a max
/*function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createCircle() {
  const x = random(0, view.size.width);
  const y = random(0, view.size.height);

  const start = new Point(x, y);
  const radius = 10;
  const circle = new Shape.Circle(start, radius);

  circle.radius = random(0, 50);

  const red = random(0, 255);
  const green = random(0, 255);
  const blue = random(0, 255);

  circle.fillColor = "rgb(" + red + ", " + green + ", " + blue + ")";

  circle.strokeColor = "black";
}

setInterval(createCircle, 500);*/

///////////////////////////////////////////////

/*
const center = new Point(0, 0);
const radius = 50;
const circle = new Path.Circle(center, radius);
circle.fillColor = "blue";
circle.strokeColor = "black";

view.onMouseMove = function (event) {
  circle.position.x = event.point.x;
  circle.position.y = event.point.y;

  if (event.point.y < view.size.height / 2) {
    circle.fillColor = "pink";
  } else {
    circle.fillColor = "blue";
  }
};

const startLine1 = new Point(0, view.size.height / 2);
const endLine1 = new Point(view.size.width, view.size.height / 2);
const line1 = new Path.Line(startLine1, endLine1);
line1.strokeColor = "black";*/

///////////////////////////////////////////////

// generate a random integer between a min and a max
/*
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createCircle() {
  const x = random(0, view.size.width)
  const y = random(0, view.size.height)

  const start = new Point(x, y);
  const radius = 10;
  const circle = new Shape.Circle(start, radius);

  circle.fillColor = "blue"
}

setInterval(createCircle, 500)*/

///////////////////////////////////////////////

/*
const startBackground = new Point(0, 0);
const endBackground = new Point(view.size.width, view.size.height);
const rectBackground = new Path.Rectangle(startBackground, endBackground);
rectBackground.fillColor = "#53cafc";

const centerCircle = new Point(view.size.width / 2, 200);
const circle = new Path.Circle(centerCircle, 150);
circle.fillColor = "orange";

const startRectangle = new Point(0, 200);
const endRectangle = new Point(view.size.width, view.size.height);
const rect = new Path.Rectangle(startRectangle, endRectangle);
rect.fillColor = "blue";

const startLine1 = new Point(100, 300);
const endLine1 = new Point(1000, 300);
const line1 = new Path.Line(startLine1, endLine1);
line1.strokeColor = "white";

const startLine2 = new Point(300, 400);
const endLine2 = new Point(1200, 400);
const line2 = new Path.Line(startLine2, endLine2);
line2.strokeColor = "white";

view.onFrame = function () {
  circle.position.y += 1;
};*/

///////////////////////////////////////////////

/*const startBackground = new Point(0, 0);
const endBackground = new Point(view.size.width, view.size.height);
const rectBackground = new Path.Rectangle(startBackground, endBackground);
rectBackground.fillColor = "#53cafc";

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const centerObjects = new Point(0, view.size.height / 2);
const objects = new Path.Circle(centerObjects, 50);
objects.fillColor = "black";
objects.strokeColor = "black";

let direction = 5;

view.onFrame = function () {
  if (direction == -1 && objects.position.x < view.size.width) {
    direction = 1;
  }
  console.log(objects.position.x);

  objects.position.x += direction;
};

const centerCircle = new Point(view.size.width / 2, view.size.height / 2);
const circle = new Path.Circle(centerCircle, 50);
circle.fillColor = "blue";
circle.strokeColor = "black";

view.onMouseMove = function (event) {
  circle.position.y = event.point.y;
};*/

///////////////////////////////////////////////

/**
 * Background, player and enemy
 */
// background
const startBackground = new Point(0, 0);
const endBackground = new Point(view.size.width, view.size.height);
const rectBackground = new Path.Rectangle(startBackground, endBackground);
rectBackground.fillColor = "#53cafc";

// player, hidden on start
const player = new Path.Circle(
  new Point(view.size.width / 2, view.size.height / 2),
  50
);
player.fillColor = "blue";
player.visible = false; // hide it on start

// enemy, hidden on start
const enemy = new Path.Circle(new Point(0, view.size.height / 2), 50);
enemy.fillColor = "black";
enemy.visible = false; // hide it on start
const enemySpeed = 10; // enemy speed

/**
 * Text messages
 */
// start message, visible on start
const startMessage = new PointText(
  new Point(view.size.width / 2, view.size.height / 2)
);
startMessage.justification = "center";
startMessage.fillColor = "black";
startMessage.fontSize = 30;
startMessage.content = "Cliquer pour commencer";

// game over message, hidden on start
const gameOverMessage = new PointText(
  new Point(view.size.width / 2, view.size.height / 2)
);
gameOverMessage.justification = "center";
gameOverMessage.fillColor = "red";
gameOverMessage.fontSize = 50;
gameOverMessage.content = "Game Over :(";
gameOverMessage.visible = false;

/**
 * Score
 */
// score value
let score = 0;

// score display, hidden on start
const scoreDisplay = new PointText(new Point(view.size.width - 20, 30));
scoreDisplay.justification = "right";
scoreDisplay.fillColor = "black";
scoreDisplay.fontSize = 20;
scoreDisplay.content = "Score: 0";
scoreDisplay.visible = true;

/**
 * States variables
 */
let isGameOver = false;
let isStarted = false;

/**
 * Functions
 */
// random util
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// when game starts
function start() {
  isStarted = true;

  // show enemy and player
  enemy.visible = true;
  player.visible = true;

  // hide welcome message
  startMessage.visible = false;
}

// when player looses
function gameOver() {
  isGameOver = true;

  // show game over message
  gameOverMessage.visible = true;
}

// when enemy exits screen on right
function enemyExit() {
  // reset it at begining
  enemy.position.x = 0;
  // and set a random y position
  enemy.position.y = random(0, view.size.height);

  // as we avoided this enemy sucessfully
  // increase the score value
  score++;
  // and update its display
  scoreDisplay.content = `Score: ${score}`;
}

/**
 * Events
 */
view.onClick = function () {
  // if game has not started yet, start it
  if (!isStarted) start();
};

view.onMouseMove = function (event) {
  // don't move if game has started or game over
  if (!isStarted) return;
  if (isGameOver) return;

  player.position.y = event.point.y;
};

view.onFrame = function () {
  // don't move if game has started or game over
  if (isGameOver) return;
  if (!isStarted) return;

  enemy.position.x += enemySpeed;

  // enemy exits screen
  if (enemy.position.x >= view.size.width) {
    enemyExit();
  }

  // player enter collision with enemy
  if (enemy.intersects(player)) {
    gameOver();
  }
};

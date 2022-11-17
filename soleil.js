// inject all paper objects & functions globally
paper.install(window);

// initialize canvas ('canvas' is the id in the HTML)
paper.setup(canvas);

console.log(view);

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

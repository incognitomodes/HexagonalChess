let canvas;

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight - 4);
}

function draw() {
    background(55);

    // HexagonalBoard.drawHexagon(canvas, width / 2, height / 2, 10);
    let t = new HexagonalBoard(width, height);

    // let tmp = new Hexagon(0, 0, 50, width / 2, height / 2);
    // tmp.show();

    // tmp = new Hexagon(1, 0, 50, width / 2, height / 2);
    // tmp.show();

    // tmp = new Hexagon(2, 0, 50, width / 2, height / 2);
    // tmp.show();

    // tmp = new Hexagon(3, 0, 50, width / 2, height / 2);
    // tmp.show();

    // tmp = new Hexagon(-1, 0, 50, width / 2, height / 2);
    // tmp.show();

    // tmp = new Hexagon(0, 1, 50, width / 2, height / 2);
    // tmp.show();

    // tmp = new Hexagon(0, -1, 50, width / 2, height / 2);
    // tmp.show();
    // tmp = new Hexagon(-1, 1, 50, width / 2, height / 2);
    // tmp.show();
    image(loadImage("assets/textures/bw480.png"), 100, 100);

    stroke(255,0,0);
    strokeWeight(10);

    point(width / 2, height / 2);

    noLoop();
}

let board;
let rookMoves;

let DEBUG = false;

function preload() {
}

function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight - 4);

    board = new HexagonalBoard(width, height);
    board.loadTextures();

    // wait for textures to load
    // await delay(500);

    // correct position:
    board.loadPosition("qbk/rn1b1nr/1pp2b2pp1/3pp1pp3/5p5/11/4PPP4/2PP3PP2/PR2B2RP/NQBKN/B");


    // board.loadPosition("qbk/rn1b11r/1112b2111/3111113/515/bbn8/4PPP4/2PP3PP2/PR2B2RP/NQBKN/B");
    // board.loadPosition("3/7/111212111/3111113/515/11/4PPP4/2PP3PP2/PR2B2RP/NQBKN/B");
    // board.legalMoves = LegalMoves.getMovesForRook(0,0);

}


function draw() {
    background(55);

    stroke(255);
    strokeWeight(1);
    noFill();
    rect(0,0, 50, 20);
    text("DEBUG", 5, 15);

    board.show();

    if (DEBUG) {
        stroke(0, 40);
        strokeWeight(1);
        for (let i = -5; i < 6; i++) {
            for (let j = -5; j < 5; j++) {
                if (board.getHexagon(j, i) && board.getHexagon(j + 1, i)) {
                    let h1 = board.getHexagon(j, i);
                    let h2 = board.getHexagon(j + 1, i);

                    line(h1.canvasX, h1.canvasY, h2.canvasX, h2.canvasY)
                }
            }
        }
    }
}

function mousePressed() {
    if (mouseX < 50 && mouseY < 20) {
        DEBUG = !DEBUG;
    }
    board.mousePressed(mouseX, mouseY);
}

function mouseReleased() {
    board.mouseReleased(mouseX, mouseY);
}
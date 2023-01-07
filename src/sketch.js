let board;

function preload() {
}

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function setup() {
    createCanvas(window.innerWidth, window.innerHeight - 4);
    
    board = new HexagonalBoard(width, height);
    board.loadTextures();

    // wait for textures to load
    // await delay(500);

    board.loadPosition("qbk/rn1b1nr/1pp2b2pp1/3pp1pp3/5p5/11/4PPP4/2PP3PP2/PR2B2RP/NQBKN/B");
}

async function draw() {
    background(55);

    board.show();

    // noLoop();
}

function mouseClicked() {
    // console.log(mouseX + "==" + mouseY);
}

function mouseReleased() {
}
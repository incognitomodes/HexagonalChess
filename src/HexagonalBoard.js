class HexagonalBoard {
    constructor(maxWidth, maxHeight) {
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;

        // array of hexagons (squares in normal chess)
        this.hexagons = new Object();
        this.legalMoves = [];

        // get max values for hexagon radiuses
        // rH = height / 11 * sqrt(3)
        let rH = maxHeight / (11 * 1.73);
        // rW = width / 17
        let rW = maxWidth / 17;

        this.hexagonRadius = Math.floor(Math.min(rW, rH));

        for (let x = -5; x < 6; x++) {
            this.hexagons[x] = new Object();

            let yHexagons = 10 - Math.abs(x);
            let yStart = -Math.ceil(yHexagons / 2);

            for (let y = yStart; y <= yHexagons + yStart; y++) {
                this.hexagons[x][y] = new Hexagon(x, y, this.hexagonRadius, maxWidth / 2, maxHeight / 2);
                this.hexagons[x][y].setPiece(new Piece());
            }
        }
    }

    loadTextures() {
        this.textures = new Object();
        this.textures["bb"] = loadImage("assets/textures/bb480.png");
        this.textures["kb"] = loadImage("assets/textures/kb480.png");
        this.textures["qb"] = loadImage("assets/textures/qb480.png");
        this.textures["rb"] = loadImage("assets/textures/rb480.png");
        this.textures["pb"] = loadImage("assets/textures/pb480.png");
        this.textures["nb"] = loadImage("assets/textures/nb480.png");

        this.textures["bw"] = loadImage("assets/textures/bw480.png");
        this.textures["kw"] = loadImage("assets/textures/kw480.png");
        this.textures["qw"] = loadImage("assets/textures/qw480.png");
        this.textures["rw"] = loadImage("assets/textures/rw480.png");
        this.textures["pw"] = loadImage("assets/textures/pw480.png");
        this.textures["nw"] = loadImage("assets/textures/nw480.png");
    }

    loadPosition(FENlikePosition) {
        let pos = FENlikePosition.split("/");

        try {
            let posRow = 0;
            for (let row = -5; row < 6; row++) {
                let posCol = 0;
                for (let column = -5; column < 6; column++) {
                    if (!this.getHexagon(column, row)) continue;

                    let piece = pos[posRow].substring(posCol, posCol + 1);
                    let tmp;

                    if (HexagonalBoard.isNumeric(piece)) {
                        column += Number(piece) - 1;
                    } else if (piece != "") {
                        // ckeck if white or black piece
                        if (piece == piece.toUpperCase()) {
                            tmp = new Piece(piece.toLowerCase(), "w", this.textures[piece.toLowerCase() + "w"]);
                            if (piece.toLowerCase() == "p") {
                                this.hexagons[column][row].whitePawnStartingHex = true;
                            }
                        } else {
                            tmp = new Piece(piece.toLowerCase(), "b", this.textures[piece.toLowerCase() + "b"]);
                            if (piece.toLowerCase() == "p") {
                                this.hexagons[column][row].blackPawnStartingHex = true;
                            }
                        }

                        this.hexagons[column][row].setPiece(tmp);
                    }

                    posCol++;
                }
                posRow++;
            }
        }
        catch (e) {
            console.error("Incorrect position string");
            return;
        }
    }

    getHexagon(x, y) {
        if (this.hexagons[x]) {
            return this.hexagons[x][y] ?? null;
        }
        return null;
    }

    show() {
        for (let item in this.hexagons) {
            for (let subitem in this.hexagons[item]) {
                this.hexagons[item][subitem].show();
            }
        }

        this.showLegalMoves();

        if (this.pressedHexgagon) {
            image(this.pressedHexgagon.getPiece().image, mouseX, mouseY, this.hexagonRadius * 1.5, this.hexagonRadius * 1.5);
        }
    }

    showLegalMoves() {
        stroke(255, 0, 0, 100);
        noFill();

        for (let i = 0; i < this.legalMoves.length; i++) {
            let h = this.getHexagon(this.legalMoves[i].x, this.legalMoves[i].y);
            if (h) {
                if (this.legalMoves[i].capture) {
                    strokeWeight(this.hexagonRadius / 5);
                    circle(h.canvasX, h.canvasY, h.radius);
                } else {
                    strokeWeight(this.hexagonRadius / 1.5);
                    point(h.canvasX, h.canvasY);
                }
            }
        }
    }

    inBoard(x, y) {
        if (this.hexagons[x]) {
            return this.hexagons[x][y] ?? false;
        }
        return false;
    }

    inBoardAndEmpty(x, y) {
        if (this.inBoard(x, y)) {
            return this.getHexagon(x, y).pieceEmpty();
        }
        return false;
    }

    mousePressed(mouseX, mouseY) {
        this.legalMoves = [];
        for (let item in this.hexagons) {
            for (let subitem in this.hexagons[item]) {
                let h = this.hexagons[item][subitem];

                if (HexagonalBoard.distSq(mouseX, mouseY, h.canvasX, h.canvasY) < h.radius * h.radius) {
                    if (h.pieceEmpty()) {
                        return;
                    }

                    this.legalMoves = h.getPiece().getMovesForThisPiece(h.posX, h.posY, this);

                    this.pressedHexgagon = h;
                    h.showPiece = false;

                    return;
                }
            }
        }
    }

    mouseReleased(mouseX, mouseY) {
        if (this.pressedHexgagon) {
            for (let item in this.hexagons) {
                for (let subitem in this.hexagons[item]) {
                    let h = this.hexagons[item][subitem];

                    // if(h == this.pressedHexgagon) return;

                    if (HexagonalBoard.distSq(mouseX, mouseY, h.canvasX, h.canvasY) < h.radius * h.radius) {
                        for (let move in this.legalMoves) {
                            // check if move can be made
                            if (this.legalMoves[move].x == h.posX && this.legalMoves[move].y == h.posY) {

                                h.setPiece(this.pressedHexgagon.getPiece());
                                this.pressedHexgagon.unsetPiece();

                                break;
                            }
                        }

                        break;
                    }
                }
            }

            this.legalMoves = [];
            this.pressedHexgagon.showPiece = true;
            this.pressedHexgagon = null;
        }
    }

    static isNumeric(str) {
        if (typeof str != "string") return false // we only process strings!  
        return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
            !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
    }

    static distSq(x1, y1, x2, y2) {
        return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
    }
}
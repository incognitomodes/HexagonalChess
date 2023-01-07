class HexagonalBoard {
    constructor(maxWidth, maxHeight) {
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;

        // array of hexagons (squares in normal chess)
        this.hexagons = new Object();

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

                    } else {
                        // ckeck if white or black piece
                        if (piece == piece.toUpperCase()) {
                            tmp = new Piece(piece.toLowerCase(), "w", this.textures[piece.toLowerCase() + "w"]);
                        } else {
                            tmp = new Piece(piece.toLowerCase(), "b", this.textures[piece.toLowerCase() + "b"]);
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
    }

    static isNumeric(str) {
        if (typeof str != "string") return false // we only process strings!  
        return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
            !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
    }
}
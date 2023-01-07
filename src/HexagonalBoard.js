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

            for(let y = yStart; y <= yHexagons + yStart; y++) {
                this.hexagons[x][y] = new Hexagon(x, y, this.hexagonRadius, maxWidth / 2, maxHeight / 2);
                this.hexagons[x][y].show();
            }
        }

        // this.loadTextures();

        // let hex = this.getHexagon(0,0);
        // image(this.textures["bb"], hex.canvasX, hex.canvasY);
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

    getHexagon(x, y) {
        return this.hexagons[x][y];
    }
}
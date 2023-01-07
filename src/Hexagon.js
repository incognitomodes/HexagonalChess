class Hexagon {
    constructor(posX, posY, radius, boardCenterX, boardCenterY) {
        this.posX = posX;
        this.posY = posY;
        this.radius = radius;
        this.boardCenterX = boardCenterX;
        this.boardCenterY = boardCenterY;

        this.canvasX = boardCenterX + posX * radius * 1.5;
        this.canvasY = boardCenterY + posY * 1.73 * radius + (posX % 2 == 0 ? 0 : (radius * 1.73) / 2);

        this.color = new Color(255, 255, 255);
        if ((this.posY + 5) % 3 == 0 && Math.abs(this.posX) % 2 == 0) {
            this.color = new Color(209, 139, 71);
        }

        if ((this.posY + 5) % 3 == 1 && Math.abs(this.posX) % 2 == 1) {
            this.color = new Color(209, 139, 71);
        }

        if ((this.posY + 5) % 3 == 1 && Math.abs(this.posX) % 2 == 0) {
            this.color = new Color(255, 206, 158);
        }

        if ((this.posY + 5) % 3 == 2 && Math.abs(this.posX) % 2 == 1) {
            this.color = new Color(255, 206, 158);
        }

        if ((this.posY + 5) % 3 == 2 && Math.abs(this.posX) % 2 == 0) {
            this.color = new Color(232, 171, 111);
        }

        if ((this.posY + 5) % 3 == 0 && Math.abs(this.posX) % 2 == 1) {
            this.color = new Color(232, 171, 111);
        }
    }

    setImage(image) {
        this.image = image;
    }

    unsetImage() {
        this.image = null;
    }

    show() {
        this.color.setStroke();
        this.color.setFill();
        Hexagon.drawHexagon(this.canvasX, this.canvasY, this.radius);

        if (this.image) {
            imageMode(CENTER);
            image(this.image, this.canvasX, this.canvasY, this.radius * 1.5, this.radius * 1.5)
        }

        fill(255, 0, 0);
        text(this.posX + "," + this.posY, this.canvasX, this.canvasY);
    }

    static drawHexagon(centerX, centerY, radius) {
        beginShape()
        for (let a = 0; a < TAU; a += TAU / 6) {
            vertex(centerX + radius * cos(a), centerY + radius * sin(a))
        }
        endShape(CLOSE)
    }
}
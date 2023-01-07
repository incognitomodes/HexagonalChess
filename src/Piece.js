class Piece {
    constructor(type, color, image) {
        this.type = type;
        this.color = color;
        this.image = image;
        this.moved = false;
    }

    show(x, y, r) {
        if (this.image) {
            imageMode(CENTER);
            image(this.image, x, y, r * 1.5, r * 1.5);
        }
    }
}
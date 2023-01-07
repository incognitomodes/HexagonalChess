class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    setStroke() {
        stroke(this.r, this.g, this.b);
    }

    setFill() {
        fill(this.r, this.g, this.b);
    }
}
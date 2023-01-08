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

    isNone() {
        return this.type == null || this.color == null
        || this.type == '' || this.color == '';
    }

    getMovesForThisPiece(x, y, board) {
        if (this.type == "r") {
            return LegalMoves.getMovesForRook(x, y, board, this.color);
        }
        if (this.type == "b") {
            return LegalMoves.getMovesForBishop(x, y, board, this.color);
        }
        if (this.type == "q") {
            return LegalMoves.getMovesForQueen(x, y, board, this.color);
        }
        if (this.type == "n") {
            return LegalMoves.getMovesForKnight(x, y, board, this.color);
        }
        if (this.type == "k") {
            return LegalMoves.getMovesForKing(x, y, board, this.color);
        }

        return [];
    }
}
class LegalMoves {
    static getMovesForRook(x, y, board) {
        let moves = [];

        for (let i = 1; i < 11; i++) {
            if (board.inBoardAndEmpty(x, y + i)) {
                moves.push({
                    x: x,
                    y: y + i,
                });
            } else {
                break;
            }
        }

        for (let i = -1; i > -11; i--) {
            if (board.inBoardAndEmpty(x, y + i)) {
                moves.push({
                    x: x,
                    y: y + i,
                });
            } else {
                break;
            }
        }

        let tmpX = x, tmpY = y;
        for (let i = 0; i < 11; i++) {
            if (Math.abs(tmpX) % 2 == 0) {
                tmpY--;
            }
            tmpX++;
            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        tmpX = x; tmpY = y;
        for (let i = 0; i < 11; i++) {
            if (Math.abs(tmpX) % 2 == 1) {
                tmpY++;
            }
            tmpX--;

            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        tmpX = x; tmpY = y;
        for (let i = 0; i < 11; i++) {
            if (Math.abs(tmpX) % 2 == 1) {
                tmpY++;
            }
            tmpX++;
            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        tmpX = x; tmpY = y;
        for (let i = 0; i < 11; i++) {
            if (Math.abs(tmpX) % 2 == 0) {
                tmpY--;
            }
            tmpX--;

            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        return moves;
    }

    static getMovesForBishop(x, y) {
        let moves = [];

        let tmpX = x, tmpY = y;
        for (let i = 0; i < 11; i++) {
            tmpX -= 2;
            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        tmpX = x; tmpY = y;
        for (let i = 0; i < 11; i++) {
            tmpX += 2;
            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        tmpX = x; tmpY = y;
        for (let i = 0; i < 11; i++) {
            tmpX--;
            if (Math.abs(tmpX) % 2 == 1) {
                tmpY--;
            }
            tmpY--;

            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        tmpX = x; tmpY = y;
        for (let i = 0; i < 11; i++) {
            tmpX++;
            if (Math.abs(tmpX) % 2 == 0) {
                tmpY++;
            }
            tmpY++;

            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        tmpX = x; tmpY = y;
        for (let i = 0; i < 11; i++) {
            tmpX++;
            if (Math.abs(tmpX) % 2 == 1) {
                tmpY--;
            }
            tmpY--;

            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        tmpX = x; tmpY = y;
        for (let i = 0; i < 11; i++) {
            tmpX--;
            if (Math.abs(tmpX) % 2 == 0) {
                tmpY++;
            }
            tmpY++;

            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        return moves;
    }

    static getMovesForQueen(x, y) {
        let moves = [];

        // rook
        for (let i = 1; i < 11; i++) {
            if (board.inBoardAndEmpty(x, y + i)) {
                moves.push({
                    x: x,
                    y: y + i,
                });
            } else {
                break;
            }
        }

        for (let i = -1; i > -11; i--) {
            if (board.inBoardAndEmpty(x, y + i)) {
                moves.push({
                    x: x,
                    y: y + i,
                });
            } else {
                break;
            }
        }

        let tmpX = x, tmpY = y;
        for (let i = 0; i < 11; i++) {
            if (Math.abs(tmpX) % 2 == 0) {
                tmpY--;
            }
            tmpX++;
            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        tmpX = x; tmpY = y;
        for (let i = 0; i < 11; i++) {
            if (Math.abs(tmpX) % 2 == 1) {
                tmpY++;
            }
            tmpX--;

            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        tmpX = x; tmpY = y;
        for (let i = 0; i < 11; i++) {
            if (Math.abs(tmpX) % 2 == 1) {
                tmpY++;
            }
            tmpX++;
            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        tmpX = x; tmpY = y;
        for (let i = 0; i < 11; i++) {
            if (Math.abs(tmpX) % 2 == 0) {
                tmpY--;
            }
            tmpX--;

            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        // bishop
        tmpX = x; tmpY = y;
        for (let i = 0; i < 11; i++) {
            tmpX -= 2;
            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        tmpX = x; tmpY = y;
        for (let i = 0; i < 11; i++) {
            tmpX += 2;
            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        tmpX = x; tmpY = y;
        for (let i = 0; i < 11; i++) {
            tmpX--;
            if (Math.abs(tmpX) % 2 == 1) {
                tmpY--;
            }
            tmpY--;

            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        tmpX = x; tmpY = y;
        for (let i = 0; i < 11; i++) {
            tmpX++;
            if (Math.abs(tmpX) % 2 == 0) {
                tmpY++;
            }
            tmpY++;

            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        tmpX = x; tmpY = y;
        for (let i = 0; i < 11; i++) {
            tmpX++;
            if (Math.abs(tmpX) % 2 == 1) {
                tmpY--;
            }
            tmpY--;

            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        tmpX = x; tmpY = y;
        for (let i = 0; i < 11; i++) {
            tmpX--;
            if (Math.abs(tmpX) % 2 == 0) {
                tmpY++;
            }
            tmpY++;

            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        return moves;
    }

    static getMovesForKing(x, y) {
        let moves = [];

        for (let i = 1; i <= 1; i++) {
            if (board.inBoardAndEmpty(x, y + i)) {
                moves.push({
                    x: x,
                    y: y + i,
                });
            } else {
                break;
            }
        }

        for (let i = -1; i >= -1; i--) {
            if (board.inBoardAndEmpty(x, y + i)) {
                moves.push({
                    x: x,
                    y: y + i,
                });
            } else {
                break;
            }
        }

        let tmpX = x, tmpY = y;
        for (let i = 0; i < 1; i++) {
            if (Math.abs(tmpX) % 2 == 0) {
                tmpY--;
            }
            tmpX++;
            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        tmpX = x; tmpY = y;
        for (let i = 0; i < 1; i++) {
            if (Math.abs(tmpX) % 2 == 1) {
                tmpY++;
            }
            tmpX--;

            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        tmpX = x; tmpY = y;
        for (let i = 0; i < 1; i++) {
            if (Math.abs(tmpX) % 2 == 1) {
                tmpY++;
            }
            tmpX++;
            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        tmpX = x; tmpY = y;
        for (let i = 0; i < 1; i++) {
            if (Math.abs(tmpX) % 2 == 0) {
                tmpY--;
            }
            tmpX--;

            if (board.inBoardAndEmpty(tmpX, tmpY)) {
                moves.push({
                    x: tmpX,
                    y: tmpY,
                });
            } else {
                break;
            }
        }

        return moves;
    }

    static getMovesForKnight(x, y) {
        let moves = [];

        moves.push({
            x: x + 3,
            y: (Math.abs(x) % 2 == 0) ? y - 1 : y,
        });
        moves.push({
            x: x + 3,
            y: (Math.abs(x) % 2 == 0) ? y : y + 1,
        });

        moves.push({
            x: x - 3,
            y: (Math.abs(x) % 2 == 0) ? y - 1 : y,
        });
        moves.push({
            x: x - 3,
            y: (Math.abs(x) % 2 == 0) ? y : y + 1,
        });

        for (let i = -1; i <= 1; i += 2) {
            if (Math.abs(x) % 2 == 0) {
                for (let j = 1; j <= 2; j++) {
                    moves.push({
                        x: x + i * j,
                        y: y - 2 + (j == 1 ? -1 : 0),
                    });
                }

                for (let j = -1; j >= -2; j--) {
                    moves.push({
                        x: x + i * j,
                        y: y + 2 + (j == 1 ? -1 : 0),
                    });
                }
            } else {
                for (let j = 1; j <= 2; j++) {
                    moves.push({
                        x: x + i * j,
                        y: y - 2,
                    });
                }

                for (let j = -1; j >= -2; j--) {
                    moves.push({
                        x: x + i * j,
                        y: y + 3 + (j + 1),
                    });
                }
            }
        }

        moves = moves.filter(m => board.inBoardAndEmpty(m.x, m.y));

        return moves;
    }

    static inBoard(x, y) {
        if (x < -5 || x > 5) return false;
        if (y < -6 || y > 6) return false;

        return true;
    }
}
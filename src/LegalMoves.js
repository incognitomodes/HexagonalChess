class LegalMoves {
    static createMove(board, moveX, moveY, movingPieceColor) {
        if (board.inBoard(moveX, moveY)) {
            let h = board.getHexagon(moveX, moveY);

            if (h.getPiece().color == movingPieceColor) {
                return false;
            }

            if (h.getPiece().isNone()) {
                return {
                    x: moveX,
                    y: moveY,
                }
            }

            return {
                x: moveX,
                y: moveY,
                capture: true,
            }
        }
        return false;
    }

    static getMovesForRook(x, y, board, color) {
        let moves = [];

        for (let i = 1; i < 11; i++) {
            let move = LegalMoves.createMove(board, x, y + i, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
            } else {
                break;
            }
        }

        for (let i = -1; i > -11; i--) {
            let move = LegalMoves.createMove(board, x, y + i, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
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
            let move = LegalMoves.createMove(board, tmpX, tmpY, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
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

            let move = LegalMoves.createMove(board, tmpX, tmpY, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
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
            let move = LegalMoves.createMove(board, tmpX, tmpY, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
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

            let move = LegalMoves.createMove(board, tmpX, tmpY, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
            } else {
                break;
            }
        }

        return moves;
    }

    static getMovesForBishop(x, y, board, color) {
        let moves = [];

        let tmpX = x, tmpY = y;
        for (let i = 0; i < 11; i++) {
            tmpX -= 2;
            let move = LegalMoves.createMove(board, tmpX, tmpY, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
            } else {
                break;
            }
        }

        tmpX = x; tmpY = y;
        for (let i = 0; i < 11; i++) {
            tmpX += 2;
            let move = LegalMoves.createMove(board, tmpX, tmpY, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
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

            let move = LegalMoves.createMove(board, tmpX, tmpY, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
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

            let move = LegalMoves.createMove(board, tmpX, tmpY, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
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

            let move = LegalMoves.createMove(board, tmpX, tmpY, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
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

            let move = LegalMoves.createMove(board, tmpX, tmpY, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
            } else {
                break;
            }
        }

        return moves;
    }

    static getMovesForQueen(x, y, board, color) {
        let moves = [];

        // rook
        for (let i = 1; i < 11; i++) {
            let move = LegalMoves.createMove(board, x, y + i, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
            } else {
                break;
            }
        }

        for (let i = -1; i > -11; i--) {
            let move = LegalMoves.createMove(board, x, y + i, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
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
            let move = LegalMoves.createMove(board, tmpX, tmpY, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
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

            let move = LegalMoves.createMove(board, tmpX, tmpY, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
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
            let move = LegalMoves.createMove(board, tmpX, tmpY, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
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

            let move = LegalMoves.createMove(board, tmpX, tmpY, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
            } else {
                break;
            }
        }

        // bishop
        tmpX = x; tmpY = y;
        for (let i = 0; i < 11; i++) {
            tmpX -= 2;
            let move = LegalMoves.createMove(board, tmpX, tmpY, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
            } else {
                break;
            }
        }

        tmpX = x; tmpY = y;
        for (let i = 0; i < 11; i++) {
            tmpX += 2;
            let move = LegalMoves.createMove(board, tmpX, tmpY, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
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

            let move = LegalMoves.createMove(board, tmpX, tmpY, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
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

            let move = LegalMoves.createMove(board, tmpX, tmpY, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
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

            let move = LegalMoves.createMove(board, tmpX, tmpY, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
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

            let move = LegalMoves.createMove(board, tmpX, tmpY, color);
            if (move) {
                if (move.capture) {
                    moves.push(move);
                    break;
                }
                moves.push(move);
            } else {
                break;
            }
        }

        return moves;
    }

    static getMovesForKing(x, y, board, color) {
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

    static getMovesForKnight(x, y, board, color) {
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
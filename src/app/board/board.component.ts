import { BoardCreatorService } from './../board-creator.service';
import { Square } from './../square';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

    widthOfBoard: number;
    heightOfBoard: number;
    widthArray: number[];
    heightArray: number[];
    mines: number;
    totalClicked: number;
    hasWon: boolean;
    hasLost: boolean;

    board: Square[][];

    constructor(private BoardCreatorService: BoardCreatorService) {
        this.widthOfBoard = 24;
        this.heightOfBoard = 24;
        this.mines = 10;
        this.totalClicked = 0;
        this.hasWon = false;
        this.hasLost = false;
        this.setSizes();
        this.setBoard();
    }

    ngOnInit() {
    }

    setSizes() {
        this.widthArray = Array.from(Array(this.widthOfBoard), (x, i) => i);
        this.heightArray = Array.from(Array(this.heightOfBoard), (x, i) => i);
    }

    setBoard() {
        this.board = this.BoardCreatorService.createRandomBoard(this.widthOfBoard, this.heightOfBoard, this.mines);
        return;
    }

    flag(row: number, column: number) {
        if (this.board[row][column].flag) {
            this.board[row][column].flag = false;
        } else {
            this.board[row][column].flag = true;
        }
        return false;
    }

    squareClick(row: number, column: number) {
        if (!this.board[row][column].flag && !this.hasLost && !this.hasWon) {
            if (this.board[row][column].mine) {
                this.board[row][column].clicked = true;
                this.losingCondition();
            } else {
                this.sweepBoard(row, column);
            }
        }
    }

    sweepBoard(row: number, column: number) {
        if (this.board[row][column].clicked) {
            return;
        } else {
            this.board[row][column].clicked = true;
            this.totalClicked++;
            if (this.totalClicked >= (this.widthOfBoard*this.heightOfBoard-this.mines)) {
                this.winningCondition();
            }
            if (this.board[row][column].minesTouching === 0) {
                for (let i = -1; i < 2; i++) {
                    for (let j = -1; j < 2; j++) {
                        if ((row + i) >= this.heightOfBoard || (column + j) >= this.widthOfBoard || (row + i) < 0 || (column + j) < 0) {
                        } else {
                            if (!this.board[row + i][column + j].clicked) {
                                this.sweepBoard(row + i, column + j);
                            }
                        }
                    }
                }
            } else {
                return;
            }
        }
    }

    winningCondition() {
        this.hasWon = true;
    }

    losingCondition() {
        this.hasLost = true;
    }

}

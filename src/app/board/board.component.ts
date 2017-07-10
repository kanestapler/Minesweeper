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

    board: Square[][];

    constructor(private BoardCreatorService: BoardCreatorService) {
        this.widthOfBoard = 24;
        this.heightOfBoard = 24;
        this.mines = 99;
        this.setSizes();
        this.setBoard();
     }

    ngOnInit() {
    }

    setSizes() {
        this.widthArray = Array.from(Array(this.widthOfBoard),(x,i)=>i);
        this.heightArray = Array.from(Array(this.heightOfBoard),(x,i)=>i);
    }

    setBoard() {
        this.board = this.BoardCreatorService.createRandomBoard(this.widthOfBoard, this.heightOfBoard, this.mines);
        console.log(this.board);
    }

    squareClick(row: number, column: number) {
        this.board[row][column].clicked = true;
    }

}

import { Square } from './square';
import { Injectable } from '@angular/core';

@Injectable()
export class BoardCreatorService {

    constructor() { }

    createRandomBoard(width: number, height: number, mines: number): Square[][] {
        let output: Square[][] = [];
        for (let i = 0; i < height; i++) {
            output[i] = [];
            for (let j = 0; j < width; j++) {
                output[i][j] = new Square();
            }
        }
        for (let i = 0; i < mines; i++) {
            let space: number[] = this.giveRandomBoardSpace(height-1, width-1);
            if (output[space[0]][space[1]].mine) {
                i--;
            } else {
                output[space[0]][space[1]].mine = true;
                for (let x = -1; x < 2; x++) {
                    for (let y = -1; y < 2; y++) {
                        if ((space[0] + x) >= 0 && 
                            (space[0] + x) < height &&
                            (space[1] + y) >= 0 && 
                            (space[1] + y) < width) {
                            output[space[0] + x][space[1] + y].minesTouching++;
                        }
                    }
                }
            }
        }
        return output;
    }

    private giveRandomBoardSpace(height: number, width: number): number[] {
        let output: number[] = [];
        output.push(this.RandomInt(0, height));
        output.push(this.RandomInt(0, width));
        return output;
    }

    private RandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}

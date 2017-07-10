export class Square {
    clicked: boolean;
    mine: boolean;
    minesTouching: number;

    constructor() {
        this.clicked = false;
        this.mine = false;
        this.minesTouching = 0;
    }
}

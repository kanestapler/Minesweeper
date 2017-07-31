export class Square {
    clicked: boolean;
    mine: boolean;
    minesTouching: number;
    flag: boolean;

    constructor() {
        this.clicked = false;
        this.mine = false;
        this.minesTouching = 0;
        this.flag = false;
    }
}

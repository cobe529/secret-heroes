export class ScoreBoard {
    private _correct: number;
    private _wrong: number;
    private _game_over: boolean;

    constructor() {
        this._correct = 0;
        this._wrong = 0;
        this._game_over = false;
    }

    public get correct(): number {
        return this._correct;
    }

    public set correct(correct: number) {
        this._correct = correct;
    }

    public get wrong(): number {
        return this._wrong;
    }

    public set wrong(wrong: number) {
        this._wrong = wrong;
    }

    public get game_over(): boolean {
        return this._game_over;
    }

    public set game_over(game_over: boolean) {
        this._game_over = game_over;
    }

    scoreCorrect() {
        this._correct++;
    }

    scoreWrong() {
        this._wrong++;
    }
}
import { Hero } from "./Hero";

export class WhackHero extends Hero {
    private _whacked: boolean = false;
    private _result!: boolean;

    constructor(id: number, name: string, full_name: string, legs: number, primary_attr: string, attack_type: string) {
        super(id, name, full_name, legs, primary_attr, attack_type);
    }

    public get whacked(): boolean {
        return this._whacked;
    }

    public set whacked(whacked: boolean) {
        this._whacked = whacked;
    }

    public get result(): boolean {
        return this._result;
    }

    public set result(result: boolean) {
        this._result = result;
    }
}
export class Hero {
    private _id: number;
    private _name: string;
    private _full_name: string;
    private _legs: number;
    private _primary_attr: string;
    private _attack_type: string;

    constructor(id: number, name: string, full_name: string, legs: number, primary_attr: string, attack_type: string) {
        this._id = id;
        this._name = name;
        this._full_name = full_name;
        this._legs = legs;
        this._primary_attr = primary_attr;
        this._attack_type = attack_type;
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get full_name(): string {
        return this._full_name;
    }

    public set full_name(full_name: string) {
        this._full_name = full_name;
    }

    public get legs(): number {
        return this._legs;
    }

    public set legs(legs: number) {
        this._legs = legs;
    }

    public get primary_attr(): string {
        return this._primary_attr;
    }

    public set primary_attr(primary_attr: string) {
        this._primary_attr = primary_attr;
    }

    public get attack_type(): string {
        return this._attack_type;
    }

    public set attack_type(attack_type: string) {
        this._attack_type = attack_type;
    }
}
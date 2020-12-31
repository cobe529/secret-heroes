export class Hero {
    id!: number;
    name!: string;
    full_name!: string;
    legs!: number;
    primary_attr!: string;
    attack_type!: string;

    constructor(id: number, name: string, full_name: string, legs: number, primary_attr: string, attack_type: string) {
        this.id = id;
        this.name = name;
        this.full_name = full_name;
        this.legs = legs;
        this.primary_attr = primary_attr;
        this.attack_type = attack_type;
    }
}
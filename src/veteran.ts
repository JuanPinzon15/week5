import { Player } from './player';

export class Veteran extends Player {
    veteranPotential?: number

    constructor(name: string, overall: number, veteranpotential: number){
        super(name, overall);
        this.veteranPotential = this.veteranPotential;
    }

    override greet(value: string) {
        super.greet(`Veteran: ${value}`);
    }

    override toString(): string{
        return `= ${this.getType()} - ${this.name}, ${this.overall}`
    }
}
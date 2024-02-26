import { Player } from "./player";

export class Young extends Player {
	youngpotential?: number;

    constructor(name: string, overall: number, youngpotential: number) {
        super(name, overall);
        this.youngpotential= youngpotential
    }

    override greet(value: string) {
        super.greet(`Young: ${value}`);
    }

    override toString(): string {
        return `= ${this.getType()} - ${this.name}, ${this.overall}`
    }
}
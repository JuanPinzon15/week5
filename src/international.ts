import { Logable } from "./logable";

export abstract class International implements Logable{
    name?: string;
    nextgame?: Date;

    constructor(name: string, nextgame: Date){
        this.name= name
        this.nextgame= nextgame
    }

    greet(value: string) {
        console.log(`${value} ${this.name}`);
    }

    abstract getType(): string;
}
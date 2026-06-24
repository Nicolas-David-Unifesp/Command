import {Banco_Pessoas} from "./Banco_Pessoas";

export interface command {
    execute(): void;
}

export class Newcommand implements command {

    constructor(private banco: hashmap) {
        this.banco = banco;
    }

    execute(): void {
        //
    }

}




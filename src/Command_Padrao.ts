import { Banco_Pessoas } from "./Banco_Pessoas";
import { Pessoa } from "./Pessoa";

export interface Command {
    execute(): void;
}

export class AdicionarPessoaCommand implements Command {
    constructor(
        private banco: Banco_Pessoas,
        private pessoa: Pessoa
    ) {}

    execute(): void {
        this.banco.adicionarPessoa(this.pessoa);
    }
}

export class RemoverPessoaCommand implements Command {
    constructor(
        private banco: Banco_Pessoas,
        private id: number
    ) {}

    execute(): void {
        this.banco.removerPessoa(this.id);
    }
}



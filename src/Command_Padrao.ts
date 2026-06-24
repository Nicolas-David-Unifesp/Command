import { Banco_Pessoas } from "./Banco_Pessoas";
import { Pessoa } from "./Pessoa";

export interface Command {
    execute(): void;
}

export class AdicionarPessoaCommand implements Command {
    constructor(private banco: Banco_Pessoas) {}

    execute(args: string[]): void {
        const id = Number(args[0]);
        const nome = args.slice(1).join(" ");
        if(!id || !nome) {
            console.log("Utilize o padrão: new <id> <nome>");
            return;
        }

        this.banco.adicionarPessoa(new Pessoa(id, nome));
    }
}

export class RemoverPessoaCommand implements Command {
    constructor(private banco: Banco_Pessoas) {}

    execute(args: string[]): void {
        const id = Number(args[0]);
        if(isNaN(id)){
            console.log("Utilize o padrão: delete <id>");
            return;
        }

        this.banco.removerPessoa(id);
    }
}

export class BuscarPessoaCommand implements Command {
    constructor(private banco: Banco_Pessoas) {}

    execute(args: string[]): void {
        const id = Number(args[0]);
        if (isNaN(id)) {
            console.log("Utilize o padrão: get <id>");
            return;
        }

        const pessoa = this.banco.buscarPessoa(id);
        if (pessoa) {
            console.log(`ID: ${pessoa.id} | Nome: ${pessoa.nome}`);
        } else {
            console.log("Pessoa não encontrada.");
        }
    }
}

export class ListarPessoasCommand implements Command {
    constructor(private banco: Banco_Pessoas) {}

    execute(args: string[]): void {
        const pessoas = this.banco.listarPessoas();
        if (pessoas.length === 0) {
            console.log("O banco está vazio.");
            return;
        }
        pessoas.forEach(p => console.log(`ID: ${p.id} | Nome: ${p.nome}`));
    }
}
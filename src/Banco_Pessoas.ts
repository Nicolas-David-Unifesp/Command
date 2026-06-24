import { Pessoa } from "./Pessoa";

export class Banco_Pessoas {
    private pessoas: Map<number, Pessoa> = new Map();

    adicionarPessoa(pessoa: Pessoa): void {

        if (this.pessoas.has(pessoa.id)) {
            console.log(`Erro: ID ${pessoa.id} já existe.`);
            return; 
        }

        this.pessoas.set(pessoa.id, pessoa)
        console.log(`Pessoa ${pessoa.nome} adicionada.`);
    }

    removerPessoa(id: number): boolean {
        if(!this.pessoas.has(id)) {
            console.log(`Erro: ID ${id} não encontrado.`);
            return false
        }

        this.pessoas.delete(id);
        console.log(`Pessoa com ID ${id} removida.`);
        return true;
    }

    buscarPessoa(id: number): Pessoa | undefined {
        return this.pessoas.get(id)
    }

    listarPessoas(): Pessoa[] {
        return Array.from(this.pessoas.values())
    }
}
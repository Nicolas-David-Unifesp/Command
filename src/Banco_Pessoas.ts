import { Pessoa } from "./Pessoa";

export class Banco_Pessoas {
    private pessoas: Pessoa[] = [];

    adicionarPessoa(pessoa: Pessoa): void {//Aqui foi 
        const jaExiste = this.pessoas.some((p) => p.id === pessoa.id);
        if (!jaExiste) {
            this.pessoas.push(pessoa);
        }
    }

    removerPessoa(id: number): boolean {
        const indice = this.pessoas.findIndex((p) => p.id === id);
        if (indice !== -1) {
            this.pessoas.splice(indice, 1);
            return true;
        }
        return false;
    }

    buscarPessoa(id: number): Pessoa | undefined {
        return this.pessoas.find((p) => p.id === id);
    }

    listarPessoas(): Pessoa[] {
        return [...this.pessoas];
    }
}
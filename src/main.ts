import { 
    Command, 
    AdicionarPessoaCommand, 
    RemoverPessoaCommand, 
    BuscarPessoaCommand, 
    ListarPessoasCommand 
} from "./Command_Padrao";
import { Banco_Pessoas } from "./Banco_Pessoas";

class App {
    private comandos: Map<string, Command> = new Map();
    private banco = new Banco_Pessoas();

    constructor() {
        this.comandos.set("new", new AdicionarPessoaCommand(this.banco));
        this.comandos.set("delete", new RemoverPessoaCommand(this.banco));
        this.comandos.set("get", new BuscarPessoaCommand(this.banco));
        this.comandos.set("all", new ListarPessoasCommand(this.banco));
    }

    executar() {
        const args = process.argv.slice(2);
        const nomeComando = args[0];
        const parametrosComando = args.slice(1);

        if(!nomeComando) {
            console.log("Escolha um comando. Opções: new, delete, get, all");
            return;
        }

        const comando = this.comandos.get(nomeComando);

        if(!comando) {
            console.log(`Comando '${nomeComando}' não existe.`);
            return;
        } 

        comando.execute(parametrosComando);
    }
}

const app = new App();
app.executar();
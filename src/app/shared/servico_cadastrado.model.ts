import { Servico } from './servico.model';
import { Usuario } from './usuario.model';

export class ServicoCadastrado {
    constructor(
        public cd: number,
        public descricao: string,
        public servico: Servico,
        public usuario: Usuario,
    ) {}
}

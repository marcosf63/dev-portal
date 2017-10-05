import { Servico } from '../modelos/servico.model';
import { Usuario } from '../modelos/usuario.model';

export class ServicoCadastrado {
    constructor(
        public id: number,
        public descricao: string,
        public servico: Servico,
        public usuario: Usuario,
    ) {}
}

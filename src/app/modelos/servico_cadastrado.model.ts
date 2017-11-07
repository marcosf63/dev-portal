import { Servico } from '../modelos/servico.model';
import { Usuario } from '../modelos/usuario.model';

export class ServicoCadastrado {
    constructor(
        public descricao: string,
        public servico_id: number,
        public usuario_id: number,
        public exibir_anuncio: boolean,
        public id?: number,
    ) {}
}

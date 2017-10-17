import { Categoria } from './categoria.model';

export class Servico {
    constructor(
        public nome: string,
        public categoria: Categoria,
        public id?: number
    ) {}
 }

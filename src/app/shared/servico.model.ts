import { Categoria } from './categoria.model';

export class Servico {
    constructor(
        public id: Number,
        public nome: String,
        public categoria: Categoria
    ) {}
 }

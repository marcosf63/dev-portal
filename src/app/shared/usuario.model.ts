import { Plano } from './plano.model';

export class Usuario {
    
    constructor (
        public cd: number,
        public nome: string,
        public email: string,
        public senha: string,
        public tipo: string,
        public endereco: string,
        public cidade: string,
        public cep : string,
        public telefoneFixo1: string,
        public telefoneFixo2: string,
        public celuliar1: string,
        public celular2: string,
        public foto: string,
        public situacao: string,
        public in_pagamento_em_dia: string,
        public plano: Plano,
    ) {}

    getTipo(): string {
        return this.tipo;
    }
}
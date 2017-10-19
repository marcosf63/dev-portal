export class Plano {
    constructor(
        public nome: string,
        public descricao: string,
        public qt_servico: number,
        public periodicidade: string,
        public valor: number,
        public id?: number
    ) { }
}
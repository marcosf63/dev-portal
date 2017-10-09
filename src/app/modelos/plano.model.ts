export class Plano {
    constructor(
        public id: number,
        public nome: string,
        public descricao: string,
        public qt_servicos: number,
        public periodicidade: string,
        public valor: number
    ) { }
}
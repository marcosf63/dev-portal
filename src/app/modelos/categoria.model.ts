import { Servico } from './servico.model'

export class Categoria {
   constructor(
       public nome: String, 
       public servicos: Servico[],
       public id?: number
              
    ) {}
}

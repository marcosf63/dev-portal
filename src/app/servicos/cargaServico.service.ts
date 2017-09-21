import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Servico } from '../shared/servico.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CargaServicoService {
    constructor(private http: Http) {}
    public criaServico(): Promise<Servico> {
        let servicos : Servico[] = [
            {
                id: 1, 
                nome: 'Eletricista',
                categoria : {
                    id: 2,
                    nome: 'Reformas e Reparos'
                }
            },
            {
                id: 2, 
                nome: 'Babá', 
                categoria : {
                    id: 1,
                    nome: 'Servicos Domesticos'
                }
            },
            {
                id: 3,
                nome: 'Contador',
                categoria : {
                    id: 3,
                    nome: 'Consultoria'
                }
            },
            {
                id: 4, 
                nome: 'Advogado', 
                categoria : {
                    id: 7,
                    nome: 'Advogado'
                }
            },
            {
                id: 5, 
                nome: 'Barbeiro', 
                categoria : {
                    id: 5,
                    nome: 'Moda e Beleza'
                }
            },
            {
                id: 6, 
                nome: 'Professor', 
                categoria : {
                    id: 6,
                    nome: 'Aulas'
                }
            },
            {
                id: 7, 
                nome: 'Programador', 
                categoria : {
                    id: 4,
                    nome: 'Tecnologia'
                }
            }
        ]
        return this.http.post('http://localhost:3000/categorias', servicos)
            .toPromise()
            .then((resposta: any) => resposta.json());
    }

}

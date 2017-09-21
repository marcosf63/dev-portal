import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Categoria } from '../shared/categoria.model';
import { Servico } from '../shared/servico.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CargaCategoriaService {
    constructor(private http: Http) {}
    public criaCetegoria(): Promise<Categoria> {
        let categorias: Categoria[] = [
            { id: 1, nome: 'Servicos Domesticos'},
            { id: 2, nome: 'Reformas e Reparos'},
            { id: 3, nome: 'Consutoria'},
            { id: 4, nome: 'Tecnologia'},
            { id: 5, nome: 'Moda e Beleza'},
            { id: 6, nome: 'Aulas'},
            { id: 7, nome: 'Advogado'}
        ];
        return this.http.post('http://localhost:3000/categorias', categorias)
            .toPromise()
            .then((resposta: any) => resposta.json());
    }

}

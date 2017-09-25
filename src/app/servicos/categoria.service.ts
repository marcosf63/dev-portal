import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Categoria } from '../shared/categoria.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoriaService {
    constructor(private http: Http) {}
    public getCategorias(): Promise<Categoria[]> {
        return this.http.get('http://localhost:3000/categorias')
            .toPromise()
            .then((resposta: any) => resposta.json());
    }
}
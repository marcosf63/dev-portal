import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Anuncio } from '../modelos/anuncio.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AnuncioService {
    constructor(private http: Http) {}
    public getAnuncios(): any {
        return this.http.get('http://localhost:5000/servicos_cadastrados')
            .toPromise()
            .then((resposta: any) => resposta.json())
    }
}

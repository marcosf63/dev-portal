import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Anuncio } from '../shared/anuncio.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AnuncioService {
    constructor(private http: Http) {}
    // public getAnuncios(): Promise<Anuncio[]> {
    //     return this.http.get('http://localhost:3000/anuncios?in_exibir=S')
    //         .toPromise()
    //         .then((resposta: any) => resposta.json());
    // }
}

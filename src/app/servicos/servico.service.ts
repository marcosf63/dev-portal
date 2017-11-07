import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Servico } from '../modelos/servico.model';
import { apiUrl } from './data.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServicoService {
    constructor(private http: Http) {}
    public getSevicoPorCategoria(categoria_id: Number): Promise<Servico[]> {
        return this.http.get(`${apiUrl}/servico?categoria_id=${categoria_id}`)
            .toPromise()
            .then(
                (resposta: any) => resposta.json()
            );
    }
}
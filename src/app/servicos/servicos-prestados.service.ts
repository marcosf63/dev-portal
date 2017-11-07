import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { apiUrl } from '../servicos/data.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServicoPrestadosService {

    constructor(private http: Http) {}

    public registraServicosPrestados(servico_prestado: any): Observable<any> {
        let headers: Headers = new Headers()
        

        headers.append('Content-Type', 'application/json')
        return this.http.post(
            `${apiUrl}/servico_prestado`,
             JSON.stringify(servico_prestado),
            new RequestOptions({ headers: headers})
            )
            .map(
                (resposta) => resposta.json(),
                () => console.log("Ocorreu um erro")
            )
    }
}
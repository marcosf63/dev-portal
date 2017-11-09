import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { apiUrl } from '../servicos/data.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'

@Injectable()
export class BuscaService {

    constructor(private http: Http) {}

    public registraBusca(busca: any): Observable<any> {
        let headers: Headers = new Headers()
        

        headers.append('Content-Type', 'application/json')
        return this.http.post(
            `${apiUrl}/busca`,
             JSON.stringify(busca),
            new RequestOptions({ headers: headers})
            )   
            .map(
                (resposta) => resposta.json(),
                () => console.log("Ocorreu um erro")
            )
    }

    public recuperarBusca(): Observable<any> {
        
        return this.http.get(
            `${apiUrl}/buscas?contagem=sim`
            )   
            .map(
                (resposta) => resposta.json(),
                () => console.log("Ocorreu um erro")
            )
    }
}
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptions, Headers } from '@angular/http';
import { apiUrl } from './data.service';
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'

@Injectable()
export class UsuarioService {

  constructor(private http: Http) { }

  public getUsuariosInativos(): Observable<any> {
    return this.http.get(`${apiUrl}/usuarios?situacao=Inativo`)
        .map(
            (resposta: any) => resposta.json(),
            (erro) => console.log(erro)
        )
  }

  public aprovar(usuario_id): Observable<any> {
    let headers: Headers = new Headers()
    headers.append('Content-Type', 'application/json')

    return this.http.put(
      `${apiUrl}/usuario/${usuario_id}`,
      JSON.stringify({ 'situacao': 'Ativo'}),
      new RequestOptions({ headers: headers})
       )
        .map(
            (resposta: any) => resposta.json(),
            (erro) => console.log(erro)
        )
  }
}
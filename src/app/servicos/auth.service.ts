import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Headers } from '@angular/http'
import { apiUrl } from './data.service';

@Injectable()
export class AuthService {
 
  public access_token: string
  public nome: string
  public tipo: string
  public usuario_id: number
  public mensagem: string

  constructor(private http: Http) { }

  autorizar(f) {
    let credenciais: any = {
      'email': f.value.email,
      'senha': f.value.senha
    }

    let headers: Headers = new Headers()
    headers.append('Content-Type', 'application/json')

    return this.http.post(
      `${apiUrl}/auth`, 
      JSON.stringify(credenciais),
      new RequestOptions({ headers: headers})
      )
      .toPromise()
      .then(
        (resposta) => { 
          this.access_token = resposta.json()['access_token']
          this.nome = resposta.json()['nome']
          this.tipo = resposta.json()['tipo']
          this.usuario_id = resposta.json()['id']
        }
      )


  }

}

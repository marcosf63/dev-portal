import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Headers } from '@angular/http'

import { apiUrl } from './data.service';
import { apiUrl2 } from './data.service';
import { Servico } from '../modelos/servico.model'
import { Usuario } from '../modelos/usuario.model'
import { Plano } from '../modelos/plano.model'
import { ServicoCadastrado } from '../modelos/servico_cadastrado.model'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class CadastroService {
   
  public etapa1PfOuPj: string
  public etapa1Prestatador: Boolean
  public etapa2Plano: Plano
  //public etapa2nr_servico: number = 3
  public etapa3ServicosIncluidos: any[] = []
  public etapa4nome: string
  public etapa4endereco: string
  public etapa4cidade: string
  public etapa4estado: string
  public etapa4cep: string
  public etapa4email: string
  public etapa4senha: string
  public etapa4fixo1: string
  public etapa4fixo2: string
  public etapa4celular1: string
  public etapa4celular2: string
  public etapa4foto: File
  public etapa4deAcordo: boolean


  


  constructor(private http: Http) { 
    
  }

  salvarUsuario() : Promise<any>{
    let usuario = new Usuario(
      this.etapa4nome,
      this.etapa4email,
      this.etapa4senha,
      (this.etapa1Prestatador ? "Prestador" : "Consumidor"),
      this.etapa4endereco,
      this.etapa4cidade,
      this.etapa4cep,
      this.etapa4fixo1,
      this.etapa4fixo2,
      this.etapa4celular1,
      this.etapa4celular2,
      this.etapa4foto,
      "Inativo",
      this.etapa1PfOuPj,
      "",
      ""
    )
     
    let headers: Headers = new Headers()
    let headers2: Headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Content-Type', 'multipart/related')

    return this.http.post(
      `${apiUrl}/usuarios`, 
      JSON.stringify(usuario),
      new RequestOptions({ headers: headers})
      )
      .toPromise()
      .then(
        (resposta: any) => {
          let id = resposta.json().id
          this.http.post(`${apiUrl2}/upload/${id}`, this.etapa4foto, new RequestOptions({ headers: headers2}))
          .toPromise()
          .then(
            reposta => {
              console.log(resposta)
            }
          ).catch(
            erro => {console.log("Cheguei aqui!")}
          )
        }
      )
  }

  // salvarServicos() {
  //   let servicoCadastrado = new ServicoCadastrado()
  // }

}

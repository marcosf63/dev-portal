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
  public etapa2Plano_id: number
  public etapa2Plano_qt_servicos: number
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
  public etapa4foto: string
  public etapa4deAcordo: boolean


  public servico_cadastrado: ServicoCadastrado


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
      "/assets/foto/nr_aleatorio.png",
      "Inativo",
      this.etapa1PfOuPj
    )
     
    let headers: Headers = new Headers()
    
    headers.append('Content-Type', 'application/json')
    //headers.append('Content-Type', 'multipart/related')

    return this.http.post(
      `${apiUrl}/register`, 
      JSON.stringify(usuario),
      new RequestOptions({ headers: headers})
      )
      .toPromise()
      .then(
        (resposta: any) => {
          let usuario_id = resposta.json()['id']// usuario_id
          this.etapa3ServicosIncluidos.forEach(
            (servico) => {
               let s = {
                 'descricao': servico.descricao,
                 'servico_id': servico.servico_id,
                 'usuario_id': usuario_id,
                 'exibir_anuncio': true
               }
               let headers2: Headers = new Headers()
               headers2.append('Content-Type', 'application/json')
               this.http.post(
                `${apiUrl}/servico_cadastrado`,
                JSON.stringify(s),
                new RequestOptions({ headers: headers2})              
               ).toPromise().then(
                 (resposta: any) => console.log(resposta.json())
               )
            }
          )
          let contrato = {
            'plano_id': this.etapa2Plano_id,
            'usuario_id': usuario_id,
            'dia_vencimento': 15
          }
          let headers3: Headers = new Headers()
          headers3.append('Content-Type', 'application/json')
          this.http.post(
            `${apiUrl}/contrato`,
            JSON.stringify(contrato),
            new RequestOptions({ headers: headers3})              
           ).toPromise().then(
             (resposta: any) => console.log(resposta.json())
           )
        }
    
      )
  }

  salvarConsumidor() {
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
      "/assets/foto/nr_aleatorio.png",
      "Ativo",
      this.etapa1PfOuPj
    )

    let headers: Headers = new Headers()
    
    headers.append('Content-Type', 'application/json')

    return this.http.post(
      `${apiUrl}/register`, 
      JSON.stringify(usuario),
      new RequestOptions({ headers: headers})
      ).toPromise().then(
        (resposta: any) => console.log(resposta.json())
      )

  }

}

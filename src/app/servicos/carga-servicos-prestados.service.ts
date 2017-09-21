import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { apiUrl, decricoesServicos } from '../servicos/data.service'
import { ServicoCadastrado } from '../shared/servico_cadastrado.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CargaServicosPrestadosService {
  api_url: string = apiUrl;
  servico_cadastrados: ServicoCadastrado[] = [];
  constructor(private http: Http) {}
  criaServicoCadastrado(): Promise<ServicoCadastrado>{
    var id_servico_cadastrado = 1;
    var i: number;
    for (i = 51; i <= 100; i++) {
      //let id_servico = 1;
      for (let j = 1; j < 4; j++ ) {
         let servico_id = Math.floor(Math.random() * (7 - 1)) + 1;
         let sc = new ServicoCadastrado(
           id_servico_cadastrado,
           decricoesServicos[servico_id],
           `${apiUrl}/servicos/${servico_id}`,
           `${apiUrl}/usuarios/${i}`
         )
         id_servico_cadastrado++;
         this.servico_cadastrados.push(sc);
      }
      
    }

    // primeira iteracao
    // id_servico_cadastrado = 1
    // i = 1, j = 2
    // servico_id = 4

    return this.http.post(`${apiUrl}/servicos_cadastrado/`, this.servico_cadastrados)
      .toPromise()
      .then((resposta: any) => resposta.json() );
  }

}

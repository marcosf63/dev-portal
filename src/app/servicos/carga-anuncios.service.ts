import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { apiUrl } from '../servicos/data.service';
import { Anuncio } from '../shared/anuncio.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CargaAnunciosService {
  anuncios: Anuncio[] = [];

  constructor(private http: Http) { }

  criaAnuncios(): Promise<Anuncio> {
    for(let i = 1; i < 11; i++) {
      let id_servico_cadastrado = Math.floor(Math.random() * (140 - 1)) + 1;
      let a = new Anuncio(
        i,
        "S",
        `${apiUrl}/servicos_cadastrado/${id_servico_cadastrado}`
      );
      this.anuncios.push(a);
    }
     return this.http.post(`${apiUrl}/anuncios`, this.anuncios)
        .toPromise()
        .then(
          (resposta: any) => resposta.json()
        );
  }

}

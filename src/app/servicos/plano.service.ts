import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Plano } from '../modelos/plano.model';
import { apiUrl } from './data.service';

@Injectable()
export class PlanoService {

  constructor(private http: Http) { }
  public getPlanosPorTipo(tipo: string): Promise<Plano[]> {
    return this.http.get(`${apiUrl}/planos?nome_like=${tipo}`)
        .toPromise()
        .then((resposta: any) => resposta.json());
  }
}

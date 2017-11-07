import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ServicoCadastrado } from '../modelos/servico_cadastrado.model';
import { Servico } from '../modelos/servico.model';
import { Usuario } from '../modelos/usuario.model';
import { apiUrl } from '../servicos/data.service'


import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServicoCadastradoService {
   
    public servicos: any[]
   
    constructor(private http: Http) {}

    public getServicosCadastrados(id_servico): Promise<any> {
        return this.http.get(`${apiUrl}/servicos_cadastrados?servico_id=${id_servico}`)
            .toPromise()
            .then(
                (resposta: any) => {
                    this.servicos = resposta.json()['servicos_cadastrados']
                }
            )
    }
}

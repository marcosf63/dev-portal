import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ServicoCadastrado } from '../modelos/servico_cadastrado.model';
import { Servico } from '../modelos/servico.model';
import { Usuario } from '../modelos/usuario.model';
import { apiUrl } from '../servicos/data.service'


import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServicoCadastradoService {
    constructor(private http: Http) {}
    public getServicosCadastrados(id_servico): Promise<ServicoCadastrado[]> {
        return this.http.get(`${apiUrl}/servicos_cadastrado?servico.id=${id_servico}`)
            .toPromise()
            .then((resposta: any) => resposta.json());
    }
}

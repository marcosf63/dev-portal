import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Usuario } from '../shared/usuario.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CargaUsuarioService {
  usuarios : Usuario[] = [];
  constructor(private http: Http) {}

  public criaUsuario(): Promise<Usuario> {
    
    var primeiro_nome = ["Marcos", "Samule", "Julia", "Vinicius", "Maria", "Carlos", "Roberto"];
    var segundo_nome = ["Silva", "Fernandes", "Oliveira", "Barreto", "Mororo", "Santos", "Rocha"];
    for (let i = 1; i < 101; i++) {
      //Math.random() * (max - min) + min;
      let nome = primeiro_nome[Math.floor(Math.random() * (7 - 1)) + 1];
      let sobrenome = segundo_nome[Math.floor(Math.random() * (7 - 1)) + 1];
      let index_foto = Math.floor(Math.random() * (4 - 1)) + 1
      let tipo: string;
      if (i > 50){
        tipo = "Prestador"
      } else {
        tipo = "Consumidor"
      }
      let u = new Usuario(
        i,
        nome  + " " + sobrenome,
        nome  + "." + sobrenome+ "@mail.com",
        "senha",
        tipo,
        "Rua a Casa 13, Centro",
        "Sobral",
        "62.040.750",
        "(88)3677-0000",
        "(88)3677-0000",
        "(88)99999-0000",
        "(88)99999-0000",
        "/assets/foto" + index_foto + ".PNG",
        "Ativo",
        "PF",
        "111.111.111-11",
        "NA"
      )
      console.log(u);
      this.usuarios.push(u);
      
    }
    return this.http.post('http://localhost:3000/usuarios', this.usuarios)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }

}

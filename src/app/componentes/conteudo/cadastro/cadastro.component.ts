import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../modelos/usuario.model'
import { CadastroService } from '../../../servicos/cadastro.service'
import { Plano } from '../../../modelos/plano.model';
import { PlanoService } from '../../../servicos/plano.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [
    CadastroService,
    PlanoService
  ]
})

export class CadastroComponent implements OnInit {
  
  public etapa: number = 1
  public planos: any[]
  

  constructor(private planoService: PlanoService) { }

  ngOnInit() {
    
  }

  getPlano(f){
    console.log(f.value.pf_ou_pj)
    this.planoService.getPlanosPorTipo(f.value.pf_ou_pj)
    .then(
      (resposta: any) => {
        this.planos = resposta['planos']
      }
    )
  }
  
  proxima(){
    this.etapa++
  }

  anterior(){
    this.etapa--
  }

  salvar(f) {
    console.log(f)
  }

}

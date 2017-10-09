import { Component, OnInit } from '@angular/core';
import { Plano } from '../../../modelos/plano.model';
import { PlanoService } from '../../../servicos/plano.service';

@Component({
  selector: 'app-etapa2',
  templateUrl: './etapa2.component.html',
  styleUrls: ['./etapa2.component.css'],
  providers: [ PlanoService ]
})
export class Etapa2Component implements OnInit {

  planos: Plano[] = []

  constructor(
    private planoService: PlanoService
  ) { }

  ngOnInit() {
    this.planoService.getPlanosPorTipo("PF")
      .then(
        (resposta: any) => this.planos = resposta 
      )
  }

}

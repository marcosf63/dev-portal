import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../../../servicos/cadastro.service'

@Component({
  selector: 'app-final-cadastro',
  templateUrl: './final-cadastro.component.html',
  styleUrls: ['./final-cadastro.component.css']
})
export class FinalCadastroComponent implements OnInit {
 
  public in_prestador: Boolean = this.cadastrosService.etapa1Prestatador//indicador se eh prestador para exibir a msg correta no template
   
  constructor(private cadastrosService: CadastroService) { }

  ngOnInit() {
    console.log(this.cadastrosService.etapa1Prestatador)
    console.log(this.in_prestador)
    if (this.cadastrosService.etapa1Prestatador) {
      this.in_prestador = true
    }
  }

}

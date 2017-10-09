import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../../../servicos/cadastro.service'

@Component({
  selector: 'app-etapa4',
  templateUrl: './etapa4.component.html',
  styleUrls: ['./etapa4.component.css'],

})
export class Etapa4Component implements OnInit {

  constructor(private cadastroService: CadastroService) { }

  ngOnInit() {
    console.log(this.cadastroService.etapa1PfOuPj)
  }

}

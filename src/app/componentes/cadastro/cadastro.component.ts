import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  etapaAtual: number = 1
  etapaAnterior: number = 0
  proximaEtapa: number = 2

  constructor() { }

  ngOnInit() {
  }

  proximo() {
    if (this.etapaAtual !== 4) {
      this.etapaAnterior = this.etapaAtual
      this.etapaAtual++

    }
  }

  anterior() {
    if (this.etapaAtual !== 0 ) {
      this.etapaAtual--
      this.etapaAnterior = this.etapaAtual - 1
      
    }
  }

}

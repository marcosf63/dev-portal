import { Component, OnInit } from '@angular/core';
import { BuscaService } from '../../../servicos/busca.service'

@Component({
  selector: 'app-relatorio-busca',
  templateUrl: './relatorio-busca.component.html',
  styleUrls: ['./relatorio-busca.component.css'],
  providers: [BuscaService]
})
export class RelatorioBuscaComponent implements OnInit {

  public buscas: any[] = []

  constructor(
    private buscaService: BuscaService
  ) { }

  ngOnInit() {
    this.buscaService.recuperarBusca().subscribe(
      (resposta) => {
        
        this.buscas = resposta['buscas']
        console.log(this.buscas)
      }
    )
  }

}

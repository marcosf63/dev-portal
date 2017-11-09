import { Component, OnInit } from '@angular/core';
import { ServicoPrestadosService } from '../../../servicos/servicos-prestados.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-consultar-servico',
  templateUrl: './consultar-servico.component.html',
  styleUrls: ['./consultar-servico.component.css'],
  providers: [ServicoPrestadosService]
})
export class ConsultarServicoComponent implements OnInit {

  public servicos_prestados: any[] = []

  constructor(
    private servicosPrestadosService: ServicoPrestadosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let prestador = this.activatedRoute.snapshot.params['id']
    this.servicosPrestadosService.consultarServicos(prestador).subscribe(
      (resposta) => {
        console.log(resposta)
        this.servicos_prestados = resposta['servicos_prestados']
      }
    )

  }

}

import { Component, OnInit } from '@angular/core';
import { ServicoPrestadosService } from '../../../servicos/servicos-prestados.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'

@Component({
  selector: 'app-avaliar-servico',
  templateUrl: './avaliar-servico.component.html',
  styleUrls: ['./avaliar-servico.component.css'],
  providers: [ServicoPrestadosService]
})
export class AvaliarServicoComponent implements OnInit {

  public servicosPrestados: any[] = []

  constructor(
    private servicoPrestadosService: ServicoPrestadosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.servicoPrestadosService.usuario_id = this.activatedRoute.snapshot.params['id']
    this.servicoPrestadosService.getServicosPrestados().subscribe(
      (resposta) => {
        console.log(resposta)
        this.servicosPrestados = resposta['servicos_prestados']
      }
    )

  }

  avaliar(f, id) {
    console.log(f.value.avaliacao, id)
    this.servicoPrestadosService.avaliarServicosPrestados(id, f.value.avaliacao)
      .subscribe(
        (resposta) => {
          console.log(resposta)
          // let tempo = Observable.interval(100,)
          
          // tempo.subscribe(
          //   () => console.log("testes")
          // )
          this.servicoPrestadosService.getServicosPrestados().subscribe(
            (resposta) => {
              console.log(resposta)
              this.servicosPrestados = resposta['servicos_prestados']
            }
          )
        }

      )
  }

}

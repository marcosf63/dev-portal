import { Component, OnInit } from '@angular/core';
import { ServicoCadastradoService } from '../../../servicos/servicos-cadastrados.service'
import { ActivatedRoute } from '@angular/router';
import { ServicoCadastrado } from '../../../modelos/servico_cadastrado.model'
import { ServicoPrestadosService } from '../../../servicos/servicos-prestados.service'
import { AuthService } from '../../../servicos/auth.service'
import { BuscaService } from '../../../servicos/busca.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'

@Component({
  selector: 'app-resultado-pesquisa-pro',
  templateUrl: './resultado-pesquisa-pro.component.html',
  styleUrls: ['./resultado-pesquisa-pro.component.css'],
  providers: [ServicoCadastradoService, ServicoPrestadosService, BuscaService]
})
export class ResultadoPesquisaProComponent implements OnInit {
  
  public usuario_logado: boolean = false
  public servicos: any[] = []
  public busca: string = ""
  public final_contratacao: boolean = false

  constructor( 
    private route: ActivatedRoute,
    private servicosCadastrados: ServicoCadastradoService,
    private authService: AuthService,
    private servicosPrestadosService: ServicoPrestadosService,
    private buscaService: BuscaService
  ) { }

  ngOnInit() {
    let servico = this.route.snapshot.params['id'];
    let data = new Date()
    let busca =  {
      'data': `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`,
      'servico_id': servico
    }
    
    this.buscaService.registraBusca(busca).subscribe(
      (resposta) => console.log("busca salva") 
    )

    this.servicosCadastrados.getServicosCadastrados(servico)
     .then(
       () => { 
          this.servicos = this.servicosCadastrados.servicos
          console.log(this.servicos)
          this.busca = this.servicos[0].servico
        }
     );

     let tempo = Observable.interval(100)

     tempo.subscribe(
       () => this.usuario_logado = (this.authService.access_token? true: false)
     )

  }

  contratar(servico_id) {
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth() + 1
    let ano = data.getFullYear()
    let servico_prestado: any = {
      'data' : `${dia}/${mes}/${ano}`,
      'avaliacao': 0,
      'status': "Em execução",
      'servico_cadastrado_id': servico_id,
      'usuario_id': this.authService.usuario_id
    }

    console.log(servico_prestado)
    this.servicosPrestadosService.registraServicosPrestados(servico_prestado).subscribe(
      resposta => {
        console.log(resposta)
        this.final_contratacao = true
      }
    )

  }

}

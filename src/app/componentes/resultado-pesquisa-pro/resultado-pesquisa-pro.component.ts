import { Component, OnInit } from '@angular/core';
import { ServicoCadastradoService } from '../../servicos/servicos-cadastrados.service'
import { ActivatedRoute } from '@angular/router';
import { ServicoCadastrado } from '../../modelos/servico_cadastrado.model'

@Component({
  selector: 'app-resultado-pesquisa-pro',
  templateUrl: './resultado-pesquisa-pro.component.html',
  styleUrls: ['./resultado-pesquisa-pro.component.css'],
  providers: [ServicoCadastradoService]
})
export class ResultadoPesquisaProComponent implements OnInit {

   servicos: ServicoCadastrado[] = []
   servico_buscado: string = ""

  constructor( 
    private route: ActivatedRoute,
    private servicosCadastrados: ServicoCadastradoService
  ) { }

  ngOnInit() {
    let servico = this.route.snapshot.params['id'];
    this.servicosCadastrados.getServicosCadastrados(servico)
     .then(
       (resposta: any) => {
         this.servicos = resposta;
          this.servico_buscado = resposta[0].servico.nome
        }
     );

  }

}

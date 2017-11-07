import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { CadastroService } from '../../../../servicos/cadastro.service'


@Component({
  selector: 'app-etapa1',
  templateUrl: './etapa1.component.html',
  styleUrls: ['./etapa1.component.css'],
})
export class Etapa1Component implements OnInit {

  constructor(private router: Router, private cadastroService: CadastroService) { }

  ngOnInit() {
    
  }
  etapa2(f) {
    this.cadastroService.etapa1PfOuPj = f.value.pf_ou_pj
    this.cadastroService.etapa1Prestatador = f.value.prestador
    if (!f.value.prestador) {
      this.router.navigateByUrl('/cadastro/etapa4')
    } else {
      this.router.navigateByUrl('/cadastro/etapa2')
    }
    
  }

}

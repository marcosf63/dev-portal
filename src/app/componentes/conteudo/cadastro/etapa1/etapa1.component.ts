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

  @ViewChild('formEtapa1') public formulario: NgForm
  public formularioInvalido: Boolean = false
  public eh_pf_ou_pj: string = "PF"
  public eh_prestador: Boolean

  constructor(private router: Router, private cadastroService: CadastroService) { }

  ngOnInit() {
    this.eh_pf_ou_pj = this.cadastroService.etapa1PfOuPj
    this.formulario.value.prestador = this.cadastroService.etapa1Prestatador
    this.eh_prestador = this.cadastroService.etapa1Prestatador
    
  }
  etapa2() {
    if (this.formulario.valid) {
      
      this.cadastroService.etapa1PfOuPj = this.eh_pf_ou_pj
      this.cadastroService.etapa1Prestatador = (this.formulario.value.prestador === "" || this.formulario.value.prestador === false ? false : true)
      if (this.cadastroService.etapa1Prestatador) {
        this.router.navigateByUrl('/cadastro/etapa2')
      } else {
        this.router.navigateByUrl('/cadastro/etapa4')
      }  

    } else {
       this.formularioInvalido = true
    }
    
  }

}

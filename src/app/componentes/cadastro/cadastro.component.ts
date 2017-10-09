import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelos/usuario.model'
import { CadastroService } from '../../servicos/cadastro.service'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [
    CadastroService
  ]
})

export class CadastroComponent implements OnInit {
  
  constructor() { }

  ngOnInit() { }
}

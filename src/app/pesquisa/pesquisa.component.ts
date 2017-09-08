import { Component, OnInit } from '@angular/core';
import { Categoria } from '../shared/categoria.model';
import { Servico } from '../shared/servico.model'
import { CATEGORIAS } from '../shared/categoria.mock';
import { SERVICOS } from '../shared/servico.mock';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  
  categorias : Categoria[] = CATEGORIAS;
  servicos : Servico[] = SERVICOS;

  constructor() { }

  ngOnInit() {
  }

}

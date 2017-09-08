import { Component, OnInit } from '@angular/core';
import { Categoria } from '../shared/categoria.model';
import { CATEGORIAS } from '../shared/categoria.mock';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {
  
  categorias : Categoria[] = CATEGORIAS;

  constructor() { }

  ngOnInit() {
  }

}

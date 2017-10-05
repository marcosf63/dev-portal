import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nomeApp: String = 'Portal de Serviços de Sobral';
  usuarioLogado: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}

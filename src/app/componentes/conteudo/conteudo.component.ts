import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicos/auth.service'

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}

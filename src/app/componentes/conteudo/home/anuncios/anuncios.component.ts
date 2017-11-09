import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../../../../servicos/anuncio.service';
import { Anuncio } from '../../../../modelos/anuncio.model';
import { AuthService } from '../../../../servicos/auth.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css'],
  providers: [ AnuncioService ]
})
export class AnunciosComponent implements OnInit {

  public anuncios: any[] = []
  public usuario_logado: boolean = false

  constructor(
    private anuncioService: AnuncioService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.anuncioService.getAnuncios()
      .then((resposta) => {

        for (let i = 0; i < 4; i++) {
          this.anuncios.push(resposta['servicos_cadastrados'][i])
        }

        
    
      })
      .catch(( param: any) => {
      });
      
      let tempo = Observable.interval(100)
      
      tempo.subscribe(
          () => this.usuario_logado = (this.authService.access_token? true: false)
      )

     
  }

}

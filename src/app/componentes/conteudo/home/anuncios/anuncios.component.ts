import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../../../../servicos/anuncio.service';
import { Anuncio } from '../../../../modelos/anuncio.model';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css'],
  providers: [ AnuncioService ]
})
export class AnunciosComponent implements OnInit {

  public anuncios: any[] = []

  constructor(private anuncioService: AnuncioService) { }

  ngOnInit() {
    this.anuncioService.getAnuncios()
      .then((resposta) => {

        for (let i = 0; i < 4; i++) {
          this.anuncios.push(resposta['servicos_cadastrados'][i])
        }
    
      })
      .catch(( param: any) => {
      });
  }

}

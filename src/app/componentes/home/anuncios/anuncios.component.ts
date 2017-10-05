import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../../../servicos/anuncio.service';
import { Anuncio } from '../../../modelos/anuncio.model';

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css'],
  providers: [ AnuncioService ]
})
export class AnunciosComponent implements OnInit {

  public anuncios: Anuncio[];

  constructor(private anuncioService: AnuncioService) { }

  ngOnInit() {
    this.anuncioService.getAnuncios()
      .then((anuncios: Anuncio[]) => {
          this.anuncios = anuncios;
      })
      .catch(( param: any) => {
      });
  }

}

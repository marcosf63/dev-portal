import { Component, OnInit } from '@angular/core';
import { CargaCategoriaService } from './servicos/cargaCategoria.service';
import { CargaServicoService } from './servicos/cargaServico.service';
import { CargaUsuarioService } from './servicos/carga-usuario.service';
import { CargaServicosPrestadosService } from './servicos/carga-servicos-prestados.service';
import { CargaAnunciosService} from './servicos/carga-anuncios.service';
import { Categoria } from './shared/categoria.model';
import { Servico } from './shared/servico.model';
import { Usuario } from './shared/usuario.model';
import { Anuncio } from './shared/anuncio.model';
import { ServicoCadastrado } from './shared/servico_cadastrado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ 
      CargaCategoriaService, 
      CargaServicoService, 
      CargaUsuarioService, 
      CargaServicosPrestadosService, 
      CargaAnunciosService
    ]
})
export class AppComponent {
  title = 'Portal de Servicos de Sobral';
  categoria: Categoria;
  servico: Servico;
  usuario: Usuario;
  servicoCasdratrado: ServicoCadastrado;
  carga = "nanuncios";
  constructor(
    private cargaCategoriaService: CargaCategoriaService,
    private cargaServicoService: CargaServicoService,
    private cargaUsuarioService: CargaUsuarioService,
    private cargaServicosCadastrados: CargaServicosPrestadosService,
    private cargaAnunciosService :CargaAnunciosService
  ) { }

  ngOnInit() {
      if (this.carga === "categoria") {
        this.cargaCategoriaService.criaCetegoria()
        .then((categoria: Categoria) => {
            this.categoria = categoria;
            console.log(categoria);
        })
        .catch(( param: any) => {
            console.log(param);
        });
      }
      if (this.carga === "servico") {
        this.cargaServicoService.criaServico()
        .then((servico: Servico) => {
            this.servico = servico;
            console.log(servico);
        })
        .catch(( param: any) => {
            console.log(param);
        });
      }
      if (this.carga === "usuario") {
        this.cargaUsuarioService.criaUsuario()
        .then((usuario: Usuario) => {
            this.usuario = usuario;
            console.log(usuario);
        })
        .catch(( param: any) => {
            console.log(param);
        });
      }
      if (this.carga === "servicos_cadastrados") {
        this.cargaServicosCadastrados.criaServicoCadastrado()
        .then((servicoCasdratrado: ServicoCadastrado) => {
            this.servicoCasdratrado = servicoCasdratrado;
            console.log(servicoCasdratrado);
        })
        .catch(( param: any) => {
            console.log(param); 
        });
      }
      if (this.carga === "anuncios") {
        this.cargaAnunciosService.criaAnuncios()
        .then(( anuncio: Anuncio ) => {
            console.log(anuncio);
        })
        .catch(( param: any) => {
            console.log(param); 
        });
      }
  }
}

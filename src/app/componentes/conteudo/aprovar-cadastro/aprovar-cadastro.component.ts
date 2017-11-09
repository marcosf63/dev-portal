import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../servicos/usuarios.service'

@Component({
  selector: 'app-aprovar-cadastro',
  templateUrl: './aprovar-cadastro.component.html',
  styleUrls: ['./aprovar-cadastro.component.css'],
  providers: [UsuarioService]
})
export class AprovarCadastroComponent implements OnInit {
 
  public existe_usuarios_a_aprovar: boolean = false
  public usuarios: any[] = []
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usuarioService.getUsuariosInativos().subscribe(
      (resposta) => {
        

        if (resposta['usuarios'].length != 0) {
          this.existe_usuarios_a_aprovar = true
        }
        this.usuarios = resposta['usuarios']
        console.log(this.usuarios)
      }
    )
    
  }

  ativar(usuario_id) {
     this.usuarioService.aprovar(usuario_id).subscribe(
       (resposta) => {
          console.log(resposta)
          this.usuarioService.getUsuariosInativos().subscribe(
            (resposta) => {
              
      
              if (resposta['usuarios'].length != 0) {
                this.existe_usuarios_a_aprovar = true
              } else {
                this.existe_usuarios_a_aprovar = false
              }
              this.usuarios = resposta['usuarios']
              console.log(this.usuarios)
            }
          )

       }
       
     )

     

  }

}

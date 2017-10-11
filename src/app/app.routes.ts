import { Routes } from '@angular/router';

import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { HomeComponent } from './componentes/home/home.component';
import { ResultadoPesquisaProComponent} from './componentes/resultado-pesquisa-pro/resultado-pesquisa-pro.component'
import { Etapa1Component } from './componentes/cadastro/etapa1/etapa1.component'
import { Etapa2Component } from './componentes/cadastro/etapa2/etapa2.component'
import { Etapa3Component } from './componentes/cadastro/etapa3/etapa3.component'
import { Etapa4Component } from './componentes/cadastro/etapa4/etapa4.component'
import { FinalCadastroComponent } from './componentes/cadastro/final-cadastro/final-cadastro.component'


export const ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'resultadoPesquisaPro/:id', component: ResultadoPesquisaProComponent},
    { 
      path: 'cadastro', 
      component: CadastroComponent,
      children: [
        {
            path: '',
            component: Etapa1Component
        },
          {
              path: 'etapa1',
              component: Etapa1Component
          },
          {
            path: 'etapa2',
            component: Etapa2Component
          },
          {
            path: 'etapa3',
            component: Etapa3Component
          },
          {
            path: 'etapa4',
            component: Etapa4Component
          },
          {
            path: 'final-cadastro',
            component: FinalCadastroComponent
          }

      ]
    }
]
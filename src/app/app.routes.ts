import { Routes } from '@angular/router';

import { CadastroComponent } from './componentes/conteudo/cadastro/cadastro.component';
import { HomeComponent } from './componentes/conteudo/home/home.component';
import { ResultadoPesquisaProComponent} from './componentes/conteudo/resultado-pesquisa-pro/resultado-pesquisa-pro.component'
import { Etapa1Component } from './componentes/conteudo/cadastro/etapa1/etapa1.component'
import { Etapa2Component } from './componentes/conteudo/cadastro/etapa2/etapa2.component'
import { Etapa3Component } from './componentes/conteudo/cadastro/etapa3/etapa3.component'
import { Etapa4Component } from './componentes/conteudo/cadastro/etapa4/etapa4.component'
import { FinalCadastroComponent } from './componentes/conteudo/cadastro/final-cadastro/final-cadastro.component'
import { FinalConsumidorComponent } from './componentes/conteudo/cadastro/final-consumidor/final-consumidor.component'
import { AprovarCadastroComponent } from './componentes/conteudo/aprovar-cadastro/aprovar-cadastro.component'
import { RelatorioBuscaComponent } from './componentes/conteudo/relatorio-busca/relatorio-busca.component'
import { AvaliarServicoComponent } from './componentes/conteudo/avaliar-servico/avaliar-servico.component'
import { ConsultarServicoComponent } from './componentes/conteudo/consultar-servico/consultar-servico.component'


export const ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { 
      path: 'resultadoPesquisaPro/:id', 
      component: ResultadoPesquisaProComponent
    },
    { 
      path: 'aprovar-cadastro', 
      component: AprovarCadastroComponent
    },
    { 
      path: 'relatorio-busca', 
      component: RelatorioBuscaComponent
    },
    { 
      path: 'avaliar-servico/:id', 
      component: AvaliarServicoComponent
    },
    { 
      path: 'consultar-servico/:id', 
      component: ConsultarServicoComponent
    },
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
          },
          {
            path: 'final-consumidor',
            component: FinalConsumidorComponent
          }

      ]
    }
]
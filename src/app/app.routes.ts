import { Routes } from '@angular/router';

import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { HomeComponent } from './componentes/home/home.component';
import { ResultadoPesquisaProComponent} from './componentes/resultado-pesquisa-pro/resultado-pesquisa-pro.component'

export const ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'resultadoPesquisaPro/:id', component: ResultadoPesquisaProComponent}
]
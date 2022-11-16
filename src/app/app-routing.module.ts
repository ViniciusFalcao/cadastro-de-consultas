import { RemarcarComponent } from './components/remarcar/remarcar.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{path:'url',component:'nome do component'}
  {path:'',component:ConsultasComponent},
  {path:'cadastrar',component:CadastrarComponent},
  {path:'remarcar/:id',component:RemarcarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

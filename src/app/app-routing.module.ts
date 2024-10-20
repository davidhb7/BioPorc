import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './components/informacion/informacion.component';
import { ProblemaComponent } from './components/problema/problema.component';
import { CierreComponent } from './components/cierre/cierre.component';
import { SolucionComponent } from './components/solucion/solucion.component';

const routes: Routes = [
  {
    path:'problema',
    component: ProblemaComponent
  },
  {
    path:'solucion',
    component: SolucionComponent
  },
  {
    path:'informacion',
    component: InformacionComponent
  },
  {
    path:'cierre',
    component: CierreComponent
  },
  {
    path:'',
    redirectTo:'problema',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { GraficosComponent } from './components/graficos/graficos.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { GraficoBarrasComponent } from './components/graficos/grafico-barras/grafico-barras.component';
import { ProblemaComponent } from './components/problema/problema.component';
import { CierreComponent } from './components/cierre/cierre.component';
import { SolucionComponent } from './components/solucion/solucion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GraficosComponent,
    InformacionComponent,
    GraficoBarrasComponent,
    ProblemaComponent,
    CierreComponent,
    SolucionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

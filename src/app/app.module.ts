import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExpLabralComponent } from './components/exp-labral/exp-labral.component';
import { ExpAcademicaComponent } from './components/exp-academica/exp-academica.component';
import { ExpItemComponent } from './components/exp-item/exp-item.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AcercaDeComponent,
    ExpLabralComponent,
    ExpAcademicaComponent,
    ExpItemComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      titleColor: "#d9d2d2",
      titleFontSize:"2.5rem",
      showImage: true,
      imageHeight:70,
      imageWidth:70,
      showSubtitle: false,
      showUnits: false,
      outerStrokeWidth: 10,
      innerStrokeWidth: 1,
      outerStrokeColor: "#0d6efd",
      innerStrokeColor: "#afc8fe",
      animation:true,
      animationDuration: 700})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

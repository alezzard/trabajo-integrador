import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExpLabralComponent } from './components/exp-labral/exp-labral.component';
import { ExpAcademicaComponent } from './components/exp-academica/exp-academica.component';
import { ExpItemComponent } from './components/exp-item/exp-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AcercaDeComponent,
    ExpLabralComponent,
    ExpAcademicaComponent,
    ExpItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

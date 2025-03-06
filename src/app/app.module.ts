import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { AjouterRobotComponent } from './ajouter-robot/ajouter-robot.component';
import { HeaderComponent } from './header/header.component';
import { AjouterRobotService } from './ajouter-robot/ajouter-robot.services';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    AjouterRobotComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

    HttpClientModule, // Configuration du routage
  ],
  providers: [],
  bootstrap: [AppComponent] // Point d'entrée de l'application

})

export class AppModule { }

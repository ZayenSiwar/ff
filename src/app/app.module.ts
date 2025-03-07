import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // Assurez-vous que c'est un composant autonome
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AjouterRobotComponent } from './ajouter-robot/ajouter-robot.component'; // Assurez-vous que c'est un composant autonome

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,

    // Ne pas déclarer DashboardComponent et AjouterRobotComponent s'ils sont autonomes
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FooterComponent,
    HeaderComponent,
    // Importer les composants autonomes ici, si nécessaire
    DashboardComponent, // Si autonome, sinon supprimez-le de cette liste
    AjouterRobotComponent // Si autonome, sinon supprimez-le de cette liste
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

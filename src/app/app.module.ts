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
import { VisualiserRobotComponent } from './visualiser-robot/visualiser-robot.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { MoodifierAdminComponent } from './moodifier-admin/moodifier-admin.component';
import { SupprimerAdminComponent } from './supprimer-admin/supprimer-admin.component';
import { VisualiserAdminComponent } from './visualiser-admin/visualiser-admin.component';
import { MachineComponent } from './machine/machine.component';
import { AjouterMachineComponent } from './ajouter-machine/ajouter-machine.component';
import { ModifierMachineComponent } from './modifier-machine/modifier-machine.component';
import { SupprimerMachineComponent } from './supprimer-machine/supprimer-machine.component';
import { VisualiserMachineComponent } from './visualiser-machine/visualiser-machine.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FooterComponent,
    HeaderComponent,
VisualiserRobotComponent,
    DashboardComponent,
    AjouterRobotComponent,
    AjouterAdminComponent,
    MoodifierAdminComponent,
    SupprimerAdminComponent,
    VisualiserAdminComponent,
    MachineComponent,
    AjouterMachineComponent,
    ModifierMachineComponent,
    SupprimerMachineComponent,
    VisualiserMachineComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

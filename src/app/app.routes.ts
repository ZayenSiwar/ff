
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { RobotComponent } from './robot/robot.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { AjouterRobotComponent } from './ajouter-robot/ajouter-robot.component';
import { Routes } from '@angular/router';
import { ModifierRobotComponent } from './modifier-robot/modifier-robot.component';
import { SupprimerRobotComponent } from './supprimer-robot/supprimer-robot.component';
import { VisualiserRobotComponent } from './visualiser-robot/visualiser-robot.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { MoodifierAdminComponent } from './moodifier-admin/moodifier-admin.component';
import { SupprimerAdminComponent } from './supprimer-admin/supprimer-admin.component';
import { VisualiserAdminComponent } from './visualiser-admin/visualiser-admin.component';
import { AdminComponent } from './admin/admin.component';
import { AjouterMachineComponent } from './ajouter-machine/ajouter-machine.component';
import { ModifierMachineComponent } from './modifier-machine/modifier-machine.component';
import { SupprimerMachineComponent } from './supprimer-machine/supprimer-machine.component';
import { MachineComponent } from './machine/machine.component';
import { VisualiserMachineComponent } from './visualiser-machine/visualiser-machine.component';


export const routes: Routes = [
  {
    path: '',
    title: 'Dashboard Page',
    component: DashboardComponent,

  },
  { path: 'dashboard',  title: 'header Page',   component: DashboardComponent  },

  {
    path: '',  title: 'Footer Page',   component: FooterComponent  },
   { path: '',  title: 'header Page',   component: HeaderComponent  },

   { path: '',  title: 'sidebarPage',   component: SidebarComponent  },

   { path: 'ajouter-robot',  component:   AjouterRobotComponent  },
   { path: 'robot',   component: RobotComponent  },
   { path: 'modifier-robot',     component: ModifierRobotComponent  },
   { path: 'supprimer-robot',     component: SupprimerRobotComponent  },
   { path: 'visualiser-robot',     component: VisualiserRobotComponent  },
   { path: 'ajouter-admin',   component: AjouterAdminComponent  },
   { path: 'modifier-admin',     component: MoodifierAdminComponent  },
   { path: 'visualiser-admin',     component: VisualiserAdminComponent  },
   { path: 'supprimer-admin',     component: SupprimerAdminComponent  },
   { path: 'visualiser-admin',     component: VisualiserAdminComponent  },
   { path: 'ajouter-machine', component: AjouterMachineComponent },
   { path: 'modifier-machine', component: ModifierMachineComponent },
   { path: 'supprimer-machine', component: SupprimerMachineComponent },
   { path: 'visualiser-machine', component:   VisualiserMachineComponent },

   { path: 'machine', component: MachineComponent },

];

export class AppRoutingModule {}

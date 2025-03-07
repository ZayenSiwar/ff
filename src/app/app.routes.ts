
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


export const routes: Routes = [
  {
    path: 'dashboard',
    title: 'Dashboard Page',
    component: DashboardComponent,

  },
  {
    path: '',  title: 'Footer Page',   component: FooterComponent  },
   { path: '',  title: 'header Page',   component: HeaderComponent  },

   { path: '',  title: 'sidebarPage',   component: SidebarComponent  },

   { path: 'ajouter-robot',  title: 'ajouter-robot',   component:   AjouterRobotComponent  },
   { path: 'robot',  title: 'robot',   component: RobotComponent  },
   { path: 'modifier-robot',     component: ModifierRobotComponent  },
   { path: 'supprimer-robot',     component: SupprimerRobotComponent  },
   { path: 'visualiser-robot',     component: VisualiserRobotComponent  },

];

export class AppRoutingModule {}

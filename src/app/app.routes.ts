import { Routes } from '@angular/router';
import { AjouterRobotComponent } from './ajouter-robot/ajouter-robot.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ModifierRobotComponent } from './modifier-robot/modifier-robot.component';
import { RobotComponent } from './robot/robot.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SupprimerRobotComponent } from './supprimer-robot/supprimer-robot.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Dashboard Page',
    component: DashboardComponent,

  },
  {
    path: '',  title: 'Footer Page',   component: FooterComponent  },
   { path: '',  title: 'header Page',   component: HeaderComponent  },
   {path: 'ajouter-robot',  title: 'robot',   component: AjouterRobotComponent  },
   { path: '',  title: 'sidebarPage',   component: SidebarComponent  },
   { path: 'supprimer-robot',  title: 'robot',   component: SupprimerRobotComponent  },
   { path: 'modifier-robot',  title: 'robot',   component: ModifierRobotComponent  },
   { path: 'robots',  title: 'robot',   component: RobotComponent  },
];
export class AppRoutingModule {}

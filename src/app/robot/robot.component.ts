import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-robot',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.css'] // Corrigé 'styleUrl' en 'styleUrls'
})
export class RobotComponent {

  robots: any[] = [];
  errorMessage: string = '';

  showRobotIds() {
    console.log(this.robots.map(robot => robot.id));
  }

  modifierRobot(robotId: number) {

    this.router.navigate(['/modifier-robot', robotId]);

  }

  constructor(private router: Router) {}
}


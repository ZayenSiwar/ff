import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-robot',
  standalone: true,
  imports: [],
  templateUrl: './robot.component.html',
  styleUrl: './robot.component.css'
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


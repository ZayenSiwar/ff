import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Robot, RobotService } from '../robot/robot.service';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-ajouter-robot',
  standalone: true,
  imports: [FormsModule,HttpClientModule,HeaderComponent, SidebarComponent],
  templateUrl: './ajouter-robot.component.html',
  styleUrls: ['./ajouter-robot.component.css'],
})
export class AjouterRobotComponent {
  robot: Robot = {
    id: 0,
    name: '',
    status: ''
  };

  constructor(private robotService: RobotService, private router: Router) {}

  onSubmit(): void {
    this.robotService.addRobot(this.robot).subscribe({
      next: (response: Robot) => {
        console.log('Robot ajouté avec succès :', response);
        this.router.navigate(['/robot']);
      },
      error: (error: any) => {
        console.error('Erreur lors de l\'ajout du robot :', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/robot']);
  }
}

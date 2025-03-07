import { HttpClient } from '@angular/common/http'; // Optional, remove if not used directly
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RobotService } from '../robot/robot.service';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

export interface Robot {
  id: number;
  name: string;
  status: string;
}
@Component({
  selector: 'app-supprimer-robot',
  standalone: true,
  imports: [FormsModule, HeaderComponent,SidebarComponent],
  templateUrl: './supprimer-robot.component.html',
  styleUrl: './supprimer-robot.component.css'
})
export class SupprimerRobotComponent  implements OnInit {
  robotToDelete: Robot | null = null;

  constructor(
    private route: ActivatedRoute,
    private robotService: RobotService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const robotId = Number(this.route.snapshot.paramMap.get('id'));

    if (robotId) {
      this.robotService.getRobotById(robotId).subscribe({
        next: (robot: Robot | null) => {
          console.log('Détails du robot récupérés :', robot);
          this.robotToDelete = robot;
        },
        error: (error: any) => {
          console.error('Erreur lors de la récupération du robot', error);
          this.robotToDelete = null;
        }
      });
    } else {
      console.error('ID du robot non valide');
    }
  }

  confirmDelete(): void {
    if (this.robotToDelete) {
      console.log('Tentative de suppression du robot avec ID :', this.robotToDelete.id);
      this.robotService.deleteRobot(this.robotToDelete.id).subscribe({
        next: () => {
          console.log('Robot supprimé avec succès');
          this.router.navigate(['/robots']); // Redirection vers la liste des robots après suppression
        },
        error: (err: any) => {
          console.error('Erreur lors de la suppression du robot', err);
        }
      });
    } else {
      console.error('Aucun robot à supprimer');
    }
  }

  cancel(): void {
    console.log('Suppression annulée');
    this.router.navigate(['/dashboard']);
  }
}

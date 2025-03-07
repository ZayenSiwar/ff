import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-visualiser-robot',
  standalone: true,
  imports: [FormsModule, HeaderComponent,SidebarComponent],
  templateUrl: './visualiser-robot.component.html',
  styleUrls: ['./visualiser-robot.component.css']
})
export class VisualiserRobotComponent  implements OnInit {
    robots: any[] = [];
    errorMessage: string | null = null;
    constructor(private http: HttpClient, private router: Router) {}

    ngOnInit(): void {
      this.loadRobots();
    }

    loadRobots(): void {
      this.getRobots().subscribe(
        (data: any[]) => {
          this.robots = data;
        },
        (error) => {
          console.error('Erreur lors du chargement des robots', error);
          this.errorMessage = 'Erreur lors du chargement des robots. Veuillez réessayer.';
        }
      );
    }

    getRobotIds(): string {
      return this.robots.map(robot => robot.id).join(', ');
    }

    private getRobots(): Observable<any[]> {
      const apiUrl = 'http://localhost:8080/api/robots';
      return this.http.get<any[]>(apiUrl);
    }

    showRobotIds(): void {
      alert('IDs des Robots : ' + this.getRobotIds());
    }


    modifierRobot(id: number): void {
      this.router.navigate(['/modifier-robot', id]);
    }

  }

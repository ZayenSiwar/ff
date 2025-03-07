
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-modifier-robot',
  standalone: true,
imports :[FormsModule, HeaderComponent,SidebarComponent],

  templateUrl: './modifier-robot.component.html',
  styleUrl: './modifier-robot.component.css'
})
export class ModifierRobotComponent implements OnInit{

  robotToEdit: any = {
    id: null,
    name: '',
    status: 'deconnecté'
  };

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const robotId = this.route.snapshot.paramMap.get('id');
    if (robotId) {
      this.getRobotById(robotId).subscribe(robot => {
        this.robotToEdit = robot;
      });
    }
  }

  updateRobot(): void {
    console.log('Formulaire soumis:', this.robotToEdit);
    if (this.isFormValid()) {
      this.sendRobotToBackend(this.robotToEdit).subscribe({
        next: (response: any) => {
          console.log('Réponse du serveur:', response);
          alert('Robot modifié avec succès!');
          this.router.navigate(['/robots']);
        },
        error: (error: any) => {
          console.error('Erreur lors de la modification du robot:', error);
          alert('Erreur lors de la modification du robot. Veuillez réessayer.');
        }
      });
    }
  }


  cancel(): void {
    // Redirection vers la liste des robots ou une autre page
    this.router.navigate(['/dashboard']);
  }
  isFormValid(): boolean {
    return this.robotToEdit.id && this.robotToEdit.name && this.robotToEdit.status;
  }

  private getRobotById(id: string): Observable<any> {
    const apiUrl = `http://localhost:8080/api/robots/${id}`;
    return this.http.get<any>(apiUrl);
  }

  private sendRobotToBackend(robot: any): Observable<any> {
    const apiUrl = `http://localhost:8080/api/robots/${robot.id}`;
    return this.http.put<any>(apiUrl, robot);
  }
}

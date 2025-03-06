import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-ajouter-robot',
    templateUrl: './ajouter-robot.component.html',
})
export class AjouterRobotComponent {
    robotId: string = '';
    robotName: string = '';
    robotStatus: string = 'connecté'; // Valeur par défaut

    constructor(private http: HttpClient) {}

    onSubmit() {
        const robotData = {
            id: this.robotId,
            name: this.robotName,
            status: this.robotStatus
        };

        this.http.post('/api/robots', robotData).subscribe(
            (response: any) => {
                console.log('Robot ajouté:', response);
                this.resetForm(); // Réinitialiser le formulaire
                // Vous pouvez ajouter une fonction pour mettre à jour la liste des robots ici
            },
            (error) => {
                console.error('Erreur lors de l\'ajout du robot:', error);
            }
        );
    }

    resetForm() {
        this.robotId = '';
        this.robotName = '';
        this.robotStatus = 'connecté'; // Réinitialiser à la valeur par défaut
    }
}

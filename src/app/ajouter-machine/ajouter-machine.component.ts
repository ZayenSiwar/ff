import { Component } from '@angular/core';
import { Machine, MachineService } from '../machine.service';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Nécessaire pour [(ngModel)]

@Component({
  selector: 'app-ajouter-machine',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, RouterModule, FormsModule],
  templateUrl: './ajouter-machine.component.html',
  styleUrls: ['./ajouter-machine.component.css']
})
export class AjouterMachineComponent {
  newMachine: Machine = { name: '', frequency: '' }; // Mise à jour ici
  message: string | null = null;

  constructor(private machineService: MachineService, private router: Router) {}

  onSubmit() {
    if (this.newMachine.name && this.newMachine.frequency) { // Vérification des champs mis à jour
      this.machineService.ajouterMachine(this.newMachine).subscribe({
        next: () => {
          this.message = 'Machine ajoutée avec succès !';
          setTimeout(() => this.router.navigate(['/visualiser-machine']), 1000); // Redirige vers une page de visualisation (à créer)
        },
        error: (error: any) => {
          console.error('Erreur lors de l\'ajout de la machine :', error);
          this.message = 'Erreur lors de l\'ajout de la machine.';
        }
      });
    } else {
      this.message = 'Veuillez remplir tous les champs.';
    }
  }
}

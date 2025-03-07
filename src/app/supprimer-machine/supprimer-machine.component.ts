import { Component, OnInit } from '@angular/core';
import { MachineService, Machine } from '../machine.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supprimer-machine',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent], // Pas besoin de FormsModule ici
  templateUrl: './supprimer-machine.component.html',
  styleUrls: ['./supprimer-machine.component.css']
})
export class SupprimerMachineComponent implements OnInit {
  machineToDelete: Machine | null = null; // Machine à supprimer
  message: string | null = null;
  index: number | null = null;

  constructor(
    private machineService: MachineService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const indexParam = this.route.snapshot.paramMap.get('index');
    if (indexParam !== null) {
      this.index = Number(indexParam);
      this.loadMachine(this.index);
    } else {
      this.message = 'Aucun index de machine fourni. Veuillez spécifier un index (ex. /supprimer-machine/0).';
    }
  }

  loadMachine(index: number) {
    this.machineService.getMachine(index).subscribe({
      next: (machine) => {
        this.machineToDelete = machine;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération de la machine:', error);
        this.message = 'Machine non trouvée ou index invalide.';
      }
    });
  }

  onDelete() {
    if (this.index !== null) {
      this.machineService.supprimerMachine(this.index).subscribe({
        next: () => {
          this.message = 'Machine supprimée avec succès !';
          setTimeout(() => this.router.navigate(['/visualiser-machine']), 1000);
        },
        error: (error) => {
          console.error('Erreur lors de la suppression de la machine :', error);
          this.message = 'Erreur lors de la suppression de la machine.';
        }
      });
    }
  }

  cancel() {
    this.router.navigate(['/dashboard']);
  }
}

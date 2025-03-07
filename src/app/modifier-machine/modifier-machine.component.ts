import { Component, OnInit } from '@angular/core';
import { Machine, MachineService } from '../machine.service';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifier-machine',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, RouterModule, FormsModule],
  templateUrl: './modifier-machine.component.html',
  styleUrls: ['./modifier-machine.component.css']
})
export class ModifierMachineComponent implements OnInit {
  machine: Machine = { name: '', frequency: 'FM' };
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
      const index = parseInt(indexParam, 10);
      this.index = index;
      this.loadMachine(index);
    } else {
      this.message = 'Aucun index de machine fourni.';
    }
  }

  loadMachine(index: number) {
    this.machineService.getMachine(index).subscribe({
      next: (machine: Machine) => {
        this.machine = { ...machine };
      },
      error: (error: any) => {
        console.error('Erreur lors du chargement de la machine :', error);
        this.message = 'Machine non trouvée.';
      }
    });
  }

  onSubmit() {
    if (this.index !== null && this.machine.name && this.machine.frequency) {
      this.machineService.updateMachine(this.index, this.machine).subscribe({
        next: (updatedMachine: Machine) => {
          this.message = 'Machine modifiée avec succès !';
          setTimeout(() => this.router.navigate(['/visualiser-machine']), 1000);
        },
        error: (error: any) => {
          console.error('Erreur lors de la modification de la machine :', error);
          this.message = 'Erreur lors de la modification de la machine.';
        }
      });
    } else {
      this.message = 'Veuillez remplir tous les champs.';
    }
  }
}

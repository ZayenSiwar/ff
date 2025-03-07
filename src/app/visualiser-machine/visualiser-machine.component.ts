import { Component, OnInit } from '@angular/core';
import { MachineService, Machine } from '../machine.service';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common'; // Pour *ngIf et *ngFor
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-visualiser-machine',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, RouterModule],
  templateUrl: './visualiser-machine.component.html',
  styleUrls: ['./visualiser-machine.component.css']
})
export class VisualiserMachineComponent implements OnInit {
  machines: Machine[] = [];
  message: string | null = null;

  constructor(private machineService: MachineService) {}

  ngOnInit() {
    this.loadMachines();
  }

  loadMachines() {
    this.machineService.getAllMachines().subscribe({
      next: (machines: Machine[]) => {
        this.machines = machines;
        if (this.machines.length === 0) {
          this.message = 'Aucune machine trouvée.';
        }
      },
      error: (error: any) => {
        console.error('Erreur lors du chargement des machines:', error);
        this.message = 'Erreur lors du chargement des machines.';
      }
    });
  }
}

import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private machines: Machine[] = []; // Liste vide par défaut

  constructor() {}

  // Ajouter une machine
  ajouterMachine(machine: Machine): Observable<Machine> {
    this.machines.push(machine);
    return of(machine);
  }

  // Récupérer une machine par index
  getMachine(index: number): Observable<Machine> {
    if (index >= 0 && index < this.machines.length) {
      return of(this.machines[index]);
    }
    return throwError(() => new Error('Machine non trouvée'));
  }

  // Mettre à jour une machine par index
  updateMachine(index: number, machine: Machine): Observable<Machine> {
    if (index >= 0 && index < this.machines.length) {
      this.machines[index] = machine;
      return of(machine);
    }
    return throwError(() => new Error('Machine non trouvée'));
  }

  supprimerMachine(index: number): Observable<void> {
    if (index >= 0 && index < this.machines.length) {
      this.machines.splice(index, 1);
      return of(undefined);
    }
    return throwError(() => new Error('Machine non trouvée'));
  }
  // Récupérer toutes les machines
  getAllMachines(): Observable<Machine[]> {
    return of(this.machines);
  }
}

export interface Machine {
  name: string; // Nom de la machine
  frequency: string; // Fréquence radio (ex. "FM", "AM", "Other")
}

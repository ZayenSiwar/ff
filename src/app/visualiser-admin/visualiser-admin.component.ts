import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Admin, AdminService } from '../admin.service';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-visualiser-admin',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, RouterModule],
  templateUrl: './visualiser-admin.component.html',
  styleUrl: './visualiser-admin.component.css'
})
export class VisualiserAdminComponent implements OnInit {
  admins: Admin[] = [];
  message: string | null = null;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.loadAdmins();
  }

  loadAdmins() {
    this.adminService.getAllAdmins().subscribe({
      next: (admins: Admin[]) => {
        this.admins = admins;
        console.log('Admins chargés :', this.admins);
        if (this.admins.length === 0) {
          this.message = 'Aucun admin trouvé.';
        }
      },
      error: (error: any) => {
        console.error('Erreur lors du chargement des admins :', error);
        this.message = 'Erreur lors du chargement des admins.';
      }
    });
  }
}

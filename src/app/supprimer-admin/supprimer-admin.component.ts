import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Admin, AdminService } from '../admin.service';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-supprimer-admin',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, HttpClientModule, RouterModule],
  templateUrl: './supprimer-admin.component.html',
  styleUrl: './supprimer-admin.component.css'
})
export class SupprimerAdminComponent implements OnInit {
  admin: Admin | null = null;
  adminId: string | null = null;
  message: string | null = null;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.adminId = this.route.snapshot.paramMap.get('id');
    console.log('Admin ID from route:', this.adminId);
    if (this.adminId) {
      this.loadAdmin(this.adminId);
    } else {
      this.message = 'Aucun ID d\'admin fourni.';
    }
  }

  loadAdmin(id: string) {
    this.adminService.getAdmin(id).subscribe({
      next: (admin: Admin) => {
        console.log('Admin chargé :', admin);
        this.admin = admin;
      },
      error: (error: any) => {
        console.error('Erreur lors du chargement de l\'admin :', error);
        this.message = 'Erreur lors du chargement de l\'admin.';
      }
    });
  }

  confirmDelete() {
    if (this.adminId) {
      this.adminService.deleteAdmin(this.adminId).subscribe({
        next: () => {
          console.log('Admin supprimé avec succès');
          this.message = 'Admin supprimé avec succès !';
          setTimeout(() => this.router.navigate(['/admins']), 1000);
        },
        error: (error: any) => {
          console.error('Erreur lors de la suppression de l\'admin :', error);
          this.message = 'Erreur lors de la suppression de l\'admin.';
        }
      });
    }
  }

  cancel() {
    this.router.navigate(['/admins']);
  }
}

import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Admin, AdminService } from '../admin.service';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-moodifier-admin',
  standalone: true,
  imports: [FormsModule, HeaderComponent, SidebarComponent, HttpClientModule, RouterModule],
  templateUrl: './moodifier-admin.component.html',
  styleUrl: './moodifier-admin.component.css'
})
export class MoodifierAdminComponent implements OnInit {
  admin: Admin = {
    name: '',
    email: '',
    password: ''
  };
  message: string | null = null;
  adminId: string | null = null; // Pour stocker l'ID de l'admin à modifier

  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Récupérer l'ID depuis les paramètres de la route
    this.adminId = this.route.snapshot.paramMap.get('id');
    if (this.adminId) {
      this.loadAdmin(this.adminId);
    } else {
      this.message = 'Aucun ID d\'admin fourni.';
    }
  }

  loadAdmin(id: string) {
    this.adminService.getAdmin(id).subscribe({
      next: (admin: Admin) => {
        this.admin = admin; // Charger les données de l'admin
      },
      error: (error: any) => {
        console.error('Erreur lors du chargement de l\'admin :', error);
        this.message = 'Erreur lors du chargement de l\'admin.';
      }
    });
  }

  onSubmit() {
    if (this.admin.name && this.admin.email && this.admin.password && this.adminId) {
      this.adminService.updateAdmin(this.adminId, this.admin).subscribe({
        next: (response: Admin) => {
          console.log('Admin modifié avec succès :', response);
          this.message = 'Admin modifié avec succès !';
          this.router.navigate(['/admins']);
        },
        error: (error: any) => {
          console.error('Erreur lors de la modification de l\'admin :', error);
          this.message = 'Erreur lors de la modification de l\'admin.';
        }
      });
    } else {
      this.message = 'Veuillez remplir tous les champs.';
    }
  }

  cancel() {
    this.router.navigate(['/admins']);
  }
}

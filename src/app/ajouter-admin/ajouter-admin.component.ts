import { Component } from '@angular/core';
import { Admin, AdminService } from '../admin.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-ajouter-admin',
  standalone: true,
  imports: [FormsModule, HeaderComponent, SidebarComponent, HttpClientModule, RouterModule],
  templateUrl: './ajouter-admin.component.html',
  styleUrl: './ajouter-admin.component.css'
})
export class AjouterAdminComponent {
  admin: Admin = { // Changé de newAdmin à admin pour correspondre au HTML
    name: '',
    email: '',
    password: ''
  };
  message: string | null = null;

  constructor(private adminService: AdminService, private router: Router) {}

  onSubmit() {
    if (this.admin.name && this.admin.email && this.admin.password) {
      this.adminService.ajouterAdmin(this.admin).subscribe({
        next: (response: Admin) => {
          console.log('Admin ajouté avec succès :', response);
          this.message = 'Admin ajouté avec succès !';
          this.admin = { name: '', email: '', password: '' }; // Réinitialiser
          this.router.navigate(['/admins']); // Rediriger
        },
        error: (error: any) => {
          console.error('Erreur lors de l\'ajout de l\'admin :', error);
          this.message = 'Erreur lors de l\'ajout de l\'admin.';
        }
      });
    } else {
      this.message = 'Veuillez remplir tous les champs.';
    }
  }

  cancel() {
    this.router.navigate(['/admins']); // Rediriger vers la liste des admins
  }
}

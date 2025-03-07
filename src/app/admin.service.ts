import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:3000/api/admins';

  constructor(private http: HttpClient) {}

  // Ajouter un seul admin
  ajouterAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.apiUrl, admin).pipe(
      catchError(error => {
        console.error('Erreur lors de l\'ajout de l\'admin:', error);
        return throwError(() => new Error('Erreur lors de l\'ajout de l\'admin.'));
      })
    );
  }

  // Récupérer un admin par ID
  getAdmin(id: string): Observable<Admin> {
    return this.http.get<Admin>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error('Erreur lors de la récupération de l\'admin:', error);
        return throwError(() => new Error('Erreur lors de la récupération de l\'admin.'));
      })
    );
  }

  // Récupérer tous les admins
  getAllAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Erreur lors de la récupération des admins:', error);
        return throwError(() => new Error('Erreur lors de la récupération des admins.'));
      })
    );
  }

  // Mettre à jour un admin
  updateAdmin(id: string, admin: Admin): Observable<Admin> {
    return this.http.put<Admin>(`${this.apiUrl}/${id}`, admin).pipe(
      catchError(error => {
        console.error('Erreur lors de la mise à jour de l\'admin:', error);
        return throwError(() => new Error('Erreur lors de la mise à jour de l\'admin.'));
      })
    );
  }

  // Supprimer tous les admins
  deleteAllAdmins(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/all`).pipe(
      catchError(error => {
        console.error('Erreur lors de la suppression de tous les admins:', error);
        return throwError(() => new Error('Erreur lors de la suppression de tous les admins.'));
      })
    );
  }

  // Supprimer un admin
  deleteAdmin(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error('Erreur lors de la suppression de l\'admin:', error);
        return throwError(() => new Error('Erreur lors de la suppression de l\'admin.'));
      })
    );
  }
}

export interface Admin {
  name: string;
  email: string;
  password: string;
}

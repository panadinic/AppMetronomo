import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  public isAdmin: boolean = false; // Propiedad para controlar si el usuario es administrador
  constructor(private router: Router) {}
  // Función para iniciar sesión
  login(username: string, password: string) {
    // Realiza la autenticación (verifica el nombre de usuario y la contraseña)

    if (username === 'ADMIN' && password === 'Duocuc123456') {
      this.isAuthenticated = true;
      this.isAdmin = true;
      this.router.navigate(['/product-list']); // Establece como administrador
    } else {
      this.router.navigate(['/home']);
    }
  }

  // Función para verificar si el usuario está autenticado
  isAuthenticatedUser() {
    return this.isAuthenticated;
  }
}


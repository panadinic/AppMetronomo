import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  public isAdmin = false; // Propiedad para controlar si el usuario es administrador

  constructor(private router: Router) {}

  // Método para iniciar sesión
  login() {
    this.isAuthenticated = true;
    this.isAdmin = true;
    // ... cualquier otra lógica de inicio de sesión
  }

  // Método para cerrar sesión
  logout() {
    this.isAuthenticated = false;
    this.isAdmin = false;
    // ... cualquier otra lógica de cierre de sesión
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticatedUser() {
    return this.isAuthenticated;
  }
}


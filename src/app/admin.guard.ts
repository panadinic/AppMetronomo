import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './services/auth.service'; // Asegúrate de importar AuthService desde tu servicio de autenticación

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isAdmin) {
      // Permite el acceso si el usuario es administrador
      return true;
    } else {
      // Redirige a la página de inicio de sesión si el usuario no es administrador
      this.router.navigate(['/login']);
      return false;
    }
  }
}



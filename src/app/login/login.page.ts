import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  errorMessages: string[] = [];
  username: string = '';
  password: string = '';
  usernameErrorL: string = '';

  passwordErrorL: string = '';
  constructor(
    private navCtrl: NavController,
    private router: Router,
    private toastCtrl: ToastController
  ) {}



  // login() {
  //   // Expresión regular para validar la contraseña
  //   const passwordPattern = /^(?=.*\d{4})(?=.*[a-zA-Z]{3})(?=.*[A-Z]).{8,}$/;

  //   if (this.username.length >= 3 && this.username.length <= 8) {
  //     if (passwordPattern.test(this.password)) {

  //       this.router.navigate(['/home', { username: this.username }]);
  //     } else {
  //       this.showToast('La contraseña debe cumplir con los requisitos.');
  //     }
  //   } else {
  //     this.showToast('El nombre de usuario debe tener entre 3 y 8 caracteres.');
  //   }
  // }

  login() {
    const passwordPattern = /^(?=.*\d{4})(?=.*[a-zA-Z]{3})(?=.*[A-Z]).{8,}$/;
    const usernamePattern = /^[a-zA-Z]+$/; // Expresión regular que solo permite letras
  
    if (this.username.length < 3 || this.username.length > 8) {
      this.usernameErrorL = 'El nombre de usuario debe tener entre 3 y 8 caracteres.';
    } else if (!usernamePattern.test(this.username)) {
      this.usernameErrorL = 'El nombre de usuario solo puede contener letras.';
    } else {
      this.usernameErrorL = '';
    }
  
    if (!passwordPattern.test(this.password)) {
      this.passwordErrorL = 'La contraseña debe cumplir con los requisitos.';
    } else {
      this.passwordErrorL = '';
    }
  
    if (!this.usernameErrorL && !this.passwordErrorL) {
      this.router.navigate(['/home', { username: this.username }]);
    }
  }
  
  


  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }

  crearCuenta() {
    // Mostrar un mensaje cuando se hace clic en el botón "Crea tu cuenta gratis"
    this.showToast('Crea tu cuenta gratis ahora');

    // Redirigir a la página de registro
    this.router.navigate(['/register']); // Asegúrate de que '/registro' sea la ruta correcta
  }

  olvidasteContrasena() {
    // Implementa la lógica para el restablecimiento de contraseña aquí
    // Por ejemplo, puedes abrir un modal o navegar a una página de restablecimiento de contraseña.
    // Ejemplo:
    this.navCtrl.navigateForward(['/resetpass']); // Asegúrate de que '/reset-password' sea la ruta correcta
  }
}

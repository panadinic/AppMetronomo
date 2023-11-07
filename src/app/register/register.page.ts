import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  usuario: string = '';
  contrasena: string = '';
  contrasenaError: string = '';
  recontrasena: string = '';
  fechaNacimiento: string = '';
  fechaError: string = '';
  correo: string = '';
  usuarioError: string = '';
  emailError: string = '';
  email: string = '';
  error: string = '';

  mostrarContrasena: boolean = false;

  constructor(private navCtrl: NavController, private toastController: ToastController) {}

  async enviarRegistro() {
    // Validación del usuario
    if (!this.usuario) {
      this.usuarioError = 'El usuario es obligatorio.';
    } else if (!/^[a-zA-Z]+$/.test(this.usuario)) {
      this.usuarioError = 'El usuario debe contener solo letras.';
    } else {
      this.usuarioError = '';
    }
  
    // Validación de fecha de nacimiento
    if (!this.fechaNacimiento) {
      this.fechaError = 'La fecha de nacimiento es obligatoria.';
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(this.fechaNacimiento)) {
      this.fechaError = 'La fecha de nacimiento debe tener el formato YYYY-MM-DD.';
    } else {
      this.fechaError = '';
    }
  
    // Validación del email
    if (!this.email) {
      this.emailError = 'El email es obligatorio.';
    } else if (!this.validarFormatoEmail(this.email)) {
      this.emailError = 'El email debe tener un formato válido.';
    } else {
      this.emailError = '';
    }
  
    // Validación de la contraseña
    if (!this.contrasena) {
      this.contrasenaError = 'La contraseña es obligatoria.';
    } else if (this.contrasena.length < 8) {
      this.contrasenaError = 'La contraseña debe tener al menos 8 caracteres.';
    } else if (!/[A-Z]/.test(this.contrasena)){
      this.contrasenaError = 'La contraseña debe contener al menos una letra mayúscula.';
    } else if(!/[0-9]/.test(this.contrasena)){
      this.contrasenaError = 'La contraseña debe contener al menos un número.';
    } else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(this.contrasena)){
      this.contrasenaError = 'La contraseña debe contener al menos un carácter especial.';
    } else {
      this.contrasenaError = '';
    }
  
    if (!this.usuario || !this.fechaNacimiento || !this.email || !this.contrasena || !this.recontrasena) {
      this.error = 'Todos los campos son obligatorios.';
    } else if (this.contrasena !== this.recontrasena) {
      this.error = 'Las contraseñas no coinciden.';
    } else {
      // Realizar el proceso de registro aquí 
      this.error = ''; // Limpiar el mensaje de error
      // Redirigir a la página de éxito o hacer lo que sea necesario
      const toast = await this.toastController.create({
        message: 'Registro exitoso',
        duration: 2000, // Duración en milisegundos del mensaje
        color: 'success', // Cambia el color a tu preferencia
      });
      toast.present();
    }
  
    if (!this.usuarioError && !this.emailError && !this.contrasenaError && !this.error) {
      // Si no hay errores en ningún campo, redirigir a otra página
      this.navCtrl.navigateForward('/login'); // Cambia 'login' por la ruta de la página deseada
    }
  }

  // Validación solo para el formato del email
  validarFormatoEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  toggleMostrarClave() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }

  ngOnInit() {
  }
}

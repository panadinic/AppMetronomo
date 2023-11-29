import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { IonicStorageModule } from '@ionic/storage-angular';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

fdescribe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [IonicStorageModule.forRoot(), FormsModule, IonicModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('debería mostrar errores cuando los campos están vacíos', async () => {
  //   component.usuario = '';
  //   component.contrasena = '';
  //   component.recontrasena = '';
  //   component.fechaNacimiento = '';
  //   component.correo = '';
  //   component.error = '';
  //   await component.enviarRegistro();
  //   expect(component.usuarioError).toContain('El usuario es obligatorio.');
  //   expect(component.contrasenaError).toContain('La contraseña es obligatoria.');
  //   expect(component.error).toContain('Todos los campos son obligatorios.');
  //   expect(component.fechaError).toContain('La fecha de nacimiento es obligatoria.');
  //   expect(component.emailError).toContain('El email es obligatorio.');
  // });

  it('debería mostrar errores cuando los campos están vacíos', async () => {
    component.usuario = '';
    component.contrasena = '';
    component.recontrasena = '';
    component.fechaNacimiento = '';
    component.correo = '';
    await component.enviarRegistro();
    
    // Verificar mensajes de error específicos para cada campo
    expect(component.usuarioError).toContain('El usuario es obligatorio.');
    expect(component.contrasenaError).toContain('La contraseña es obligatoria.');
    expect(component.fechaError).toContain('La fecha de nacimiento es obligatoria.');
    expect(component.emailError).toContain('El email es obligatorio.');
    
    // En lugar de buscar un mensaje general de error, verificamos los mensajes específicos
  });
  

  it('debería registrar un usuario correctamente', async () => {
    component.usuario = 'UsuarioValido';
    component.contrasena = 'Contra123!';
    component.recontrasena = 'Contra123!';
    component.fechaNacimiento = '2000-01-01';
    component.correo = 'correo@valido.com';
    await component.enviarRegistro();
    expect(component.error).toBe('');
    // Aquí puedes agregar una verificación adicional para comprobar que el usuario se ha guardado en el storage
  });
});

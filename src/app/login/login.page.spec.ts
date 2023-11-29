import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { AuthService } from 'src/app/services/auth.service'; 

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let authServiceStub: Partial<AuthService>;

  beforeEach(async () => {

    authServiceStub = {
      authenticate: jasmine.createSpy('authenticate').and.returnValue(Promise.resolve(true))
    };

    await TestBed.configureTestingModule({
      declarations: [LoginPage], // Asegúrate de declarar el componente aquí
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('debería autenticar al usuario con credenciales válidas', async () => {
    component.username = 'ValidUser';
    component.password = 'ValidPassword123!';
    await component.login();
    expect(authServiceStub.authenticate).toHaveBeenCalledWith('ValidUser', 'ValidPassword123!');
  });

  



});
  
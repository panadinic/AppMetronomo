import { TestBed } from '@angular/core/testing';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AdminGuard } from './admin.guard';
import { AuthService } from './services/auth.service';
// Importa otros módulos y servicios necesarios

describe('AdminGuard', () => {
  let guard: AdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicStorageModule.forRoot()],
      providers: [AdminGuard, AuthService]
      // Asegúrate de incluir todos los proveedores necesarios
    });
    guard = TestBed.inject(AdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

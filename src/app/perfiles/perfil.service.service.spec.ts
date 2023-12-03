import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PerfilServiceService } from '../perfiles/perfil.service.service';

describe('PerfilServiceService', () => {
  let service: PerfilServiceService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Incluye HttpClientTestingModule aquí
      providers: [PerfilServiceService]
    });
    service = TestBed.inject(PerfilServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Otros tests para tu servicio
});

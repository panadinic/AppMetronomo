import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PerfilDetailPage } from './perfil-detail.page';
import { PerfilServiceService } from '../perfil.service.service';

describe('PerfilDetailPage', () => {
  let component: PerfilDetailPage;
  let fixture: ComponentFixture<PerfilDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilDetailPage],
      imports: [HttpClientTestingModule, RouterTestingModule], // Incluye ambos módulos
      providers: [PerfilServiceService]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

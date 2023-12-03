import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PerfilEditPage } from './perfil-edit.page';
import { PerfilServiceService } from '../perfil.service.service';

describe('PerfilEditPage', () => {
  let component: PerfilEditPage;
  let fixture: ComponentFixture<PerfilEditPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilEditPage],
      imports: [HttpClientTestingModule, RouterTestingModule], // Incluye ambos módulos
      providers: [PerfilServiceService]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


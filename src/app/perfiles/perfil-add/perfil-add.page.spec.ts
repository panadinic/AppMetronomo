import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PerfilAddPage } from './perfil-add.page';

describe('PerfilAddPage', () => {
  let component: PerfilAddPage;
  let fixture: ComponentFixture<PerfilAddPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilAddPage],
      imports: [HttpClientTestingModule] // Incluye HttpClientTestingModule aquí también
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Otros tests para tu componente
});

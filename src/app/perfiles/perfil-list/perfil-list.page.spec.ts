import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PerfilServiceService } from '../perfil.service.service';
import { PerfilListPage } from '../perfil-list/perfil-list.page';

describe('PerfilListPage', () => {
  let component: PerfilListPage;
  let fixture: ComponentFixture<PerfilListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilListPage],
      imports: [HttpClientTestingModule],
      providers: [PerfilServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

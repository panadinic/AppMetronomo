import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilActPage } from './perfil-act.page';

describe('PerfilActPage', () => {
  let component: PerfilActPage;
  let fixture: ComponentFixture<PerfilActPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilActPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

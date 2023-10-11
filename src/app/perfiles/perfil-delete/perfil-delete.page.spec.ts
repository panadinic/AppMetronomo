import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilDeletePage } from './perfil-delete.page';

describe('PerfilDeletePage', () => {
  let component: PerfilDeletePage;
  let fixture: ComponentFixture<PerfilDeletePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

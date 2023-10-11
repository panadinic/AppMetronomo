import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilReadPage } from './perfil-read.page';

describe('PerfilReadPage', () => {
  let component: PerfilReadPage;
  let fixture: ComponentFixture<PerfilReadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilReadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

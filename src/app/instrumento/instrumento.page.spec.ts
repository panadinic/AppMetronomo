import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstrumentoPage } from './instrumento.page';

describe('InstrumentoPage', () => {
  let component: InstrumentoPage;
  let fixture: ComponentFixture<InstrumentoPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(InstrumentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

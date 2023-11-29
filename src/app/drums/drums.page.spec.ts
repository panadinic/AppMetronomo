import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrumsPage } from './drums.page';

describe('DrumsPage', () => {
  let component: DrumsPage;
  let fixture: ComponentFixture<DrumsPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(DrumsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

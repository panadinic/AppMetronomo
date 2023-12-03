import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule, MenuController } from '@ionic/angular';
import { CamaraPage } from './camara.page';
import { PhotoService } from '../services/photo.service';
import { Routes } from '@angular/router';
import { Component } from '@angular/core';



@Component({ template: '' })
class DummyComponent {}

const routes: Routes = [
  { path: 'camara', component: DummyComponent }, // Ruta de ejemplo para 'camara'
  // Añade aquí otras rutas utilizadas por tu componente
  // ...
];


describe('CamaraPage', () => {
  let component: CamaraPage;
  let fixture: ComponentFixture<CamaraPage>;
  let menuSpy: jasmine.SpyObj<MenuController>;
  let photoServiceSpy: jasmine.SpyObj<PhotoService>;

  beforeEach(async () => {
    const menuSpyObj = jasmine.createSpyObj('MenuController', ['close']);
    const photoServiceSpyObj = jasmine.createSpyObj('PhotoService', ['addNewToGallery']);

    await TestBed.configureTestingModule({
      declarations: [CamaraPage,DummyComponent],
      imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes(routes)],
      providers: [
        { provide: MenuController, useValue: menuSpyObj },
        { provide: PhotoService, useValue: photoServiceSpyObj }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CamaraPage);
    component = fixture.componentInstance;
    menuSpy = TestBed.inject(MenuController) as jasmine.SpyObj<MenuController>;
    photoServiceSpy = TestBed.inject(PhotoService) as jasmine.SpyObj<PhotoService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to camera page and close menu', () => {
    component.camara();
    expect(menuSpy.close).toHaveBeenCalledWith('end');
    // Aquí puedes añadir más expectativas relacionadas con la navegación
  });

  it('should call addPhotoToGallery from PhotoService', () => {
    component.addPhotoToGallery();
    expect(photoServiceSpy.addNewToGallery).toHaveBeenCalled();
  });

  // Agrega más pruebas según sea necesario
});

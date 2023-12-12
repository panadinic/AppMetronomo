// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HomePage } from './home.page';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AuthService } from '../services/auth.service';
// import { IonicStorageModule, Storage } from '@ionic/storage-angular';

// describe('HomePage', () => {
//   let component: HomePage;
//   let fixture: ComponentFixture<HomePage>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [HomePage],
//       imports: [RouterTestingModule,IonicStorageModule.forRoot(), ], // Asegúrate de incluir RouterTestingModule aquí
//     }).compileComponents();

//     fixture = TestBed.createComponent(HomePage);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';
import { IonicStorageModule } from '@ionic/storage-angular';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        RouterTestingModule, // Para manejar cualquier dependencia de routing
        IonicStorageModule.forRoot(), // Proporciona el Storage necesario para AuthService
      ],
      providers: [
        AuthService, // Agrega AuthService a los proveedores
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

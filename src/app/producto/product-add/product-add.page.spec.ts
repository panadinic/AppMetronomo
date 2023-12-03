import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductServiceService } from '../product-service.service';
import { ProductAddPage } from './product-add.page';

describe('ProductAddPage', () => {
  let component: ProductAddPage;
  let fixture: ComponentFixture<ProductAddPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductAddPage],
      imports: [HttpClientTestingModule],
      providers: [ProductServiceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Agrega aquí más pruebas según sea necesario
});

import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClProducto } from '../model/ClProducto';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.page.html',
  styleUrls: ['./product-edit.page.scss'],
})
export class ProductEditPage implements OnInit {
  productForm!: FormGroup;
  producto: ClProducto = {
    idProducto: 0,
    codigo: '09-G6',
    nombreprod: '',
    precio: 0,
    cantidad: 0, // Nueva propiedad
    fechaNacimiento: '', // Nueva propiedad
    rut: '',
    dv: '0', // Nueva propiedad
    enfermedad: '0', // Nueva propiedad
    fonocontacto: 0, // Nueva propiedad
    categoria: '0', // Nueva propiedad
    editorial: '0', // Nueva propiedad
    raza: '0', // Nueva propiedad
    edad: 0, // Nueva propiedad
    altura: 0, // Nueva propiedad
    hrini: '0', // Nueva propiedad
    hrfin: '0', // Nueva propiedad
    direccion: '', // Nueva propiedad
    fCreacion: '', // Nueva propiedad
  };
  id: any = '';

  constructor(
    public restApi: ProductServiceService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    console.log("ngOnInit ID:" + this.route.snapshot.params['id']);
    this.getProduct(this.route.snapshot.params['id']);
    this.productForm = this.formBuilder.group({
      'prod_name': [null, Validators.required],
      'prod_desc': [null, Validators.required],
      'prod_price': [null, Validators.required]
    });
  }

  async onFormSubmit() {
    console.log("onFormSubmit ID:" + this.id);

    if (this.productForm.valid) {
      this.producto.idProducto = this.id;
      this.producto.nombreprod = this.productForm.value.prod_name;
      this.producto.direccion = this.productForm.value.prod_desc;
      this.producto.precio = this.productForm.value.prod_price;

      await this.restApi.updateProduct(this.id, this.producto).subscribe({
        next: (res) => {
          let id = res['idProducto'];
          this.presentAlertConfirm('Producto actualizado exitosamente.');
        },
        complete: () => {},
        error: (err) => {
          console.log(err);
          this.presentAlertConfirm('Error al actualizar el producto.');
        },
      });
    }
  }

  async getProduct(id: number) {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });

    try {
      await loading.present();

      this.restApi.getProduct(id).subscribe({
        next: (data) => {
          console.log("getProductID data****");
          console.log(data);

          if (data && data.idProducto) {
            this.id = data.idProducto;
          }

          this.productForm.setValue({
            prod_name: data.nombreprod || '', // Use empty string as a fallback
            prod_desc: data.direccion || '', // Use empty string as a fallback
            prod_price: data.precio || 0, // Use 0 as a fallback for numeric values
          });

          loading.dismiss();
        },
        error: (err) => {
          console.log("getProductID Error****");
          console.log(err);
          this.presentAlertConfirm('Error al cargar el producto.');
          loading.dismiss();
        },
      });
    } catch (error) {
      console.log("getProductID Error****");
      console.log(error);
      this.presentAlertConfirm('Error al cargar el producto.');
      loading.dismiss();
    }
  }

  async presentAlertConfirm(msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: msg,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['/product-list/']);
          }
        }
      ]
    });
    await alert.present();
  }
}



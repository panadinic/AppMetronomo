import { Component, OnInit } from '@angular/core';

// Importamos Librerías
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ClPerfil } from '../model/ClPerfil';
//import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { PerfilServiceService } from '../perfil.service.service';

@Component({
  selector: 'app-perfil-list',
  templateUrl: './perfil-list.page.html',
  styleUrls: ['./perfil-list.page.scss'],
})
export class PerfilListPage implements OnInit {

 // Creamos la Variable para el Html
 perfiles: ClPerfil[] = [];
 // Injectamos Librerias
 constructor(public restApi: PerfilServiceService
   , public loadingController: LoadingController
   , public router: Router) { }

 // LLamamos al método que rescata los productos  
 ngOnInit() {
   this.getPerfils();
 }

 // Método  que rescta los productos
 async getPerfils() {
   console.log("Entrando :getPerfils");
   // Crea un Wait (Esperar)
   const loading = await this.loadingController.create({
     message: 'Harrys Loading...'
   });
   // Muestra el Wait
   await loading.present();
   console.log("Entrando :");
   // Obtiene el Observable del servicio
   await this.restApi.getPerfils()
     .subscribe({
       next: (res) => { 
         console.log("Res:" + res);
 // Si funciona asigno el resultado al arreglo productos
         this.perfiles = res;
         console.log("thisPerfiles:",this.perfiles);
         loading.dismiss();
       }
       , complete: () => { }
       , error: (err) => {
 // Si da error, imprimo en consola.
         console.log("Err:" + err);
         loading.dismiss();
       }
     })
 }


}

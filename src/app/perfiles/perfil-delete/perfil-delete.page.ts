import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../perfil.service';

@Component({
  selector: 'app-perfil-delete',
  templateUrl: './perfil-delete.page.html',
  // styleUrls: ['./perfil-delete.page.scss'],
})
export class PerfilDeletePage implements OnInit {

  id="6"

  constructor(private perServ:PerfilService) { }

  ngOnInit() {
  }


  grabar(){
    // Invocamos al método creado en el servicio
    // Le pasamos como parámetro el ID 
    this.perServ.eliminarServicio(this.id)
  }
}

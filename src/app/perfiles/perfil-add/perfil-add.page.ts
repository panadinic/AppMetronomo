import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../perfil.service';


@Component({
  selector: 'app-perfil-add',
  templateUrl: './perfil-add.page.html',
})
export class PerfilAddPage {
 // Estructura registro, agrupa varios campos
  // Debieramos utilizar una interface
  registro={
    usuario:"Harrys",
    correo:"harrys@ciudal.cl",
    clave:"macarena",
    fechanacimiento:"10/10/1999"
  }
  
  // Observe que en el constructor injectamos el ClienteService
  // Le asignamos un nombre el cual utilizaremos más adelante
  constructor(private cliServ:PerfilService) { }

  grabar(){
    // Invocamos al método creado en el servicio
    // Le pasamos como parámetro la variable registro
    // registro, contiene todos los campos enlazados del Html
    this.cliServ.agregarServicio(this.registro)
  }


}
